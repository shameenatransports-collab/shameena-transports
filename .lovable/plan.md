## Execution plan — 5 tracks, shipped in one pass

### 1. AI-answer optimization (AEO / LLM citations)
- Expand `public/llms.txt` with answer-first paragraphs per vertical (verbatim cite-ready facts: founding year, fleet count, cities, exclusions, contact).
- Add `Speakable` schema to FAQ blocks (homepage + each service page) so voice / AI assistants can extract.
- Create reusable `<ServiceFAQ>` component and drop a vertical-specific FAQ block on Transportation, Financial, Legal, EduConsultancy, RealEstate, ReturnLoads pages with `FAQPage` + `Speakable` JSON-LD (each FAQ scoped to its vertical, no homepage duplication).
- Add `Service` → `provider` → `LocalBusiness` `@id` references already exist; tighten by adding `knowsAbout` and `slogan` on Organization schema for entity-recognition.

### 2. SEO architecture
- `BreadcrumbList` JSON-LD via Helmet on every top-level page (currently only Privacy has it).
- Self-referencing canonical audit pass (already mostly correct from prior turn; this verifies and patches stragglers).
- `public/robots.txt`: explicitly allow `Googlebot-Image`, `Googlebot-News`, `GPTBot`, `PerplexityBot`, `ClaudeBot`, `Google-Extended` — and `Disallow` known scraper/SEO-bot UAs (AhrefsBot, SemrushBot, MJ12bot, DotBot) to reduce noise hitting GA4 from referrer spam.
- Sitemap: confirm 1,207 entries still align with current routes; no structural change unless drift.

### 3. Content relevancy sweep
- Remove generic AI-template phrasing flagged in earlier turns: vague "comprehensive solutions", duplicated boilerplate across vertical hero subtexts.
- Tighten each vertical hero subtitle to one concrete differentiator (Transportation: "12+ own lorries, no broker chain"; Financial: "MSME/Mudra/PMEGP scheme documentation"; Legal: "property + corporate filings"; EduConsultancy: "academic mobility & degree transfer"; RealEstate: "South India discovery").

### 4. Bot / spam filtering
- **Analytics hook** (`src/lib/analytics.ts`): UA-based bot detection — skip `trackPageView`, `trackEvent`, `trackContactFormSubmit` when UA matches `/bot|crawler|spider|crawling|headless|puppeteer|playwright|lighthouse|gtmetrix|pingdom|preview/i` or `navigator.webdriver === true`.
- **Lead form** (`LeadEnquiryForm.tsx`): hidden honeypot field `company_website` (must remain empty), min-fill-time gate (≥3s), and 1-submission-per-60s in-memory throttle. Silently no-op on bot match (don't tell the bot why).
- **GA4 docs**: create `docs/GA4-BOT-FILTERS.md` with step-by-step (Admin → Data Streams → Configure tag settings → List unwanted referrals, and Admin → Data Settings → Data Filters → Internal traffic / Developer traffic).

### 5. DPDP Act 2023 compliance — Frontend + backend
- **Privacy.tsx**: full rewrite to DPDP-aligned structure: Data Fiduciary identity, categories of personal data, purposes & lawful basis (consent + legitimate use), retention table, Data Principal rights (access/correction/erasure/grievance/nominate), grievance & DPO contact, cross-border transfer note, children's data, breach notification commitment, link to DPR form.
- **CookieConsent**: replace 🍪 emoji wording with explicit DPDP "purposes" language; add "Withdraw consent" mention; preferences persist with timestamp + version.
- **DPR (Data Principal Request) form** — new route `/data-request`:
  - Form: name, email, mobile, request type (Access / Correction / Erasure / Withdraw consent / Nomination / Grievance), reference info, free-text. Zod-validated, honeypot, min-fill-time.
  - Lovable Cloud edge function `submit-dpr` stores into `data_principal_requests` table (RLS service-role only) and emails the DPO via Lovable Emails (`send-transactional-email` with a `dpr-acknowledgement` template).
  - Requires enabling Lovable Cloud + email domain (will prompt user with setup buttons after migration runs).
- Footer link to `/data-request` added.

### Files touched (estimate)
~25 files: `public/llms.txt`, `public/robots.txt`, `src/lib/analytics.ts`, `src/lib/structured-data.ts`, `src/components/lead/LeadEnquiryForm.tsx`, `src/components/analytics/CookieConsent.tsx`, `src/components/layout/Footer.tsx`, `src/pages/Privacy.tsx`, `src/pages/DataRequest.tsx` (new), `src/components/seo/ServiceFAQ.tsx` (new), `src/App.tsx`, `docs/GA4-BOT-FILTERS.md` (new), and the 5 service pages + ReturnLoads for FAQ + breadcrumb schema. Plus Cloud-enable + 1 migration + 1 edge function + 1 email template.

### What I will NOT do without confirmation
- Touch any pricing, GST number, phone numbers, or business claims (43+ years, 12+ fleet).
- Add backend rate limiting beyond the lightweight client throttle (per project guidance).
- Change visual design system (colors, fonts, layout).

Reply "go" and I'll execute end-to-end. If you want to skip the DPR backend (just keep frontend DPDP), say "frontend only".