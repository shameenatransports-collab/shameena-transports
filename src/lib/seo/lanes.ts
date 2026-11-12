/** Coimbatore is always the outbound origin; destinations are not branches. */
export const LANES_HUB_PATH = "/transportation/from-coimbatore";
export const RETURN_AVAILABILITY = "Return loads are strictly subject to route availability and vehicle suitability; never guaranteed.";
export const VEHICLES = [
  { slug: "lorry", name: "Lorry", cargo: "bagged building material, steel, textile bales and crated engineering goods", limit: "Open-body lorries are not suitable for containers, loose sand or gravel, liquids, temperature-controlled goods or oversize machinery." },
  { slug: "truck", name: "Truck", cargo: "packed commercial goods, pipes, pumps, motors and warehouse stock", limit: "12-wheeler, 14-wheeler and 40 ft open-truck requests are checked against the allotted vehicle, permitted load and cargo dimensions." },
  { slug: "trailer", name: "Trailer", cargo: "company equipment shifting, machinery and construction material", limit: "Trailer suitability, loading equipment, permitted load and route access must be checked per booking; no size or capacity is promised." },
] as const;
export type VehicleSlug = typeof VEHICLES[number]["slug"];
export const DESTINATIONS = [
  { slug: "bangalore", name: "Bangalore", alias: "Bengaluru", state: "Karnataka", context: "Engineering suppliers and industrial buyers can enquire about crated pumps, motors, machine parts and packed goods from Coimbatore.", preparation: "Share industrial-unit gate timings, unloading equipment and the exact Bengaluru delivery address." },
  { slug: "mysuru", name: "Mysuru", alias: "Mysore", state: "Karnataka", context: "Engineering parts, textile cartons and packed commercial goods are relevant enquiry categories for suppliers serving Mysuru.", preparation: "Confirm unloading access and whether your crates or cartons need rain protection." },
  { slug: "mangaluru", name: "Mangaluru", alias: "Mangalore", state: "Karnataka", context: "Building-material dealers and commercial buyers can enquire about bundled steel, pipes and packed goods delivered from Coimbatore.", preparation: "Give site-access restrictions and loading dimensions; a port destination does not imply container transport." },
  { slug: "kochi", name: "Kochi", alias: "Cochin", state: "Kerala", context: "Construction suppliers, machinery buyers and distributors can enquire about steel, pipes, crated equipment and packed goods from Coimbatore.", preparation: "Share the exact Ernakulam-area delivery location, unloading arrangements and moisture-protection needs." },
  { slug: "thrissur", name: "Thrissur", alias: "Trichur", state: "Kerala", context: "Building-material distributors and commercial buyers can enquire about steel, bagged material and packed stock from Coimbatore.", preparation: "Confirm whether the delivery is a godown or construction site and who will unload." },
  { slug: "palakkad", name: "Palakkad", alias: "Palghat", state: "Kerala", context: "Industrial buyers and distributors can enquire about pumps, engineering goods, bagged material and warehouse stock from Coimbatore.", preparation: "Share gate timings and loading equipment at the Coimbatore pickup and Palakkad delivery." },
  { slug: "kozhikode", name: "Kozhikode", alias: "Calicut", state: "Kerala", context: "Commercial suppliers and building-material dealers can enquire about packed goods, pipes, steel and plywood from Coimbatore.", preparation: "Give cargo dimensions, stacking restrictions and delivery-site access details." },
  { slug: "kottayam", name: "Kottayam", alias: "Kottayam", state: "Kerala", context: "Industrial suppliers and distributors can enquire about crated machinery, building material and packed commercial goods from Coimbatore.", preparation: "Confirm load weight, rain protection and lifting equipment for heavy crates." },
  { slug: "thiruvananthapuram", name: "Thiruvananthapuram", alias: "Trivandrum", state: "Kerala", context: "Project suppliers and distributors can enquire about company equipment, construction material and packed goods from Coimbatore.", preparation: "Share project-site access, unloading timing and cargo dimensions before requesting a vehicle." },
] as const;
export const INDUSTRIES = [
  { slug: "engineering-pumps", name: "Engineering, Pumps & Motors", cargo: "Crated pumps, motors, machine parts and engineering goods", vehicle: "lorry", preparation: "Crate dimensions, weight per piece, forklift or crane arrangements and tie-down points" },
  { slug: "foundry-castings", name: "Foundry Castings & Metal Parts", cargo: "Castings and machined metal parts in bins, crates or pallets", vehicle: "lorry", preparation: "Weight per pallet or bin, total load and lifting equipment at both ends" },
  { slug: "textiles-yarn", name: "Textiles & Yarn", cargo: "Textile bales, yarn cartons and packed garment loads", vehicle: "truck", preparation: "Bale or carton count, total weight, packing and rain-protection requirements" },
  { slug: "construction-steel", name: "Construction Material & Steel", cargo: "Cement bags, bundled steel, TMT bars, pipes and plywood", vehicle: "lorry", preparation: "Longest item length, total weight, site access and unloading equipment" },
  { slug: "equipment-shifting", name: "Company Equipment Shifting", cargo: "Machinery, company equipment and construction material suitable for a trailer", vehicle: "trailer", preparation: "Equipment dimensions, weight, lifting arrangements, permits and route-access restrictions" },
  { slug: "packed-goods", name: "Bagged & Packed Goods", cargo: "Bagged grain, feed, sacks and packed commercial cartons", vehicle: "truck", preparation: "Bag or carton count, weight, commodity compatibility and weather-protection needs" },
] as const;
export const laneUrl = (destination: string, vehicle?: string) => `${LANES_HUB_PATH}/${destination}${vehicle ? `/${vehicle}` : ""}`;
export const industryUrl = (slug: string) => `/transportation/industries/${slug}`;
export const laneKeywords = (destination: typeof DESTINATIONS[number], vehicle?: typeof VEHICLES[number]) => {
  const types = vehicle ? [vehicle] : VEHICLES;
  return [...new Set(types.flatMap(v => [
    `coimbatore to ${destination.name.toLowerCase()} ${v.name.toLowerCase()} transport`,
    `${v.name.toLowerCase()} transport from coimbatore to ${destination.alias.toLowerCase()}`,
  ]))];
};
export const bookingDirection = (destination: string, returning = false) => returning
  ? { origin: destination, destination: "Coimbatore", availability: "strictly subject to route availability" }
  : { origin: "Coimbatore", destination, availability: "confirmed per booking" };