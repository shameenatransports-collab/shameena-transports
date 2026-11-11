/** Tamil Nadu towns from which return-load vehicles may come towards Coimbatore. Inbound only; availability-based. */
export interface ReturnOrigin {
  slug: string;
  name: string;
  region: string;
  km: number; // approximate road distance to Coimbatore
  note: string; // typical outbound cargo from the origin, hedged
}

export const RETURN_ORIGINS: ReturnOrigin[] = [
  { slug: "tirupur", name: "Tirupur", region: "Tirupur District", km: 50, note: "knitwear, garment cartons and yarn" },
  { slug: "erode", name: "Erode", region: "Erode District", km: 100, note: "textile, turmeric and packed goods" },
  { slug: "salem", name: "Salem", region: "Salem District", km: 165, note: "steel, sago and engineering goods" },
  { slug: "karur", name: "Karur", region: "Karur District", km: 130, note: "home textile bales and bus-body material" },
  { slug: "namakkal", name: "Namakkal", region: "Namakkal District", km: 150, note: "poultry feed, egg trays and packed goods" },
  { slug: "dindigul", name: "Dindigul", region: "Dindigul District", km: 165, note: "agri produce, leather goods and locks" },
  { slug: "trichy", name: "Tiruchirappalli (Trichy)", region: "Tiruchirappalli District", km: 215, note: "engineering goods and building material" },
  { slug: "madurai", name: "Madurai", region: "Madurai District", km: 210, note: "packed goods, agri produce and textile" },
  { slug: "tirunelveli", name: "Tirunelveli", region: "Tirunelveli District", km: 430, note: "packed goods and building material" },
  { slug: "hosur", name: "Hosur", region: "Krishnagiri District", km: 330, note: "industrial and engineering cargo" },
  { slug: "vellore", name: "Vellore", region: "Vellore District", km: 380, note: "leather goods and industrial cargo" },
  { slug: "chennai", name: "Chennai", region: "Chennai", km: 500, note: "port cargo, industrial goods and packed goods" },
];

export const RETURN_ORIGIN_BY_SLUG: Record<string, ReturnOrigin> = Object.fromEntries(RETURN_ORIGINS.map((o) => [o.slug, o]));
export const returnOriginUrl = (slug: string) => `/transportation/return-load/${slug}`;
export const RETURN_HUB_PATH = "/transportation/services/return-load";
