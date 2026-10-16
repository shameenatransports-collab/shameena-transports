import { educationInput, pauseForStatus } from "./policy.ts";
function assert(value: boolean) { if (!value) throw new Error("Assertion failed"); }
const profile = { qualifications: "BCom completed", goals: "Study management", destination: "Tamil Nadu", consent: true, adult: true };
Deno.test("academic qualifications, goals and destination are required", () => {
  assert(educationInput.safeParse(profile).success);
  for (const field of ["qualifications", "goals", "destination"]) assert(!educationInput.safeParse({ ...profile, [field]: "" }).success);
});
Deno.test("AI processing requires explicit consent", () => assert(!educationInput.safeParse({ ...profile, consent: false }).success));
Deno.test("AI form rejects profiles without adult confirmation", () => assert(!educationInput.safeParse({ ...profile, adult: false }).success));
Deno.test("credit and access failures pause further AI work", () => { assert(pauseForStatus(402)); assert(pauseForStatus(403)); assert(pauseForStatus(404)); assert(!pauseForStatus(429)); });