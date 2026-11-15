import { test, expect } from "bun:test";
import { bookingDirection, DESTINATIONS, VEHICLES, laneUrl } from "../src/lib/seo/lanes";
import { RETURN_ORIGINS, returnOriginUrl } from "../src/lib/seo/return-origins";
import { enumerateAllUrls, isIndexableCitySub } from "../src/lib/seo/slugs";
import { CITIES } from "../src/lib/seo/cities";
import { AREAS, areaUrl, AREAS_HUB_PATH } from "../src/lib/seo/coimbatore-coverage";
import { INTENTS, INTENT_PATHS } from "../src/lib/seo/intents";

test("outbound Bangalore bookings originate in Coimbatore", () => {
  expect(bookingDirection("Bangalore")).toEqual({ origin: "Coimbatore", destination: "Bangalore", availability: "confirmed per booking" });
});
test("Bangalore return bookings end in Coimbatore and require route availability", () => {
  expect(bookingDirection("Bangalore", true)).toEqual({ origin: "Bangalore", destination: "Coimbatore", availability: "strictly subject to route availability" });
});
test("Kochi return bookings end in Coimbatore and require route availability", () => {
  expect(bookingDirection("Kochi", true)).toEqual({ origin: "Kochi", destination: "Coimbatore", availability: "strictly subject to route availability" });
});
test("outbound destinations are limited to Kerala and Karnataka", () => {
  expect([...new Set(DESTINATIONS.map(d => d.state))].sort()).toEqual(["Karnataka", "Kerala"]);
});
test("return origins include Tamil Nadu, Karnataka and Kerala", () => {
  expect([...new Set(RETURN_ORIGINS.map(o => o.state))].sort()).toEqual(["Karnataka", "Kerala", "Tamil Nadu"]);
});
test("the vehicle catalogue contains only lorry, truck and trailer", () => {
  expect(VEHICLES.map(v => v.slug)).toEqual(["lorry", "truck", "trailer"]);
});
test("all outbound lanes and inbound origin pages are in a unique sitemap", () => {
  const paths = enumerateAllUrls().map(e => e.path);
  expect(new Set(paths).size).toBe(paths.length);
  for (const d of DESTINATIONS) for (const v of VEHICLES) expect(paths).toContain(laneUrl(d.slug, v.slug));
  for (const o of RETURN_ORIGINS) expect(paths).toContain(returnOriginUrl(o.slug));
});
test("return loads do not create misleading local city service combinations", () => {
  for (const city of CITIES) expect(isIndexableCitySub(city, "return-load")).toBe(false);
});
test("Coimbatore areas and customer types are in the sitemap and well-formed", () => {
  const paths = enumerateAllUrls().map(e => e.path);
  expect(paths).toContain(AREAS_HUB_PATH);
  for (const a of AREAS) { expect(paths).toContain(areaUrl(a.slug)); for (const n of a.near) expect(AREAS.map(x => x.slug)).toContain(n); }
  for (const i of INTENTS) { expect(paths).toContain(INTENT_PATHS(i.slug)); for (const r of i.related) expect(INTENTS.map(x => x.slug)).toContain(r); }
  expect(new Set(AREAS.map(a => a.slug)).size).toBe(AREAS.length);
});
test("coverage content has no prices or insurance promises", () => {
  const text = JSON.stringify([AREAS, INTENTS]).toLowerCase();
  expect(text).not.toMatch(/₹|\brs\.? ?\d|cheap|affordable|insured|guarantee/);
});

test("intent pages are Coimbatore-only, unique and avoid unsupported vehicles", () => {
  const slugs = INTENTS.map(i => i.slug);
  expect(new Set(slugs).size).toBe(slugs.length);
  for (const i of INTENTS) { expect(i.slug.endsWith("-coimbatore")).toBe(true); expect(i.answer.length).toBeGreaterThan(80); expect(i.faqs.length).toBeGreaterThan(1); }
  const text = JSON.stringify(INTENTS).toLowerCase();
  expect(text).not.toMatch(/live tracking|gps|bulk cement/);
});
