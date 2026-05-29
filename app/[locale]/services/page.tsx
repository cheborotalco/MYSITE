import type { Metadata } from "next";
import FAQAccordion from "@/components/FAQAccordion";
import PageHero from "@/components/PageHero";
import ServicesGrid from "@/components/ServicesGrid";
import { getDictionary, isValidLocale } from "@/lib/i18n";
import { buildPageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  return buildPageMetadata(locale, "Consulting Services", "Detailed consulting offers and service packages with Stripe payments.", "/services");
}

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isValidLocale(locale)) return null;

  const dict = getDictionary(locale);

  return (
    <>
      <PageHero title={dict.nav.services} subtitle="Pacchetti consulenziali orientati a conversione, execution e risultati misurabili." />
      <ServicesGrid locale={locale} dict={dict} />
      <FAQAccordion dict={dict} />
    </>
  );
}
