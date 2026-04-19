// Localized SEO data for Tamil Nadu city landing pages
// Used by src/pages/CityLanding.tsx for /coimbatore, /chennai, /tiruppur, /madurai

export type CitySlug = "coimbatore" | "chennai" | "tiruppur" | "madurai";

export interface CityData {
  slug: CitySlug;
  name: string;
  nameTamil: string;
  region: string;
  postalCode: string;
  geo: { lat: string; lng: string };
  tagline: string;
  metaTitle: string;
  metaDescription: string;
  heroIntro: string;
  about: string;
  transport: {
    headline: string;
    description: string;
    routes: string[];
    industries: string[];
  };
  financial: {
    headline: string;
    description: string;
    highlights: string[];
  };
  legal: {
    headline: string;
    description: string;
    highlights: string[];
  };
  landmarks: string[];
  faqs: { q: string; a: string }[];
}

export const CITY_DATA: Record<CitySlug, CityData> = {
  coimbatore: {
    slug: "coimbatore",
    name: "Coimbatore",
    nameTamil: "கோயம்புத்தூர்",
    region: "Tamil Nadu",
    postalCode: "641004",
    geo: { lat: "11.0168", lng: "76.9558" },
    tagline: "Headquartered in Coimbatore — Serving the Manchester of South India Since 1982",
    metaTitle: "Transport, Loans & Legal Services in Coimbatore | STA Corporate Solutions Since 1982",
    metaDescription:
      "STA Corporate Solutions — 43+ years in Coimbatore. Full-load lorry transport, MSME/Mudra/home loans, property & company law. Lowest commission in Coimbatore. Call 94430 33055.",
    heroIntro:
      "Our home city. From Peelamedu to Saravanampatti, Gandhipuram to Singanallur — STA has powered Coimbatore's textile mills, foundries, and pump industries for over four decades.",
    about:
      "Founded in 1982 on VK Road, Peelamedu, STA Corporate Solutions has grown alongside Coimbatore's transformation into India's pump capital and textile hub. We understand local business — from Tirupur knitwear exporters to Coimbatore's wet-grinder manufacturers — and deliver transport, finance, and legal solutions tailored to Kongu Nadu enterprise.",
    transport: {
      headline: "Full Load & Return Load Lorry Transport from Coimbatore",
      description:
        "12+ owned lorries operating daily from Coimbatore to all major Tamil Nadu cities and across South India. Specialised in textile, foundry, pump, and engineering cargo.",
      routes: [
        "Coimbatore → Chennai (daily)",
        "Coimbatore → Tiruppur → Erode (multiple trips/day)",
        "Coimbatore → Madurai → Trichy",
        "Coimbatore → Bangalore & Hosur",
        "Coimbatore → Salem → Namakkal",
        "Coimbatore → Kerala (Cochin, Calicut)",
      ],
      industries: ["Textiles & Knitwear", "Pump & Motor Manufacturing", "Foundry & Castings", "Engineering Goods", "Auto Components"],
    },
    financial: {
      headline: "MSME, Mudra, Home & Business Loans in Coimbatore",
      description:
        "Lowest commission loan facilitation in Coimbatore. Direct relationships with all major nationalised banks, NBFCs, and Tamil Nadu co-operative banks.",
      highlights: [
        "MSME & Mudra loans for SIDCO and SIPCOT units",
        "Home loans across Coimbatore, RS Puram, Saibaba Colony, Kovaipudur",
        "Business loans for textile mills, foundries, and exporters",
        "Quick processing — most approvals in 7–14 working days",
      ],
    },
    legal: {
      headline: "Property, Company & Litigation Legal Services in Coimbatore",
      description:
        "End-to-end legal support for Coimbatore residents and businesses — from patta transfer at Taluk Office to High Court Madras Bench representation.",
      highlights: [
        "Property documentation & EC verification",
        "Company registration (Pvt Ltd, LLP, OPC) with MCA Coimbatore",
        "GST registration & filing for Tirupur exporters",
        "Civil & commercial litigation across Coimbatore courts",
      ],
    },
    landmarks: ["Peelamedu", "Gandhipuram", "RS Puram", "Saravanampatti", "Singanallur", "Saibaba Colony", "Kovaipudur", "Race Course"],
    faqs: [
      {
        q: "Where is STA Corporate Solutions located in Coimbatore?",
        a: "Our head office is at No.302/2A7, VK Road, Peelamedu, Coimbatore – 641004. Walk-ins welcome Mon–Sat, 9 AM to 7 PM.",
      },
      {
        q: "Do you arrange same-day lorry pickup within Coimbatore?",
        a: "Yes. With 12+ owned lorries based in Coimbatore, we typically arrange pickup within 4–6 hours for full-load bookings.",
      },
      {
        q: "Can you help me get an MSME loan for my Coimbatore business?",
        a: "Absolutely. We have facilitated MSME, Mudra, and CGTMSE loans for hundreds of Coimbatore-based units across SIDCO, SIPCOT, and private industrial estates.",
      },
    ],
  },
  chennai: {
    slug: "chennai",
    name: "Chennai",
    nameTamil: "சென்னை",
    region: "Tamil Nadu",
    postalCode: "600001",
    geo: { lat: "13.0827", lng: "80.2707" },
    tagline: "Trusted Logistics & Legal Partner for Chennai Businesses Since 1982",
    metaTitle: "Transport, Loans & Legal Services in Chennai | STA Corporate Solutions",
    metaDescription:
      "Coimbatore-to-Chennai lorry transport, business loans & High Court legal services. 43 years of trusted service across Chennai, Ambattur, Sriperumbudur. Call 94430 33055.",
    heroIntro:
      "Daily lorry runs to Chennai and back — connecting Tamil Nadu's capital with the manufacturing belt of Coimbatore, Tiruppur, and Erode for over four decades.",
    about:
      "Chennai is the gateway for Tamil Nadu's exports and the seat of the Madras High Court. STA serves Chennai's automobile cluster (Sriperumbudur, Oragadam), textile traders in Sowcarpet & Parry's Corner, and businesses across Ambattur Industrial Estate with reliable transport, financing, and legal support.",
    transport: {
      headline: "Coimbatore ↔ Chennai Daily Full-Load Lorry Service",
      description:
        "Dedicated lorries operating the NH-44/NH-544 corridor every day. Pickup from Coimbatore, Tiruppur, Erode, Salem — direct to Chennai port, Ambattur, Sriperumbudur, or anywhere within Greater Chennai.",
      routes: [
        "Coimbatore → Chennai (overnight)",
        "Tiruppur → Chennai Port (export cargo)",
        "Erode → Ambattur Industrial Estate",
        "Salem → Sriperumbudur (auto components)",
        "Chennai → return loads to Coimbatore",
      ],
      industries: ["Garment Exports", "Auto & Auto-Components", "Electronics (Sriperumbudur)", "Pharmaceuticals", "FMCG Distribution"],
    },
    financial: {
      headline: "Business & Trade Loans for Chennai Enterprises",
      description:
        "Loan facilitation for Chennai importers, exporters, and SMEs — leveraging our 43-year banking relationships across Tamil Nadu.",
      highlights: [
        "Working capital for Chennai port-linked exporters",
        "Equipment finance for Ambattur & Sriperumbudur units",
        "Home loans across OMR, ECR, Velachery, Anna Nagar",
        "MSME loans for traders in George Town & Parry's Corner",
      ],
    },
    legal: {
      headline: "Madras High Court & Property Legal Services",
      description:
        "Coordinated legal representation in Chennai with experienced Madras High Court advocates. Property due-diligence across all Chennai zones.",
      highlights: [
        "Madras High Court litigation & writ petitions",
        "Property verification across CMDA-approved layouts",
        "Company registration with MCA Chennai (RoC)",
        "GST appeals & customs documentation for exporters",
      ],
    },
    landmarks: ["Ambattur", "Sriperumbudur", "Oragadam", "OMR / IT Corridor", "Anna Nagar", "T. Nagar", "Sowcarpet", "Parry's Corner"],
    faqs: [
      {
        q: "How often do your lorries run between Coimbatore and Chennai?",
        a: "We operate daily Coimbatore–Chennai full-load services, with most consignments delivered overnight (within 10–12 hours).",
      },
      {
        q: "Can you handle export cargo to Chennai Port?",
        a: "Yes. We regularly move container-ready garment and engineering cargo from Tiruppur and Coimbatore to Chennai Port and ICDs.",
      },
      {
        q: "Do you provide legal support at Madras High Court?",
        a: "Yes — our 43-year network includes empanelled Madras High Court advocates for civil, commercial, writ, and corporate matters.",
      },
    ],
  },
  tiruppur: {
    slug: "tiruppur",
    name: "Tiruppur",
    nameTamil: "திருப்பூர்",
    region: "Tamil Nadu",
    postalCode: "641601",
    geo: { lat: "11.1085", lng: "77.3411" },
    tagline: "The Knitwear Capital's Logistics & Finance Partner Since 1982",
    metaTitle: "Lorry Transport, Export Finance & Legal Services in Tiruppur | STA Corporate Solutions",
    metaDescription:
      "Trusted by Tiruppur knitwear exporters for 40+ years. Daily lorry service, export-linked finance, GST & customs legal support. Call STA Coimbatore: 94430 33055.",
    heroIntro:
      "Tiruppur — India's knitwear capital, exporting ₹35,000+ crore annually. STA has been the silent logistics and finance backbone for hundreds of Tirupur exporters since 1982.",
    about:
      "Just 50 km from our Coimbatore HQ, Tiruppur is part of our daily operations. We understand the rhythm of the Tirupur cluster — from yarn arrival in Karur to fabric processing, dyeing units in Mannarai, and finished-goods dispatch to Chennai Port and beyond.",
    transport: {
      headline: "Daily Lorry Pickup Across All Tirupur Knitwear Zones",
      description:
        "Multiple round trips per day between Tiruppur, Coimbatore, and surrounding clusters. Specialised handling for fabric rolls, dyed garments, and export cartons.",
      routes: [
        "Tiruppur → Chennai Port (export containers)",
        "Tiruppur → Coimbatore (multiple trips/day)",
        "Tiruppur → Erode → Karur (yarn supply chain)",
        "Tiruppur → Bangalore & Mumbai",
      ],
      industries: ["Knitwear & Hosiery Exports", "Dyeing & Processing", "Yarn Trading", "Garment Accessories"],
    },
    financial: {
      headline: "Export Finance & Working Capital for Tirupur Exporters",
      description:
        "Specialised loan facilitation for the Tirupur cluster — packing credit, post-shipment finance, and machinery loans for knitwear units.",
      highlights: [
        "Packing credit (PCFC) & post-shipment finance",
        "Machinery loans for circular knitting & dyeing units",
        "MSME loans for Tirupur cluster job-workers",
        "Cash-credit limits with leading nationalised banks",
      ],
    },
    legal: {
      headline: "GST, Customs & Export Legal Compliance for Tirupur",
      description:
        "Specialised legal support for Tirupur's export-driven economy — GST refunds, customs disputes, factory compliance.",
      highlights: [
        "GST refund filing & follow-up for exporters",
        "Customs valuation disputes & DGFT matters",
        "Factory licence & TNPCB compliance for dyeing units",
        "Labour law compliance (Factories Act, ESI, PF)",
      ],
    },
    landmarks: ["Mannarai", "Anupparpalayam", "Avinashi Road", "Palladam Road", "Kangeyam Road", "Andipalayam"],
    faqs: [
      {
        q: "Do you handle export cargo from Tirupur to Chennai Port?",
        a: "Yes — daily container-ready cargo movement from Tirupur knitwear units to Chennai Port and ICDs at Irugur, with on-time port-cut-off guarantee.",
      },
      {
        q: "Can you arrange packing credit for my Tirupur unit?",
        a: "Yes. We facilitate PCFC, EPC, and post-shipment finance through nationalised banks at lowest commission in the cluster.",
      },
    ],
  },
  madurai: {
    slug: "madurai",
    name: "Madurai",
    nameTamil: "மதுரை",
    region: "Tamil Nadu",
    postalCode: "625001",
    geo: { lat: "9.9252", lng: "78.1198" },
    tagline: "Serving the Temple City & Southern Tamil Nadu Since 1982",
    metaTitle: "Lorry Transport, Loans & Legal Services in Madurai | STA Corporate Solutions",
    metaDescription:
      "Coimbatore-to-Madurai full-load lorry, MSME loans, and legal services for Madurai businesses. 43 years of trust across Southern Tamil Nadu. Call 94430 33055.",
    heroIntro:
      "Madurai — the cultural heart of Tamil Nadu and gateway to the southern districts. STA connects Madurai's traders, textile units, and farmers to opportunities across the state.",
    about:
      "STA serves Madurai's diverse economy — from Sungudi sarees and Madurai jasmine to the rubber, tea, and spice trade flowing in from Theni, Dindigul, and Kambam Valley. With 43 years of cross-state experience, we are the trusted Coimbatore partner for Madurai businesses.",
    transport: {
      headline: "Coimbatore ↔ Madurai Lorry Service & Southern TN Routes",
      description:
        "Regular full-load and return-load services connecting Madurai to Coimbatore, Chennai, and other industrial centres. Subject to route availability for return loads.",
      routes: [
        "Coimbatore → Madurai (daily)",
        "Madurai → Chennai (overnight)",
        "Madurai → Trichy → Tanjore",
        "Madurai → Tirunelveli → Tuticorin Port",
        "Madurai → Theni / Dindigul (agri cargo)",
      ],
      industries: ["Textiles & Sungudi Sarees", "Rubber & Spices Trade", "Granite & Stone", "Agri-Produce", "Tourism Logistics"],
    },
    financial: {
      headline: "MSME & Trade Loans for Madurai Businesses",
      description:
        "Loan facilitation for Madurai's traders, manufacturers, and farmers — through nationalised banks, RRBs, and Tamil Nadu co-operative banks.",
      highlights: [
        "MSME & Mudra loans for Madurai traders",
        "Agri & allied finance for Theni / Dindigul belt",
        "Home loans across Anna Nagar, KK Nagar, Tallakulam",
        "Vehicle & commercial loans for transporters",
      ],
    },
    legal: {
      headline: "Property, Civil & Business Legal Services in Madurai",
      description:
        "Legal support coordinated from Coimbatore, with on-ground partner advocates at the Madurai Bench of the Madras High Court.",
      highlights: [
        "Madurai Bench High Court representation",
        "Property documentation across Madurai district",
        "Company registration & GST for Madurai SMEs",
        "Civil & commercial litigation",
      ],
    },
    landmarks: ["Anna Nagar", "KK Nagar", "Tallakulam", "Goripalayam", "Simmakkal", "Vilangudi", "Arappalayam"],
    faqs: [
      {
        q: "How long does Coimbatore to Madurai lorry transport take?",
        a: "Standard transit is 5–7 hours via NH-83/NH-44. Most full-load bookings are delivered same-day if booked before noon.",
      },
      {
        q: "Do you offer return loads from Madurai to Coimbatore?",
        a: "Yes, subject to route availability. Return loads can save up to 40% on standard transport rates when slots are open.",
      },
    ],
  },
};

export const CITY_SLUGS: CitySlug[] = ["coimbatore", "chennai", "tiruppur", "madurai"];
