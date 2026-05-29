import { Dictionary } from "@/lib/i18n";

const testimonials = [
  {
    quote:
      "Alisa aligned our investors and product team in 3 weeks. We closed a strategic round with a clear AI implementation plan.",
    name: "M. Ricci",
    role: "Founder, Fintech Scaleup",
  },
  {
    quote:
      "Her due diligence framework helped us avoid a risky investment and redirect capital to a stronger startup.",
    name: "A. Volkov",
    role: "Angel Investor",
  },
  {
    quote:
      "We moved from fragmented operations to measurable execution rhythm with weekly KPI reviews.",
    name: "S. Martin",
    role: "COO, AI Startup",
  },
];

export default function Testimonials({ dict }: { dict: Dictionary }) {
  return (
    <section className="section-space bg-white">
      <div className="container-wrap">
        <h2 className="text-4xl md:text-6xl">{dict.sections.testimonialsTitle}</h2>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <article
              key={item.name}
              className="card-hover relative overflow-hidden rounded-[var(--radius)] border border-[var(--color-border)] bg-white p-6"
            >
              <p className="absolute -right-2 -top-3 text-6xl font-bold outline-text">0{index + 1}</p>
              <p className="relative text-[15px] leading-relaxed">“{item.quote}”</p>
              <p className="mt-6 font-semibold uppercase tracking-[0.08em]">{item.name}</p>
              <p className="text-sm text-[var(--color-text-muted)]">{item.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
