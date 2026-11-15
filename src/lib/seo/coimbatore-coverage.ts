// Coimbatore local coverage model: localities (areas) and customer types (companies and individuals).
// Every page built from this data is about enquiries originating in Coimbatore, handled from the Podanur office.
// No prices, no insurance, no delivery-time guarantees. Vehicles: lorry, truck, trailer only.

export const AREAS_HUB_PATH = "/transportation/coimbatore/areas";
export const areaUrl = (slug: string) => `${AREAS_HUB_PATH}/${slug}`;
export const audienceUrl = (slug: string) => `/transportation/coimbatore/for/${slug}`;

export type AreaKind = "industrial" | "commercial" | "residential" | "mixed";

export interface Area {
  slug: string;
  name: string;
  kind: AreaKind;
  context: string; // safe, general description of the locality
  share: string; // what to share for pickups here
  near: string[]; // slugs
}

export const AREAS: Area[] = [
  { slug: "podanur", name: "Podanur", kind: "mixed", context: "Our office is here, on Gurusamy Pillai St Extn, so Podanur pickups are coordinated directly from the base.", share: "Exact loading point, road width for lorry access and preferred loading time.", near: ["kuniyamuthur", "kurichi", "eachanari"] },
  { slug: "kurichi", name: "Kurichi (SIDCO Industrial Estate)", kind: "industrial", context: "Kurichi and the SIDCO industrial estate have many small and medium units that send out machinery parts, castings and packed goods.", share: "Unit address, gate and dock access, loading equipment and the cargo dimensions.", near: ["podanur", "kuniyamuthur", "ganapathy"] },
  { slug: "ganapathy", name: "Ganapathy", kind: "mixed", context: "Ganapathy mixes engineering workshops, dealers and commercial establishments with busy roads, so access and timing matter.", share: "Pickup address, entry timings and whether the vehicle can reach the door.", near: ["peelamedu", "thudiyalur", "kurichi"] },
  { slug: "singanallur", name: "Singanallur", kind: "mixed", context: "Singanallur has mills, workshops and commercial units alongside residential areas.", share: "Unit address, loading help available and the cargo type and weight.", near: ["peelamedu", "irugur", "podanur"] },
  { slug: "peelamedu", name: "Peelamedu", kind: "commercial", context: "Peelamedu is a busy commercial and residential area on the east side of the city.", share: "Pickup address, access restrictions and preferred time of day.", near: ["singanallur", "saravanampatti", "ganapathy"] },
  { slug: "saravanampatti", name: "Saravanampatti", kind: "mixed", context: "Saravanampatti combines commercial establishments, offices and growing residential areas on the north side.", share: "Pickup and delivery pins, floor and lift access for loading, and dates.", near: ["peelamedu", "vilankurichi", "thudiyalur"] },
  { slug: "thudiyalur", name: "Thudiyalur", kind: "industrial", context: "Thudiyalur has engineering and pump-related units on the northern side of the city.", share: "Crate or pallet details, weight, and whether a forklift or crane is available.", near: ["ganapathy", "saravanampatti", "kalapatti"] },
  { slug: "kalapatti", name: "Kalapatti", kind: "mixed", context: "Kalapatti has workshops, small industries and housing close to the Sathy Road and Avinashi Road corridors.", share: "Pickup address, cargo dimensions and unloading arrangements.", near: ["vilankurichi", "thudiyalur", "saravanampatti"] },
  { slug: "vilankurichi", name: "Vilankurichi", kind: "mixed", context: "Vilankurichi has commercial establishments, small units and residential layouts.", share: "Exact address, road access and cargo details.", near: ["saravanampatti", "kalapatti", "peelamedu"] },
  { slug: "neelambur", name: "Neelambur", kind: "industrial", context: "Neelambur is known for industrial and godown pickups on the eastern side of Coimbatore.", share: "Godown address, dock height, loading help and the cargo list.", near: ["singanallur", "irugur", "kalapatti"] },
  { slug: "irugur", name: "Irugur", kind: "industrial", context: "Irugur has mills and small industries on the eastern side of Coimbatore.", share: "Unit address, bale or carton count, and weight.", near: ["singanallur", "neelambur", "kalapatti"] },
  { slug: "ukkadam", name: "Ukkadam", kind: "commercial", context: "Ukkadam is a busy trading area, with market and wholesale activity in and around it.", share: "Shop or godown address, narrow-lane access and the best loading window.", near: ["town-hall-oppanakara-street", "kuniyamuthur", "podanur"] },
  { slug: "town-hall-oppanakara-street", name: "Town Hall and Oppanakara Street", kind: "commercial", context: "The Town Hall and Oppanakara Street area is a wholesale trading centre with congested streets, so loading windows and access need planning.", share: "Shop address, nearest vehicle halt point and loading help.", near: ["ukkadam", "rs-puram", "ganapathy"] },
  { slug: "rs-puram", name: "RS Puram", kind: "commercial", context: "RS Puram is a commercial and residential area close to the city centre.", share: "Address, access for a lorry, and whether loaders are needed.", near: ["town-hall-oppanakara-street", "vadavalli", "ganapathy"] },
  { slug: "vadavalli", name: "Vadavalli", kind: "residential", context: "Vadavalli is mainly residential, so many enquiries here are house and office shifting.", share: "Pickup and delivery addresses, floors, lift access and list of items.", near: ["rs-puram", "thudiyalur", "kovaipudur"] },
  { slug: "kovaipudur", name: "Kovaipudur", kind: "residential", context: "Kovaipudur is a residential area on the south-west side, where house shifting enquiries are common.", share: "Both addresses, road width for the vehicle and the list of items.", near: ["vadavalli", "kuniyamuthur", "podanur"] },
  { slug: "kuniyamuthur", name: "Kuniyamuthur", kind: "mixed", context: "Kuniyamuthur is close to our Podanur base and has small industries and housing.", share: "Pickup address, cargo type and loading arrangements.", near: ["podanur", "kurichi", "kovaipudur"] },
  { slug: "eachanari", name: "Eachanari", kind: "mixed", context: "Eachanari sits on the Pollachi Road side with commercial and industrial pickups.", share: "Address, cargo dimensions and whether the load is going towards Pollachi, Kerala or elsewhere.", near: ["podanur", "malumichampatti", "kuniyamuthur"] },
  { slug: "malumichampatti", name: "Malumichampatti", kind: "mixed", context: "Malumichampatti is on the Pollachi Road side of Coimbatore with commercial and residential areas.", share: "Pickup address, cargo and loading help needed.", near: ["eachanari", "podanur", "kovaipudur"] },
];
export const AREA_BY_SLUG = Object.fromEntries(AREAS.map((a) => [a.slug, a]));

