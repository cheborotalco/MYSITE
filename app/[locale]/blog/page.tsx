import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { buildPageMetadata } from "@/lib/seo";
import { getDictionary, isValidLocale } from "@/lib/i18n";

const posts = [
  {
    slug: "ai-readiness-framework",
    title: "AI Readiness Framework for Founders",
    excerpt: "How to evaluate people, process, and product before scaling AI initiatives.",
  },
  {
    slug: "investor-startup-communication",
    title: "Investor-Startup Communication Playbook",
    excerpt: "Reduce friction in decision cycles with structured reporting and milestone reviews.",
  },
  {
    slug: "kpi-for-ai-projects",
    title: "KPI Stack for AI Delivery",
    excerpt: "The core metrics that move projects from experiments to business outcomes.",
  },
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  return buildPageMetadata(locale, "AI Consulting Blog", "SEO-focused articles on AI strategy, startup execution and investor alignment.", "/blog");
}

export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isValidLocale(locale)) return null;
  const dict = getDictionary(locale);

  return (
    <>
      <PageHero title={dict.nav.blog} subtitle="Contenuti SEO per attrarre traffico qualificato e aumentare tempo di permanenza." />
      <section className="section-space bg-white">
        <div className="container-wrap grid gap-4 md:grid-cols-3">
          {posts.map((post, index) => (
            <article key={post.slug} className="card-hover rounded-[var(--radius)] border border-[var(--color-border)] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">0{index + 1} {"//"}</p>
              <h2 className="mt-2 text-2xl">{post.title}</h2>
              <p className="mt-3 text-sm text-[var(--color-text-muted)]">{post.excerpt}</p>
              <Link href={`/${locale}/contact`} className="mt-5 inline-block text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-accent)]">
                Read more →
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
