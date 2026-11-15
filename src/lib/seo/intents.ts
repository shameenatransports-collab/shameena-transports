// Search-intent pages: written around the phrases buyers actually type
// (hire, rent, booking, transporter, contractor, factory, builder, trader), all for Coimbatore.
// Vehicles are limited to what STA runs: lorry (open-body), truck (12/14-wheeler, 40 ft open), trailer.
// No prices, no insurance, no delivery-time guarantees, no container loads on trailers.

export type Buyer = "all" | "companies" | "builders" | "traders" | "individuals";
export type VehicleKey = "lorry" | "truck" | "trailer" | "mini-truck";

export interface Intent {
  slug: string; // URL is /{slug}
  h1: string;
  primary: string; // main search phrase
  variants: string[];
  buyer: Buyer;
  answer: string;
  vehicles: VehicleKey[];
  guideTitle: string;
  guide: string[];
  tell: string[];
  faqs: { q: string; a: string }[];
  related: string[]; // intent slugs
}

export const INTENT_PATHS = (slug: string) => `/${slug}`;
export const BUYER_LABEL: Record<Buyer, string> = {
  all: "Hire, rent and booking",
  companies: "Companies, factories and industries",
  builders: "Builders and contractors",
  traders: "Traders, dealers and shops",
  individuals: "Individuals and households",
};

