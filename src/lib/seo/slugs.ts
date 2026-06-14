import { CITIES, CORRIDORS, City } from "./cities";
import { Pillar, PILLARS, REGISTRATIONS, BHK_TYPES } from "./pillars";

export const SITE_URL = "https://sta-corporate.in";

export const pillarUrl = (p: Pillar) => p.path;
export const pillarSubUrl = (p: Pillar, sub: string) => `${p.path}/${p.subPath}/${sub}`;
export const pillarCityUrl = (p: Pillar, city: string) => `${p.path}/${city}`;
export const pillarCitySubUrl = (p: Pillar, city: string, sub: string) =>
  `${p.path}/${city}/${sub}`;
export const corridorUrl = (slug: string) => `/transportation/routes/${slug}`;
export const registrationUrl = (slug: string) => `/legal-services/registrations/${slug}`;
export const bhkUrl = (city: string, bhk: string) => `/real-estate/${city}/${bhk}`;

export const canonical = (path: string) => `${SITE_URL}${path}`;

// City selection per pillar (top tiers + hubs)
export function citiesForPillar(pillarId: string): City[] {
  // Tier limits per pillar (controls page count)
  const limits: Record<string, number> = {
    transportation: 40,
    "financial-services": 25,
    "legal-services": 25,
    "edu-consultancy": 15,
    "real-estate": 30,
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
    { path: "/services", priority: "0.9", changefreq: "weekly" },
    { path: "/services/transport-categories", priority: "0.7", changefreq: "monthly" },
    { path: "/about", priority: "0.7", changefreq: "monthly" },
    { path: "/contact", priority: "0.7", changefreq: "monthly" },
    { path: "/fleet", priority: "0.6", changefreq: "monthly" },
    { path: "/return-loads", priority: "0.6", changefreq: "monthly" },
    { path: "/service-areas", priority: "0.6", changefreq: "monthly" },
    { path: "/coimbatore", priority: "0.7", changefreq: "monthly" },
    { path: "/chennai", priority: "0.7", changefreq: "monthly" },
    { path: "/tiruppur", priority: "0.7", changefreq: "monthly" },
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
      // City×sub combos — cap: tier 1 → all subs, tier 2+ → top 6
      const subCount = c.tier === 1 ? p.sub.length : Math.min(6, p.sub.length);
      for (const s of p.sub.slice(0, subCount)) {
        out.push({ path: pillarCitySubUrl(p, c.slug, s.slug), priority: "0.65", changefreq: "monthly" });
      }
    }
  }

  // Transportation corridors
  for (const c of CORRIDORS) {
    out.push({ path: corridorUrl(c.slug), priority: "0.7", changefreq: "monthly" });
  }

  // Legal registrations
  for (const r of REGISTRATIONS) {
    out.push({ path: registrationUrl(r.slug), priority: "0.7", changefreq: "monthly" });
  }

  // BHK variants — top 12 cities × 4 BHK types
  const topReCities = citiesForPillar("real-estate").slice(0, 12);
  for (const c of topReCities) {
    for (const b of BHK_TYPES) {
      out.push({ path: bhkUrl(c.slug, b.slug), priority: "0.6", changefreq: "monthly" });
    }
  }

  return out;
}
