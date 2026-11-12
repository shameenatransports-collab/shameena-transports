import { test, expect } from "bun:test";
import { legacyDestination } from "../src/lib/seo/legacy-routes";
import { enumerateAllUrls } from "../src/lib/seo/slugs";

test("Coimbatore's old static page opens the updated transport city page", () => {
  expect(legacyDestination("/coimbatore")).toBe("/transportation/coimbatore");
  expect(legacyDestination("/coimbatore/")).toBe("/transportation/coimbatore");
});
test("retired practices resolve to transportation without reviving their content", () => {
  for (const p of ["/dubai-real-estate", "/real-estate", "/edu-consultancy", "/edu-consultancy/coimbatore", "/financial-services", "/legal-services"]) expect(legacyDestination(p)).toBe("/transportation");
});
test("retired local service cities resolve to the current coverage directory", () => {
  for (const p of ["/chennai", "/tiruppur", "/madurai", "/erode", "/salem", "/trichy", "/tirunelveli"]) expect(legacyDestination(p)).toBe("/service-areas");
});
test("renamed fleet and returns pages retain their replacement URLs", () => {
  expect(legacyDestination("/fleet")).toBe("/open-body-lorry-coimbatore");
  expect(legacyDestination("/return-loads")).toBe("/transportation/services/return-load");
});
test("current pages and unknown URLs are not redirected by the legacy resolver", () => {
  for (const p of ["/", "/about", "/transportation/coimbatore", "/no-such-page", "/real-estate-other"]) expect(legacyDestination(p)).toBeUndefined();
});
test("the sitemap lists the renamed Coimbatore page instead of its alias", () => {
  const paths = enumerateAllUrls().map(e => e.path);
  expect(paths).not.toContain("/coimbatore");
  expect(paths).toContain("/transportation/coimbatore");
});