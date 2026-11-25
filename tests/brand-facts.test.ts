import { test, expect } from "bun:test";
import { readFileSync } from "node:fs";
import { join } from "node:path";

const src = (p: string) => readFileSync(join(import.meta.dir, "..", "src", p), "utf8");

const FLEET_FILES = [
  "pages/Transportation.tsx",
  "lib/seo/pillars.ts",
  "lib/seo/intents.ts",
];

test("fleet copy always states own 6 lorries and 2 trailers plus partnered vehicles", () => {
  for (const file of FLEET_FILES) {
    const text = src(file);
    expect(text).toContain("6 lorries and 2 trailers");
    expect(text).toContain("partnered vehicles");
    expect(text).not.toMatch(/12\+/);
  }
});

test("no GST number is shown anywhere on the site", () => {
  const contact = src("pages/Contact.tsx");
  expect(contact).not.toContain("33AHTPA8379E1Z3");
  expect(contact).not.toMatch(/GST[:\s]*[0-9A-Z]{15}/);
});
