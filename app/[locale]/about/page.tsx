import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Testimonials from "@/components/Testimonials";
import { buildPageMetadata } from "@/lib/seo";
import { getDictionary, isValidLocale } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  return buildPageMetadata(locale, "About Alisa Chebotarenko", "Biography, education, and experience in AI project management.", "/about");
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isValidLocale(locale)) return null;
  const dict = getDictionary(locale);

  return (
    <>
      <PageHero title={dict.nav.about} subtitle="Biografia, formazione e track record tra startup e investitori." />
      <section className="section-space dark-section">
        <div className="container-wrap grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
          <Image src="/alisa.jpg" alt="Alisa portrait" width={420} height={520} className="rounded-[var(--radius)] border border-white/20" />
          <div className="space-y-6 text-white/85">
            <article>
              <h2 className="text-3xl text-white">01 // EDUCATION</h2>
              <p className="mt-2 text-sm leading-relaxed">Specialization in project leadership, business operations and AI implementation tracks for modern organizations.</p>
            </article>
            <article>
              <h2 className="text-3xl text-white">02 // EXPERIENCE</h2>
              <p className="mt-2 text-sm leading-relaxed">26-year-old Project Manager focused on turning innovation into measurable outcomes, bridging investors and startup founders with structured decision-making workflows.</p>
            </article>
            <article>
              <h2 className="text-3xl text-white">03 // FOCUS</h2>
              <p className="mt-2 text-sm leading-relaxed">AI-readiness assessment, go-to-market execution, cross-functional governance, and portfolio-level advisory for investment-backed growth.</p>
            </article>
          </div>
        </div>
      </section>
      <Testimonials dict={dict} />
    </>
  );
}
