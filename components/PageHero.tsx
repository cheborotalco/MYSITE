export default function PageHero({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <section className="section-space bg-[var(--color-bg-soft)]">
      <div className="container-wrap relative">
        <p className="pointer-events-none absolute -top-10 left-0 text-5xl font-bold outline-text md:text-8xl">{title.split(" ")[0]}</p>
        <h1 className="relative text-5xl md:text-7xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-[var(--color-text-muted)]">{subtitle}</p>
      </div>
    </section>
  );
}
