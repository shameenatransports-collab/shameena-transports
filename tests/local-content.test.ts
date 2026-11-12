import { test, expect } from "bun:test";
import { practiceHeritage, localPageContent } from "../src/lib/seo/local-content";
import { PILLARS } from "../src/lib/seo/pillars";
import { CITIES } from "../src/lib/seo/cities";
import { enumerateAllUrls } from "../src/lib/seo/slugs";

test("transportation retains the 1982 heritage", () => {
  expect(practiceHeritage("transportation").value).toBe("1982");
});

test("local city pages require vehicle confirmation", () => {
  const pillar = PILLARS.find(p => p.id === "transportation");
  if (!pillar) throw new Error("Missing transportation practice");
  for (const city of CITIES) {
    expect(localPageContent(pillar, city).preparation).toContain("Cargo type, weight, dimensions and packaging");
  }
});

test("transportation is the only business practice", () => {
  expect(PILLARS.map(p => p.id)).toEqual(["transportation"]);
});

test("local Coimbatore district routes remain discoverable", () => {
  const paths = enumerateAllUrls().map(entry => entry.path);
  for (const slug of ["coimbatore", "pollachi", "mettupalayam", "sulur", "annur", "madukkarai", "kinathukadavu"]) {
    expect(paths).toContain(`/transportation/${slug}`);
  }
});