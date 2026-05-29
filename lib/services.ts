export type ServiceItem = {
  id: string;
  title: string;
  description: string;
  amountCents: number;
};

export const serviceCatalog: ServiceItem[] = [
  {
    id: "strategic-session",
    title: "Strategic Session 1:1",
    description: "90-minute sprint with action plan and KPI stack",
    amountCents: 29000,
  },
  {
    id: "ai-readiness",
    title: "AI Readiness Package",
    description: "90-day AI roadmap, process review, and implementation blueprint",
    amountCents: 120000,
  },
  {
    id: "investor-startup-bridge",
    title: "Investor-Startup Bridge",
    description: "Strategic mediation, due diligence package, governance setup",
    amountCents: 240000,
  },
];

export function findServiceById(id: string) {
  return serviceCatalog.find((service) => service.id === id);
}
