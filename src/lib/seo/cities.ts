// Coverage: Coimbatore and Tiruppur districts, Tamil Nadu only.
// Tier: 1 = district hub, 3 = district town.

export type StateCode = "TN";
export type DistrictName = "Coimbatore" | "Tiruppur";

export interface City {
  slug: string;
  name: string;
  state: StateCode;
  stateName: string;
  district: DistrictName;
  tier: 1 | 3;
  language: string;
  region: string;
  hub?: boolean; // primary STA hub
}

const TN = { state: "TN" as const, stateName: "Tamil Nadu", language: "Tamil" };

export const CITIES: City[] = [
  // Coimbatore district
  { slug: "coimbatore", name: "Coimbatore", ...TN, district: "Coimbatore", tier: 1, region: "Coimbatore District", hub: true },
  { slug: "pollachi", name: "Pollachi", ...TN, district: "Coimbatore", tier: 3, region: "Coimbatore District" },
  { slug: "mettupalayam", name: "Mettupalayam", ...TN, district: "Coimbatore", tier: 3, region: "Coimbatore District" },
  { slug: "sulur", name: "Sulur", ...TN, district: "Coimbatore", tier: 3, region: "Coimbatore District" },
  // Tiruppur district
  { slug: "tiruppur", name: "Tiruppur", ...TN, district: "Tiruppur", tier: 1, region: "Tiruppur District", hub: true },
  { slug: "avinashi", name: "Avinashi", ...TN, district: "Tiruppur", tier: 3, region: "Tiruppur District" },
  { slug: "palladam", name: "Palladam", ...TN, district: "Tiruppur", tier: 3, region: "Tiruppur District" },
  { slug: "udumalpet", name: "Udumalpet", ...TN, district: "Tiruppur", tier: 3, region: "Tiruppur District" },
  { slug: "dharapuram", name: "Dharapuram", ...TN, district: "Tiruppur", tier: 3, region: "Tiruppur District" },
  { slug: "kangeyam", name: "Kangeyam", ...TN, district: "Tiruppur", tier: 3, region: "Tiruppur District" },
];

export const CITY_BY_SLUG = Object.fromEntries(CITIES.map((c) => [c.slug, c]));

export const HUB_CITIES = CITIES.filter((c) => c.hub);
export const TIER_1_2 = CITIES.filter((c) => c.tier <= 2);

export function getCity(slug?: string) {
  return slug ? CITY_BY_SLUG[slug] : undefined;
}

// Freight corridors within and between the two districts (approximate road distances)
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
  C("coimbatore", "tiruppur", 50),
  C("coimbatore", "pollachi", 40),
  C("coimbatore", "mettupalayam", 35),
  C("coimbatore", "sulur", 20),
  C("coimbatore", "palladam", 40),
  C("coimbatore", "avinashi", 40),
  C("coimbatore", "udumalpet", 60),
  C("tiruppur", "avinashi", 15),
  C("tiruppur", "palladam", 25),
  C("tiruppur", "kangeyam", 40),
  C("tiruppur", "dharapuram", 50),
  C("tiruppur", "udumalpet", 55),
];

export const CORRIDOR_BY_SLUG = Object.fromEntries(CORRIDORS.map((c) => [c.slug, c]));
