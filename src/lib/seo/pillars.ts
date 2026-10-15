// Service catalogues for each of the 5 pillars.
// Each sub-item becomes a programmatic page template seeded by city + intent.

export type PillarId = "transportation" | "financial-services" | "legal-services" | "edu-consultancy" | "real-estate";

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
    tagline: "Full-load freight movement across South India",
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
        benefits: ["Significantly lower rates", "Subject to route availability", "Call to confirm current routes", "Popular on Coimbatore–Chennai, Tiruppur–Bangalore"],
      },
      {
        slug: "containerized", name: "Containerized Cargo Transport", shortName: "Containers",
        description: "20ft and 40ft containerised movement for export cargo, sensitive goods, and ICD/CFS connectivity to Chennai, Tuticorin and Kochi ports.",
        keywords: ["container transport", "20ft container", "40ft container", "icd cfs", "port transport"],
        benefits: ["Sealed container movement", "Port & ICD/CFS connectivity", "Export-ready documentation support", "20ft & 40ft trailers"],
      },
      {
        slug: "textile-cargo", name: "Textile & Yarn Cargo Transport", shortName: "Textile Cargo",
        description: "Specialist movement of textile bales, garment cartons and yarn cones along the Tiruppur–Coimbatore–Erode textile corridor.",
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
        description: "Regular point-to-point movement across South India's major corridors — daily-departure availability on key routes.",
        keywords: ["intercity transport", "interstate freight", "long distance trucking"],
        benefits: ["Daily-departure corridors", "Transit time commitments", "Volume rate contracts", "South India focus"],
      },
    ],
  },
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: "financial-services",
    name: "Financial Services",
    shortName: "Finance",
    tagline: "MSME, Mudra, government scheme & business funding assistance",
    description:
      "Documentation and application assistance for MSME loans, Mudra, Startup India, government schemes and bank business funding. Strictly not personal loans.",
    path: "/financial-services",
    subPath: "products",
    subLabel: "Product",
    cityIntro: (c) =>
      `MSME, Mudra and government scheme application support for businesses in ${c}. We help you assemble documents, choose the right product, and present a clean file to the right bank.`,
    sub: [
      {
        slug: "msme-loans", name: "MSME Loans", shortName: "MSME",
        description: "Term loans and working capital for Micro, Small & Medium Enterprises — under priority sector and CGTMSE-backed schemes.",
        keywords: ["msme loans", "micro small medium enterprises loan", "msme financing", "cgtmse"],
        benefits: ["Term loan & working capital", "CGTMSE collateral-free options", "Priority sector pricing", "MSME registration support"],
      },
      {
        slug: "mudra-loan", name: "Mudra Loan Scheme", shortName: "Mudra",
        description: "PMMY Mudra loans under Shishu, Kishor and Tarun categories for micro-business funding up to ₹10 lakh.",
        keywords: ["mudra loan", "pmmy", "shishu kishor tarun", "micro business loan"],
        benefits: ["Shishu / Kishor / Tarun tiers", "Up to ₹10 lakh", "Bank application assistance", "Document preparation"],
      },
      {
        slug: "working-capital", name: "Working Capital Loans", shortName: "Working Capital",
        description: "Cash credit, overdraft and short-term working capital facilities tied to your business cycle and receivables.",
        keywords: ["working capital loan", "cash credit", "business overdraft", "cc limit"],
        benefits: ["Cash credit & OD", "Receivables-backed lines", "Renewal facilitation", "Multi-bank options"],
      },
      {
        slug: "business-loan", name: "Business Loans", shortName: "Business Loan",
        description: "Unsecured and secured business loans for traders, manufacturers and professionals — tenure-aligned to business needs.",
        keywords: ["business loan", "business funding", "trader loan", "professional loan"],
        benefits: ["Secured & unsecured options", "Term loan structuring", "Multi-bank comparison", "Document support"],
      },
      {
        slug: "project-loan", name: "Project Finance", shortName: "Project Finance",
        description: "Greenfield and expansion project finance — feasibility, DPR coordination and lender sourcing for plant, machinery and infrastructure.",
        keywords: ["project finance", "project loan", "term loan", "industrial loan"],
        benefits: ["Greenfield & expansion", "DPR coordination", "Lender shortlisting", "Disbursement follow-through"],
      },
      {
        slug: "equipment-loan", name: "Equipment & Machinery Loans", shortName: "Equipment Loan",
        description: "Asset-backed finance for industrial machinery, CNCs, generators and plant equipment — manufacturer-tie-up routes supported.",
        keywords: ["equipment finance", "machinery loan", "industrial loan"],
        benefits: ["Asset-backed structuring", "OEM tie-ups", "Faster sanction with quotation", "Working capital add-on"],
      },
      {
        slug: "vehicle-loan", name: "Commercial Vehicle Loans", shortName: "Vehicle Loan",
        description: "Commercial vehicle financing for trucks, trailers, tippers and light commercial fleets.",
        keywords: ["commercial vehicle loan", "truck loan", "lorry finance", "tipper finance"],
        benefits: ["New & used CV", "Fleet operator schemes", "Quick TAT", "Manufacturer tie-ups"],
      },
      {
        slug: "home-loan", name: "Home Loan Assistance", shortName: "Home Loan",
        description: "Home loan documentation and application support — salaried, self-employed and business-owner profiles.",
        keywords: ["home loan", "housing loan", "mortgage loan"],
        benefits: ["Eligibility computation", "Multi-bank comparison", "Documentation support", "Sanction follow-up"],
      },
      {
        slug: "loan-against-property", name: "Loan Against Property (LAP)", shortName: "LAP",
        description: "Mortgage your residential, commercial or industrial property for higher-ticket business funding.",
        keywords: ["loan against property", "lap", "mortgage loan", "property loan"],
        benefits: ["Higher loan amounts", "Lower interest vs unsecured", "Long tenures", "Business or personal end-use"],
      },
      {
        slug: "startup-india", name: "Startup India Scheme Assistance", shortName: "Startup India",
        description: "DPIIT recognition, Startup India seed funding and scheme advisory for eligible new ventures.",
        keywords: ["startup india", "dpiit recognition", "startup seed fund"],
        benefits: ["DPIIT recognition", "Seed fund routing", "Eligibility assessment", "Compliance handholding"],
      },
      {
        slug: "government-schemes", name: "Government Scheme Funding", shortName: "Govt Schemes",
        description: "Scheme discovery and application — Stand-Up India, PMEGP, CGTMSE, state TN/KA/KL subsidies and SIDBI products.",
        keywords: ["government funding scheme", "pmegp", "stand up india", "sidbi"],
        benefits: ["Right-scheme matching", "State + central coverage", "Application support", "Subsidy follow-up"],
      },
      {
        slug: "industrial-loan", name: "Industrial Loans", shortName: "Industrial Loan",
        description: "Industrial term loans for manufacturing units, MSME clusters and textile/engineering enterprises.",
        keywords: ["industrial loan", "manufacturing loan", "industrial finance"],
        benefits: ["Sector-aware structuring", "Cluster expertise (textile, engineering)", "Subsidy linkage", "Working capital add-on"],
      },
    ],
  },
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: "legal-services",
    name: "Legal Services",
    shortName: "Legal",
    tagline: "Documentation, registrations, property & corporate legal counsel",
    description:
      "Property documentation, company formation, MSME & trademark registrations, contracts, litigation referral and compliance support.",
    path: "/legal-services",
    subPath: "practice",
    subLabel: "Practice",
    cityIntro: (c) =>
      `Legal documentation, registrations and litigation referral support in ${c}. We coordinate property paperwork, business formation and compliance filings end-to-end.`,
    sub: [
      {
        slug: "property-law", name: "Property & Real Estate Law", shortName: "Property Law",
        description: "Title verification, sale deed, mutation, gift deed, partition and property registration coordination.",
        keywords: ["property registration", "sale deed", "title verification", "real estate lawyer"],
        benefits: ["Title due diligence", "Sale deed drafting", "Sub-registrar coordination", "Encumbrance certificate"],
      },
      {
        slug: "family-law", name: "Family Law", shortName: "Family Law",
        description: "Marriage, divorce, guardianship, maintenance and succession matters — advisory and litigation referral.",
        keywords: ["family lawyer", "divorce lawyer", "maintenance case", "succession"],
        benefits: ["Mutual & contested divorce", "Maintenance & custody", "Will & succession", "Family settlement"],
      },
      {
        slug: "civil-litigation", name: "Civil Litigation", shortName: "Civil Litigation",
        description: "Civil suits, recovery, injunction, partition and contract disputes — case strategy and counsel referral.",
        keywords: ["civil lawyer", "civil litigation", "recovery suit", "injunction"],
        benefits: ["Case strategy", "Counsel referral", "Documentation review", "Settlement facilitation"],
      },
      {
        slug: "criminal-law", name: "Criminal Law", shortName: "Criminal Law",
        description: "Bail, FIR quashing, complaint matters and criminal defence advisory through empanelled counsel.",
        keywords: ["criminal lawyer", "bail", "fir quashing", "crime lawyer"],
        benefits: ["Bail applications", "FIR & complaint matters", "Counsel referral", "Documentation"],
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
        slug: "consumer-law", name: "Consumer Protection", shortName: "Consumer Law",
        description: "Consumer commission filings, refund and deficiency-of-service matters.",
        keywords: ["consumer lawyer", "consumer commission", "refund case"],
        benefits: ["Consumer commission filings", "Refund recovery", "Defect/service complaints"],
      },
      {
        slug: "cyber-law", name: "Cyber Law", shortName: "Cyber Law",
        description: "Cyber complaint filings, data theft, online fraud and IT Act advisory.",
        keywords: ["cyber lawyer", "cyber crime", "data theft"],
        benefits: ["Cyber complaint filings", "Evidence handling", "IT Act advisory"],
      },
      {
        slug: "tax-law", name: "Tax Law & GST", shortName: "Tax & GST",
        description: "Income tax notices, GST disputes, tax appeals and representation support.",
        keywords: ["tax lawyer", "tax attorney", "gst lawyer", "income tax notice"],
        benefits: ["Notice response drafting", "GST dispute support", "Appeals representation"],
      },
      {
        slug: "intellectual-property", name: "Intellectual Property", shortName: "IP Law",
        description: "Trademark, copyright, patent search, filing and opposition matters.",
        keywords: ["trademark lawyer", "patent", "copyright", "ip law"],
        benefits: ["Trademark filing", "Search & opposition", "Copyright & patent advisory"],
      },
      {
        slug: "rera", name: "RERA & Real Estate Compliance", shortName: "RERA",
        description: "RERA registration, builder compliance, buyer complaints and authority filings.",
        keywords: ["rera", "real estate compliance", "builder complaint"],
        benefits: ["RERA registration", "Complaint filings", "Builder compliance"],
      },
      {
        slug: "arbitration", name: "Arbitration & ADR", shortName: "Arbitration",
        description: "Domestic arbitration, mediation and ADR clause drafting for commercial disputes.",
        keywords: ["arbitration lawyer", "mediation", "dispute resolution"],
        benefits: ["Arbitration clause drafting", "Mediation facilitation", "Award enforcement"],
      },
    ],
  },
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: "edu-consultancy",
    name: "Edu Consultancy",
    shortName: "Education",
    tagline: "Academic mobility & degree advancement for South India learners",
    description:
      "Localized pathways for degree transfer, credit migration, bachelor-completion and academic-mobility candidates across South India.",
    path: "/edu-consultancy",
    subPath: "programs",
    subLabel: "Program",
    cityIntro: (c) =>
      `Educational pathway guidance for students, working professionals and adult learners in ${c}. Localized advice on degree transfer, credit migration and academic continuation routes.`,
    sub: [
      {
        slug: "degree-transfer", name: "Degree Transfer Programs", shortName: "Degree Transfer",
        description: "Cross-institution and cross-country degree transfer pathways — including American Degree Transfer style routes.",
        keywords: ["degree transfer", "american degree transfer program", "credit transfer", "degree migration"],
        benefits: ["Credit-mapping advisory", "Institution shortlisting", "Application support", "Documentation"],
      },
      {
        slug: "associate-degree", name: "Associate Degree (AA / AS)", shortName: "Associate Degree",
        description: "Associate of Arts and Associate of Science pathways — a flexible bridge into bachelor programs.",
        keywords: ["aa degree", "associate of arts", "associate of science", "as degree"],
        benefits: ["AA & AS pathway mapping", "Transfer-friendly institutions", "Credit-load planning"],
      },
      {
        slug: "bachelor-completion", name: "Bachelor's Completion Pathway", shortName: "Bachelor Completion",
        description: "Completion routes for learners with partial bachelor credits seeking to finish their degree.",
        keywords: ["bachelor completion", "degree completion", "finish degree"],
        benefits: ["Credit recognition", "Institution matching", "Flexible-schedule options"],
      },
      {
        slug: "credit-transfer", name: "Credit Transfer Advisory", shortName: "Credit Transfer",
        description: "Mapping prior credits to target institution requirements across regional and overseas universities.",
        keywords: ["credit transfer", "credit recognition", "transfer credits"],
        benefits: ["Credit-equivalence analysis", "Target-institution mapping", "Documentation"],
      },
      {
        slug: "credential-evaluation", name: "Credential Evaluation Support", shortName: "Credential Eval",
        description: "Document attestation, credential evaluation and academic record preparation for overseas applications.",
        keywords: ["credential evaluation", "transcript evaluation", "wes equivalent"],
        benefits: ["Transcript preparation", "Attestation guidance", "Evaluation agency referral"],
      },
      {
        slug: "study-abroad", name: "Study Abroad Guidance", shortName: "Study Abroad",
        description: "Pathway guidance for overseas study options, intake planning and application sequencing.",
        keywords: ["study abroad", "abroad education", "overseas university"],
        benefits: ["Country & intake planning", "Application timeline", "Documentation support"],
      },
      {
        slug: "working-professional", name: "Working Professional Programs", shortName: "Working Pro",
        description: "Continuing-education and flexible degree pathways designed for working professionals.",
        keywords: ["working professional degree", "executive program", "part time degree"],
        benefits: ["Weekend / online routes", "Industry-recognised programs", "Time-flexible institutions"],
      },
      {
        slug: "adult-learner", name: "Adult Learner Pathways", shortName: "Adult Learner",
        description: "Re-entry into higher education for adult learners — credit-for-experience and bridge programs.",
        keywords: ["adult learner", "mature student", "second chance degree"],
        benefits: ["Credit-for-experience routes", "Bridge programs", "Flexible enrolment"],
      },
      {
        slug: "academic-mobility", name: "Academic Mobility Network", shortName: "Academic Mobility",
        description: "Cross-institution academic mobility — internal transfers, semester exchanges and pathway shifts.",
        keywords: ["academic mobility", "semester exchange", "institution transfer"],
        benefits: ["Internal & external mobility", "Exchange programs", "Pathway switching"],
      },
      {
        slug: "online-degree", name: "Online & Hybrid Degree Programs", shortName: "Online Degree",
        description: "UGC-recognised online and hybrid degree options for learners who need flexibility.",
        keywords: ["online degree", "distance education", "hybrid degree"],
        benefits: ["UGC-recognised institutions", "Online + on-campus blends", "Working-hour friendly"],
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
  { slug: "msme", name: "MSME / Udyam Registration", description: "Udyam (MSME) registration to unlock priority sector & scheme benefits.", keywords: ["msme registration", "udyam registration"], benefits: ["Udyam certificate", "Priority-sector access", "Scheme eligibility"] },
  { slug: "fssai", name: "FSSAI Licence", description: "FSSAI basic, state and central licence for food businesses.", keywords: ["fssai", "food licence"], benefits: ["Basic / State / Central", "Renewal management"] },
  { slug: "trademark", name: "Trademark Registration", description: "Trademark search, filing, prosecution and renewal.", keywords: ["trademark registration", "tm filing"], benefits: ["Search & class", "Filing & prosecution", "Renewals"] },
  { slug: "iso", name: "ISO Certification", description: "ISO 9001, 14001, 27001 and sector-specific certification facilitation.", keywords: ["iso certification", "iso 9001"], benefits: ["Gap analysis", "Audit coordination", "Certification issuance"] },
  { slug: "partnership", name: "Partnership Firm Registration", description: "Partnership deed drafting and registration with Registrar of Firms.", keywords: ["partnership firm registration", "partnership deed"], benefits: ["Deed drafting", "Registrar filing", "PAN & bank setup"] },
];
export const REGISTRATION_BY_SLUG = Object.fromEntries(REGISTRATIONS.map((r) => [r.slug, r]));

// Real Estate BHK variants
export const BHK_TYPES = [
  { slug: "1-bhk", name: "1 BHK Apartments", keywords: ["1 bhk", "1bhk apartment"] },
  { slug: "2-bhk", name: "2 BHK Apartments", keywords: ["2 bhk", "2bhk flat"] },
  { slug: "3-bhk", name: "3 BHK Apartments", keywords: ["3 bhk", "3bhk flat", "three bedroom apartment"] },
  { slug: "villa", name: "Villas", keywords: ["villa", "independent villa", "luxury villa"] },
];
export const BHK_BY_SLUG = Object.fromEntries(BHK_TYPES.map((b) => [b.slug, b]));
