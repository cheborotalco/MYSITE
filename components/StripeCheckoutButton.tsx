"use client";

import { useState } from "react";
import { Locale } from "@/lib/i18n";

export default function StripeCheckoutButton({ serviceId, locale, label }: { serviceId: string; locale: Locale; label: string }) {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ serviceId, locale }),
      });
      const data = (await response.json()) as { url?: string };
      if (data.url) {
        window.location.href = data.url;
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCheckout}
      disabled={loading}
      className="pill-cta mt-4 w-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] disabled:opacity-70"
    >
      {loading ? "..." : label}
    </button>
  );
}
