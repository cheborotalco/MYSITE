"use client";

import { FormEvent, useState } from "react";
import { Locale, Dictionary } from "@/lib/i18n";

export default function LeadMagnetForm({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState<string>("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("...");
    const response = await fetch("/api/lead-magnet", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, name, locale }),
    });

    setStatus(response.ok ? "Success" : "Error");
    if (response.ok) {
      setEmail("");
      setName("");
    }
  };

  return (
    <section className="section-space bg-[var(--color-bg-soft)]">
      <div className="container-wrap grid gap-6 rounded-[var(--radius)] border border-[var(--color-border)] bg-white p-8 lg:grid-cols-[1.4fr_0.6fr]">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-[var(--color-accent)]">{dict.sections.leadMagnetTitle}</p>
          <h3 className="mt-3 text-3xl md:text-5xl">AI INVESTMENT CHECKLIST // PDF</h3>
          <p className="mt-3 max-w-xl text-[var(--color-text-muted)]">{dict.sections.leadMagnetDesc}</p>
        </div>
        <form className="grid gap-3" onSubmit={onSubmit}>
          <input
            className="rounded-[var(--radius)] border border-[var(--color-border)] px-4 py-3 text-sm"
            placeholder={dict.contact.form.name}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            required
            type="email"
            className="rounded-[var(--radius)] border border-[var(--color-border)] px-4 py-3 text-sm"
            placeholder={dict.contact.form.email}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" className="pill-cta px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em]">
            Download
          </button>
          {status && <p className="text-xs uppercase tracking-[0.12em] text-[var(--color-text-muted)]">{status}</p>}
        </form>
      </div>
    </section>
  );
}
