import Image from "next/image";
import Link from "next/link";
import { Dictionary, Locale } from "@/lib/i18n";

export default function HeroSection({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section className="section-space bg-[var(--color-bg-soft)]">
      <div className="container-wrap grid items-end gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="fade-up">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.24em] text-[var(--color-accent)]">{dict.hero.eyebrow}</p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl">{dict.hero.title}</h1>
          <p className="mt-6 max-w-2xl text-base text-[var(--color-text-muted)] md:text-lg">{dict.hero.subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href={`/${locale}/booking`} className="pill-cta px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em]">
              {dict.hero.primaryCta}
            </Link>
            <Link
              href={`/${locale}/services`}
              className="rounded-full border border-black px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            >
              {dict.hero.secondaryCta}
            </Link>
          </div>
        </div>
        <div className="relative fade-up">
          <p className="pointer-events-none absolute -top-16 right-0 text-5xl font-bold outline-text md:text-8xl">PROJECT MANAGER</p>
          <Image
            src="/alisa1.jpg"
            alt="Alisa Chebotarenko"
            width={520}
            height={680}
            className="w-full rounded-[var(--radius)] border border-[var(--color-border)] object-cover"
            priority
          />
        </div>
      </div>
      <div className="container-wrap mt-12 grid gap-4 border-t border-[var(--color-border)] pt-8 md:grid-cols-3">
        {dict.hero.stats.map((item) => (
          <article key={item.label} className="rounded-[var(--radius)] border border-[var(--color-border)] bg-white p-5">
            <p className="text-4xl font-bold text-[var(--color-accent)]">{item.value}</p>
            <p className="mt-2 text-sm uppercase tracking-[0.1em] text-[var(--color-text-muted)]">{item.label}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
