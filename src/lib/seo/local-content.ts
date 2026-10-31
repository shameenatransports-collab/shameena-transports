import type { City } from "./cities";
import { CORRIDORS } from "./cities";
import type { Pillar } from "./pillars";

// Geographic context is not a claim of local offices or scheduled departures.
const LOCAL_CONTEXT: Record<string, { connections: string; planning: string }> = {
  coimbatore: { connections: "Tiruppur, Erode, Chennai, Bengaluru and Kochi", planning: "For Coimbatore pickups, share the loading address, gate access and loading equipment before requesting a vehicle." },
  chennai: { connections: "Coimbatore, Tiruppur, Bengaluru and Hyderabad", planning: "For port-related enquiries, identify the terminal, cargo release status and loading requirements; port handling must be confirmed separately." },
  tiruppur: { connections: "Coimbatore, Chennai and Bengaluru", planning: "For garment cartons, textile bales or yarn, share package counts, dimensions and protection requirements alongside the total weight." },
  erode: { connections: "Coimbatore, Tiruppur and Salem", planning: "For textile or bulk-goods enquiries, specify packaging, stacking restrictions and whether loading equipment is available." },
  salem: { connections: "Coimbatore, Chennai and Bengaluru", planning: "For steel or construction cargo, share the longest item length and unloading arrangements, not just the overall weight." },
  madurai: { connections: "Coimbatore, Chennai and Tirunelveli", planning: "For deliveries outside the city, provide the final site address and access restrictions so the appropriate vehicle can be checked." },
  trichy: { connections: "Chennai, Coimbatore and Madurai", planning: "For industrial consignments, provide machinery dimensions and loading support details before a freight estimate is prepared." },
  bengaluru: { connections: "Coimbatore, Chennai, Hyderabad and Mysuru", planning: "Bengaluru is also searched as Bangalore. Share exact pickup and delivery locations so access and interstate route requirements can be checked." },
  hyderabad: { connections: "Coimbatore, Chennai, Bengaluru and Vijayawada", planning: "For interstate freight, identify the cargo, consignee location and document readiness before confirming the route." },
  kochi: { connections: "Coimbatore, Chennai and Thiruvananthapuram", planning: "Kochi is also searched as Cochin. For container or port-linked cargo, confirm the cargo format and handling requirements separately." },
  vijayawada: { connections: "Chennai and Hyderabad", planning: "For Andhra Pradesh enquiries, share the exact loading and delivery locations and preferred date; dispatch is confirmed per booking." },
};

export function practiceHeritage(pillarId: string) {
  return pillarId === "transportation"
    ? { value: "1982", label: "Transport since", description: "STA Corporate Solutions has operated from Coimbatore since 1982, with 12+ trailers and lorries." }
    : { value: "2025", label: "Practice launched", description: "STA’s financial, legal and education practices launched in mid-2025, building on the group’s transportation heritage." };
}

export function localPageContent(pillar: Pillar, city: City) {
  const local = LOCAL_CONTEXT[city.slug];
  const heritage = practiceHeritage(pillar.id);
  const headings: Record<string, string> = {
    transportation: `Lorry Transport in ${city.name}`,
    "financial-services": `Business Loan Assistance in ${city.name}`,
    "legal-services": `Legal & CA Services in ${city.name}`,
    "edu-consultancy": `Job Consulting & Degree Transfer in ${city.name}`,
  };
  const preparation: Record<string, string[]> = {
    transportation: ["Pickup and delivery addresses, including site access", "Cargo type, weight, dimensions and packaging", "Preferred loading date and loading/unloading arrangements", "Full Load or Return Load preference; return loads are subject to route availability"],
    "financial-services": ["Business activity and funding purpose", "Business registration status and available financial records", "Term-loan, working-capital or government-scheme enquiry", "Share a summary first; do not send identity or bank documents in an initial enquiry"],
    "legal-services": ["The document, registration, tax, accounts or dispute matter you need help with", "The relevant state and authority or jurisdiction", "Any filing deadline and the current stage of the matter", "Describe the matter first; avoid sharing confidential documents in an initial enquiry"],
    "edu-consultancy": ["Your current qualification, work experience and career or degree goal", "Preferred destination and study format", "Existing credits, study gap and intended intake", "Share a summary, not identity documents or student records"],
  };
  const boundaries: Record<string, string> = {
    transportation: "Vehicle suitability, loading date and freight are confirmed for each booking. Return loads are subject to route availability. Transit insurance can be arranged on request.",
    "financial-services": "Assistance is for businesses, industries and companies, strictly not personal loans. STA is not a lender; eligibility, sanction and scheme availability are decided by the bank or relevant authority.",
    "legal-services": "Documentation, CA and referral support depend on the matter and jurisdiction. Professional representation, fees and timelines must be confirmed before engagement; outcomes are not guaranteed.",
    "edu-consultancy": "Guidance is preliminary. Job opportunities and outcomes depend on employers and are not guaranteed. Admission, credit acceptance, course recognition, fees and visa requirements must be verified with the institution or relevant authority. No admission or visa outcome is guaranteed.",
  };
  const heading = headings[pillar.id] ?? `${pillar.name} in ${city.name}`;
  return {
    heading,
    metaTitle: `${heading} | STA`,
    metaDescription: `${heading}, ${city.stateName}. Coimbatore-based guidance and WhatsApp enquiries. ${pillar.id === "transportation" ? "Full Load; Return Load subject to route availability." : "Confirm eligibility and availability."}`,
    intro: `${heading} enquiries are coordinated from our Coimbatore office. Share your requirements so service availability, scope and next steps can be confirmed individually.`,
    localNote: pillar.id === "transportation"
      ? local?.planning ?? `For ${city.name} enquiries in ${city.region}, share the exact pickup and delivery addresses, cargo details and preferred date so vehicle suitability and route availability can be checked.`
      : `For enquiries from ${city.name}, ${city.stateName}, tell us your location and the support you need. Advice is coordinated from Coimbatore, not a claimed ${city.name} branch. ${pillar.id === "legal-services" ? "State-specific requirements and the relevant jurisdiction must be checked for each matter." : pillar.id === "edu-consultancy" ? "Your intended destination and institution determine the applicable admission and credit-transfer rules." : "Your business activity, funding purpose and the lender’s current criteria determine suitable options."}`,
    connections: local?.connections,
    preparation: preparation[pillar.id] ?? [],
    boundary: boundaries[pillar.id] ?? "Confirm service availability before engagement.",
    heritage,
    corridors: CORRIDORS.filter((route) => route.from === city.slug || route.to === city.slug),
  };
}