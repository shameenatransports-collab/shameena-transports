// Coverage: Coimbatore district, Tamil Nadu only.
// Tier: 1 = district hub, 3 = district town.

export type StateCode = "TN";
export type DistrictName = "Coimbatore";

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
  { slug: "annur", name: "Annur", ...TN, district: "Coimbatore", tier: 3, region: "Coimbatore District" },
  { slug: "madukkarai", name: "Madukkarai", ...TN, district: "Coimbatore", tier: 3, region: "Coimbatore District" },
  { slug: "kinathukadavu", name: "Kinathukadavu", ...TN, district: "Coimbatore", tier: 3, region: "Coimbatore District" },
];

export const CITY_BY_SLUG = Object.fromEntries(CITIES.map((c) => [c.slug, c]));

export const HUB_CITIES = CITIES.filter((c) => c.hub);
export const TIER_1_2 = CITIES.filter((c) => c.tier <= 2);

export function getCity(slug?: string) {
  return slug ? CITY_BY_SLUG[slug] : undefined;
}

// Freight corridors within Coimbatore district (approximate road distances)
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
  C("coimbatore", "pollachi", 40),
  C("coimbatore", "mettupalayam", 35),
  C("coimbatore", "sulur", 20),
  C("coimbatore", "annur", 35),
  C("coimbatore", "madukkarai", 15),
  C("coimbatore", "kinathukadavu", 30),
];

export const CORRIDOR_BY_SLUG = Object.fromEntries(CORRIDORS.map((c) => [c.slug, c]));
