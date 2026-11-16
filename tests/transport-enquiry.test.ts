import { expect, test } from "bun:test";
import { transportEnquiryUrl } from "../src/lib/transport-enquiry";

const enquiry = { name: "Test Customer", phone: "9443033055", route: "Coimbatore to Kochi", service: "Logistics", details: "Pumps & motors, 2 tonnes" };
test("all transport page enquiries go to the same WhatsApp number with their source", () => {
  for (const path of ["/transportation/coimbatore", "/transportation/from-coimbatore/kochi", "/transportation/from-coimbatore/bangalore", "/transportation/services/logistics"]) {
    const url = new URL(transportEnquiryUrl(enquiry, path));
    expect(url.pathname).toBe("/919443033055");
    expect(url.searchParams.get("text")).toContain(`Page: https://sta-corporate.in${path}`);
    expect(url.searchParams.get("text")).toContain("Pumps & motors, 2 tonnes");
  }
});
test("invalid enquiries cannot generate a WhatsApp handoff", () => {
  expect(() => transportEnquiryUrl({ ...enquiry, phone: "123" }, "/transportation/coimbatore")).toThrow();
  expect(() => transportEnquiryUrl({ ...enquiry, details: "x".repeat(501) }, "/transportation/coimbatore")).toThrow();
});