import type { Metadata } from "next";
import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";
import HeroSection from "@/components/HeroSection";
import LeadMagnetForm from "@/components/LeadMagnetForm";
import ServicesGrid from "@/components/ServicesGrid";
import Testimonials from "@/components/Testimonials";
import TrustBadges from "@/components/TrustBadges";
import { getDictionary, isValidLocale, Locale } from "@/lib/i18n";
import { buildPageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const dict = getDictionary(locale);
  return buildPageMetadata(locale, dict.seo.title, dict.seo.description, "");
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isValidLocale(locale)) return null;

  const dict = getDictionary(locale as Locale);

  return (
    <>
      <HeroSection locale={locale as Locale} dict={dict} />
      <ServicesGrid locale={locale as Locale} dict={dict} />
      <Testimonials dict={dict} />
      <TrustBadges dict={dict} />
      <LeadMagnetForm locale={locale as Locale} dict={dict} />
      <FAQAccordion dict={dict} />
      <section className="dark-section section-space">
        <div className="container-wrap flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-4xl md:text-6xl">HIGH-CONVERSION CONSULTING FLOW</h2>
            <p className="mt-3 max-w-2xl text-sm text-white/70">Discovery → Diagnostic → Action Plan → Weekly Performance Review.</p>
          </div>
          <Link href={`/${locale}/booking`} className="pill-cta px-8 py-3 text-xs font-semibold uppercase tracking-[0.16em]">
            {dict.nav.booking}
          </Link>
        </div>
      </section>
    </>
  );
}
