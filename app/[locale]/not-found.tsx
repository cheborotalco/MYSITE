import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section-space bg-[var(--color-bg-soft)]">
      <div className="container-wrap">
        <h1 className="text-6xl">404 //</h1>
        <p className="mt-4 text-[var(--color-text-muted)]">Page not found.</p>
        <Link href="/it" className="pill-cta mt-6 inline-block px-6 py-3 text-xs uppercase tracking-[0.14em]">
          Back home
        </Link>
      </div>
    </section>
  );
}
