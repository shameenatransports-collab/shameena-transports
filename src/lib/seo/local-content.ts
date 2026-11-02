import type { City } from "./cities";
import { CORRIDORS } from "./cities";
import type { Pillar } from "./pillars";

// Geographic context is not a claim of local offices or scheduled departures.
const LOCAL_CONTEXT: Record<string, { connections: string; planning: string }> = {
  coimbatore: { connections: "Tiruppur, Erode, Chennai, Bengaluru and Kochi", planning: "For Peelamedu pickups, share the loading address, gate access and loading equipment before requesting a vehicle." },
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

export interface CityProfile {
  /** Alternate spelling people search for, e.g. Bangalore, Cochin. */
  alias?: string;
  overview: string;
  industries: string[];
  pillarNotes: Partial<Record<string, string>>;
  faqs: { q: string; a: string }[];
}

// City context describes the customer's location and the trade routes the
// group's transportation business has operated since 1982. It never claims
// branches, warehouses or fixed schedules outside the Coimbatore office.
export const CITY_PROFILES: Record<string, CityProfile> = {
  coimbatore: {
    overview:
      "Coimbatore is where STA Corporate Solutions began. Shameena Transports has operated from Peelamedu since 1982, and the group's financial, legal and education practices are also coordinated from the same office. The region's textile mills, pump and motor units, foundries and auto-component makers generate continuous freight movement across Tamil Nadu and into Karnataka, Kerala and Telangana.",
    industries: ["Textile machinery and knitting units", "Pumps, motors and engineering goods", "Auto components and foundries", "Poultry and agro-based trade"],
    pillarNotes: {
      transportation: "Full-load enquiries from Coimbatore most often follow the Coimbatore–Chennai, Coimbatore–Bengaluru and Coimbatore–Kochi routes, with Tiruppur, Erode and Salem as frequent short-haul legs. For Peelamedu and nearby industrial estates, share the loading address, gate access and loading equipment with your enquiry.",
      "financial-services": "Coimbatore's manufacturers, traders and engineering MSMEs typically enquire about working capital, term loans and government funding schemes for business use. Describe your business activity and funding purpose; assistance is strictly for businesses, not personal loans.",
      "legal-services": "Documentation enquiries from Coimbatore commonly involve company and MSME registrations, business agreements and compliance filings under Tamil Nadu authorities. Describe the document or matter; state-specific requirements are confirmed for each case.",
      "edu-consultancy": "Students and working professionals in Coimbatore and the surrounding western Tamil Nadu districts use the guidance for course selection, credit-transfer questions and destination shortlisting, coordinated from the Coimbatore office.",
    },
    faqs: [
      { q: "Is STA based in Coimbatore?", a: "Yes. Our confirmed office is No.302/2A7, VK Road, Peelamedu, Coimbatore – 641004. Transportation has operated from this city since 1982." },
      { q: "Do you handle Coimbatore–Tiruppur loads?", a: "The Coimbatore–Tiruppur corridor is about 50 km and is one of our regular short-haul routes, alongside Erode and Salem. Availability is confirmed per booking." },
    ],
  },
  chennai: {
    overview:
      "Chennai anchors Tamil Nadu's industry and trade: a major container port on the Coromandel coast, automotive and electronics manufacturing across the Oragadam–Sriperumbudur belt, and a large consumer-goods distribution market. Freight from Chennai runs both ways — port-linked cargo heading west, and manufactured goods towards Karnataka, Telangana and the rest of Tamil Nadu.",
    industries: ["Automotive and electronics manufacturing", "Port and container trade", "Consumer goods distribution", "Hardware and machinery"],
    pillarNotes: {
      transportation: "Chennai connects to Coimbatore (about 510 km), Bengaluru (about 345 km) and Hyderabad (about 625 km). For port-related loads, identify the terminal, cargo release status and loading requirements in your enquiry; port handling is confirmed separately for each booking.",
      "financial-services": "Chennai businesses enquiring about working capital, term loans or government funding schemes should describe their business activity, registration status and funding purpose. Assistance covers businesses, industries and companies — strictly not personal loans.",
      "legal-services": "Documentation enquiries from Chennai commonly involve registrations, agreements and compliance matters under Tamil Nadu and central authorities. Describe the matter and its current stage; timelines and representation are confirmed before engagement.",
      "edu-consultancy": "Chennai students and professionals receive course and destination guidance coordinated from Coimbatore, including state and institution-specific admission requirements for their intended intake.",
    },
    faqs: [
      { q: "Do you arrange Chennai port deliveries?", a: "Port-linked enquiries are accepted from Chennai. Share the terminal, cargo release status and delivery address; port handling and timings are confirmed separately for each booking." },
      { q: "How long does Chennai–Coimbatore freight take?", a: "The route is roughly 510 km. Exact transit depends on the vehicle, cargo and schedule; confirm direction and availability for your booking." },
    ],
  },
  bengaluru: {
    alias: "Bangalore",
    overview:
      "Bengaluru (also searched as Bangalore) is Karnataka's capital and a major technology, aerospace and manufacturing centre. The city's interstate freight ties closely to Tamil Nadu — apparel, machinery and consumer goods move on the Bengaluru–Tiruppur, Bengaluru–Coimbatore and Bengaluru–Salem corridors, with Hyderabad and Mysuru as additional routes.",
    industries: ["IT and technology services", "Aerospace and manufacturing", "Apparel and consumer goods", "E-commerce distribution"],
    pillarNotes: {
      transportation: "Bengaluru connects to Coimbatore (about 365 km), Chennai (about 345 km) and Hyderabad (about 575 km). Interstate loads between Karnataka and Tamil Nadu are routine; share exact pickup and delivery locations so access and interstate route requirements can be checked.",
      "financial-services": "Bengaluru startups, traders and manufacturing MSMEs enquire about working capital, term loans and government funding schemes. Loan assistance is for businesses, industries and companies — strictly not personal loans.",
      "legal-services": "Documentation support for Bengaluru enquiries spans registrations, agreements and compliance filings under Karnataka or central authorities, coordinated from Coimbatore with requirements confirmed per matter.",
      "edu-consultancy": "Bengaluru students and professionals receive pathway guidance covering course selection, credit transfer and destination shortlisting, with admission rules verified with the institution.",
    },
    faqs: [
      { q: "Do you serve Bangalore?", a: "Yes. Bengaluru (Bangalore) enquiries are accepted for all four practices. Share your exact pickup and delivery locations so route and access requirements can be checked." },
      { q: "Do you carry Bengaluru–Coimbatore freight?", a: "The Bengaluru–Coimbatore route is about 365 km and is one of our regular corridors, alongside Bengaluru–Tiruppur and Bengaluru–Chennai. Availability is confirmed per booking." },
    ],
  },
  hyderabad: {
    overview:
      "Hyderabad is Telangana's capital and one of India's largest pharmaceutical and technology hubs, with a substantial distribution and manufacturing base. Interstate freight links Hyderabad with Vijayawada (about 275 km), Chennai (about 625 km) and Bengaluru (about 575 km), while Coimbatore lies roughly 770 km to the south.",
    industries: ["Pharmaceuticals and life sciences", "IT and technology services", "Manufacturing and engineering", "Bulk distribution and FMCG"],
    pillarNotes: {
      transportation: "Hyderabad connects to Coimbatore, Chennai and Bengaluru on long interstate routes. For Telangana enquiries, identify the cargo, consignee location and document readiness before the route is confirmed; dispatch is planned per booking.",
      "financial-services": "Hyderabad businesses enquiring about working capital, term loans or government funding schemes should describe their business activity and registration status. Assistance is for businesses and companies — strictly not personal loans.",
      "legal-services": "Documentation enquiries from Hyderabad commonly involve registrations and agreements under Telangana or central authorities. State-specific requirements are checked for each matter before engagement.",
      "edu-consultancy": "Hyderabad students and professionals receive preliminary guidance on courses, destinations and intake planning, coordinated from the Coimbatore office.",
    },
    faqs: [
      { q: "Do you take Hyderabad–Chennai loads?", a: "The Hyderabad–Chennai route is about 625 km and appears in our corridor planning. Share the cargo and consignee details so vehicle suitability and availability can be confirmed." },
      { q: "Is interstate documentation needed for Telangana freight?", a: "Interstate freight requires document readiness such as e-way bill and invoice details. Share what applies to your consignment so requirements can be checked before dispatch." },
    ],
  },
  kochi: {
    alias: "Cochin",
    overview:
      "Kochi (also searched as Cochin) is Kerala's commercial hub, built around one of India's major container ports and a trading base of spices, seafood, coir and rubber goods. Freight enquiries from Kochi are frequently container or port-linked, with Coimbatore (about 195 km) and Thiruvananthapuram (about 220 km) as the closest major corridors.",
    industries: ["Port and container trade", "Spices, seafood and coir exports", "Rubber and polymer goods", "Retail and FMCG distribution"],
    pillarNotes: {
      transportation: "Kochi connects to Coimbatore (about 195 km), Chennai (about 690 km) and Bengaluru (about 545 km). For container or port-linked cargo, confirm the cargo format and handling requirements separately; availability is confirmed per booking.",
      "financial-services": "Kochi traders, exporters and small manufacturers enquiring about business funding should describe their activity, registration status and funding purpose. Assistance covers businesses and companies — strictly not personal loans.",
      "legal-services": "Documentation enquiries from Kochi commonly involve registrations and agreements under Kerala or central authorities. Requirements are confirmed per matter; representation and fees are agreed before engagement.",
      "edu-consultancy": "Kochi students receive pathway guidance on course selection, credit transfer and destination shortlisting, with institution-specific admission rules verified before decisions.",
    },
    faqs: [
      { q: "Do you serve Cochin?", a: "Yes. Kochi (Cochin) enquiries are accepted for all four practices. For container or port-linked cargo, confirm the cargo format and handling needs in your first message." },
      { q: "How far is Kochi from Coimbatore by road?", a: "About 195 km, making it one of the shorter corridors from our Coimbatore base. Direction and availability are confirmed for each booking." },
    ],
  },
  tiruppur: {
    overview:
      "Tiruppur is India's knitwear and garment export centre, with a dense cluster of knitting, dyeing and apparel units linked daily to Coimbatore, about 50 km west, for yarn, fabric and machinery. Export consignments run on tight seasonal schedules towards the Chennai port corridor.",
    industries: ["Knitwear and garment exports", "Textile processing and dyeing", "Yarn and fabric trade", "Apparel-unit machinery"],
    pillarNotes: {
      transportation: "Tiruppur sits on the Coimbatore–Chennai and Coimbatore–Bengaluru freight corridors. For garment cartons, textile bales or yarn, share package counts, dimensions and protection requirements alongside the total weight so the right vehicle can be planned.",
      "financial-services": "Tiruppur's garment units and textile traders typically enquire about working capital, term loans and government funding schemes for business use. Assistance is for businesses — strictly not personal loans.",
      "legal-services": "Documentation enquiries from Tiruppur commonly involve company registrations, export-related agreements and compliance filings. Describe the document or matter; requirements are confirmed per case.",
      "edu-consultancy": "Tiruppur students and working professionals receive preliminary guidance on courses, destinations and intake planning, coordinated from Coimbatore.",
    },
    faqs: [
      { q: "Do you carry garment consignments from Tiruppur?", a: "Yes. Share package counts, dimensions and protection requirements with your enquiry so the vehicle and loading plan can be checked. Availability is confirmed per booking." },
      { q: "How close is Tiruppur to Coimbatore?", a: "About 50 km, making it a frequent short-haul leg alongside Erode and Salem. Confirm the loading date and arrangements for your booking." },
    ],
  },
};

export function practiceHeritage(pillarId: string) {
  return pillarId === "transportation"
    ? { value: "1982", label: "Transport since", description: "Shameena Transports has operated from Coimbatore since 1982, with 12+ trailers and lorries." }
    : { value: "2025", label: "Practice launched", description: "STA’s financial, legal and education practices launched in mid-2025, building on the group’s transportation heritage." };
}

export function localPageContent(pillar: Pillar, city: City) {
  const local = LOCAL_CONTEXT[city.slug];
  const heritage = practiceHeritage(pillar.id);
  const headings: Record<string, string> = {
    transportation: `Lorry Transport in ${city.name}`,
    "financial-services": `Business Loan Assistance in ${city.name}`,
    "legal-services": `Legal Documentation in ${city.name}`,
    "edu-consultancy": `Education Consultancy in ${city.name}`,
  };
  const preparation: Record<string, string[]> = {
    transportation: ["Pickup and delivery addresses, including site access", "Cargo type, weight, dimensions and packaging", "Preferred loading date and loading/unloading arrangements", "Full Load or Return Load preference; return loads are subject to route availability"],
    "financial-services": ["Business activity and funding purpose", "Business registration status and available financial records", "Term-loan, working-capital or government-scheme enquiry", "Share a summary first; do not send identity or bank documents in an initial enquiry"],
    "legal-services": ["The document, registration or dispute you need help with", "The relevant state and authority or jurisdiction", "Any filing deadline and the current stage of the matter", "Describe the matter first; avoid sharing confidential documents in an initial enquiry"],
    "edu-consultancy": ["Your current qualification and academic goal", "Preferred destination and study format", "Existing credits, study gap and intended intake", "Share a summary, not identity documents or student records"],
  };
  const boundaries: Record<string, string> = {
    transportation: "Vehicle suitability, loading date and freight are confirmed for each booking. Return loads are subject to route availability. Transit insurance can be arranged on request.",
    "financial-services": "Assistance is for businesses, industries and companies, strictly not personal loans. STA is not a lender; eligibility, sanction and scheme availability are decided by the bank or relevant authority.",
    "legal-services": "Documentation and referral support depend on the matter and jurisdiction. Professional representation, fees and timelines must be confirmed before engagement; outcomes are not guaranteed.",
    "edu-consultancy": "Guidance is preliminary. Admission, credit acceptance, course recognition, fees and visa requirements must be verified with the institution or relevant authority. No admission or visa outcome is guaranteed.",
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