export const INTENTS: Intent[] = [
  // ---------- Hire, rent and booking ----------
  { slug: "lorry-on-hire-coimbatore", h1: "Lorry on Hire in Coimbatore", primary: "lorry on hire in coimbatore", variants: ["lorry for hire coimbatore", "hire lorry in coimbatore", "goods lorry on hire coimbatore", "lorry hire near me coimbatore", "lorry service coimbatore"], buyer: "all",
    answer: "STA Corporate Solutions has lorries on hire in Coimbatore for a single trip, daily use, monthly use or a contract, with experienced drivers and loaders. Call or WhatsApp +91 94430 33055 with your cargo, pickup and delivery points and date to confirm the vehicle.",
    vehicles: ["lorry", "truck"], guideTitle: "Hiring a lorry: what decides the vehicle",
    guide: ["Cargo type and packing: loose, bagged, crated, bundled or long items.", "Total weight and the longest item, so the body length and sides are right.", "Trip type: one-time, daily, monthly or a contract with a fixed pattern.", "Loading help: whether loaders are needed or a forklift or crane is available."],
    tell: ["Pickup and delivery addresses", "Cargo, weight and longest item", "Single trip or daily, monthly or contract hire", "Date and loading time"],
    faqs: [{ q: "How do I hire a lorry in Coimbatore?", a: "Call or WhatsApp +91 94430 33055 with cargo, addresses and date. We confirm the vehicle and freight for that booking." }, { q: "Can I hire a lorry for one trip only?", a: "Yes. Single trips, daily hire, monthly hire and contracts are all arranged, subject to availability." }, { q: "Do lorries come with a driver and loaders?", a: "Lorries run with experienced drivers. Loaders can be arranged on request." }],
    related: ["lorry-on-rent-coimbatore", "lorry-booking-coimbatore", "truck-on-hire-coimbatore"] },
  { slug: "lorry-on-rent-coimbatore", h1: "Lorry on Rent in Coimbatore", primary: "lorry on rent in coimbatore", variants: ["lorry rental coimbatore", "rent a lorry coimbatore", "lorry for rent near me coimbatore", "daily rent lorry coimbatore", "monthly rent lorry coimbatore"], buyer: "all",
    answer: "Lorries on rent in Coimbatore are available from STA Corporate Solutions on a daily, monthly or contract basis, or per trip. Share your cargo and dates on +91 94430 33055 to confirm. There is no published rate card; freight is confirmed per booking.",
    vehicles: ["lorry", "truck"], guideTitle: "Daily, monthly or per trip: which rental fits",
    guide: ["Per trip suits one-time movements such as a site delivery or a godown transfer.", "Daily rental suits several runs in a day between fixed points.", "Monthly or contract rental suits regular dispatches from a unit, dealer or site.", "Tell us expected days and runs so we plan vehicle and driver availability."],
    tell: ["Rental period and expected runs", "Pickup and delivery points", "Cargo and weight", "Start date"],
    faqs: [{ q: "Is lorry rent fixed per km or per day?", a: "There is no fixed rate card. The arrangement depends on trip type, distance, cargo, loading effort and dates, and is confirmed per booking." }, { q: "Can I rent a lorry monthly in Coimbatore?", a: "Yes. Monthly and contract arrangements are possible, subject to availability." }],
    related: ["lorry-on-hire-coimbatore", "lorry-monthly-contract-coimbatore", "truck-rental-coimbatore"] },
  { slug: "lorry-booking-coimbatore", h1: "Book a Lorry in Coimbatore", primary: "lorry booking in coimbatore", variants: ["lorry booking coimbatore", "book lorry online coimbatore", "lorry booking number coimbatore", "lorry contact number coimbatore", "goods lorry booking near me"], buyer: "all",
    answer: "Book a lorry in Coimbatore with STA Corporate Solutions on WhatsApp or by phone at +91 94430 33055, Monday to Saturday, 9 AM to 7 PM. Send pickup, delivery, cargo, weight and date, and we confirm the vehicle and freight.",
    vehicles: ["lorry", "truck", "trailer"], guideTitle: "How booking works",
    guide: ["Send the pickup and delivery locations, with map pins if you can.", "Describe the cargo, weight and packing.", "Tell us the date and whether loaders are needed.", "We confirm the vehicle, availability and freight for that booking."],
    tell: ["Pickup and delivery pins", "Cargo, weight and packing", "Date and time", "Loaders needed or not"],
    faqs: [{ q: "What is the lorry booking number in Coimbatore?", a: "Call or WhatsApp +91 94430 33055 (also +91 90477 21209). Office hours are Monday to Saturday, 9 AM to 7 PM." }, { q: "How soon can a lorry be arranged?", a: "It depends on availability on your date. Enquire early and we confirm what can be arranged." }, { q: "Where is your office?", a: "No 10/135-G, Gurusamy Pillai St Extn, Podanur, Coimbatore 641023." }],
    related: ["lorry-on-hire-coimbatore", "full-truck-load-coimbatore", "transport-company-coimbatore"] },
  { slug: "truck-on-hire-coimbatore", h1: "Truck on Hire in Coimbatore", primary: "truck on hire in coimbatore", variants: ["hire truck coimbatore", "truck hire coimbatore", "12 wheeler truck on hire coimbatore", "14 wheeler truck on hire coimbatore", "40 feet open truck on hire coimbatore"], buyer: "all",
    answer: "STA Corporate Solutions offers trucks on hire in Coimbatore: 12-wheeler and 14-wheeler trucks and open trucks with a 40 ft platform, on a daily, monthly or contract basis. Call or WhatsApp +91 94430 33055 with your cargo and dates.",
    vehicles: ["truck"], guideTitle: "Which truck for which load",
    guide: ["12-wheeler and 14-wheeler trucks suit heavier and bulk loads.", "A 40 ft open platform suits long or bulky items that do not fit a standard body.", "Daily, monthly or contract hire suits regular dispatch patterns.", "Share dimensions and weight so we confirm the right truck."],
    tell: ["Cargo type, weight and length", "Hire period", "Loading equipment at both ends", "Start date"],
    faqs: [{ q: "Which trucks can I hire in Coimbatore?", a: "12-wheeler, 14-wheeler and 40 ft open trucks, subject to availability." }, { q: "Can I hire a truck on a contract basis?", a: "Yes. Daily, monthly and contract hire are available." }],
    related: ["truck-rental-coimbatore", "lorry-on-hire-coimbatore", "trailer-on-hire-coimbatore"] },
  { slug: "truck-rental-coimbatore", h1: "Truck Rental in Coimbatore", primary: "truck rental in coimbatore", variants: ["truck on rent coimbatore", "rent a truck coimbatore", "truck booking coimbatore", "truck service coimbatore", "heavy truck rental coimbatore"], buyer: "all",
    answer: "Truck rental in Coimbatore from STA Corporate Solutions covers 12-wheeler, 14-wheeler and 40 ft open trucks, per trip or on daily, monthly or contract rental. We also have mini trucks (Tata Ace) within Coimbatore for small loads. Call or WhatsApp +91 94430 33055.",
    vehicles: ["truck"], guideTitle: "Is this the right kind of truck rental",
    guide: ["Large vehicles: lorries, 12 and 14-wheeler and 40 ft open trucks, and trailers. Small loads within Coimbatore: mini trucks (Tata Ace).", "If your load is bulky, long, heavy or a full load, a truck or lorry is the usual fit. For a small load within Coimbatore, a mini truck may do.", "Share weight and dimensions so we can confirm suitability before you commit.", "For equipment on a trailer, ask about trailer transport."],
    tell: ["Weight and dimensions", "Rental type", "Route and date", "Loading arrangements"],
    faqs: [{ q: "Do you rent mini trucks or Tata Ace in Coimbatore?", a: "Yes, mini trucks (Tata Ace) are available within Coimbatore for small loads, subject to availability. See the mini truck page." }, { q: "What is the difference between a truck and a lorry here?", a: "A lorry is the open-body goods vehicle for full loads. Trucks are the 12 and 14-wheeler and 40 ft open vehicles on hire." }],
    related: ["truck-on-hire-coimbatore", "lorry-on-rent-coimbatore", "full-truck-load-coimbatore"] },
  { slug: "trailer-on-hire-coimbatore", h1: "Trailer on Hire in Coimbatore", primary: "trailer on hire in coimbatore", variants: ["trailer transport coimbatore", "trailer lorry coimbatore", "trailer for rent coimbatore", "trailer service coimbatore", "trailer booking coimbatore"], buyer: "all",
    answer: "STA Corporate Solutions has trailers in Coimbatore for company equipment shifting and construction material. STA trailers do not carry container loads. Share dimensions, weight and route on +91 94430 33055 and we confirm whether a trailer suits the load.",
    vehicles: ["trailer"], guideTitle: "When a trailer is the right choice",
    guide: ["Heavy or long equipment that is awkward on a standard lorry body.", "Company equipment moving between plants, sites or cities.", "Construction material and site equipment moving in volume.", "Not for containers: our trailers do not carry container loads."],
    tell: ["Equipment dimensions, weight and height", "Crane or forklift at both ends", "Route access at delivery", "Date"],
    faqs: [{ q: "Can a trailer carry a container?", a: "No. STA trailers do not support container loads. We can transport goods up to container yards near the port." }, { q: "Do you provide a crane for loading?", a: "Tell us your loading arrangement at both ends. Where cranes or forklifts are needed, confirm availability before booking." }],
    related: ["machinery-transport-coimbatore", "truck-on-hire-coimbatore", "construction-material-lorry-coimbatore"] },
  { slug: "full-truck-load-coimbatore", h1: "Full Truck Load (FTL) Transport in Coimbatore", primary: "full truck load transport in coimbatore", variants: ["ftl transport coimbatore", "full load lorry coimbatore", "full load transport from coimbatore", "dedicated lorry coimbatore", "full vehicle load coimbatore"], buyer: "all",
    answer: "STA Corporate Solutions provides full truck load transport from Coimbatore: a dedicated lorry or truck for your cargo only, to destinations in Coimbatore district, Kerala and Karnataka. Return loads are strictly on availability. Call or WhatsApp +91 94430 33055.",
    vehicles: ["lorry", "truck", "trailer"], guideTitle: "What a full load means here",
    guide: ["The vehicle carries only your cargo, from pickup to delivery.", "STA handles full loads. Part loads and warehousing are not offered.", "The vehicle (lorry, truck or trailer) depends on cargo, weight and dimensions.", "Outbound is arranged from Coimbatore; the return leg depends on availability."],
    tell: ["Cargo and total weight", "Pickup and delivery", "Date", "Loading and unloading arrangements"],
    faqs: [{ q: "Do you do part load?", a: "No. STA handles full-load transport only." }, { q: "Do you run full loads outside Coimbatore?", a: "Yes, from Coimbatore to Kerala and Karnataka destinations, confirmed per booking." }],
    related: ["lorry-booking-coimbatore", "truck-on-hire-coimbatore", "transporters-in-coimbatore"] },
  { slug: "transporters-in-coimbatore", h1: "Transporters in Coimbatore", primary: "transporters in coimbatore", variants: ["transporter coimbatore", "goods transporters coimbatore", "road transport coimbatore", "lorry transporters coimbatore", "transport service providers coimbatore"], buyer: "all",
    answer: "STA Corporate Solutions is a Podanur, Coimbatore transporter operating since 1982, with its own 6 lorries and 2 trailers plus partnered vehicles. It runs full-load goods transport, trucks on hire, and loaders and packers in Coimbatore and to Kerala and Karnataka.",
    vehicles: ["lorry", "truck", "trailer"], guideTitle: "What to check when choosing a transporter",
    guide: ["How long they have been operating and whether they have a fixed office.", "Whether they own vehicles and how they handle partnered vehicles.", "What they clearly do not offer, so there are no surprises later.", "How quickly and clearly they respond to your enquiry."],
    tell: ["Cargo and route", "Date", "Hire type", "Contact on WhatsApp or phone"],
    faqs: [{ q: "How long has STA been a transporter in Coimbatore?", a: "Since 1982, from Podanur, Coimbatore." }, { q: "Does STA own its vehicles?", a: "STA runs its own 6 lorries and 2 trailers, supported by partnered vehicles." }, { q: "What does STA not offer?", a: "Cargo insurance, warehousing, part loads, container loads on trailers, shipping or customs clearance." }],
    related: ["transport-company-coimbatore", "lorry-booking-coimbatore", "goods-transport-service-coimbatore"] },
  { slug: "transport-company-coimbatore", h1: "Transport Company in Coimbatore", primary: "transport company in coimbatore", variants: ["transport companies coimbatore", "goods transport company coimbatore", "transport office podanur coimbatore", "transport company near me coimbatore", "logistics transport coimbatore"], buyer: "all",
    answer: "STA Corporate Solutions (formerly Shameena Transports) is a transport company at Gurusamy Pillai St Extn, Podanur, Coimbatore, serving businesses and individuals since 1982 with lorries, trucks and trailers, and loaders and packers.",
    vehicles: ["lorry", "truck", "trailer"], guideTitle: "Services in one place",
    guide: ["Full-load goods transport by lorry, truck and trailer.", "Trucks on hire: 12-wheeler, 14-wheeler and 40 ft open trucks.", "Loaders and packers: house shifting, office relocation, loading and unloading.", "Routes from Coimbatore to Kerala and Karnataka; return loads on availability."],
    tell: ["What you are moving", "From where to where", "Date", "Phone or WhatsApp number"],
    faqs: [{ q: "Where is the STA office?", a: "No 10/135-G, Gurusamy Pillai St Extn, Podanur, Coimbatore 641023." }, { q: "Which hours can I call?", a: "Monday to Saturday, 9 AM to 7 PM, on +91 94430 33055." }],
    related: ["transporters-in-coimbatore", "lorry-booking-coimbatore", "goods-transport-service-coimbatore"] },

  // ---------- Companies, factories and industries ----------
  { slug: "goods-transport-service-coimbatore", h1: "Goods Transport Service in Coimbatore for Companies", primary: "goods transport service in coimbatore", variants: ["goods transport coimbatore", "goods carrier coimbatore", "commercial goods transport coimbatore", "industrial goods transport coimbatore", "cargo transport coimbatore"], buyer: "companies",
    answer: "STA Corporate Solutions provides goods transport for companies in Coimbatore: finished goods, raw material, machinery parts and packed cargo by lorry, truck or trailer, on single trips or contract dispatch. Call or WhatsApp +91 94430 33055.",
    vehicles: ["lorry", "truck", "trailer"], guideTitle: "How companies usually book goods transport",
    guide: ["Single dispatches: share each load's cargo, weight and delivery.", "Regular dispatches: agree a monthly or contract arrangement for repeat movements.", "Heavy or odd-sized goods: confirm the truck or trailer before the day.", "Share unit gate and dock details so the vehicle reaches the loading point."],
    tell: ["Unit address and dock access", "Cargo, weight and packing", "Single trip or regular dispatch", "Delivery points"],
    faqs: [{ q: "Can you serve regular dispatches from our unit?", a: "Yes. Monthly and contract arrangements are possible, subject to availability." }, { q: "Do you handle both local and outstation deliveries?", a: "Local Coimbatore deliveries, and outbound to Kerala and Karnataka, confirmed per booking." }],
    related: ["factory-goods-transport-coimbatore", "lorry-monthly-contract-coimbatore", "machinery-transport-coimbatore"] },
  { slug: "factory-goods-transport-coimbatore", h1: "Factory Goods Transport in Coimbatore", primary: "factory goods transport in coimbatore", variants: ["lorry for factory coimbatore", "truck for manufacturers coimbatore", "pump motor transport coimbatore", "foundry casting transport coimbatore", "textile goods transport coimbatore", "factory shifting coimbatore"], buyer: "companies",
    answer: "STA Corporate Solutions moves factory goods in Coimbatore: crated pumps and motors, castings, textile bales and cartons, packed finished goods and factory shifting loads, by lorry, truck or trailer. Call or WhatsApp +91 94430 33055.",
    vehicles: ["lorry", "truck", "trailer"], guideTitle: "Matching the vehicle to factory cargo",
    guide: ["Crated pumps, motors and parts usually go on a lorry or truck, tied down on the open body.", "Heavy castings and plant equipment may need a truck or trailer.", "Textile bales and cartons are loaded flat and sheeted against weather.", "Share crate or pallet sizes and weights so the load is planned correctly."],
    tell: ["Crate or pallet dimensions and weights", "Dock height and forklift availability", "Pickup unit and delivery address", "Single trip or regular dispatch"],
    faqs: [{ q: "Do you move pumps and motors?", a: "Yes, crated, within the vehicle's height and weight limits, confirmed per booking." }, { q: "Do you move factory machinery when shifting units?", a: "Yes. Share dimensions and weight; a truck or trailer may be used." }],
    related: ["goods-transport-service-coimbatore", "machinery-transport-coimbatore", "lorry-monthly-contract-coimbatore"] },
  { slug: "machinery-transport-coimbatore", h1: "Machinery and Equipment Transport in Coimbatore", primary: "machinery transport in coimbatore", variants: ["equipment shifting coimbatore", "machine shifting coimbatore", "plant shifting lorry coimbatore", "heavy equipment transport coimbatore", "trailer for machinery coimbatore"], buyer: "companies",
    answer: "STA Corporate Solutions transports machinery and company equipment in Coimbatore on trailers, trucks or lorries, depending on dimensions and weight. Share size, weight and loading arrangements on +91 94430 33055 and we confirm the vehicle.",
    vehicles: ["trailer", "truck", "lorry"], guideTitle: "Planning a machinery move",
    guide: ["Measure length, width and height, and note the weight.", "Confirm crane or forklift availability at pickup and delivery.", "Check access roads and gates at the delivery site.", "Not suited: oversize loads beyond permitted limits, which are checked per booking."],
    tell: ["Length, width, height and weight", "Crane or forklift at both ends", "Route and access", "Preferred date"],
    faqs: [{ q: "Which vehicle moves heavy equipment?", a: "A trailer or truck, depending on dimensions and weight, confirmed per booking." }, { q: "Can you shift a whole workshop?", a: "Factory and workshop shifting loads are handled; share the item list and sizes first." }],
    related: ["trailer-on-hire-coimbatore", "factory-goods-transport-coimbatore", "truck-on-hire-coimbatore"] },
  { slug: "lorry-monthly-contract-coimbatore", h1: "Monthly and Contract Lorry Hire in Coimbatore", primary: "monthly lorry hire in coimbatore", variants: ["contract lorry coimbatore", "lorry on monthly rent coimbatore", "monthly truck contract coimbatore", "regular goods transport coimbatore", "lorry contract for company coimbatore"], buyer: "companies",
    answer: "STA Corporate Solutions offers lorries and trucks on monthly and contract hire in Coimbatore for companies with regular dispatches. Share your pattern of runs, cargo and route on +91 94430 33055 and we confirm what can be arranged.",
    vehicles: ["lorry", "truck"], guideTitle: "Setting up a contract arrangement",
    guide: ["Describe the routine: how many runs, to where, and how often.", "State cargo type, weight and loading time windows.", "We confirm vehicle and driver availability for the period.", "Freight is agreed per arrangement; no public rate card."],
    tell: ["Pattern of runs and routes", "Cargo and weight", "Start date and duration", "Loading and unloading windows"],
    faqs: [{ q: "Is there a minimum contract period?", a: "This is agreed per arrangement. Share your requirement and we confirm." }, { q: "Can the arrangement include loaders?", a: "Loaders can be arranged on request." }],
    related: ["lorry-on-rent-coimbatore", "goods-transport-service-coimbatore", "truck-on-hire-coimbatore"] },

  // ---------- Builders and contractors ----------
  { slug: "construction-material-lorry-coimbatore", h1: "Lorry for Construction Material in Coimbatore", primary: "construction material transport in coimbatore", variants: ["building material lorry coimbatore", "cement transport coimbatore", "steel transport coimbatore", "lorry for builders coimbatore", "lorry for contractors coimbatore", "construction material lorry on hire"], buyer: "builders",
    answer: "STA Corporate Solutions moves construction material in Coimbatore: cement bags, steel and TMT bars, pipes, tiles, plywood and site equipment, by lorry, truck or trailer, to sites in Coimbatore district and beyond. Call or WhatsApp +91 94430 33055.",
    vehicles: ["lorry", "truck", "trailer"], guideTitle: "What builders should tell us",
    guide: ["Material list with bag counts, bar lengths or pipe sizes and total weight.", "Site address, access road width and unloading arrangement.", "One delivery or several, and the dates.", "Cement bags are suitable. Loose sand and gravel are not suited."],
    tell: ["Material list and weight", "Site address and access", "Unloading help on site", "Dates and number of deliveries"],
    faqs: [{ q: "Do you carry cement and steel?", a: "Yes. Cement bags are sheeted with tarpaulin; steel and pipes go on the open body." }, { q: "Do you carry sand or gravel?", a: "No. Loose sand and gravel are not suited to our vehicles. Cement bags are fine." }, { q: "Can I get a lorry for several site deliveries?", a: "Yes. Daily or monthly hire is available, subject to availability." }],
    related: ["transport-contractor-coimbatore", "lorry-on-hire-coimbatore", "trailer-on-hire-coimbatore"] },
  { slug: "transport-contractor-coimbatore", h1: "Transport Contractor in Coimbatore for Building Sites", primary: "transport contractor in coimbatore", variants: ["transportation contractor coimbatore", "lorry contractor coimbatore", "material transport contractor coimbatore", "site material transport coimbatore", "lorry supply for construction coimbatore"], buyer: "builders",
    answer: "STA Corporate Solutions works as a transport contractor in Coimbatore for builders and contractors, supplying lorries, trucks and trailers for material and equipment on a trip, daily, monthly or contract basis. Call or WhatsApp +91 94430 33055.",
    vehicles: ["lorry", "truck", "trailer"], guideTitle: "How contractors arrange site transport",
    guide: ["Share the project schedule and expected daily or weekly runs.", "Specify materials and which need weather cover.", "Confirm site access and the unloading arrangement.", "We confirm vehicle availability for the period."],
    tell: ["Project location and schedule", "Material types", "Expected runs per day or week", "Unloading arrangement"],
    faqs: [{ q: "Can you supply vehicles for the length of a project?", a: "Monthly and contract arrangements are possible, subject to availability." }, { q: "Do you provide earthmoving or material handling machinery?", a: "No. STA provides transport vehicles: lorries, trucks and trailers." }],
    related: ["construction-material-lorry-coimbatore", "lorry-monthly-contract-coimbatore", "trailer-on-hire-coimbatore"] },

  // ---------- Traders, dealers and shops ----------
  { slug: "lorry-for-traders-coimbatore", h1: "Lorry for Traders and Dealers in Coimbatore", primary: "lorry for traders in coimbatore", variants: ["wholesale goods transport coimbatore", "bagged goods transport coimbatore", "lorry for dealers coimbatore", "godown to shop lorry coimbatore", "stock transport coimbatore", "rice bag transport coimbatore"], buyer: "traders",
    answer: "STA Corporate Solutions moves stock for traders and dealers in Coimbatore: bagged rice, grain, feed and fertiliser, cartons and packed goods, between godowns, shops and customers, by lorry or truck, on a trip or regular hire basis.",
    vehicles: ["lorry", "truck"], guideTitle: "What traders should share",
    guide: ["Number of bags or cartons and total weight.", "Godown and shop addresses, with the best loading window.", "Whether loaders are needed at either end.", "Regular days or a one-time movement."],
    tell: ["Bags or cartons and weight", "Godown and delivery addresses", "Loaders needed or not", "Dates"],
    faqs: [{ q: "Do you move bagged goods?", a: "Yes. Bags are loaded flat, tied down and sheeted against rain." }, { q: "Can you do regular deliveries to my customers?", a: "Yes, on daily, monthly or contract hire, subject to availability." }],
    related: ["goods-transport-service-coimbatore", "lorry-on-hire-coimbatore", "lorry-monthly-contract-coimbatore"] },

  // ---------- Mini trucks (Tata Ace), within Coimbatore ----------
  { slug: "mini-truck-on-rent-coimbatore", h1: "Mini Truck on Rent in Coimbatore", primary: "mini truck on rent in coimbatore", variants: ["mini truck rental coimbatore", "mini truck booking coimbatore", "mini lorry coimbatore", "small goods vehicle coimbatore", "mini truck for shifting coimbatore"], buyer: "all",
    answer: "STA Corporate Solutions has mini trucks (Tata Ace) on rent within Coimbatore for small loads, shop and household goods and local deliveries. Call or WhatsApp +91 94430 33055 with your goods, both addresses and time, and we confirm availability.",
    vehicles: ["mini-truck"], guideTitle: "When a mini truck is the right pick",
    guide: ["Small loads that do not need a full lorry: a few cartons, furniture pieces or shop stock.", "Local deliveries within Coimbatore between shops, godowns and homes.", "Narrow lanes and gates where a larger vehicle cannot reach.", "For heavy, long or bulk loads, ask about a lorry or truck instead."],
    tell: ["Pickup and delivery addresses in Coimbatore", "Goods and approximate weight", "Loaders needed or not", "Date and time"],
    faqs: [{ q: "Is a mini truck available for local use only?", a: "Mini trucks are for use within Coimbatore. For other destinations, ask about a lorry or truck." }, { q: "Can loaders come with the mini truck?", a: "Loaders can be arranged on request." }, { q: "Is there a fixed rent?", a: "There is no public rate card. It is confirmed per booking." }],
    related: ["tata-ace-on-rent-coimbatore", "tempo-service-coimbatore", "house-shifting-lorry-coimbatore"] },
  { slug: "tata-ace-on-rent-coimbatore", h1: "Tata Ace on Rent in Coimbatore", primary: "tata ace on rent in coimbatore", variants: ["tata ace for rent coimbatore", "tata ace booking coimbatore", "tata ace hire coimbatore", "chota hathi coimbatore", "tata ace near me coimbatore"], buyer: "all",
    answer: "Tata Ace on rent in Coimbatore: STA Corporate Solutions provides mini trucks (Tata Ace) within Coimbatore for small goods, shop stock and household items. Call or WhatsApp +91 94430 33055 with your goods and addresses.",
    vehicles: ["mini-truck"], guideTitle: "Booking a Tata Ace",
    guide: ["Send both addresses in Coimbatore and the time you need it.", "List the goods and how they are packed.", "Say if loading help is needed at either end.", "We confirm availability and freight for that booking."],
    tell: ["Both addresses", "Goods and packing", "Loading help", "Date and time"],
    faqs: [{ q: "Can I book a Tata Ace by WhatsApp?", a: "Yes. WhatsApp +91 94430 33055 with addresses, goods and time." }, { q: "Do you also have larger vehicles?", a: "Yes: lorries, 12 and 14-wheeler and 40 ft open trucks, and trailers." }],
    related: ["mini-truck-on-rent-coimbatore", "tempo-service-coimbatore", "lorry-on-hire-coimbatore"] },
  { slug: "tempo-service-coimbatore", h1: "Tempo Service in Coimbatore for Small Loads", primary: "tempo service in coimbatore", variants: ["tempo for shifting coimbatore", "tempo booking coimbatore", "small load transport coimbatore", "local goods delivery coimbatore", "shop goods transport coimbatore"], buyer: "traders",
    answer: "STA Corporate Solutions offers a tempo-type service in Coimbatore with mini trucks (Tata Ace) for small loads, shop and godown deliveries and household goods. Larger loads move on lorries and trucks. Call or WhatsApp +91 94430 33055.",
    vehicles: ["mini-truck", "lorry"], guideTitle: "Small loads and local deliveries",
    guide: ["Shop and godown deliveries within Coimbatore.", "Household items and small shifting jobs.", "Mini trucks reach narrow lanes where a lorry cannot.", "When the load grows, we move you to a lorry or truck."],
    tell: ["Goods and weight", "Addresses within Coimbatore", "Number of trips", "Date and time"],
    faqs: [{ q: "Can I get regular small deliveries?", a: "Daily or regular arrangements can be discussed, subject to availability." }, { q: "Do you cover areas outside Coimbatore with mini trucks?", a: "Mini trucks are for use within Coimbatore." }],
    related: ["mini-truck-on-rent-coimbatore", "lorry-for-traders-coimbatore", "house-shifting-lorry-coimbatore"] },

  // ---------- Individuals ----------
  { slug: "house-shifting-lorry-coimbatore", h1: "Lorry for House Shifting in Coimbatore", primary: "house shifting lorry in coimbatore", variants: ["home shifting coimbatore", "loaders and packers coimbatore", "office shifting coimbatore", "house shifting vehicle coimbatore", "packers and movers lorry coimbatore"], buyer: "individuals",
    answer: "STA Corporate Solutions offers house shifting and office relocation in Coimbatore with loaders and packers and a lorry or truck for your goods. Call or WhatsApp +91 94430 33055 with both addresses, floors and your list of items.",
    vehicles: ["lorry", "truck"], guideTitle: "Planning a house or office shift",
    guide: ["List major items, furniture and appliances, and approximate boxes.", "Note floors, lift or staircase access at both addresses.", "Check vehicle access to the lane or gate.", "Tell us if you need packing, loading and unloading or loading only."],
    tell: ["Both addresses and floors", "Lift or staircase access", "Item list", "Date and time"],
    faqs: [{ q: "Do you provide loaders for house shifting?", a: "Yes, loaders and packers services cover house shifting, office relocation and loading and unloading." }, { q: "Is goods insurance provided?", a: "No. STA does not provide cargo insurance or accident cover." }],
    related: ["lorry-booking-coimbatore", "lorry-on-hire-coimbatore", "transport-company-coimbatore"] },
];
export const INTENT_BY_SLUG = Object.fromEntries(INTENTS.map((i) => [i.slug, i]));
