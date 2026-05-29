import type { Metadata } from "next";
import { Locale, defaultLocale, locales } from "@/lib/i18n";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://alisac.it";

export function getLocalizedPath(locale: Locale, path = "") {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return locale === defaultLocale ? `${siteUrl}${normalized}` : `${siteUrl}/${locale}${normalized}`;
}

export function buildPageMetadata(locale: Locale, title: string, description: string, path = ""): Metadata {
  const url = getLocalizedPath(locale, path);

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: Object.fromEntries(locales.map((l) => [l, getLocalizedPath(l, path)])),
    },
    openGraph: {
      type: "website",
      locale,
      title,
      description,
      url,
      siteName: "Alisa Chebotarenko Consulting",
      images: [
        {
          url: `${siteUrl}/alisa.jpg`,
          width: 1200,
          height: 630,
          alt: "Alisa Chebotarenko",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${siteUrl}/alisa.jpg`],
    },
  };
}
