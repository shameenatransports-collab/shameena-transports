// Service catalogue for the transportation pillar (the only business line).
// Each sub-item becomes a programmatic page template seeded by city + intent.

export type PillarId = "transportation";

export interface SubService {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  keywords: string[]; // seed keywords (mapped from corpus)
  benefits: string[];
  /** Answer-first summary shown at the top of the page (also used for AI answers). */
  answer?: string;
  /** What the customer should tell us to get a quote. */
  tell?: string[];
  /** Honest limits of the open-body lorry for this cargo. */
  caution?: string;
  /** Brief page-specific FAQs. */
  faqs?: { q: string; a: string }[];
}

export interface Pillar {
  id: PillarId;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  path: string;
  subPath: string; // e.g. "services" | "products" | "practice" | "programs" | "categories"
  subLabel: string; // human label for sub category
  sub: SubService[];
  cityIntro: (cityName: string) => string;
}

export const PILLARS: Pillar[] = [
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: "transportation",
    name: "Transportation",
    shortName: "Transport",
    tagline: "Full-load freight movement across Coimbatore district",
    description:
      "Dedicated lorry transport and factory shifting operating since 1982.",
    path: "/transportation",
    subPath: "services",
    subLabel: "Service",
    cityIntro: (c) =>
      `Reliable full-load lorry transport in and out of ${c}. Dedicated trucks, transparent pricing, and direct dispatch — serving manufacturers, traders and project sites across the region.`,
    sub: [
      {
        slug: "open-body-lorry", name: "Open-Body Lorry Hire & Transport", shortName: "Open-Body Lorry",
        description: "Open-body lorry hire and goods transport in Coimbatore district for building material, steel, pipes, packed goods, textile bales and crated cargo.",
        answer: "An open-body lorry is a goods truck with a flat platform and high side walls but no fixed roof. STA Corporate Solutions provides open-body lorry transport and hire in Coimbatore district for building material, steel, pipes, packed goods, textile bales and crated cargo.",
        keywords: ["open body lorry", "open truck on hire", "open body truck booking", "goods lorry", "lorry booking", "open lorry transport"],
        benefits: ["Side and rear loading", "Tarpaulin cover for weather-sensitive cargo", "Suited to long and bulky items", "Vehicle and load confirmed per booking"],
        tell: ["Pickup and delivery addresses", "Cargo type, weight and packing", "Longest item length, if any", "Loading and unloading help needed", "Preferred date and time"],
        caution: "Not suited to containers, loose sand or gravel, liquids, temperature-controlled goods or oversize machinery.",
        faqs: [
          { q: "How do I book an open-body lorry in Coimbatore?", a: "Call or WhatsApp +91 94430 33055 with pickup, destination, cargo and date. Vehicle, load and freight are confirmed per booking." },
          { q: "Do you quote a fixed price?", a: "No fixed rate card. Freight depends on distance, cargo weight, loading and unloading time, and waiting. You get a quote after sharing the details." },
        ],
      },
      {
        slug: "return-load", name: "Return Load to Coimbatore from Tamil Nadu", shortName: "Return Load",
        description: "Goods transport into Coimbatore from towns across Tamil Nadu on vehicles returning to Coimbatore, subject to availability.",
        answer: "A return load is spare space on a vehicle that is coming back to Coimbatore anyway. STA arranges return loads into Coimbatore from towns across Tamil Nadu on availability: share pickup town, cargo, weight and date on +91 94430 33055 and we confirm if a vehicle is coming your way.",
        keywords: ["return load to coimbatore", "return load coimbatore", "back load coimbatore", "return lorry to coimbatore", "lorry to coimbatore from tamil nadu", "tamil nadu to coimbatore goods transport", "return truck load coimbatore"],
        benefits: ["Tamil Nadu towns to Coimbatore", "Lorry, truck or trailer, as the returning vehicle allows", "Confirmed per enquiry", "Told plainly when no vehicle is available"],
        tell: ["Pickup town in Tamil Nadu", "Delivery address in Coimbatore", "Cargo type, weight and dimensions", "Preferred date and flexibility"],
        caution: "A return load depends on a vehicle returning to Coimbatore on that day, so it is never guaranteed. It covers goods coming into Coimbatore from Tamil Nadu. STA does not offer cargo insurance.",
        faqs: [
          { q: "What is a return load to Coimbatore?", a: "Spare space on a vehicle that is returning to Coimbatore. It is booked on availability and confirmed per enquiry." },
          { q: "Which towns can a return load come from?", a: "Towns across Tamil Nadu on the way to Coimbatore, such as Tirupur, Erode, Salem, Karur, Dindigul, Trichy, Madurai, Hosur, Vellore and Chennai." },
        ],
      },
      {
        slug: "lorry-transport", name: "Lorry Transport in Coimbatore", shortName: "Lorry Transport",
        description: "Goods lorry transport in Coimbatore district for factories, shops, warehouses, builders and individuals, with experienced drivers and loaders.",
        answer: "STA Corporate Solutions provides lorry transport in Coimbatore district, from single full-load trips to daily or monthly hire. Share pickup, destination, cargo and date on +91 94430 33055 and we confirm the vehicle and freight.",
        keywords: ["lorry transport in coimbatore", "lorry transport coimbatore", "goods lorry coimbatore", "lorry booking coimbatore", "lorry service coimbatore", "lorry for hire coimbatore", "transport service coimbatore"],
        benefits: ["Full load trips", "Factory, warehouse and shop deliveries", "Experienced drivers and loaders", "Coordinated from our Podanur office"],
        tell: ["Pickup and delivery addresses", "Cargo type and weight", "Loading and unloading help needed", "Preferred date and time"],
        faqs: [{ q: "How do I book a lorry in Coimbatore?", a: "Call or WhatsApp +91 94430 33055 with pickup, destination, cargo and date. Vehicle and freight are confirmed per booking." }],
      },
      {
        slug: "truck-transport", name: "Truck Transport in Coimbatore", shortName: "Truck Transport",
        description: "Truck transport and truck hire in Coimbatore district: 12-wheeler, 14-wheeler and open trucks with a 40 ft platform, on a daily, monthly or contract basis.",
        answer: "STA Corporate Solutions offers truck transport in Coimbatore district, including 12-wheeler and 14-wheeler trucks and open trucks with a 40 ft platform, on daily, monthly or contract hire. Own lorries and trailers are supported by partnered vehicles.",
        keywords: ["truck transport in coimbatore", "truck transport coimbatore", "truck on hire coimbatore", "truck booking coimbatore", "12 wheeler truck coimbatore", "14 wheeler truck coimbatore", "40 feet open truck coimbatore", "truck hire coimbatore"],
        benefits: ["12-wheeler and 14-wheeler trucks", "Open trucks with 40 ft platform", "Daily, monthly or contract hire", "Own and partnered vehicles"],
        tell: ["Cargo type, weight and length", "Pickup and delivery addresses", "Hire period: single trip, daily, monthly or contract", "Loading equipment at either end"],
        faqs: [{ q: "Which trucks can I hire in Coimbatore?", a: "12-wheeler and 14-wheeler trucks and open trucks with a 40 ft platform, subject to availability. Share your cargo and date to confirm." }],
      },
      {
        slug: "trailer-transport", name: "Trailer Transport in Coimbatore", shortName: "Trailer Transport",
        description: "Trailer transport in Coimbatore district for company equipment shifting, machinery and construction material.",
        answer: "STA Corporate Solutions runs trailer transport in Coimbatore district for company equipment shifting and construction material. Share the equipment or material, dimensions, weight and route on +91 94430 33055 and we confirm whether a trailer suits the load.",
        keywords: ["trailer transport in coimbatore", "trailer transport coimbatore", "trailer lorry coimbatore", "trailer on hire coimbatore", "equipment transport coimbatore", "machinery transport coimbatore", "construction equipment transport coimbatore"],
        benefits: ["Company equipment shifting", "Construction material transport", "Machinery and bulk loads", "Suitability confirmed per booking"],
        tell: ["Equipment or material, with dimensions and weight", "Pickup and delivery addresses", "Loading and unloading equipment at either end", "Preferred date"],
        caution: "Trailer suitability, permitted load and route access are confirmed for each booking. STA does not offer cargo insurance.",
        faqs: [{ q: "What does a trailer carry?", a: "Company equipment shifting and construction material are the common loads. Tell us the dimensions and weight and we confirm if a trailer suits it." }],
      },
      {
        slug: "cement-transport", name: "Cement & Bagged Building Material Transport", shortName: "Cement Transport",
        description: "Cement bags and bagged building material by open-body lorry for dealers, contractors and builders in Coimbatore district.",
        answer: "Cement bags travel well on an open-body lorry when loaded flat and covered with tarpaulin against rain. STA arranges cement and bagged building material transport in Coimbatore district for dealers, contractors and builders.",
        keywords: ["cement transport", "cement lorry", "cement bag transport", "building material lorry"],
        benefits: ["Flat, stable loading of bags", "Tarpaulin cover against rain", "Delivery to site or godown", "Loading and unloading help on request"],
        tell: ["Number of bags and total weight", "Loading point (dealer, godown or plant)", "Site access for a lorry", "Who will unload", "Delivery date"],
        caution: "Not for loose bulk cement, which needs a bulker.",
        faqs: [{ q: "Is cement protected from rain on the lorry?", a: "Bags are sheeted with tarpaulin. Tell us if the trip is in wet weather so extra cover is arranged." }],
      },
      {
        slug: "steel-transport", name: "Steel, TMT Bar & Rod Transport", shortName: "Steel Transport",
        description: "TMT bars, rods, angles, channels and structural steel by open-body lorry in Coimbatore district.",
        answer: "Long steel such as TMT bars, rods, angles and channels fits on an open platform. Tell STA the longest length and total weight so we can confirm the lorry body and load are suitable for your steel transport in Coimbatore district.",
        keywords: ["steel transport", "TMT bar transport", "rod transport lorry", "steel lorry"],
        benefits: ["Open platform for long items", "Secure tie-down", "Plant-to-site delivery", "Weight and length confirmed per booking"],
        tell: ["Item type and bundle count", "Longest length", "Total weight", "Loading equipment (crane, forklift)", "Delivery site access"],
        caution: "Very long or heavy structural sections are checked against the vehicle and permitted overhang before we confirm.",
        faqs: [{ q: "How long can steel bars be on your lorry?", a: "It depends on the vehicle allotted. Share the longest length at booking and we confirm whether it fits safely." }],
      },
      {
        slug: "pipe-transport", name: "Pipe Transport (PVC, GI & Ductile)", shortName: "Pipe Transport",
        description: "PVC, GI, HDPE and ductile iron pipes by open-body lorry for contractors and suppliers in Coimbatore district.",
        answer: "Pipes are stacked, chocked and tied down on an open-body lorry. STA transports PVC, GI, HDPE and ductile pipes for contractors and suppliers in Coimbatore district; share diameter, length and count so we can confirm the load.",
        keywords: ["pipe transport", "pvc pipe lorry", "gi pipe transport", "pipe lorry coimbatore"],
        benefits: ["Stacked and chocked loading", "Suited to long lengths", "Supplier-to-site delivery", "Careful handling of coated pipes"],
        tell: ["Pipe material and diameter", "Length and count", "Total weight", "Loading and unloading arrangement", "Site access"],
        caution: "Heavy large-diameter pipes need lifting equipment at both ends.",
        faqs: [{ q: "Do you supply the crane for unloading pipes?", a: "Loaders and packers can help with handling. Heavy pipes need lifting equipment, which we discuss at booking." }],
      },
      {
        slug: "bagged-goods-transport", name: "Bagged & Packed Goods Transport", shortName: "Bagged Goods",
        description: "Rice, fertiliser, cattle feed, sacks and packed cartons by open-body lorry for traders and distributors in Coimbatore district.",
        answer: "Bagged and packed goods such as rice, fertiliser, cattle feed and cartons suit an open-body lorry with tarpaulin cover. STA moves them for traders, dealers and distributors in Coimbatore district.",
        keywords: ["bagged goods transport", "rice bag lorry", "fertiliser transport", "packed goods lorry"],
        benefits: ["Easy loading and unloading", "Tarpaulin cover", "Trader and distributor friendly", "Loaders available on request"],
        tell: ["Bag or carton count", "Total weight", "Loading godown address", "Delivery points", "Preferred date"],
        caution: "Goods that must stay dry or cool need a covered or temperature-controlled vehicle, which we do not run.",
        faqs: [{ q: "Can you carry food grains?", a: "Bagged grains and feed can be carried sheeted on an open-body lorry. Goods needing a closed, clean or cool vehicle are not suitable." }],
      },
      {
        slug: "pump-motor-transport", name: "Pump, Motor & Engineering Goods Transport", shortName: "Pump & Motor Transport",
        description: "Crated pumps, motors, castings and engineering goods by open-body lorry from Coimbatore industrial units.",
        answer: "Crated pumps, motors and engineering goods that fit within the body height can travel on an open-body lorry. STA moves them from Coimbatore industrial units; share crate size and weight so we can confirm the load.",
        keywords: ["pump transport", "motor transport", "engineering goods lorry", "machinery transport coimbatore"],
        benefits: ["Crated and palletised loads", "Unit-to-customer delivery", "Loading aid coordination", "Tie-down and cover"],
        tell: ["Crate or pallet size and count", "Weight per piece", "Loading equipment (forklift, crane)", "Delivery address", "Date"],
        caution: "Over-height or oversize machinery is not suited to an open-body lorry.",
        faqs: [{ q: "What size of crate can you carry?", a: "It depends on the vehicle allotted. Share crate dimensions and weight at booking and we confirm if it fits within the body height." }],
      },
      {
        slug: "foundry-casting-transport", name: "Foundry Casting & Metal Parts Transport", shortName: "Casting Transport",
        description: "Foundry castings and machined metal parts in bins, crates or pallets by open-body lorry in Coimbatore district.",
        answer: "Castings and metal parts are dense, so weight per load matters more than volume. STA moves them in bins, crates or pallets by open-body lorry in Coimbatore district; share weight per pallet and loading equipment to confirm the load.",
        keywords: ["casting transport", "foundry lorry", "metal parts transport", "casting lorry coimbatore"],
        benefits: ["Bins, crates and pallets", "Foundry-to-customer delivery", "Weight-based load planning", "Forklift and crane coordination"],
        tell: ["Weight per pallet or bin", "Number of pallets", "Loading equipment at both ends", "Delivery address", "Date"],
        caution: "Very heavy single castings need lifting equipment and a vehicle check before we confirm.",
        faqs: [{ q: "Is weight limited?", a: "Every vehicle has a permitted load. We check your total weight against it before confirming the booking." }],
      },
      {
        slug: "full-load", name: "Full Load Lorry Transport", shortName: "Full Load",
        description: "A dedicated truck exclusively for your cargo. Best for 5–25 ton loads, factory-to-factory movements, and time-sensitive shipments.",
        keywords: ["full load lorry", "dedicated truck", "lorry booking", "goods transport", "freight service"],
        benefits: ["Dedicated vehicle, no intermediate stops", "Open-body lorry, sheeted where needed", "Faster transit time", "Door-to-door pickup & delivery"],
      },
      {
        slug: "textile-cargo", name: "Textile & Yarn Cargo Transport", shortName: "Textile Cargo",
        description: "Specialist movement of textile bales, garment cartons and yarn cones along the Coimbatore textile and engineering belt.",
        keywords: ["textile transport", "yarn transport", "garment cargo", "textile transport coimbatore"],
        benefits: ["Careful tarpaulin loading", "Bale & carton expertise", "Knit & woven fabric cargo", "Coimbatore industrial belt specialists"],
      },
      {
        slug: "construction-material", name: "Construction Material Transport", shortName: "Construction",
        description: "Cement bags, steel, TMT rods, pipes, plywood and bricks by open-body lorry for builders, dealers and contractors in Coimbatore district.",
        keywords: ["construction material transport", "building material lorry", "cement transport", "steel transport"],
        benefits: ["Open-body lorry", "Site-direct delivery", "Builder & contractor friendly", "Bagged and bundled material handling"],
      },
      {
        slug: "factory-shifting", name: "Factory & Warehouse Shifting", shortName: "Factory Shifting",
        description: "End-to-end factory, plant and warehouse relocation — dismantling coordination, packing, transit and re-installation handover.",
        keywords: ["factory shifting", "warehouse shifting", "industrial relocation", "plant shifting"],
        benefits: ["Dismantling & re-installation coordination", "Multi-vehicle planning", "Inventory tracking", "End-to-end project ownership"],
      },
      {
        slug: "trucks-on-hire", name: "Trucks on Hire", shortName: "Trucks on Hire",
        description: "Trucks on hire for local and long-distance transport needs in Coimbatore district — 12-wheeler and 14-wheeler trucks and open trucks with a 40 ft platform, on a daily, monthly or contract basis.",
        keywords: ["trucks on hire", "truck hire coimbatore", "lorry on rent", "12 wheeler on hire", "14 wheeler on hire", "40 feet open truck"],
        answer: "STA Corporate Solutions offers trucks on hire in Coimbatore district: 12-wheeler and 14-wheeler trucks and open trucks with a 40 ft platform, on a daily, monthly or contract basis.",
        benefits: ["12-wheeler / 14-wheeler trucks", "Open trucks (40 ft platform)", "Daily, monthly or contract basis", "Experienced drivers"],
      },
      {
        slug: "loaders-packers", name: "Loaders & Packers Services", shortName: "Loaders & Packers",
        description: "Professional loaders and helpers for safe and efficient handling — house shifting, office relocation, and loading and unloading services.",
        keywords: ["loaders and packers", "packers and movers coimbatore", "loading unloading service", "office relocation", "house shifting"],
        benefits: ["House shifting", "Office relocation", "Loading & unloading", "Skilled, careful loaders"],
      },
      {
        slug: "door-to-door", name: "Door-to-Door Transport", shortName: "Door-to-Door",
        description: "Pickup from your loading bay, delivery direct to consignee. No transhipment, no godown layovers.",
        keywords: ["door to door transport", "direct delivery", "pickup and delivery"],
        benefits: ["Pickup at your facility", "Direct delivery, no transhipment", "Reduced handling damage", "Single contact through transit"],
      },
      {
        slug: "intercity-freight", name: "Intercity Freight", shortName: "Intercity Freight",
        description: "Point-to-point freight between Coimbatore and nearby district towns, planned route by route.",
        keywords: ["transport between coimbatore towns", "district freight", "lorry freight coimbatore"],
        benefits: ["Route-planned trips", "Transparent per-trip quotes", "Volume rate contracts", "Coimbatore focus"],
      },
    ],
  },
];

export const PILLAR_BY_ID = Object.fromEntries(PILLARS.map((p) => [p.id, p])) as Record<PillarId, Pillar>;

export function getPillar(id?: string) {
  return id && id in PILLAR_BY_ID ? PILLAR_BY_ID[id as PillarId] : undefined;
}

export function getSub(pillar: Pillar, slug: string) {
  return pillar.sub.find((s) => s.slug === slug);
}
