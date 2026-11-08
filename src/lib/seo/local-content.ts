import type { City } from "./cities";
import { CORRIDORS } from "./cities";
import type { Pillar } from "./pillars";

// Geographic context is not a claim of local offices or scheduled departures.
const LOCAL_CONTEXT: Record<string, { connections: string; planning: string }> = {
  coimbatore: { connections: "Tiruppur, Pollachi, Mettupalayam, Sulur and Palladam", planning: "For Coimbatore pickups, share the loading address, gate access and loading equipment before requesting a vehicle." },
  tiruppur: { connections: "Coimbatore, Avinashi, Palladam and Kangeyam", planning: "For garment cartons, textile bales or yarn, share package counts, dimensions and protection requirements alongside the total weight." },
  pollachi: { connections: "Coimbatore, Udumalpet and Sulur", planning: "For Pollachi pickups, share the exact loading address, cargo type and access restrictions." },
  mettupalayam: { connections: "Coimbatore and Sulur", planning: "For Mettupalayam pickups, share the loading address, cargo details and any road-access limits." },
  sulur: { connections: "Coimbatore, Palladam and Avinashi", planning: "For Sulur industrial-area pickups, share the unit address, gate timings and loading equipment." },
  avinashi: { connections: "Tiruppur, Coimbatore and Palladam", planning: "For Avinashi pickups, share the loading address, cargo type, weight and packaging." },
  palladam: { connections: "Tiruppur, Coimbatore and Sulur", planning: "For Palladam pickups, share the loading address, cargo type, weight and preferred date." },
  udumalpet: { connections: "Pollachi, Tiruppur and Coimbatore", planning: "For Udumalpet pickups, share the loading address, cargo details and access restrictions." },
  dharapuram: { connections: "Tiruppur and Kangeyam", planning: "For Dharapuram pickups, share the loading address, cargo type, weight and preferred date." },
  kangeyam: { connections: "Tiruppur and Dharapuram", planning: "For Kangeyam pickups, share the loading address, cargo type, weight and preferred date." },
};

export function practiceHeritage(pillarId: string) {
  return pillarId === "transportation"
    ? { value: "1982", label: "Transport since", description: "STA Corporate Solutions has operated from Coimbatore since 1982, with 12+ trailers and lorries." }
    : { value: "2025", label: "Practice launched", description: "STA’s finance and Legal & CA practices launched in mid-2025, building on the group’s transportation heritage." };
}

export function localPageContent(pillar: Pillar, city: City) {
  const local = LOCAL_CONTEXT[city.slug];
  const heritage = practiceHeritage(pillar.id);
  const headings: Record<string, string> = {
    transportation: `Lorry Transport in ${city.name}`,
    "financial-services": `Startup & Deep-Tech Funding Assistance in ${city.name}`,
    "legal-services": `Legal & CA Services in ${city.name}`,
  };
  const preparation: Record<string, string[]> = {
    transportation: ["Pickup and delivery addresses, including site access", "Cargo type, weight, dimensions and packaging", "Preferred loading date and loading/unloading arrangements", "Full Load or Return Load preference; return loads are subject to route availability"],
    "financial-services": ["Company or startup name, sector and stage (idea, prototype, revenue)", "Startup India (DPIIT) recognition status and incorporation details", "Funding purpose and the scheme, grant or credit route you are considering", "Share a summary first; do not send identity or bank documents in an enquiry"],
    "legal-services": ["The document, registration, tax, accounts or dispute matter you need help with", "The relevant authority or jurisdiction", "Any filing deadline and the current stage of the matter", "Describe the matter first; avoid sharing confidential documents in an initial enquiry"],
  };
  const boundaries: Record<string, string> = {
    transportation: "Vehicle suitability, loading date and freight are confirmed for each booking. Return loads are subject to route availability. Transit insurance can be arranged on request.",
    "financial-services": "Assistance is for startups, deep-tech companies and other businesses, strictly not personal loans. STA is not a lender and does not guarantee funding; eligibility, sanction and scheme availability are decided by the funder or relevant authority.",
    "legal-services": "Documentation, CA and referral support depend on the matter and jurisdiction. Professional representation, fees and timelines must be confirmed before engagement; outcomes are not guaranteed.",
  };
  const heading = headings[pillar.id] ?? `${pillar.name} in ${city.name}`;
  return {
    heading,
    metaTitle: `${heading} | STA`,
    metaDescription: `${heading}, ${city.stateName}. Coimbatore-based guidance and WhatsApp enquiries. ${pillar.id === "transportation" ? "Full Load; Return Load subject to route availability." : "Confirm eligibility and availability."}`,
    intro: `${heading} enquiries are coordinated from our Coimbatore office. Share your requirements so service availability, scope and next steps can be confirmed individually.`,
    localNote: pillar.id === "transportation"
      ? local?.planning ?? `For ${city.name} enquiries in ${city.region}, share the exact pickup and delivery addresses, cargo details and preferred date so vehicle suitability and route availability can be checked.`
      : `For enquiries from ${city.name}, ${city.stateName}, tell us your location and the support you need. Advice is coordinated from Coimbatore, not a claimed ${city.name} branch. ${pillar.id === "legal-services" ? "State-specific requirements and the relevant jurisdiction must be checked for each matter." : "Scheme and funder requirements must be checked for each application."}`,
    connections: local?.connections,
    preparation: preparation[pillar.id] ?? [],
    boundary: boundaries[pillar.id] ?? "Confirm service availability before engagement.",
    heritage,
    corridors: CORRIDORS.filter((route) => route.from === city.slug || route.to === city.slug),
  };
}