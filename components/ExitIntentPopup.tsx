"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Locale } from "@/lib/i18n";

export default function ExitIntentPopup({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem("exit-intent-shown");
    if (alreadyShown) return;

    const onMouseOut = (event: MouseEvent) => {
      if (event.clientY <= 0) {
        setOpen(true);
        sessionStorage.setItem("exit-intent-shown", "1");
      }
    };

    window.addEventListener("mouseout", onMouseOut);
    return () => window.removeEventListener("mouseout", onMouseOut);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[90] flex items-center justify-center bg-black/60 p-4">
      <div className="max-w-md rounded-[var(--radius)] border border-white/20 bg-[var(--color-dark)] p-6 text-white">
        <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-accent)]">WAIT // ONE MORE THING</p>
        <h4 className="mt-2 text-3xl">Free 30-min discovery call</h4>
        <p className="mt-3 text-sm text-white/80">Get a focused action map for your startup or investment case.</p>
        <div className="mt-5 flex gap-3">
          <Link href={`/${locale}/booking`} className="pill-cta px-5 py-2 text-xs font-semibold uppercase tracking-[0.14em]">
            Claim slot
          </Link>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="rounded-full border border-white/30 px-5 py-2 text-xs uppercase tracking-[0.14em]"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
