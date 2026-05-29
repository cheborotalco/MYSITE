import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import PageHero from "@/components/PageHero";
import { buildPageMetadata } from "@/lib/seo";
import { getDictionary, isValidLocale } from "@/lib/i18n";

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com" },
  { label: "Telegram", href: "https://t.me" },
  { label: "Email", href: "mailto:hello@alisac.it" },
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  return buildPageMetadata(locale, "Contact Alisa", "Contact page for consulting leads and collaboration requests.", "/contact");
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isValidLocale(locale)) return null;
  const dict = getDictionary(locale);

  return (
    <>
      <PageHero title={dict.contact.title} subtitle={dict.contact.subtitle} />
      <section className="section-space dark-section">
        <div className="container-wrap grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div>
            <h2 className="text-4xl text-white">GET IN TOUCH // NOW</h2>
            <p className="mt-3 text-sm text-white/75">For investor advisory, startup acceleration, AI implementation and PM workflows.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/35 px-5 py-2 text-xs uppercase tracking-[0.14em] text-white/90 transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
          <ContactForm locale={locale} dict={dict} />
        </div>
      </section>
    </>
  );
}
