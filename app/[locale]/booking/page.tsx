import type { Metadata } from "next";
import BookingCalendar from "@/components/BookingCalendar";
import PageHero from "@/components/PageHero";
import { buildPageMetadata } from "@/lib/seo";
import { getDictionary, isValidLocale } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  return buildPageMetadata(locale, "Book Consultation", "Interactive calendar booking for consulting sessions.", "/booking");
}

export default async function BookingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isValidLocale(locale)) return null;

  const dict = getDictionary(locale);

  return (
    <>
      <PageHero title={dict.nav.booking} subtitle="Prenotazione immediata con calendario interattivo e conferma richiesta." />
      <BookingCalendar locale={locale} dict={dict} />
    </>
  );
}
