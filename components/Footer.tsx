import Link from "next/link";
import { Dictionary, Locale } from "@/lib/i18n";

export default function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <footer className="dark-section border-t border-white/10 py-10">
      <div className="container-wrap grid gap-6 md:grid-cols-3">
        <div>
          <p className="font-[var(--font-heading)] text-2xl">ALISA.C_</p>
          <p className="mt-2 text-sm text-white/70">AI Project Management & Investor-Startup Mediation</p>
        </div>
        <div className="text-sm text-white/70">
          <p>© {new Date().getFullYear()} Alisa Chebotarenko</p>
          <p>{dict.footer.rights}</p>
          <p>{dict.footer.vat}</p>
        </div>
        <div className="flex gap-4 text-sm uppercase tracking-[0.14em] text-white/80">
          <Link href={`/${locale}/contact`} className="hover:text-[var(--color-accent)]">
            {dict.nav.contact}
          </Link>
          <Link href={`/${locale}/services`} className="hover:text-[var(--color-accent)]">
            {dict.nav.services}
          </Link>
          <Link href={`/${locale}/blog`} className="hover:text-[var(--color-accent)]">
            {dict.nav.blog}
          </Link>
        </div>
      </div>
    </footer>
  );
}
