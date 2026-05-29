import { Dictionary } from "@/lib/i18n";

const badges = ["PMP Framework", "AI Implementation", "Investor Reporting", "GDPR-aware Process", "KPI Governance", "B2B Advisory"];

export default function TrustBadges({ dict }: { dict: Dictionary }) {
  return (
    <section className="dark-section section-space">
      <div className="container-wrap">
        <h2 className="text-4xl md:text-6xl">{dict.sections.trustTitle}</h2>
        <div className="mt-10 flex flex-wrap gap-3">
          {badges.map((badge) => (
            <div
              key={badge}
              className="rounded-full border border-white/35 px-5 py-2 text-xs uppercase tracking-[0.2em] text-white/90"
            >
              {badge}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
