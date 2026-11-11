import { CITIES, CORRIDORS, City } from "./cities";
import { Pillar, PILLARS } from "./pillars";

export const SITE_URL = "https://sta-corporate.in";

export const pillarUrl = (p: Pillar) => p.path;
export const pillarSubUrl = (p: Pillar, sub: string) => `${p.path}/${p.subPath}/${sub}`;
export const pillarCityUrl = (p: Pillar, city: string) => `${p.path}/${city}`;
export const pillarCitySubUrl = (p: Pillar, city: string, sub: string) =>
  `${p.path}/${city}/${sub}`;
export const corridorUrl = (slug: string) => `/transportation/routes/${slug}`;

// Towns get these pages in the sitemap; Coimbatore (tier 1) gets every sub-service.
const TOWN_SUBS = [
  "open-body-lorry", "full-load", "trucks-on-hire", "cement-transport",
  "steel-transport", "construction-material", "bagged-goods-transport", "loaders-packers",
];
export const isIndexableCitySub = (city: City, subSlug: string) =>
  city.tier === 1 || TOWN_SUBS.includes(subSlug);

export const OPEN_BODY_GUIDE_PATH = "/open-body-lorry-coimbatore";

export const canonical = (path: string) => `${SITE_URL}${path}`;

// City selection per pillar (top tiers + hubs)
export function citiesForPillar(pillarId: string): City[] {
  // Tier limits per pillar (controls page count)
  const limits: Record<string, number> = {
    transportation: 10,
  };
  const n = limits[pillarId] ?? 25;
  return [...CITIES].sort((a, b) => a.tier - b.tier).slice(0, n);
}

// Sub × city combos shipped per pillar (cap)
export function subsForCityPage(pillarId: string): string[] {
  const p = PILLARS.find((x) => x.id === pillarId);
  if (!p) return [];
  // Ship all sub items in tier-1 cities, top 6 in others (handled by sitemap layer)
  return p.sub.map((s) => s.slug);
}

// Enumerate every indexable URL for sitemap
export interface SitemapEntry { path: string; priority?: string; changefreq?: string }

export function enumerateAllUrls(): SitemapEntry[] {
  const out: SitemapEntry[] = [];

  // Static
  out.push(
    { path: "/", priority: "1.0", changefreq: "weekly" },
    { path: "/services/transport-categories", priority: "0.7", changefreq: "monthly" },
    { path: "/about", priority: "0.7", changefreq: "monthly" },
    { path: "/contact", priority: "0.7", changefreq: "monthly" },
    { path: OPEN_BODY_GUIDE_PATH, priority: "0.9", changefreq: "monthly" },
    { path: "/service-areas", priority: "0.6", changefreq: "monthly" },
    { path: "/coimbatore", priority: "0.7", changefreq: "monthly" },
    { path: "/privacy", priority: "0.3", changefreq: "yearly" },
    { path: "/terms", priority: "0.3", changefreq: "yearly" },
  );

  // Pillars + subs
  for (const p of PILLARS) {
    out.push({ path: p.path, priority: "0.9", changefreq: "weekly" });
    for (const s of p.sub) {
      out.push({ path: pillarSubUrl(p, s.slug), priority: "0.8", changefreq: "monthly" });
    }
    // City + city×sub
    const cities = citiesForPillar(p.id);
    for (const c of cities) {
      out.push({ path: pillarCityUrl(p, c.slug), priority: "0.75", changefreq: "monthly" });
      // City×sub combos — Coimbatore: all; towns: priority subs only (others are noindex)
      for (const s of p.sub.filter((x) => isIndexableCitySub(c, x.slug))) {
        out.push({ path: pillarCitySubUrl(p, c.slug, s.slug), priority: "0.65", changefreq: "monthly" });
      }
    }
  }

  // Transportation corridors
  for (const c of CORRIDORS) {
    out.push({ path: corridorUrl(c.slug), priority: "0.7", changefreq: "monthly" });
  }


  return out;
}
