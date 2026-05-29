import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { buildPageMetadata } from "@/lib/seo";
import { getDictionary, isValidLocale } from "@/lib/i18n";

const caseStudies = [
  {
    title: "AI Due Diligence for Seed Fund",
    result: "Reduced risk exposure by 37% across startup portfolio.",
  },
  {
    title: "Startup Operations Redesign",
    result: "Increased delivery speed by 2.4x with PMO workflow and KPI cadence.",
  },
  {
    title: "Investor-Founder Alignment Program",
    result: "Closed strategic bridge agreement in 6 weeks.",
  },
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  return buildPageMetadata(locale, "Case Studies", "Portfolio examples and measurable outcomes.", "/cases");
}

export default async function CasesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isValidLocale(locale)) return null;
  const dict = getDictionary(locale);

  return (
    <>
      <PageHero title={dict.nav.cases} subtitle="Esempi reali di trasformazione business, advisory e implementazione AI." />
      <section className="section-space bg-white">
        <div className="container-wrap grid gap-4">
          {caseStudies.map((study, index) => (
            <article key={study.title} className="card-hover rounded-[var(--radius)] border border-[var(--color-border)] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">0{index + 1} {"//"}</p>
              <h2 className="mt-2 text-3xl">{study.title}</h2>
              <p className="mt-2 text-sm text-[var(--color-text-muted)]">{study.result}</p>
            </article>
          ))}
          <Link href={`/${locale}/contact`} className="pill-cta mt-4 w-fit px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em]">
            {dict.nav.cta}
          </Link>
        </div>
      </section>
    </>
  );
}
