import type { City } from "./cities";
import { CORRIDORS } from "./cities";
import type { Pillar } from "./pillars";

export const COIMBATORE_OFFICE_CONTENT = {
  name: "STA Corporate Solutions",
  phone: "+91 94430 33055",
  whatsappUrl: "https://wa.me/919443033055",
  website: "https://sta-corporate.in/",
  address: "No 10/135-G, Gurusamy Pillai St Extn, Podanur, Coimbatore, Tamil Nadu 641023",
  intro: "We coordinate lorry, truck and trailer enquiries from our Podanur office in Coimbatore. Serving goods-transport customers since 1982, we plan local district pickups and outbound movements to Kerala and Karnataka around your cargo, loading access and delivery address.",
  industries: [
    { name: "Pumps, motors and engineering goods", detail: "Coimbatore’s pump and motor manufacturers and engineering suppliers move crates, components and machinery. Tell our Podanur office the crate dimensions, total weight and whether a forklift or crane will be ready at each end." },
    { name: "Foundries and metalworking", detail: "For castings, machine parts and bundled metal, share individual piece weights, lifting points and securing requirements. Vehicle suitability is checked before a booking is confirmed." },
    { name: "Textiles and textile machinery", detail: "For mill dispatches around Coimbatore, Sulur and Annur, share bale or package counts, packing, stacking limits and mill gate timings. Machinery requires dimensions and loading-equipment details rather than a package count alone." },
    { name: "Building materials and commercial stock", detail: "For pipes, steel and packed goods moving to a godown or project site, confirm turning space, entry restrictions and who will unload. Rain protection and packing requirements should be discussed before loading." },
  ],
  distances: [
    { destination: "Pollachi", distance: "About 44 km", route: "Coimbatore–Pollachi via the NH83 corridor, through the Kinathukadavu side.", source: "https://cabbazar.com/taxi/coimbatore-to-pollachi" },
    { destination: "Mettupalayam via Annur", distance: "About 51 km", route: "Coimbatore–Annur–Mettupalayam; this is the via-Annur route, not the direct Mettupalayam Road distance.", source: "https://www.distancesfrom.com/in/map-from-Coimbatore-to-Mettupalayam-via-Annur/MapHistory/10528373.aspx" },
  ],
  faqs: [
    { q: "Where is your Coimbatore office?", a: "Our office is at No 10/135-G, Gurusamy Pillai St Extn, Podanur, Coimbatore, Tamil Nadu 641023. WhatsApp +91 94430 33055 to coordinate your enquiry or confirm a visit before travelling." },
    { q: "Can you arrange a pickup from a Coimbatore factory or mill?", a: "Share the exact factory or mill address, loading date, cargo weight and dimensions on WhatsApp. Include gate timings, lorry entry restrictions and loading equipment. We confirm the suitable vehicle and freight individually; sending an enquiry does not reserve a vehicle." },
    { q: "Can I enquire for Pollachi, Sulur, Annur or Mettupalayam deliveries?", a: "Yes. Our Podanur office coordinates Coimbatore district enquiries. Share both address pins and unloading arrangements so we can check the actual route, vehicle access and suitability for your load." },
    { q: "Are these distances measured from your Podanur office?", a: "No. They are approximate published Coimbatore-to-town road references. Your factory or godown address, the delivery gate and the route suitable for the allotted vehicle determine the actual journey distance. They are not freight quotes or delivery-time promises." },
    { q: "What details are needed for pump, casting or textile cargo?", a: "Send the cargo description, number of packages, total weight, largest-piece dimensions, packing and loading photos if available. For machinery or heavy castings, also confirm lifting equipment at pickup and delivery; for textile bales, include stacking and rain-protection requirements." },
    { q: "Do you arrange transport from Coimbatore to Kerala or Karnataka?", a: "Outbound enquiries originate in Coimbatore and can be checked for Kerala and Karnataka destinations. Share the exact delivery address and date. Vehicle suitability and freight are confirmed per booking; destination cities are not STA branches." },
    { q: "Can I ask about a vehicle returning to Coimbatore?", a: "Only on enquiry, and strictly subject to route availability. A vehicle returning from Tamil Nadu, Kerala or Karnataka is not guaranteed, and an outbound booking does not guarantee a reverse journey." },
    { q: "Does STA provide cargo insurance or accident cover?", a: "No. STA does not provide cargo insurance or accident cover. Customers should arrange their own cover for goods in transit." },
  ],
};

