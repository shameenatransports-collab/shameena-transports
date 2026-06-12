// South India city dataset for programmatic SEO pages.
// Tier: 1 = metro, 2 = major, 3 = tier-2, 4 = emerging.

export type StateCode = "TN" | "KA" | "TS" | "AP" | "KL";

export interface City {
  slug: string;
  name: string;
  state: StateCode;
  stateName: string;
  tier: 1 | 2 | 3 | 4;
  language: string;
  region: string;
  hub?: boolean; // primary STA hub
}

export const CITIES: City[] = [
  // Tamil Nadu
  { slug: "coimbatore", name: "Coimbatore", state: "TN", stateName: "Tamil Nadu", tier: 1, language: "Tamil", region: "Western TN", hub: true },
  { slug: "chennai", name: "Chennai", state: "TN", stateName: "Tamil Nadu", tier: 1, language: "Tamil", region: "Northern TN", hub: true },
  { slug: "madurai", name: "Madurai", state: "TN", stateName: "Tamil Nadu", tier: 2, language: "Tamil", region: "Southern TN" },
  { slug: "salem", name: "Salem", state: "TN", stateName: "Tamil Nadu", tier: 2, language: "Tamil", region: "Central TN" },
  { slug: "tiruppur", name: "Tiruppur", state: "TN", stateName: "Tamil Nadu", tier: 2, language: "Tamil", region: "Western TN", hub: true },
  { slug: "erode", name: "Erode", state: "TN", stateName: "Tamil Nadu", tier: 2, language: "Tamil", region: "Western TN" },
  { slug: "trichy", name: "Tiruchirappalli", state: "TN", stateName: "Tamil Nadu", tier: 2, language: "Tamil", region: "Central TN" },
  { slug: "tirunelveli", name: "Tirunelveli", state: "TN", stateName: "Tamil Nadu", tier: 3, language: "Tamil", region: "Southern TN" },
  { slug: "vellore", name: "Vellore", state: "TN", stateName: "Tamil Nadu", tier: 3, language: "Tamil", region: "Northern TN" },
  { slug: "thanjavur", name: "Thanjavur", state: "TN", stateName: "Tamil Nadu", tier: 3, language: "Tamil", region: "Central TN" },
  { slug: "hosur", name: "Hosur", state: "TN", stateName: "Tamil Nadu", tier: 3, language: "Tamil", region: "Northern TN" },
  { slug: "karur", name: "Karur", state: "TN", stateName: "Tamil Nadu", tier: 3, language: "Tamil", region: "Central TN" },
  { slug: "dindigul", name: "Dindigul", state: "TN", stateName: "Tamil Nadu", tier: 4, language: "Tamil", region: "Southern TN" },
  { slug: "nagercoil", name: "Nagercoil", state: "TN", stateName: "Tamil Nadu", tier: 4, language: "Tamil", region: "Southern TN" },
  { slug: "sivakasi", name: "Sivakasi", state: "TN", stateName: "Tamil Nadu", tier: 4, language: "Tamil", region: "Southern TN" },
  { slug: "cuddalore", name: "Cuddalore", state: "TN", stateName: "Tamil Nadu", tier: 4, language: "Tamil", region: "Northern TN" },

  // Karnataka
  { slug: "bengaluru", name: "Bengaluru", state: "KA", stateName: "Karnataka", tier: 1, language: "Kannada", region: "Southern KA", hub: true },
  { slug: "mysuru", name: "Mysuru", state: "KA", stateName: "Karnataka", tier: 2, language: "Kannada", region: "Southern KA" },
  { slug: "mangaluru", name: "Mangaluru", state: "KA", stateName: "Karnataka", tier: 2, language: "Kannada", region: "Coastal KA" },
  { slug: "hubballi", name: "Hubballi", state: "KA", stateName: "Karnataka", tier: 3, language: "Kannada", region: "Northern KA" },
  { slug: "belagavi", name: "Belagavi", state: "KA", stateName: "Karnataka", tier: 3, language: "Kannada", region: "Northern KA" },
  { slug: "tumakuru", name: "Tumakuru", state: "KA", stateName: "Karnataka", tier: 4, language: "Kannada", region: "Southern KA" },

  // Telangana
  { slug: "hyderabad", name: "Hyderabad", state: "TS", stateName: "Telangana", tier: 1, language: "Telugu", region: "Central TS", hub: true },
  { slug: "warangal", name: "Warangal", state: "TS", stateName: "Telangana", tier: 3, language: "Telugu", region: "Northern TS" },
  { slug: "karimnagar", name: "Karimnagar", state: "TS", stateName: "Telangana", tier: 4, language: "Telugu", region: "Northern TS" },

  // Andhra Pradesh
  { slug: "vijayawada", name: "Vijayawada", state: "AP", stateName: "Andhra Pradesh", tier: 2, language: "Telugu", region: "Coastal AP" },
  { slug: "visakhapatnam", name: "Visakhapatnam", state: "AP", stateName: "Andhra Pradesh", tier: 2, language: "Telugu", region: "Coastal AP" },
  { slug: "tirupati", name: "Tirupati", state: "AP", stateName: "Andhra Pradesh", tier: 3, language: "Telugu", region: "Southern AP" },
  { slug: "guntur", name: "Guntur", state: "AP", stateName: "Andhra Pradesh", tier: 3, language: "Telugu", region: "Coastal AP" },
  { slug: "nellore", name: "Nellore", state: "AP", stateName: "Andhra Pradesh", tier: 4, language: "Telugu", region: "Southern AP" },
  { slug: "kurnool", name: "Kurnool", state: "AP", stateName: "Andhra Pradesh", tier: 4, language: "Telugu", region: "Rayalaseema" },

  // Kerala
  { slug: "kochi", name: "Kochi", state: "KL", stateName: "Kerala", tier: 1, language: "Malayalam", region: "Central KL", hub: true },
  { slug: "thiruvananthapuram", name: "Thiruvananthapuram", state: "KL", stateName: "Kerala", tier: 2, language: "Malayalam", region: "Southern KL" },
  { slug: "kozhikode", name: "Kozhikode", state: "KL", stateName: "Kerala", tier: 2, language: "Malayalam", region: "Northern KL" },
  { slug: "thrissur", name: "Thrissur", state: "KL", stateName: "Kerala", tier: 3, language: "Malayalam", region: "Central KL" },
  { slug: "kollam", name: "Kollam", state: "KL", stateName: "Kerala", tier: 3, language: "Malayalam", region: "Southern KL" },
  { slug: "kannur", name: "Kannur", state: "KL", stateName: "Kerala", tier: 4, language: "Malayalam", region: "Northern KL" },
  { slug: "palakkad", name: "Palakkad", state: "KL", stateName: "Kerala", tier: 4, language: "Malayalam", region: "Central KL" },
  { slug: "alappuzha", name: "Alappuzha", state: "KL", stateName: "Kerala", tier: 4, language: "Malayalam", region: "Southern KL" },
  { slug: "malappuram", name: "Malappuram", state: "KL", stateName: "Kerala", tier: 4, language: "Malayalam", region: "Northern KL" },
];

