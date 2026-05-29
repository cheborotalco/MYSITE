import { NextResponse } from "next/server";
import { isValidLocale } from "@/lib/i18n";

export async function POST(request: Request) {
  const body = (await request.json()) as { locale?: string };
  const locale = body.locale;

  if (!locale || !isValidLocale(locale)) {
    return NextResponse.json({ error: "Invalid locale" }, { status: 400 });
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set("NEXT_LOCALE", locale, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
  });

  return response;
}
