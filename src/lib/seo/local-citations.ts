import { COIMBATORE_OFFICE_CONTENT as office } from "./local-content";

export const LOCAL_CITATIONS_PATH = "/local-citations";
export const OFFICE_MAPS_URL = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(`${office.name}, ${office.address}`);
export const LOCAL_CITATION_AREAS = [
  { name: "Podanur", detail: "Our office base for Coimbatore goods-transport enquiries. Confirm your visit on WhatsApp before travelling.", path: "/transportation/coimbatore", office: true },
  { name: "Kurichi", detail: "Factory and industrial-area pickup enquiries coordinated from Podanur. Share the unit address, gate access and loading equipment.", path: "/transportation/coimbatore", office: false },
  { name: "Sulur", detail: "Textile and engineering cargo enquiries in Coimbatore district. Confirm package dimensions, mill gate timings and unloading arrangements.", path: "/transportation/sulur", office: false },
  { name: "Pollachi", detail: "Coimbatore district goods transport enquiries. Send both address pins, cargo details and the preferred loading date.", path: "/transportation/pollachi", office: false },
  { name: "Mettupalayam", detail: "Local goods deliveries and pickup enquiries. Vehicle access and the exact delivery address are checked before booking.", path: "/transportation/mettupalayam", office: false },
];
export const PORT_DELIVERY_REFERENCES = [
  { name: "Chennai Port", state: "Tamil Nadu", source: "https://www.chennaiport.gov.in/" },
  { name: "Cochin Port (Kochi)", state: "Kerala", source: "https://www.cochinport.gov.in/" },
];
export const CITATION_SERVICE_SLUGS = ["truck-transport", "trailer-transport", "freight-transport", "logistics"];