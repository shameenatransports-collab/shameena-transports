import type { City } from "./cities";
import { CORRIDORS } from "./cities";
import type { Pillar } from "./pillars";

// Geographic context is not a claim of local offices or scheduled departures.
const LOCAL_CONTEXT: Record<string, { connections: string; planning: string }> = {
  coimbatore: { connections: "Pollachi, Mettupalayam, Sulur, Annur and Madukkarai", planning: "For Coimbatore pickups, share the loading address, gate access and loading equipment before requesting a vehicle." },
  pollachi: { connections: "Coimbatore, Kinathukadavu and Sulur", planning: "For Pollachi pickups, share the exact loading address, cargo type and access restrictions." },
  mettupalayam: { connections: "Coimbatore and Sulur", planning: "For Mettupalayam pickups, share the loading address, cargo details and any road-access limits." },
  sulur: { connections: "Coimbatore, Annur and Madukkarai", planning: "For Sulur industrial-area pickups, share the unit address, gate timings and loading equipment." },
  annur: { connections: "Coimbatore and Mettupalayam", planning: "For Annur pickups, share the loading address, cargo type, weight and preferred date." },
  madukkarai: { connections: "Coimbatore and Kinathukadavu", planning: "For Madukkarai pickups, share the loading address, cargo type, weight and preferred date." },
  kinathukadavu: { connections: "Coimbatore, Pollachi and Madukkarai", planning: "For Kinathukadavu pickups, share the loading address, cargo type, weight and preferred date." },
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
    metaTitle: `${heading} | STA`,
    metaDescription: `${heading}, ${city.stateName}. Coimbatore-based guidance and WhatsApp enquiries. Full Load lorry transport.`,
    intro: `${heading} enquiries are coordinated from our Coimbatore office. Share your requirements so service availability, scope and next steps can be confirmed individually.`,
    localNote: local?.planning ?? `For ${city.name} enquiries in ${city.region}, share the exact pickup and delivery addresses, cargo details and preferred date so vehicle suitability and route availability can be checked.`,
    connections: local?.connections,
    preparation: preparation[pillar.id] ?? [],
    boundary: boundaries[pillar.id] ?? "Confirm service availability before engagement.",
    heritage,
    corridors: CORRIDORS.filter((route) => route.from === city.slug || route.to === city.slug),
  };
}