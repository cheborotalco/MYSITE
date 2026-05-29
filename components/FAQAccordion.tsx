"use client";

import { useState } from "react";
import { Dictionary } from "@/lib/i18n";

const faqItems = [
  {
    q: "How quickly can we start implementation?",
    a: "Usually within 5 business days after the diagnostic call and scope alignment.",
  },
  {
    q: "Do you work with early-stage startups?",
    a: "Yes, from pre-seed to scale-up, especially teams preparing investor communication.",
  },
  {
    q: "Can you support cross-border investor/startup deals?",
    a: "Yes, including process coordination, documentation flow, and milestone governance.",
  },
];

export default function FAQAccordion({ dict }: { dict: Dictionary }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-space bg-white">
      <div className="container-wrap">
        <h2 className="text-4xl md:text-6xl">{dict.sections.faqTitle}</h2>
        <div className="mt-8 grid gap-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <article key={item.q} className="rounded-[var(--radius)] border border-[var(--color-border)]">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between px-5 py-4 text-left"
                >
                  <span className="text-sm font-semibold uppercase tracking-[0.1em]">{item.q}</span>
                  <span className="text-xl text-[var(--color-accent)]">{isOpen ? "−" : "+"}</span>
                </button>
                {isOpen && <p className="border-t border-[var(--color-border)] px-5 py-4 text-sm text-[var(--color-text-muted)]">{item.a}</p>}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
