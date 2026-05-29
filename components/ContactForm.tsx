"use client";

import { FormEvent, useState } from "react";
import { Dictionary, Locale } from "@/lib/i18n";

export default function ContactForm({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const submitLead = async (event: FormEvent) => {
    event.preventDefault();
    const response = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, company, message, locale, source: "contact-page" }),
    });

    setStatus(response.ok ? "Sent" : "Error");
    if (response.ok) {
      setName("");
      setEmail("");
      setCompany("");
      setMessage("");
    }
  };

  return (
    <form onSubmit={submitLead} className="grid gap-3 rounded-[var(--radius)] border border-white/20 p-6">
      <input required value={name} onChange={(e) => setName(e.target.value)} placeholder={dict.contact.form.name} className="rounded-[var(--radius)] border border-white/20 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/50" />
      <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder={dict.contact.form.email} className="rounded-[var(--radius)] border border-white/20 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/50" />
      <input value={company} onChange={(e) => setCompany(e.target.value)} placeholder={dict.contact.form.company} className="rounded-[var(--radius)] border border-white/20 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/50" />
      <textarea required value={message} onChange={(e) => setMessage(e.target.value)} rows={5} placeholder={dict.contact.form.message} className="rounded-[var(--radius)] border border-white/20 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/50" />
      <button type="submit" className="pill-cta px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em]">
        {dict.contact.form.submit}
      </button>
      {status && <p className="text-xs uppercase tracking-[0.14em] text-white/70">{status}</p>}
    </form>
  );
}
