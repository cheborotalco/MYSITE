import Link from "next/link";
import { Dictionary, Locale } from "@/lib/i18n";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const navOrder = ["home", "about", "services", "cases", "blog", "contact"] as const;

export default function Navbar({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[var(--color-dark)]/95 backdrop-blur">
      <div className="container-wrap flex h-20 items-center justify-between gap-6">
        <Link href={`/${locale}`} className="font-[var(--font-heading)] text-2xl font-bold tracking-wider text-white">
          ALISA.C_
        </Link>
        <nav className="hidden items-center gap-5 md:flex">
          {navOrder.map((key, index) => {
            const slug = key === "home" ? "" : `/${key}`;
            return (
              <Link
                key={key}
                href={`/${locale}${slug}`}
                className="text-xs uppercase tracking-[0.16em] text-white/80 transition hover:text-[var(--color-accent)]"
              >
                {`${String(index + 1).padStart(2, "0")} // ${dict.nav[key]}`}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-3">
          <LanguageSwitcher currentLocale={locale} />
          <Link href={`/${locale}/booking`} className="pill-cta px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em]">
            {dict.nav.cta}
          </Link>
        </div>
      </div>
    </header>
  );
}
