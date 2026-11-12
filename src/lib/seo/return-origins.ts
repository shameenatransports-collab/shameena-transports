import { DESTINATIONS } from "./lanes";
/** Tamil Nadu, Kerala and Karnataka towns from which return-load vehicles may come towards Coimbatore. Inbound only; availability-based. */
export interface ReturnOrigin {
  slug: string;
  name: string;
  region: string;
  state: string;
  note: string; // typical outbound cargo from the origin, hedged
}

export const RETURN_ORIGINS: ReturnOrigin[] = [
  { slug: "tirupur", name: "Tirupur", region: "Tirupur District", state: "Tamil Nadu", note: "knitwear, garment cartons and yarn" },
  { slug: "erode", name: "Erode", region: "Erode District", state: "Tamil Nadu", note: "textile, turmeric and packed goods" },
  { slug: "salem", name: "Salem", region: "Salem District", state: "Tamil Nadu", note: "steel, sago and engineering goods" },
  { slug: "karur", name: "Karur", region: "Karur District", state: "Tamil Nadu", note: "home textile bales and bus-body material" },
  { slug: "namakkal", name: "Namakkal", region: "Namakkal District", state: "Tamil Nadu", note: "poultry feed, egg trays and packed goods" },
  { slug: "dindigul", name: "Dindigul", region: "Dindigul District", state: "Tamil Nadu", note: "agri produce, leather goods and locks" },
  { slug: "trichy", name: "Tiruchirappalli (Trichy)", region: "Tiruchirappalli District", state: "Tamil Nadu", note: "engineering goods and building material" },
  { slug: "madurai", name: "Madurai", region: "Madurai District", state: "Tamil Nadu", note: "packed goods, agri produce and textile" },
  { slug: "tirunelveli", name: "Tirunelveli", region: "Tirunelveli District", state: "Tamil Nadu", note: "packed goods and building material" },
  { slug: "hosur", name: "Hosur", region: "Krishnagiri District", state: "Tamil Nadu", note: "industrial and engineering cargo" },
  { slug: "vellore", name: "Vellore", region: "Vellore District", state: "Tamil Nadu", note: "leather goods and industrial cargo" },
  { slug: "chennai", name: "Chennai", region: "Chennai", state: "Tamil Nadu", note: "port cargo, industrial goods and packed goods" },
  ...DESTINATIONS.map(d => ({ slug: d.slug, name: d.name, region: `${d.name}, ${d.state}`, state: d.state, note: d.context })),
];

export const RETURN_ORIGIN_BY_SLUG: Record<string, ReturnOrigin> = Object.fromEntries(RETURN_ORIGINS.map((o) => [o.slug, o]));
export const returnOriginUrl = (slug: string) => `/transportation/return-load/${slug}`;
export const RETURN_HUB_PATH = "/transportation/services/return-load";
