"use client";

import { usePathname, useRouter } from "next/navigation";
import { localeLabels, locales, type Locale } from "@/lib/i18n";

export default function LanguageSwitcher({ currentLocale }: { currentLocale: Locale }) {
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (nextLocale: Locale) => {
    if (!pathname) return;

    const parts = pathname.split("/").filter(Boolean);
    if (parts.length > 0 && locales.includes(parts[0] as Locale)) {
      parts[0] = nextLocale;
    }
    const nextPath = `/${parts.join("/")}`;

    void fetch("/api/locale", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ locale: nextLocale }),
    });
    localStorage.setItem("preferred-locale", nextLocale);
    router.push(nextPath);
  };

  return (
    <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.16em]">
      {locales.map((locale) => (
        <button
          type="button"
          key={locale}
          onClick={() => switchLocale(locale)}
          className={`transition ${locale === currentLocale ? "text-[var(--color-accent)]" : "text-white/80 hover:text-white"}`}
        >
          {localeLabels[locale]}
        </button>
      ))}
    </div>
  );
}
