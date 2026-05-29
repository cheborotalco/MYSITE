"use client";

import { FormEvent, useMemo, useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";
import { Dictionary, Locale } from "@/lib/i18n";

const slots = ["09:30", "11:00", "14:00", "16:00", "18:00"];

export default function BookingCalendar({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const [selected, setSelected] = useState<Date | undefined>(new Date());
  const [time, setTime] = useState(slots[0]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [notes, setNotes] = useState("");
  const [service, setService] = useState("Strategic Session 1:1");
  const [status, setStatus] = useState("");

  const dayLabel = useMemo(() => (selected ? format(selected, "yyyy-MM-dd") : ""), [selected]);

  const submitBooking = async (event: FormEvent) => {
    event.preventDefault();
    if (!selected) return;

    const response = await fetch("/api/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        company,
        notes,
        service,
        date: format(selected, "yyyy-MM-dd"),
        time,
        locale,
      }),
    });

    setStatus(response.ok ? "Booked" : "Error");
  };

  return (
    <section className="section-space bg-white">
      <div className="container-wrap grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <h2 className="text-4xl md:text-6xl">{dict.sections.bookingTitle}</h2>
          <p className="mt-3 text-sm text-[var(--color-text-muted)]">Interactive calendar with instant booking confirmation.</p>
          <div className="mt-6 overflow-hidden rounded-[var(--radius)] border border-[var(--color-border)] p-3">
            <DayPicker
              mode="single"
              selected={selected}
              onSelect={setSelected}
              disabled={{ before: new Date() }}
              className="mx-auto"
            />
          </div>
          <p className="mt-4 text-xs uppercase tracking-[0.14em] text-[var(--color-accent)]">Selected: {dayLabel}</p>
        </div>

        <form onSubmit={submitBooking} className="grid gap-3 rounded-[var(--radius)] border border-[var(--color-border)] p-6">
          <input required value={name} onChange={(e) => setName(e.target.value)} placeholder={dict.contact.form.name} className="rounded-[var(--radius)] border border-[var(--color-border)] px-4 py-3 text-sm" />
          <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder={dict.contact.form.email} className="rounded-[var(--radius)] border border-[var(--color-border)] px-4 py-3 text-sm" />
          <input value={company} onChange={(e) => setCompany(e.target.value)} placeholder={dict.contact.form.company} className="rounded-[var(--radius)] border border-[var(--color-border)] px-4 py-3 text-sm" />
          <select value={service} onChange={(e) => setService(e.target.value)} className="rounded-[var(--radius)] border border-[var(--color-border)] px-4 py-3 text-sm">
            <option>Strategic Session 1:1</option>
            <option>AI Readiness Package</option>
            <option>Investor-Startup Bridge</option>
          </select>
          <select value={time} onChange={(e) => setTime(e.target.value)} className="rounded-[var(--radius)] border border-[var(--color-border)] px-4 py-3 text-sm">
            {slots.map((slot) => (
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))}
          </select>
          <textarea value={notes} onChange={(e) => setNotes(e.target.value)} placeholder={dict.contact.form.message} rows={4} className="rounded-[var(--radius)] border border-[var(--color-border)] px-4 py-3 text-sm" />
          <button type="submit" className="pill-cta px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em]">
            {dict.nav.booking}
          </button>
          {status && <p className="text-xs uppercase tracking-[0.12em] text-[var(--color-text-muted)]">{status}</p>}
        </form>
      </div>
    </section>
  );
}
