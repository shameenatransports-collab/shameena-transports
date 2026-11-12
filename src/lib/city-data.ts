// Localized SEO data for Coimbatore district (Tamil Nadu), the only area STA serves.
// Used by src/pages/CityLanding.tsx

export type CitySlug = "coimbatore";

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
    metaTitle: "Lorry Transport in Coimbatore | STA",
    metaDescription:
      "STA Corporate Solutions in Coimbatore: full-load lorry transport since 1982 for businesses. Call 94430 33055.",
    heroIntro:
      "Our home district. STA has moved freight for Coimbatore's textile, pump, foundry and engineering businesses since 1982, from our Podanur base.",
    about:
      "STA Corporate Solutions operates from Podanur, Coimbatore. Transportation has been our core since 1982.",
    transport: {
      headline: "Full Load Lorry Transport from Coimbatore",
      description:
        "Open-body lorry transport from Coimbatore, serving businesses across Coimbatore district and the nearby district towns. Vehicle suitability, date and freight are confirmed for each booking.",
      routes: [
        "Coimbatore to Pollachi (about 40 km)",
        "Coimbatore to Mettupalayam (about 35 km)",
        "Coimbatore to Sulur (about 20 km)",
        "Coimbatore to Annur and Madukkarai",
      ],
      industries: ["Textiles", "Pump & Motor Manufacturing", "Foundry & Castings", "Engineering Goods", "Auto Components"],
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
};

export const CITY_SLUGS: CitySlug[] = ["coimbatore"];
