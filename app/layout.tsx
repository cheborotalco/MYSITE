import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-body",
});

const oswald = Oswald({
  subsets: ["latin", "cyrillic"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://alisac.it"),
  title: "Alisa Chebotarenko Consulting",
  description: "Multilingual AI and project management consulting website.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="it" suppressHydrationWarning>
      <body className={`${inter.variable} ${oswald.variable} min-h-screen bg-white text-black antialiased`}>{children}</body>
    </html>
  );
}