// Geographic context is not a claim of local offices or scheduled departures.
const LOCAL_CONTEXT: Record<string, { connections: string; typical: string; planning: string }> = {
  coimbatore: { connections: "Pollachi, Mettupalayam, Sulur, Annur and Madukkarai", typical: "pumps, motors and engineering goods, foundry castings, textile cargo and building material", planning: "For Coimbatore pickups, share the loading address, gate access and loading equipment before requesting a vehicle." },
  pollachi: { connections: "Coimbatore, Kinathukadavu and Sulur", typical: "agricultural produce, coconut-related goods, timber and building material", planning: "For Pollachi pickups, share the exact loading address, cargo type and access restrictions." },
  mettupalayam: { connections: "Coimbatore and Sulur", typical: "agricultural produce, packed goods and building material", planning: "For Mettupalayam pickups, share the loading address, cargo details and any road-access limits." },
  sulur: { connections: "Coimbatore, Annur and Madukkarai", typical: "industrial-area cargo such as textile, engineering goods and factory shifting loads", planning: "For Sulur industrial-area pickups, share the unit address, gate timings and loading equipment." },
  annur: { connections: "Coimbatore and Mettupalayam", typical: "textile and yarn cargo, packed goods and building material", planning: "For Annur pickups, share the loading address, cargo type, weight and preferred date." },
  madukkarai: { connections: "Coimbatore and Kinathukadavu", typical: "industrial-estate cargo, building material and engineering goods", planning: "For Madukkarai pickups, share the loading address, cargo type, weight and preferred date." },
  kinathukadavu: { connections: "Coimbatore, Pollachi and Madukkarai", typical: "agricultural produce, packed goods and building material", planning: "For Kinathukadavu pickups, share the loading address, cargo type, weight and preferred date." },
};

export function practiceHeritage(_pillarId: string) {
  return { value: "1982", label: "Transport since", description: "STA Corporate Solutions has operated from Coimbatore since 1982." };
}

export function localPageContent(pillar: Pillar, city: City) {
  const local = LOCAL_CONTEXT[city.slug];
  const heritage = practiceHeritage(pillar.id);
  const headings: Record<string, string> = {
    transportation: `Lorry Transport in ${city.name}`,
  };
  const preparation: Record<string, string[]> = {
    transportation: ["Pickup and delivery addresses, including site access", "Cargo type, weight, dimensions and packaging", "Preferred loading date and loading/unloading arrangements"],
  };
  const boundaries: Record<string, string> = {
    transportation: "Vehicle suitability, loading date and freight are confirmed for each booking.",
  };
  const heading = headings[pillar.id] ?? `${pillar.name} in ${city.name}`;
  return {
    heading,
    metaTitle: city.slug === "coimbatore" ? "Lorry Transport Coimbatore | Podanur Office | STA" : `${heading} | STA`,
    metaDescription: city.slug === "coimbatore" ? "Coimbatore lorry, truck and trailer enquiries from our Podanur office since 1982. Pumps, textiles and engineering cargo. WhatsApp for a quote." : `${heading}, ${city.stateName}. Coimbatore-based guidance and WhatsApp enquiries. Full Load lorry transport.`,
    intro: city.slug === "coimbatore" ? COIMBATORE_OFFICE_CONTENT.intro : `${heading} enquiries are coordinated from our Coimbatore office. Share your requirements so service availability, scope and next steps can be confirmed individually.`,
    localNote: local?.planning ?? `For ${city.name} enquiries in ${city.region}, share the exact pickup and delivery addresses, cargo details and preferred date so vehicle suitability and route availability can be checked.`,
    connections: local?.connections,
    typical: local?.typical,
    preparation: preparation[pillar.id] ?? [],
    boundary: boundaries[pillar.id] ?? "Confirm service availability before engagement.",
    heritage,
    corridors: CORRIDORS.filter((route) => route.from === city.slug || route.to === city.slug),
  };
}