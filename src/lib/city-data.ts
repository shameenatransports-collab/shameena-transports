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
    tagline: "Headquartered in Coimbatore: lorry transport since 1982 for Coimbatore businesses",
    metaTitle: "Lorry Transport in Coimbatore | STA Corporate Solutions",
    metaDescription:
      "STA Corporate Solutions in Coimbatore: full-load and return-load lorry transport since 1982 for businesses. Call 94430 33055.",
    heroIntro:
      "Our home district. STA has moved freight for Coimbatore's textile, pump, foundry and engineering businesses since 1982, from our Podanur base.",
    about:
      "STA Corporate Solutions operates from Podanur, Coimbatore. Transportation has been our core since 1982 with a 12+ vehicle owned fleet.",
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
    ],
  },
  tiruppur: {
    slug: "tiruppur",
    name: "Tiruppur",
    nameTamil: "திருப்பூர்",
    region: "Tamil Nadu",
    postalCode: "641601",
    geo: { lat: "11.1085", lng: "77.3411" },
    tagline: "Lorry transport for Tiruppur businesses, coordinated from Coimbatore",
    metaTitle: "Lorry Transport in Tiruppur | STA Corporate Solutions",
    metaDescription:
      "Full Load and Return Load lorry transport for Tiruppur businesses. Coordinated from STA's Coimbatore office: 94430 33055.",
    heroIntro:
      "Tiruppur is a knitwear and textile hub only about 50 km from our Coimbatore office. STA supports Tiruppur businesses with Full Load and Return Load lorry transport.",
    about:
      "Enquiries from Tiruppur district are coordinated from our Coimbatore office, which is not a separate Tiruppur branch. We move freight between Tiruppur, Coimbatore and nearby towns. Services are for businesses only.",
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
    ],
  },
};

export const CITY_SLUGS: CitySlug[] = ["coimbatore", "tiruppur"];
