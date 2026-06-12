
# Master SEO Plan — STA Corporate Solutions

Source: 16 Google Keyword Planner exports → **17,313 rows → 5,522 unique keywords** parsed and bucketed.

## 1. Keyword universe (after classification)

| Pillar | Unique KWs | Total monthly volume | Hero keyword examples |
|---|---|---|---|
| Transportation | 1,519 | 88,980 | transport service near me, freight, cargo shipping, lorry services |
| Financial Services | 1,500 | 87,360 | msme loans, mudra loan, private banking, working capital |
| Legal Services | 1,113 | 76,200 | family lawyer, divorce lawyer, criminal lawyer, real estate lawyer |
| Real Estate | 321 (+ 819 unclassified high-volume) | 233,860 | homes, real estate, 3 bhk, houses for sale |
| Edu Consultancy | 250 | 11,360 | american degree transfer program, aa degree, immigration consultation |

Only **7 keywords carry an explicit South India geo** — geography will be layered **programmatically** (the user's keyword set is mostly head-terms; long-tail geo is where the win is).

## 2. URL architecture — 5 pillars × matrix

```text
/                                       (Home — 5-service hero + rich services section)
/services                               (All-services pillar hub)

/transportation                         (existing pillar)
  /transportation/services/:service     (Full Load, Return Load, Containerized, Textile,
                                         Construction, Factory Shifting, Heavy Machinery,
                                         Cold Chain, Door-to-Door, Project Cargo — 10)
  /transportation/:city                 (40 cities)
  /transportation/:city/:service        (10 × 40 = 400 — top 200 shipped)
  /transportation/routes/:from-to-:to   (top 30 corridors: cbe-chennai, tup-blr, etc.)

/financial-services                     (pillar)
  /financial-services/:product          (MSME, Mudra, Working Capital, Home, LAP, Business,
                                         Project, Equipment, Vehicle, Education, Personal,
                                         Overdraft — 12)
  /financial-services/:city             (25 cities)
  /financial-services/:city/:product    (top 120 city×product combos)

/legal-services                         (pillar)
  /legal-services/:practice             (Family, Divorce, Property, Criminal, Civil, Corporate,
                                         Labour, Consumer, Cyber, Tax, IP, RERA — 12)
  /legal-services/:city                 (25 cities)
  /legal-services/:city/:practice       (top 120)
  /legal-services/registrations/:type   (Company, LLP, GST, MSME, FSSAI, Trademark, ISO — 8)

/edu-consultancy                        (pillar)
  /edu-consultancy/:program             (Degree Transfer, AA/AS, Bachelor's Completion,
                                         Credit Transfer, Credential Eval, Study Abroad,
                                         Working Professional, Adult Learner — 10)
  /edu-consultancy/:city                (15 cities)
  /edu-consultancy/:city/:program       (top 60)

/real-estate                            (pillar)
  /real-estate/:category                (Residential, Commercial, Investment, NRI, Land,
                                         Rental, Hospitality — 8)
  /real-estate/:city                    (30 cities)
  /real-estate/:city/:category          (top 150)
  /real-estate/:city/:bhk               (1BHK / 2BHK / 3BHK / Villa — 4 per top-12 cities = 48)
```

**Total indexable pages: ~1,200** (40 static pillars/products + ~1,160 programmatic).

## 3. Intent split per pillar (how keywords map to page templates)

| Intent | Template | Example mapping |
|---|---|---|
| Informational ("what is msme loan") | Pillar + product page FAQ section | 18% of corpus |
| Navigational ("vrl logistics near me") | City page + city/service combo | 22% |
| Commercial ("best transport service") | Service page CTA modules | 28% |
| Transactional ("hire lorry coimbatore") | City/service combo with quote form | 32% |

Each programmatic page injects 5–7 of its matched keywords into: H1, lead paragraph, H2 cluster, FAQ schema, breadcrumbs, internal-link anchors.

## 4. Homepage changes

1. **Hero verticals row: 3 → 5 cards** — add Edu Consultancy & Real Estate, keep readable dark glass treatment.
2. **New "Services" section below stats** — premium 5-card grid with imagery, KPI per service, deep-link to pillar.
3. **"Explore by city" strip** — 12 city chips → city-level pillar hubs.

## 5. Technical SEO mechanics

- **Data layer**: `src/lib/seo/` →
  - `keywords.ts` — parsed 5,522 keywords with vertical/volume/intent
  - `cities.ts` — South India 40-city dataset (state, lang, lat/lng, population tier)
  - `pillars.ts` — pillar/service/product/practice/category catalogues
  - `slugs.ts` — slug helpers + canonical URL builder
- **Dynamic routes**: lazy-loaded route components (`<PillarCityPage>`, `<PillarCityServicePage>`, `<RouteCorridorPage>`) read `useParams` → resolve from data layer → 404 if invalid slug. Zero hand-written page files for programmatic surface.
- **Per-page head**: `react-helmet-async` (already installed) emits title, meta description, canonical, og:*, JSON-LD per route.
- **Schema**: `LocalBusiness` sitewide; per-page `Service` + `BreadcrumbList` + `FAQPage`; `RealEstateListing` for property categories.
- **Sitemap**: replace static `public/sitemap.xml` with `scripts/generate-sitemap.ts` that enumerates the data layer (predev + prebuild hook) → all ~1,200 URLs auto-listed.
- **Internal linking**: each pillar hub links to top 12 cities + top 8 services; each programmatic page links to 6 sibling pages + parent pillar + 3 cross-pillar (e.g. transportation/coimbatore → financial-services/coimbatore).
- **Performance guardrails**: keep route lazy-loaded; share one PillarPageShell component → no bundle bloat; images via existing `OptimizedImage`.
- **Content uniqueness**: each programmatic page composes from 4 swappable blocks (intro, service grid, FAQ, CTA) seeded by city + service + keyword cluster — avoids thin-content / duplicate-content penalty.

## 6. Implementation phases (each phase ships independently)

```text
Phase 1  Data layer + homepage 5-service expansion + /services pillar hub
Phase 2  5 pillar landing pages refreshed with keyword-tuned copy + FAQ schema
Phase 3  Programmatic city pages for all 5 pillars (≈135 pages)
Phase 4  City × service/product/practice/category combos (≈800 pages)
Phase 5  Route corridors + BHK variants + registration sub-pages (≈230 pages)
Phase 6  Sitemap generator + robots refresh + per-page JSON-LD audit
```

## Technical notes

- Pages render client-side (Vite SPA); Googlebot executes JS so indexing is fine, but social crawlers see the static `index.html` fallback only — flagged honestly, no SSR rebuild proposed.
- Real Estate gets 819 "unclassified" high-volume terms re-bucketed in Phase 2 once the data layer lands.
- Tamil/Kannada/Telugu/Malayalam variants are stored in `cities.ts` for future hreflang but **not** shipped as duplicate URLs in this plan.
- All new routes preserve existing premium-corporate visual system (no design drift).
- Phone CTA (94430 33055), Return Load "subject to route availability" copy, and "no GPS / no Part Load" rules respected on every generated page.

Approve and I'll start with **Phase 1**.
