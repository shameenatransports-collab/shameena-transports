# GA4 Bot & Referrer-Spam Filters — STA Corporate Solutions

The site already strips bot traffic **client-side** (see `src/lib/analytics.ts` — `isLikelyBot()`), so most crawler hits never reach GA4.
To clean what remains (spoofed UAs, datacenter IPs, internal traffic), configure these filters once inside GA4 Admin. These steps are not codeable — they live in the GA4 console.

> Property: STA Corporate Solutions · Measurement ID: see `index.html` (`GA_MEASUREMENT_ID`).

---

## 1. Confirm "Known bot filtering" is on (default)

GA4 already drops traffic from the IAB/ABC International Spiders & Bots list by default and this cannot be disabled.
**Admin → Data Streams → Web stream → Data collection → Confirm "Bot filtering" is active.**

## 2. Define internal traffic (your office / phone / laptop IPs)

1. **Admin → Data Streams → [your web stream] → Configure tag settings → Show all → Define internal traffic.**
2. Click **Create**.
3. Rule name: `STA Office`. `traffic_type` value: `internal`.
4. Match type: `IP address equals` / `IP in CIDR range`. Add your office IPv4 + every team mobile IP (4G hotspot ranges if static).
5. Save.

Then activate the filter:

1. **Admin → Data Settings → Data Filters → Create filter.**
2. Type: **Internal traffic**. Operation: **Exclude**. Parameter: `traffic_type` = `internal`.
3. Filter state: start as **Testing** for 48h to verify in DebugView, then flip to **Active**.

## 3. Filter developer traffic

1. **Admin → Data Settings → Data Filters → Create filter → Developer traffic.**
2. Operation: **Exclude**. Filter state: **Active**.
   GA4 uses the `debug_mode` parameter (sent by GA Debugger Chrome ext & gtag.js in dev) to identify these.

## 4. Block unwanted referrers (referrer-spam)

1. **Admin → Data Streams → [web stream] → Configure tag settings → List unwanted referrals.**
2. Add (one per row, "Referrer domain contains"):
   - `semalt.com`
   - `buttons-for-website.com`
   - `traffic2cash.xyz`
   - `darodar.com`
   - `success-seo.com`
   - `free-share-buttons.com`
   - `4webmasters.org`
   - `floating-share-buttons.com`
   - `simple-share-buttons.com`
   - `event-tracking.com`
   - `get-free-traffic-now.com`
3. Save. These will now be attributed to direct/unassigned instead of polluting referral reports.

## 5. Hostname filter (block ghost spam fired at random GA properties)

Most ghost spam sets a random hostname. Force GA4 to drop anything not from your real domains.

1. **Admin → Custom Definitions → Create custom dimension.** Name: `Page hostname`, Scope: Event, Parameter: `page_hostname`. Save.
2. **Admin → Data Filters → Create filter → Custom event filter** (you'll need a server-side or GTM rule for true exclusion; in pure GA4 you can build a segment instead).
3. Easier: create an **Audience** that *excludes* hostname not in `sta-corporate.in OR www.sta-corporate.in OR stacorps.lovable.app` and apply it to all explorations as the default segment.

## 6. Re-check Search Console pairing

Pair the GSC property with this GA4 property so Search → Acquisition reports use de-spammed clicks:
**Admin → Product links → Search Console links → Link.**

## 7. Verify

- After 24–48 hours, **Reports → Acquisition → Traffic acquisition** — confirm "Unassigned" share has dropped.
- **Reports → Tech → Browser** — confirm `(not set)` and obvious bot UAs are no longer in the top 10.
- **DebugView** — open the site in an incognito window with the GA Debugger extension; confirm events still flow (real traffic isn't being over-filtered).

## 8. Re-test client guard

The site's `isLikelyBot()` regex covers Googlebot, Bingbot, GPTBot, ClaudeBot, PerplexityBot, headless browsers, link-preview fetchers and synthetic monitors. To validate:

```bash
curl -A "GPTBot/1.0" https://sta-corporate.in/   # should NOT register a GA pageview
curl -A "Mozilla/5.0" https://sta-corporate.in/  # should NOT register (no JS execution)
```

The real test is a normal browser visit — GA4 Realtime should tick exactly once.
