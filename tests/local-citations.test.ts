import { test, expect } from "bun:test";
import { COIMBATORE_OFFICE_CONTENT as office } from "../src/lib/seo/local-content";
import { LOCAL_CITATION_AREAS, PORT_DELIVERY_REFERENCES, LOCAL_CITATIONS_PATH } from "../src/lib/seo/local-citations";
import { enumerateAllUrls } from "../src/lib/seo/slugs";

test("citation identity matches the managed Podanur Google profile", () => {
  expect(office.name).toBe("STA Corporate Solutions");
  expect(office.address).toBe("No 10/135-G, Gurusamy Pillai St Extn, Podanur, Coimbatore, Tamil Nadu 641023");
  expect(office.phone).toBe("+91 94430 33055");
  expect(office.website).toBe("https://sta-corporate.in/");
});
test("requested local areas represent one Podanur office", () => {
  expect(LOCAL_CITATION_AREAS.map(a => a.name)).toEqual(["Podanur", "Kurichi", "Sulur", "Pollachi", "Mettupalayam"]);
  expect(LOCAL_CITATION_AREAS.filter(a => a.office).map(a => a.name)).toEqual(["Podanur"]);
});
test("port references are limited to Chennai and Kochi", () => {
  expect(PORT_DELIVERY_REFERENCES.map(p => [p.name, p.state])).toEqual([["Chennai Port", "Tamil Nadu"], ["Cochin Port (Kochi)", "Kerala"]]);
});
test("local citations are discoverable once in the sitemap", () => {
  expect(enumerateAllUrls().filter(e => e.path === LOCAL_CITATIONS_PATH)).toHaveLength(1);
});