export const CITY_BY_SLUG = Object.fromEntries(CITIES.map((c) => [c.slug, c]));

export const HUB_CITIES = CITIES.filter((c) => c.hub);
export const TIER_1_2 = CITIES.filter((c) => c.tier <= 2);

export function getCity(slug?: string) {
  return slug ? CITY_BY_SLUG[slug] : undefined;
}

// Top freight corridors (transportation)
export interface Corridor {
  slug: string;
  from: string;
  to: string;
  fromName: string;
  toName: string;
  distanceKm: number;
}

const C = (from: string, to: string, distanceKm: number): Corridor => {
  const f = CITY_BY_SLUG[from], t = CITY_BY_SLUG[to];
  return { slug: `${from}-to-${to}`, from, to, fromName: f.name, toName: t.name, distanceKm };
};

export const CORRIDORS: Corridor[] = [
  C("coimbatore", "chennai", 510),
  C("coimbatore", "bengaluru", 365),
  C("coimbatore", "kochi", 195),
  C("coimbatore", "madurai", 215),
  C("coimbatore", "salem", 160),
  C("coimbatore", "tiruppur", 50),
  C("coimbatore", "erode", 100),
  C("coimbatore", "hyderabad", 770),
  C("coimbatore", "mysuru", 195),
  C("coimbatore", "thiruvananthapuram", 415),
  C("tiruppur", "chennai", 480),
  C("tiruppur", "bengaluru", 360),
  C("tiruppur", "mumbai", 1230),
  C("chennai", "bengaluru", 345),
  C("chennai", "hyderabad", 625),
  C("chennai", "kochi", 690),
  C("chennai", "madurai", 460),
  C("chennai", "salem", 340),
  C("chennai", "vijayawada", 440),
  C("chennai", "visakhapatnam", 800),
  C("bengaluru", "hyderabad", 575),
  C("bengaluru", "kochi", 545),
  C("bengaluru", "mysuru", 145),
  C("bengaluru", "mangaluru", 350),
  C("madurai", "kochi", 270),
  C("madurai", "tirunelveli", 160),
  C("salem", "bengaluru", 200),
  C("hyderabad", "vijayawada", 275),
  C("kochi", "thiruvananthapuram", 220),
  C("kochi", "kozhikode", 185),
];

export const CORRIDOR_BY_SLUG = Object.fromEntries(CORRIDORS.map((c) => [c.slug, c]));
