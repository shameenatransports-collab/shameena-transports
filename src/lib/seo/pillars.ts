// Service catalogues for each of the 3 pillars.
// Each sub-item becomes a programmatic page template seeded by city + intent.

export type PillarId = "transportation" | "financial-services" | "legal-services";

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
    tagline: "Full-load freight movement across Coimbatore and Tiruppur districts",
    description:
      "Dedicated lorry transport, factory shifting, and return-load freight from a 12+ vehicle owned fleet operating since 1982.",
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
        slug: "return-load", name: "Return Load Transport", shortName: "Return Load",
        description: "Discounted freight on trucks returning from a delivery on your route — subject to route availability. Ideal for flexible-timeline shipments.",
        keywords: ["return load", "return load transport", "empty lorry return", "cheap freight"],
        benefits: ["Significantly lower rates", "Subject to route availability", "Call to confirm current routes", "Route availability confirmed per enquiry"],
      },
      {
        slug: "containerized", name: "Containerized Cargo Transport", shortName: "Containers",
        description: "20ft and 40ft containerised movement for export cargo, sensitive goods, and ICD/CFS and port-linked movement coordinated from Coimbatore and Tiruppur (handling confirmed separately).",
        keywords: ["container transport", "20ft container", "40ft container", "icd cfs", "port transport"],
        benefits: ["Sealed container movement", "Port & ICD/CFS connectivity", "Export-ready documentation support", "20ft & 40ft trailers"],
      },
      {
        slug: "textile-cargo", name: "Textile & Yarn Cargo Transport", shortName: "Textile Cargo",
        description: "Specialist movement of textile bales, garment cartons and yarn cones along the Tiruppur–Coimbatore textile corridor.",
        keywords: ["textile transport", "yarn transport", "garment cargo", "tiruppur transport"],
        benefits: ["Careful tarpaulin loading", "Bale & carton expertise", "Knit & woven fabric cargo", "Tiruppur cluster specialists"],
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
        slug: "door-to-door", name: "Door-to-Door Transport", shortName: "Door-to-Door",
        description: "Pickup from your loading bay, delivery direct to consignee. No transhipment, no godown layovers.",
        keywords: ["door to door transport", "direct delivery", "pickup and delivery"],
        benefits: ["Pickup at your facility", "Direct delivery, no transhipment", "Reduced handling damage", "Single contact through transit"],
      },
      {
        slug: "intercity-freight", name: "Intercity Freight", shortName: "Intercity Freight",
        description: "Point-to-point freight between Coimbatore, Tiruppur and nearby district towns, planned route by route.",
        keywords: ["intercity transport", "interstate freight", "long distance trucking"],
        benefits: ["Route-planned trips", "Transparent per-trip quotes", "Volume rate contracts", "Coimbatore & Tiruppur focus"],
      },
    ],
  },
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: "financial-services",
    name: "Financial Services",
    shortName: "Finance",
    tagline: "Funding assistance for startups and deep-tech companies",
    description:
      "Documentation and application assistance for startups and deep-tech companies: Startup India recognition, seed and grant schemes, bank credit and fundraising readiness. For businesses only. STA is not a lender.",
    path: "/financial-services",
    subPath: "products",
    subLabel: "Product",
    cityIntro: (c) =>
      `Funding assistance for startups and deep-tech companies in ${c}. We help you assemble documents, choose suitable schemes and present a clean application. STA is not a lender and does not guarantee funding.`,
    sub: [
      {
        slug: "startup-india", name: "Startup India (DPIIT) Recognition", shortName: "Startup India",
        description: "Assistance with DPIIT recognition and the documentation startups need before applying to government schemes.",
        keywords: ["startup india registration","dpiit recognition","startup recognition certificate"],
        benefits: ["Eligibility check", "Application documentation", "Recognition follow-up", "Scheme readiness"],
      },
      {
        slug: "seed-funding", name: "Seed Funding & Grants", shortName: "Seed & Grants",
        description: "Application support for seed funds and early-stage grants, including central and Tamil Nadu startup programmes.",
        keywords: ["startup seed fund","startup grant","tanseed","seed funding tamil nadu"],
        benefits: ["Scheme shortlisting", "Application drafting", "Supporting documents", "Follow-up with the programme"],
      },
      {
        slug: "deep-tech-funding", name: "Deep-Tech Funding Assistance", shortName: "Deep-Tech",
        description: "Guidance for deep-tech and research-led companies on grant, equity and credit routes suited to long development cycles.",
        keywords: ["deep tech funding","deep tech startup funding","research grant startup","technology startup grant"],
        benefits: ["Funding route mapping", "Technical-commercial write-ups", "Grant and credit documentation", "Readiness review"],
      },
      {
        slug: "government-schemes", name: "Government Scheme Funding", shortName: "Govt Schemes",
        description: "Mapping and applying to central and Tamil Nadu government schemes for startups and technology companies.",
        keywords: ["government schemes for startups","startup subsidy","startup scheme application"],
        benefits: ["Scheme eligibility mapping", "Application documentation", "Compliance checklist", "Status follow-up"],
      },
      {
        slug: "credit-guarantee", name: "Credit Guarantee & Bank Credit", shortName: "Credit & Guarantee",
        description: "Assistance preparing bank credit applications for startups, including credit-guarantee-backed options where eligible.",
        keywords: ["startup bank loan","credit guarantee scheme startups","collateral free startup loan"],
        benefits: ["Lender and product shortlisting", "Credit file preparation", "Guarantee-scheme eligibility check", "Documentation support"],
      },
      {
        slug: "working-capital", name: "Working Capital & Term Loans for Startups", shortName: "Working Capital",
        description: "Documentation and process assistance for working-capital and term-loan applications by startups and technology companies.",
        keywords: ["startup working capital","startup term loan","business loan for startups"],
        benefits: ["Product selection", "Financial projections", "Application documentation", "Lender coordination"],
      },
      {
        slug: "fundraising-readiness", name: "Fundraising Readiness", shortName: "Fundraising",
        description: "Preparation for angel and venture investor conversations: financial model, data room and compliance clean-up.",
        keywords: ["startup fundraising","investor readiness","angel investment preparation"],
        benefits: ["Financial model review", "Data-room checklist", "Cap-table and compliance review", "Investor-document support"],
      },
      {
        slug: "project-reports", name: "Project Reports & Funding Documentation", shortName: "Project Reports",
        description: "Project reports, financial projections and supporting documents for grant, scheme and bank applications.",
        keywords: ["project report for startup","dpr for loan","financial projections startup"],
        benefits: ["Project report drafting", "Financial projections", "Use-of-funds statement", "Supporting document checklist"],
      },
    ],
  },
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: "legal-services",
    name: "Legal & CA",
    shortName: "Legal & CA",
    tagline: "Legal & CA professional services for businesses",
    description:
      "Legal documentation, company formation, GST and income-tax compliance, accounts and audit support, trademark and other business registrations, contracts, commercial disputes and compliance support, for businesses only.",
    path: "/legal-services",
    subPath: "practice",
    subLabel: "Practice",
    cityIntro: (c) =>
      `Legal and CA professional services in ${c}. We coordinate legal documentation, business formation, GST and income-tax compliance and accounts support end-to-end.`,
    sub: [
      {
        slug: "gst-income-tax", name: "GST & Income Tax Services", shortName: "GST & Tax",
        description: "GST registration and returns, income-tax return filing and tax compliance support through our CA professional services.",
        keywords: ["gst registration", "gst return filing", "income tax return", "itr filing", "ca services"],
        benefits: ["GST registration & returns", "ITR filing", "Notice response support", "Tax planning advisory"],
      },
      {
        slug: "accounting-audit", name: "Accounting & Audit Support", shortName: "Accounts & Audit",
        description: "Bookkeeping, financial statements, statutory and tax audit support and annual compliance for businesses.",
        keywords: ["chartered accountant", "accounting services", "audit services", "bookkeeping"],
        benefits: ["Bookkeeping & accounts", "Financial statements", "Statutory audit support", "Annual compliance"],
      },
      {
        slug: "property-law", name: "Commercial Property Documentation", shortName: "Property Docs",
        description: "Title verification, sale deed, lease and registration coordination for business, factory and commercial property.",
        keywords: ["property registration", "sale deed", "title verification", "real estate lawyer"],
        benefits: ["Title due diligence", "Sale deed drafting", "Sub-registrar coordination", "Encumbrance certificate"],
      },
      {
        slug: "civil-litigation", name: "Commercial Litigation & Recovery", shortName: "Commercial Disputes",
        description: "Commercial recovery and contract-dispute support: case strategy and counsel referral for businesses.",
        keywords: ["civil lawyer", "civil litigation", "recovery suit", "injunction"],
        benefits: ["Case strategy", "Counsel referral", "Documentation review", "Settlement facilitation"],
      },
      {
        slug: "corporate-law", name: "Corporate & Commercial Law", shortName: "Corporate Law",
        description: "Contracts, MOU, shareholder agreements, JV structuring, corporate restructuring and commercial advisory.",
        keywords: ["corporate lawyer", "commercial law", "shareholder agreement", "contract drafting"],
        benefits: ["Contract drafting & review", "Shareholder agreements", "JV & restructuring", "Commercial advisory"],
      },
      {
        slug: "labour-law", name: "Labour & Employment Law", shortName: "Labour Law",
        description: "PF, ESI, gratuity, factory licence, contract labour and HR policy compliance.",
        keywords: ["labour law", "employment lawyer", "pf esi compliance"],
        benefits: ["PF/ESI registration & filings", "Factory licence", "Contract labour compliance", "HR policy review"],
      },
      {
        slug: "intellectual-property", name: "Intellectual Property", shortName: "IP Law",
        description: "Trademark, copyright, patent search, filing and opposition matters.",
        keywords: ["trademark lawyer", "patent", "copyright", "ip law"],
        benefits: ["Trademark filing", "Search & opposition", "Copyright & patent advisory"],
      },
      {
        slug: "arbitration", name: "Arbitration & ADR", shortName: "Arbitration",
        description: "Domestic arbitration, mediation and ADR clause drafting for commercial disputes.",
        keywords: ["arbitration lawyer", "mediation", "dispute resolution"],
        benefits: ["Arbitration clause drafting", "Mediation facilitation", "Award enforcement"],
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

// Legal registration micro-pages
export interface Registration {
  slug: string; name: string; description: string; keywords: string[]; benefits: string[];
}
export const REGISTRATIONS: Registration[] = [
  { slug: "company", name: "Private Limited Company Registration", description: "Pvt Ltd incorporation with DIN, DSC, MOA/AOA and PAN.", keywords: ["company registration", "pvt ltd registration"], benefits: ["DIN & DSC", "MOA / AOA drafting", "Bank-account ready"] },
  { slug: "llp", name: "LLP Registration", description: "Limited Liability Partnership incorporation and compliance.", keywords: ["llp registration", "limited liability partnership"], benefits: ["LLP agreement", "DIN & DSC", "Compliance handover"] },
  { slug: "gst", name: "GST Registration", description: "Goods & Services Tax registration, GSTIN and filing rhythm setup.", keywords: ["gst registration", "gst number", "gst filing"], benefits: ["GSTIN issuance", "Filing rhythm setup", "Invoice template"] },
  { slug: "msme", name: "MSME / Udyam Registration", description: "Udyam (MSME) registration for eligible businesses, often needed for scheme and bank applications.", keywords: ["msme registration", "udyam registration"], benefits: ["Udyam certificate", "Priority-sector access", "Scheme eligibility"] },
  { slug: "fssai", name: "FSSAI Licence", description: "FSSAI basic, state and central licence for food businesses.", keywords: ["fssai", "food licence"], benefits: ["Basic / State / Central", "Renewal management"] },
  { slug: "trademark", name: "Trademark Registration", description: "Trademark search, filing, prosecution and renewal.", keywords: ["trademark registration", "tm filing"], benefits: ["Search & class", "Filing & prosecution", "Renewals"] },
  { slug: "iso", name: "ISO Certification", description: "ISO 9001, 14001, 27001 and sector-specific certification facilitation.", keywords: ["iso certification", "iso 9001"], benefits: ["Gap analysis", "Audit coordination", "Certification issuance"] },
  { slug: "partnership", name: "Partnership Firm Registration", description: "Partnership deed drafting and registration with Registrar of Firms.", keywords: ["partnership firm registration", "partnership deed"], benefits: ["Deed drafting", "Registrar filing", "PAN & bank setup"] },
];
export const REGISTRATION_BY_SLUG = Object.fromEntries(REGISTRATIONS.map((r) => [r.slug, r]));
