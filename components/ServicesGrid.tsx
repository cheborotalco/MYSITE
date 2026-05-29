import { Dictionary, Locale } from "@/lib/i18n";
import { serviceCatalog } from "@/lib/services";
import StripeCheckoutButton from "@/components/StripeCheckoutButton";

export default function ServicesGrid({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section className="section-space bg-[var(--color-bg-soft)]">
      <div className="container-wrap">
        <h2 className="text-4xl md:text-6xl">{dict.services.title}</h2>
        <p className="mt-3 text-[var(--color-text-muted)]">{dict.services.subtitle}</p>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {dict.services.cards.map((card, index) => {
            const service = serviceCatalog[index];
            return (
              <article
                key={card.id}
                className="card-hover relative overflow-hidden rounded-[var(--radius)] border border-[var(--color-border)] bg-white p-6"
              >
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">0{card.id} {"//"}</p>
                <p className="text-2xl">{card.title}</p>
                <p className="mt-3 text-sm text-[var(--color-text-muted)]">{card.description}</p>
                <p className="mt-6 text-3xl font-bold">{card.price}</p>
                {service ? <StripeCheckoutButton serviceId={service.id} locale={locale} label={card.cta} /> : null}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
