import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Navbar from "@/components/Navbar";
import ExitIntentPopup from "@/components/ExitIntentPopup";
import { getDictionary, isValidLocale, locales, Locale } from "@/lib/i18n";
import { buildPageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const dict = getDictionary(locale);
  return buildPageMetadata(locale, dict.seo.title, dict.seo.description);
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!isValidLocale(locale)) {
    notFound();
  }

  const dict = getDictionary(locale as Locale);

  return (
    <div className="min-h-screen">
      <GoogleAnalytics />
      <Navbar locale={locale as Locale} dict={dict} />
      <main>{children}</main>
      <Footer locale={locale as Locale} dict={dict} />
      <ExitIntentPopup locale={locale as Locale} />
    </div>
  );
}
