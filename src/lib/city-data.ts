// Localized SEO data for the two districts STA serves: Coimbatore and Tiruppur (Tamil Nadu).
// Used by src/pages/CityLanding.tsx

export type CitySlug = "coimbatore" | "tiruppur";

export interface CityData {
  slug: CitySlug;
  name: string;
  nameTamil: string;
  region: string;
  postalCode: string;
  geo: { lat: string; lng: string };
  tagline: string;
  metaTitle: string;
  metaDescription: string;
  heroIntro: string;
  about: string;
  transport: {
    headline: string;
    description: string;
    routes: string[];
    industries: string[];
  };
  financial: {
    headline: string;
    description: string;
    highlights: string[];
  };
  legal: {
    headline: string;
    description: string;
    highlights: string[];
  };
  landmarks: string[];
  faqs: { q: string; a: string }[];
}

export const CITY_DATA: Record<CitySlug, CityData> = {
  coimbatore: {
    slug: "coimbatore",
    name: "Coimbatore",
    nameTamil: "கோயம்புத்தூர்",
    region: "Tamil Nadu",
    postalCode: "641023",
    geo: { lat: "11.0168", lng: "76.9558" },
    tagline: "Headquartered in Coimbatore: transport since 1982, plus startup funding and professional services for businesses",
    metaTitle: "Lorry Transport, Startup Funding Assistance & Legal and CA Services in Coimbatore | STA Corporate Solutions",
    metaDescription:
      "STA Corporate Solutions in Coimbatore: full-load lorry transport since 1982, funding assistance for startups and deep-tech companies, and legal and CA professional services for businesses. Call 94430 33055.",
    heroIntro:
      "Our home district. STA has moved freight for Coimbatore's textile, pump, foundry and engineering businesses since 1982, and now also supports startups, deep-tech companies and growing businesses with funding assistance and professional services.",
    about:
      "STA Corporate Solutions operates from Podanur, Coimbatore. Transportation has been our core since 1982 with a 12+ vehicle owned fleet. Our finance practice assists startups and deep-tech companies with scheme and funding applications, and our Legal & CA practice supports businesses with company registration, GST, income tax, accounts and compliance. Services are for businesses only.",
    transport: {
      headline: "Full Load & Return Load Lorry Transport from Coimbatore",
      description:
        "Owned lorries and trailers based in Coimbatore, serving businesses across Coimbatore district and the neighbouring Tiruppur district. Vehicle suitability, date and freight are confirmed for each booking.",
      routes: [
        "Coimbatore to Tiruppur (about 50 km)",
        "Coimbatore to Pollachi (about 40 km)",
        "Coimbatore to Mettupalayam (about 35 km)",
        "Coimbatore to Sulur and Palladam",
        "Coimbatore to Avinashi and Udumalpet",
      ],
      industries: ["Textiles & Knitwear", "Pump & Motor Manufacturing", "Foundry & Castings", "Engineering Goods", "Auto Components"],
    },
    financial: {
      headline: "Funding Assistance for Startups & Deep-Tech Companies in Coimbatore",
      description:
        "Application and documentation assistance for startups and deep-tech companies in Coimbatore: Startup India recognition, seed and equity-linked schemes, grants and bank credit. For businesses only, not personal loans. STA is not a lender.",
      highlights: [
        "Startup India (DPIIT) recognition support",
        "Seed, grant and equity-linked scheme applications, including StartupTN programmes",
        "Funding readiness: pitch, financial projections and documentation",
        "Guidance for deep-tech and research-led ventures on grant and credit options",
      ],
    },
    legal: {
      headline: "Legal & CA Professional Services for Coimbatore Businesses",
      description:
        "Legal documentation and CA services for companies, LLPs and startups in Coimbatore: registration, GST, income tax, accounts, audit support and compliance.",
      highlights: [
        "Company, LLP and OPC registration",
        "GST registration, returns and compliance",
        "Income tax, accounts and audit support",
        "Contracts, shareholder agreements and IP/trademark filings",
      ],
    },
    landmarks: ["Peelamedu", "Gandhipuram", "RS Puram", "Saravanampatti", "Singanallur", "Saibaba Colony", "Kovaipudur", "Podanur"],
    faqs: [
      {
        q: "Where is STA Corporate Solutions located in Coimbatore?",
        a: "Our office is at No 10/135-G, Gurusamy Pillai St Extn, Podanur, Coimbatore, Coimbatore South, Tamil Nadu, India, 641023. Please call ahead before visiting.",
      },
      {
        q: "Do you arrange lorry pickup within Coimbatore?",
        a: "Yes. We run full-load lorry transport from Coimbatore. Pickup timing and vehicle suitability are confirmed for each booking.",
      },
      {
        q: "Can you help my startup or deep-tech company raise funding?",
        a: "We assist startups and deep-tech companies with scheme and funding applications and documentation. STA is not a lender and does not guarantee approval; eligibility and sanction are decided by the funder or authority.",
      },
    ],
  },
  tiruppur: {
    slug: "tiruppur",
    name: "Tiruppur",
    nameTamil: "திருப்பூர்",
    region: "Tamil Nadu",
    postalCode: "641601",
    geo: { lat: "11.1085", lng: "77.3411" },
    tagline: "Lorry transport, startup funding assistance and professional services for Tiruppur businesses",
    metaTitle: "Lorry Transport, Startup Funding Assistance & Legal and CA Services in Tiruppur | STA Corporate Solutions",
    metaDescription:
      "Lorry transport for Tiruppur businesses, funding assistance for startups and deep-tech companies, and legal and CA services. Coordinated from STA's Coimbatore office: 94430 33055.",
    heroIntro:
      "Tiruppur is a knitwear and textile hub only about 50 km from our Coimbatore office. STA supports Tiruppur businesses with lorry transport, startup and deep-tech funding assistance, and legal and CA professional services.",
    about:
      "Enquiries from Tiruppur district are coordinated from our Coimbatore office, which is not a separate Tiruppur branch. We move freight between Tiruppur, Coimbatore and nearby towns, assist startups and deep-tech companies with funding applications, and provide legal and CA support to businesses. Services are for businesses only.",
    transport: {
      headline: "Lorry Transport for Tiruppur Businesses",
      description:
        "Full-load transport between Tiruppur, Coimbatore and nearby district towns, including fabric rolls, yarn, garment cartons and machinery. Vehicle suitability and freight are confirmed per booking.",
      routes: [
        "Tiruppur to Coimbatore (about 50 km)",
        "Tiruppur to Avinashi and Palladam",
        "Tiruppur to Kangeyam and Dharapuram",
        "Tiruppur to Udumalpet",
      ],
      industries: ["Knitwear & Hosiery", "Dyeing & Processing", "Yarn Trading", "Garment Accessories"],
    },
    financial: {
      headline: "Funding Assistance for Tiruppur Startups & Deep-Tech Companies",
      description:
        "Application and documentation assistance for startups and deep-tech companies in Tiruppur, including textile-tech and manufacturing-tech ventures. For businesses only. STA is not a lender.",
      highlights: [
        "Startup India (DPIIT) recognition support",
        "Seed, grant and equity-linked scheme applications, including StartupTN programmes",
        "Funding readiness: financial projections and documentation",
        "Guidance on grant and credit options for technology ventures",
      ],
    },
    legal: {
      headline: "Legal & CA Professional Services for Tiruppur Businesses",
      description:
        "Legal documentation and CA services for Tiruppur companies and startups: registration, GST, income tax, accounts, audit support and compliance.",
      highlights: [
        "Company, LLP and partnership registration",
        "GST registration, returns and refund support",
        "Income tax, accounts and audit support",
        "Contracts, labour-law and factory compliance support",
      ],
    },
    landmarks: ["Mannarai", "Anupparpalayam", "Avinashi Road", "Palladam Road", "Kangeyam Road", "Andipalayam"],
    faqs: [
      {
        q: "Does STA have an office in Tiruppur?",
        a: "No. Our office is in Podanur, Coimbatore, about 50 km away. Tiruppur enquiries are coordinated from there.",
      },
      {
        q: "Can you move goods between Tiruppur and Coimbatore?",
        a: "Yes. We run full-load lorry transport between the two districts. Vehicle suitability, date and freight are confirmed per booking.",
      },
      {
        q: "Do you offer loans?",
        a: "STA is not a lender. We assist startups and deep-tech companies with funding scheme and loan applications and documentation, for businesses only.",
      },
    ],
  },
};

export const CITY_SLUGS: CitySlug[] = ["coimbatore", "tiruppur"];
