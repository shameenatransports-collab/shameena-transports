// Coimbatore localities. Neutral by design: no claims about what industries sit where.
// Every page built from this data is about enquiries originating in Coimbatore, handled from the Podanur office.
// No prices, no insurance, no delivery-time guarantees. Vehicles: lorry, truck, trailer only.

export const AREAS_HUB_PATH = "/transportation/coimbatore/areas";
export const areaUrl = (slug: string) => `${AREAS_HUB_PATH}/${slug}`;



export interface Area {
  slug: string;
  name: string;
  context: string; // intentionally generic
  share: string; // what to share for pickups here
  near: string[]; // slugs
}

export const AREAS: Area[] = [
  { slug: "podanur", name: "Podanur", context: "", share: "Exact loading point, road width for lorry access and preferred loading time.", near: ["kuniyamuthur", "kurichi", "eachanari"] },
  { slug: "kurichi", name: "Kurichi (SIDCO Industrial Estate)", context: "", share: "Unit address, gate and dock access, loading equipment and the cargo dimensions.", near: ["podanur", "kuniyamuthur", "ganapathy"] },
  { slug: "ganapathy", name: "Ganapathy", context: "", share: "Pickup address, entry timings and whether the vehicle can reach the door.", near: ["peelamedu", "thudiyalur", "kurichi"] },
  { slug: "singanallur", name: "Singanallur", context: "", share: "Unit address, loading help available and the cargo type and weight.", near: ["peelamedu", "irugur", "podanur"] },
  { slug: "peelamedu", name: "Peelamedu", context: "", share: "Pickup address, access restrictions and preferred time of day.", near: ["singanallur", "saravanampatti", "ganapathy"] },
  { slug: "saravanampatti", name: "Saravanampatti", context: "", share: "Pickup and delivery pins, floor and lift access for loading, and dates.", near: ["peelamedu", "vilankurichi", "thudiyalur"] },
  { slug: "thudiyalur", name: "Thudiyalur", context: "", share: "Crate or pallet details, weight, and whether a forklift or crane is available.", near: ["ganapathy", "saravanampatti", "kalapatti"] },
  { slug: "kalapatti", name: "Kalapatti", context: "", share: "Pickup address, cargo dimensions and unloading arrangements.", near: ["vilankurichi", "thudiyalur", "saravanampatti"] },
  { slug: "vilankurichi", name: "Vilankurichi", context: "", share: "Exact address, road access and cargo details.", near: ["saravanampatti", "kalapatti", "peelamedu"] },
  { slug: "neelambur", name: "Neelambur", context: "", share: "Godown address, dock height, loading help and the cargo list.", near: ["singanallur", "irugur", "kalapatti"] },
  { slug: "irugur", name: "Irugur", context: "", share: "Unit address, bale or carton count, and weight.", near: ["singanallur", "neelambur", "kalapatti"] },
  { slug: "ukkadam", name: "Ukkadam", context: "", share: "Shop or godown address, narrow-lane access and the best loading window.", near: ["town-hall-oppanakara-street", "kuniyamuthur", "podanur"] },
  { slug: "town-hall-oppanakara-street", name: "Town Hall and Oppanakara Street", context: "", share: "Shop address, nearest vehicle halt point and loading help.", near: ["ukkadam", "rs-puram", "ganapathy"] },
  { slug: "rs-puram", name: "RS Puram", context: "", share: "Address, access for a lorry, and whether loaders are needed.", near: ["town-hall-oppanakara-street", "vadavalli", "ganapathy"] },
  { slug: "vadavalli", name: "Vadavalli", context: "", share: "Pickup and delivery addresses, floors, lift access and list of items.", near: ["rs-puram", "thudiyalur", "kovaipudur"] },
  { slug: "kovaipudur", name: "Kovaipudur", context: "", share: "Both addresses, road width for the vehicle and the list of items.", near: ["vadavalli", "kuniyamuthur", "podanur"] },
  { slug: "kuniyamuthur", name: "Kuniyamuthur", context: "", share: "Pickup address, cargo type and loading arrangements.", near: ["podanur", "kurichi", "kovaipudur"] },
  { slug: "eachanari", name: "Eachanari", context: "", share: "Address, cargo dimensions and whether the load is going towards Pollachi, Kerala or elsewhere.", near: ["podanur", "malumichampatti", "kuniyamuthur"] },
  { slug: "malumichampatti", name: "Malumichampatti", context: "", share: "Pickup address, cargo and loading help needed.", near: ["eachanari", "podanur", "kovaipudur"] },
];
export const AREA_BY_SLUG = Object.fromEntries(AREAS.map((a) => [a.slug, a]));

export const areaKeywords = (name: string): string[] => {
  const n = name.toLowerCase().replace(/ \(.*\)/, "");
  return [`lorry transport in ${n} coimbatore`, `truck transport in ${n} coimbatore`, `trailer transport in ${n} coimbatore`, `lorry service near ${n}`, `lorry booking ${n} coimbatore`, `goods transport ${n} coimbatore`];
};
