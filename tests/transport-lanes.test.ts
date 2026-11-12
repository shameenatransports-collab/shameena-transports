import { test, expect } from "bun:test";
import { bookingDirection, DESTINATIONS, VEHICLES, laneUrl } from "../src/lib/seo/lanes";
import { RETURN_ORIGINS, returnOriginUrl } from "../src/lib/seo/return-origins";
import { enumerateAllUrls, isIndexableCitySub } from "../src/lib/seo/slugs";
import { CITIES } from "../src/lib/seo/cities";

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