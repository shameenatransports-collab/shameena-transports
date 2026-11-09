// Service catalogue for the transportation pillar (the only business line).
// Each sub-item becomes a programmatic page template seeded by city + intent.

export type PillarId = "transportation";

export interface SubService {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  keywords: string[]; // seed keywords (mapped from corpus)
  benefits: string[];
}

export interface Pillar {
  id: PillarId;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  path: string;
  subPath: string; // e.g. "services" | "products" | "practice" | "programs" | "categories"
  subLabel: string; // human label for sub category
  sub: SubService[];
  cityIntro: (cityName: string) => string;
}

export const PILLARS: Pillar[] = [
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: "transportation",
    name: "Transportation",
    shortName: "Transport",
    tagline: "Full-load freight movement across Coimbatore district",
    description:
      "Dedicated lorry transport and factory shifting from a 12+ vehicle owned fleet operating since 1982.",
    path: "/transportation",
    subPath: "services",
    subLabel: "Service",
    cityIntro: (c) =>
      `Reliable full-load lorry transport in and out of ${c}. Dedicated trucks, transparent pricing, and direct dispatch from our owned fleet — serving manufacturers, traders and project sites across the region.`,
    sub: [
      {
        slug: "full-load", name: "Full Load Lorry Transport", shortName: "Full Load",
        description: "A dedicated truck exclusively for your cargo. Best for 5–25 ton loads, factory-to-factory movements, and time-sensitive shipments.",
        keywords: ["full load lorry", "dedicated truck", "lorry booking", "goods transport", "freight service"],
        benefits: ["Dedicated vehicle, no intermediate stops", "20ft, 24ft & multi-axle options", "Faster transit time", "Door-to-door pickup & delivery"],
      },
      {
        slug: "containerized", name: "Containerized Cargo Transport", shortName: "Containers",
        description: "20ft and 40ft containerised movement for export cargo, sensitive goods, and ICD/CFS and port-linked movement coordinated from Coimbatore (handling confirmed separately).",
        keywords: ["container transport", "20ft container", "40ft container", "icd cfs", "port transport"],
        benefits: ["Sealed container movement", "Port & ICD/CFS connectivity", "Export-ready documentation support", "20ft & 40ft trailers"],
      },
      {
        slug: "textile-cargo", name: "Textile & Yarn Cargo Transport", shortName: "Textile Cargo",
        description: "Specialist movement of textile bales, garment cartons and yarn cones along the Coimbatore textile and engineering belt.",
        keywords: ["textile transport", "yarn transport", "garment cargo", "textile transport coimbatore"],
        benefits: ["Careful tarpaulin loading", "Bale & carton expertise", "Knit & woven fabric cargo", "Coimbatore industrial belt specialists"],
      },
      {
        slug: "construction-material", name: "Construction Material Transport", shortName: "Construction",
        description: "Sand, cement, steel, TMT rods, aggregates and bricks via tippers and trailers for builders, developers and infrastructure projects.",
        keywords: ["construction material transport", "tipper hire", "cement transport", "steel transport"],
        benefits: ["Tippers & trailers", "Site-direct delivery", "Builder & contractor friendly", "Heavy aggregate handling"],
      },
      {
        slug: "factory-shifting", name: "Factory & Warehouse Shifting", shortName: "Factory Shifting",
        description: "End-to-end factory, plant and warehouse relocation — dismantling coordination, packing, transit and re-installation handover.",
        keywords: ["factory shifting", "warehouse shifting", "industrial relocation", "plant shifting"],
        benefits: ["Dismantling & re-installation coordination", "Multi-vehicle planning", "Inventory tracking", "End-to-end project ownership"],
      },
      {
        slug: "heavy-machinery", name: "Heavy Machinery Transport", shortName: "Heavy Machinery",
        description: "Over-dimensional and heavy equipment movement — generators, presses, CNCs, transformers — using low-bed trailers and ODC permits.",
        keywords: ["heavy machinery transport", "ODC transport", "lowbed trailer", "equipment shifting"],
        benefits: ["Low-bed & semi low-bed trailers", "ODC permit handling", "Route survey support", "Loading crane coordination"],
      },
      {
        slug: "project-cargo", name: "Project Cargo Movement", shortName: "Project Cargo",
        description: "Phased project logistics for infra, energy, EPC and manufacturing — multi-truck dispatch with single point of coordination.",
        keywords: ["project cargo", "project logistics", "EPC transport"],
        benefits: ["Single PoC for multi-site projects", "Daily dispatch planning", "MIS reporting on request", "Long-term rate contracts"],
      },
      {
        slug: "trucks-on-hire", name: "Trucks on Hire", shortName: "Trucks on Hire",
        description: "Trucks on hire for local and long-distance transport needs in Coimbatore district — 12-wheeler and 14-wheeler trucks and open trucks with a 40 ft platform, on a daily, monthly or contract basis.",
        keywords: ["trucks on hire", "truck hire coimbatore", "lorry on rent", "12 wheeler on hire", "14 wheeler on hire", "40 feet open truck"],
        benefits: ["12-wheeler / 14-wheeler trucks", "Open trucks (40 ft platform)", "Daily, monthly or contract basis", "Experienced drivers"],
      },
      {
        slug: "loaders-packers", name: "Loaders & Packers Services", shortName: "Loaders & Packers",
        description: "Professional loaders and helpers for safe and efficient handling — house shifting, office relocation, and loading and unloading services.",
        keywords: ["loaders and packers", "packers and movers coimbatore", "loading unloading service", "office relocation", "house shifting"],
        benefits: ["House shifting", "Office relocation", "Loading & unloading", "Skilled, careful loaders"],
      },
      {
        slug: "door-to-door", name: "Door-to-Door Transport", shortName: "Door-to-Door",
        description: "Pickup from your loading bay, delivery direct to consignee. No transhipment, no godown layovers.",
        keywords: ["door to door transport", "direct delivery", "pickup and delivery"],
        benefits: ["Pickup at your facility", "Direct delivery, no transhipment", "Reduced handling damage", "Single contact through transit"],
      },
      {
        slug: "intercity-freight", name: "Intercity Freight", shortName: "Intercity Freight",
        description: "Point-to-point freight between Coimbatore and nearby district towns, planned route by route.",
        keywords: ["intercity transport", "interstate freight", "long distance trucking"],
        benefits: ["Route-planned trips", "Transparent per-trip quotes", "Volume rate contracts", "Coimbatore focus"],
      },
    ],
  },
];

export const PILLAR_BY_ID = Object.fromEntries(PILLARS.map((p) => [p.id, p])) as Record<PillarId, Pillar>;

export function getPillar(id?: string) {
  return id && id in PILLAR_BY_ID ? PILLAR_BY_ID[id as PillarId] : undefined;
}

export function getSub(pillar: Pillar, slug: string) {
  return pillar.sub.find((s) => s.slug === slug);
}
