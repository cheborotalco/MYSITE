import { NextRequest, NextResponse } from "next/server";
import { defaultLocale, isValidLocale, locales } from "@/lib/i18n";

const PUBLIC_FILE = /\.(.*)$/;

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/favicon") ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  const pathnameHasLocale = locales.some((locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`));

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value;
  const locale = cookieLocale && isValidLocale(cookieLocale) ? cookieLocale : defaultLocale;

  const newUrl = new URL(`/${locale}${pathname === "/" ? "" : pathname}`, request.url);
  return NextResponse.redirect(newUrl);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)"],
};
