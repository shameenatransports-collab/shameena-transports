import { test, expect } from "bun:test";
import { practiceHeritage, localPageContent } from "../src/lib/seo/local-content";
import { PILLARS } from "../src/lib/seo/pillars";
import { CITIES } from "../src/lib/seo/cities";
import { enumerateAllUrls } from "../src/lib/seo/slugs";

test("only transportation has the 1982 heritage", () => {
  expect(practiceHeritage("transportation").value).toBe("1982");
  for (const id of ["financial-services", "legal-services", "edu-consultancy"]) {
    expect(practiceHeritage(id).value).toBe("2025");
  }
});

test("return load availability is qualified on every transport city page", () => {
  const pillar = PILLARS.find(p => p.id === "transportation");
  if (!pillar) throw new Error("Missing transportation practice");
  for (const city of CITIES) {
    expect(localPageContent(pillar, city).boundary).toContain("Return loads are subject to route availability");
  }
});

test("financial assistance excludes personal and housing loan categories", () => {
  const pillar = PILLARS.find(p => p.id === "financial-services");
  if (!pillar) throw new Error("Missing financial practice");
  expect(pillar.sub.some(s => s.slug === "home-loan")).toBe(false);
  for (const city of CITIES) {
    expect(localPageContent(pillar, city).boundary).toContain("strictly not personal loans");
  }
});

test("all eight Tamil Nadu landing routes are discoverable in the sitemap", () => {
  const paths = enumerateAllUrls().map(entry => entry.path);
  for (const slug of ["coimbatore", "chennai", "tiruppur", "madurai", "erode", "salem", "trichy", "tirunelveli"]) {
    expect(paths).toContain(`/${slug}`);
  }
});