import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://alisac.it";
const routes = ["", "/about", "/services", "/cases", "/blog", "/contact", "/booking"];

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${siteUrl}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : 0.8,
    })),
  );
}