export interface Audience {
  slug: string;
  name: string;
  group: "company" | "individual";
  who: string;
  cargo: string[];
  vehicles: ("lorry" | "truck" | "trailer")[];
  tell: string[];
  keywords: string[];
}

export const AUDIENCES: Audience[] = [
  { slug: "factories-manufacturers", name: "Factories and Manufacturers", group: "company", who: "Coimbatore factories, workshops and manufacturers moving finished goods, raw material or machinery.", cargo: ["Pumps, motors and engineering goods", "Foundry castings", "Textile bales and cartons", "Packed finished goods"], vehicles: ["lorry", "truck", "trailer"], tell: ["Unit address and gate or dock access", "Cargo type, weight and dimensions", "Loading equipment at pickup and delivery", "Single trip or regular dispatch"], keywords: ["lorry for factory in coimbatore", "truck transport for manufacturers coimbatore", "factory goods transport coimbatore"] },
  { slug: "traders-wholesalers", name: "Traders, Wholesalers and Dealers", group: "company", who: "Traders, wholesalers and dealers moving bagged, packed and bulk stock between godowns, shops and customers.", cargo: ["Bagged rice, grain, feed and fertiliser", "Cartons and packed goods", "Hardware, pipes and steel", "Plywood and boards"], vehicles: ["lorry", "truck"], tell: ["Godown or shop address", "Number of bags or cartons and total weight", "Loading and unloading help needed", "Delivery date"], keywords: ["lorry for traders in coimbatore", "wholesale goods transport coimbatore", "godown to shop lorry coimbatore"] },
  { slug: "builders-contractors", name: "Builders and Contractors", group: "company", who: "Builders, contractors and site engineers moving construction material and equipment.", cargo: ["Cement bags", "Steel, TMT bars and pipes", "Tiles, plywood and fittings", "Site equipment on trailer"], vehicles: ["lorry", "truck", "trailer"], tell: ["Site address and access road", "Material list and weight", "Unloading arrangements on site", "Daily or one-time requirement"], keywords: ["construction material lorry coimbatore", "lorry for contractors coimbatore", "trailer for site equipment coimbatore"] },
  { slug: "equipment-owners", name: "Companies Shifting Equipment or Machinery", group: "company", who: "Companies shifting plant, machinery and equipment between units, sites and cities.", cargo: ["Machinery and plant", "Company equipment", "Heavy crated loads"], vehicles: ["trailer", "truck", "lorry"], tell: ["Equipment dimensions, weight and height", "Crane or forklift at both ends", "Route access at delivery", "Preferred date"], keywords: ["machinery transport coimbatore", "equipment shifting trailer coimbatore", "plant shifting lorry coimbatore"] },
  { slug: "shops-showrooms", name: "Shops, Showrooms and Offices", group: "company", who: "Shops, showrooms and offices moving stock, furniture and fittings.", cargo: ["Stock and cartons", "Furniture and fittings", "Office relocation loads"], vehicles: ["lorry", "truck"], tell: ["Current and new address", "Floors and lift access", "List of items", "Loaders and packers needed or not"], keywords: ["office shifting lorry coimbatore", "shop shifting transport coimbatore", "showroom goods transport coimbatore"] },
  { slug: "exporters-traders-to-ports", name: "Exporters and Traders Sending Goods Towards Ports", group: "company", who: "Exporters and traders sending cargo from Coimbatore to the container yards near Chennai and Cochin ports.", cargo: ["Goods transported up to container yards near the port"], vehicles: ["lorry", "truck"], tell: ["Cargo details and weight", "Delivery yard name and address", "Date and cut-off time", "Loading and unloading arrangements"], keywords: ["goods transport from coimbatore to chennai port yard", "lorry from coimbatore to cochin port yard"] },
  { slug: "households-house-shifting", name: "Households and House Shifting", group: "individual", who: "Families and individuals shifting house within Coimbatore or to nearby towns, with loaders and packers.", cargo: ["Household goods and furniture", "Appliances and cartons"], vehicles: ["lorry", "truck"], tell: ["Both addresses and floors", "Lift or staircase access", "List of items", "Date and time"], keywords: ["house shifting lorry coimbatore", "home shifting loaders and packers coimbatore", "lorry for house shifting coimbatore"] },
  { slug: "individuals-goods-transport", name: "Individuals Moving Goods", group: "individual", who: "Individuals sending or collecting goods such as furniture, building material, farm produce or personal cargo.", cargo: ["Furniture and household goods", "Building material for homes", "Farm produce and bagged goods"], vehicles: ["lorry", "truck"], tell: ["Pickup and delivery addresses", "What you are moving and approximate weight", "Loaders needed or not", "Preferred date"], keywords: ["lorry for individuals coimbatore", "lorry booking coimbatore", "goods transport for individuals coimbatore"] },
];
export const AUDIENCE_BY_SLUG = Object.fromEntries(AUDIENCES.map((a) => [a.slug, a]));

export const areaKeywords = (name: string): string[] => {
  const n = name.toLowerCase().replace(/ \(.*\)/, "");
  return [`lorry transport in ${n} coimbatore`, `truck transport in ${n} coimbatore`, `trailer transport in ${n} coimbatore`, `lorry service near ${n}`, `lorry booking ${n} coimbatore`, `goods transport ${n} coimbatore`];
};
