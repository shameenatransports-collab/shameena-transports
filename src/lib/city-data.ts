// Localized SEO data for Tamil Nadu city landing pages
// Used by src/pages/CityLanding.tsx

export type CitySlug =
  | "coimbatore"
  | "chennai"
  | "tiruppur"
  | "madurai"
  | "erode"
  | "salem"
  | "trichy"
  | "tirunelveli";

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
      "STA Corporate Solutions — 43+ years in Coimbatore. Full-load lorry transport, MSME/Mudra and business funding assistance, property & company law. Business funding guidance in Coimbatore. Call 94430 33055.",
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
      headline: "MSME, Mudra & Business Funding Assistance in Coimbatore",
      description:
        "Business-focused loan assistance in Coimbatore for MSME, Mudra, working capital, industrial and government funding scheme requirements.",
      highlights: [
        "MSME & Mudra loans for SIDCO and SIPCOT units",
        "Business funding guidance across Coimbatore, RS Puram, Saibaba Colony, Kovaipudur",
        "Business loans for textile mills, foundries, and exporters",
        "Documentation support as per lender and scheme requirements",
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
        a: "Absolutely. We have facilitated MSME, Mudra, and CGTMSE loans for eligible Coimbatore-based units across SIDCO, SIPCOT, and private industrial estates.",
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
        "Loan assistance for Chennai importers, exporters, and SMEs — leveraging our long-standing business service experience across Tamil Nadu.",
      highlights: [
        "Working capital for Chennai port-linked exporters",
        "Equipment finance for Ambattur & Sriperumbudur units",
        "Business funding guidance across OMR, ECR, Velachery, Anna Nagar",
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
        a: "Yes — our long-standing professional network includes empanelled Madras High Court advocates for civil, commercial, writ, and corporate matters.",
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
        "Specialised loan assistance for the Tirupur cluster — packing credit, post-shipment finance, and machinery loans for knitwear units.",
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
        a: "Yes — daily container-ready cargo movement from Tirupur knitwear units to Chennai Port and ICDs at Irugur, with route-planned port-cut-off coordination.",
      },
      {
        q: "Can you arrange packing credit for my Tirupur unit?",
        a: "Yes. We facilitate PCFC, EPC, and post-shipment finance documentation through eligible lender processes.",
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
        "Loan assistance for Madurai's traders, manufacturers, and farmers — through nationalised banks, RRBs, and Tamil Nadu co-operative banks.",
      highlights: [
        "MSME & Mudra loans for Madurai traders",
        "Agri & allied finance for Theni / Dindigul belt",
        "Business funding guidance across Anna Nagar, KK Nagar, Tallakulam",
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
        a: "Yes, subject to route availability. Return load pricing depends on current route availability and cargo requirements.",
      },
    ],
  },

  erode: {
    slug: "erode",
    name: "Erode",
    nameTamil: "ஈரோடு",
    region: "Tamil Nadu",
    postalCode: "638001",
    geo: { lat: "11.3410", lng: "77.7172" },
    tagline: "Powering the Turmeric City & Textile Hub Since 1982",
    metaTitle: "Lorry Transport, Loans & Legal Services in Erode | STA Corporate Solutions",
    metaDescription:
      "Daily Coimbatore–Erode lorry service, MSME & textile loans, GST & legal support for Erode handloom and turmeric trade. 43 years trusted. Call 94430 33055.",
    heroIntro:
      "Erode — turmeric city, handloom hub, and gateway to the Kongu belt. Just 100 km from our Coimbatore HQ, STA serves Erode's textile clusters, turmeric mandis, and SME factories every single day.",
    about:
      "From the handloom looms of Chennimalai to the turmeric mandis of Perundurai, Erode's economy thrives on trade and textile manufacturing. STA has been a silent partner to Erode businesses for over four decades — moving cargo, arranging finance, and handling legal compliance.",
    transport: {
      headline: "Daily Lorry Service Connecting Erode with Tamil Nadu",
      description:
        "Multiple round trips daily between Erode, Coimbatore, and Tiruppur. Specialised handling for textiles, turmeric, and processed foods.",
      routes: [
        "Erode → Coimbatore (multiple trips/day)",
        "Erode → Tiruppur → Karur",
        "Erode → Chennai (overnight)",
        "Erode → Salem → Bangalore",
        "Perundurai SIPCOT → Chennai Port",
      ],
      industries: ["Handloom & Powerloom", "Turmeric & Spices", "Readymade Garments", "Processed Foods", "Engineering"],
    },
    financial: {
      headline: "MSME, Mudra & Trade Loans for Erode Businesses",
      description:
        "Loan assistance for Erode's traders, weavers, and SMEs through nationalised banks and Tamil Nadu co-operative banks.",
      highlights: [
        "MSME & Mudra loans for Perundurai SIPCOT units",
        "Working capital for turmeric and textile traders",
        "Business funding guidance across Erode, Bhavani, Gobichettipalayam",
        "Vehicle loans for transporters & traders",
      ],
    },
    legal: {
      headline: "Property, GST & Business Legal Services in Erode",
      description:
        "End-to-end legal support coordinated from Coimbatore for Erode district residents and businesses.",
      highlights: [
        "Property documentation across Erode district",
        "GST registration & filing for textile traders",
        "Company registration & MSME compliance",
        "Civil & commercial litigation",
      ],
    },
    landmarks: ["Perundurai", "Bhavani", "Chennimalai", "Gobichettipalayam", "Sathyamangalam", "Brough Road"],
    faqs: [
      {
        q: "How quickly can you arrange a lorry from Erode to Coimbatore?",
        a: "Typically within 2–3 hours. With multiple lorries running this corridor daily, Erode–Coimbatore is one of our fastest pickup routes.",
      },
      {
        q: "Do you handle loans for Perundurai SIPCOT units?",
        a: "Yes — we have facilitated MSME, Mudra, and term loans for eligible Perundurai SIPCOT units through lender documentation processes.",
      },
    ],
  },

  salem: {
    slug: "salem",
    name: "Salem",
    nameTamil: "சேலம்",
    region: "Tamil Nadu",
    postalCode: "636001",
    geo: { lat: "11.6643", lng: "78.1460" },
    tagline: "Steel City's Trusted Transport, Finance & Legal Partner Since 1982",
    metaTitle: "Lorry Transport, Loans & Legal Services in Salem | STA Corporate Solutions",
    metaDescription:
      "Coimbatore–Salem lorry transport, MSME & steel-trade finance, legal services for Salem's industrial belt. 43 years of Tamil Nadu trust. Call 94430 33055.",
    heroIntro:
      "Salem — Tamil Nadu's steel city and gateway to the Kongu plateau. STA's lorries link Salem's SAIL plant, magnesite belt, and sago industries to markets across South India.",
    about:
      "Home to SAIL Salem Steel Plant, the magnesite mines of Yercaud belt, and a thriving sago and silver-jewellery trade — Salem's economy is uniquely diverse. STA has supported Salem's industrial belt with reliable transport, banking access, and legal services since 1982.",
    transport: {
      headline: "Coimbatore ↔ Salem & Salem ↔ Bangalore Lorry Service",
      description:
        "Daily full-load services covering Salem, Namakkal, and Dharmapuri. Specialised in steel coils, magnesite, sago, and engineering goods.",
      routes: [
        "Coimbatore → Salem (daily)",
        "Salem → Bangalore & Hosur",
        "Salem → Chennai (overnight)",
        "Salem → Namakkal → Karur",
        "Salem → Dharmapuri → Krishnagiri",
      ],
      industries: ["Steel & Stainless Steel", "Magnesite & Mining", "Sago Manufacturing", "Silver Jewellery", "Poultry & Egg Trade"],
    },
    financial: {
      headline: "Industrial & MSME Loans for Salem Enterprises",
      description:
        "Loan assistance for Salem's steel traders, sago manufacturers, and SMEs — leveraging our 43-year banking network.",
      highlights: [
        "Working capital for steel & magnesite traders",
        "MSME loans for sago and food-processing units",
        "Business funding guidance across Salem, Yercaud, Suramangalam",
        "Equipment finance for industrial units",
      ],
    },
    legal: {
      headline: "Property, Mining & Industrial Legal Services in Salem",
      description:
        "Legal support for Salem residents, traders, and industrial units — coordinated from our Coimbatore HQ.",
      highlights: [
        "Property documentation across Salem district",
        "Mining lease & TNPCB compliance",
        "Company registration & GST",
        "Industrial & labour law compliance",
      ],
    },
    landmarks: ["Suramangalam", "Hasthampatti", "Yercaud Road", "Five Roads", "Fairlands", "Ammapet"],
    faqs: [
      {
        q: "Do you transport steel coils from Salem?",
        a: "Yes. We regularly move steel coils, plates, and engineering cargo from Salem to Bangalore, Chennai, and across Tamil Nadu using our flatbed and trailer fleet.",
      },
      {
        q: "Can you arrange working capital for a Salem sago unit?",
        a: "Yes — we facilitate cash-credit and working capital limits for Salem sago, food-processing, and trading units through nationalised banks.",
      },
    ],
  },

  trichy: {
    slug: "trichy",
    name: "Trichy",
    nameTamil: "திருச்சி",
    region: "Tamil Nadu",
    postalCode: "620001",
    geo: { lat: "10.7905", lng: "78.7047" },
    tagline: "Serving Central Tamil Nadu's Engineering & Trade Hub Since 1982",
    metaTitle: "Lorry Transport, Loans & Legal Services in Trichy | STA Corporate Solutions",
    metaDescription:
      "Coimbatore–Trichy lorry service, BHEL-belt finance, and legal services for Tiruchirappalli businesses. 43 years across Tamil Nadu. Call 94430 33055.",
    heroIntro:
      "Tiruchirappalli — central Tamil Nadu's engineering and education hub, home to BHEL, OFT, and the Cauvery delta trade. STA connects Trichy to Coimbatore, Chennai, and beyond.",
    about:
      "From BHEL and Ordnance Factory Tiruchirappalli to the temple-economy of Srirangam and the agri-trade of the Cauvery delta — Trichy is a strategic hub. STA serves Trichy's engineering vendors, traders, and residents with transport, finance, and legal services since 1982.",
    transport: {
      headline: "Coimbatore ↔ Trichy & Central TN Lorry Service",
      description:
        "Regular full-load and return-load services connecting Trichy with Coimbatore, Chennai, Madurai, and Tanjore.",
      routes: [
        "Coimbatore → Trichy (daily)",
        "Trichy → Chennai (overnight)",
        "Trichy → Madurai → Tirunelveli",
        "Trichy → Karur → Erode",
        "Trichy → Tanjore → Kumbakonam",
      ],
      industries: ["BHEL Engineering Vendors", "Ordnance & Defence Suppliers", "Cauvery Agri-Trade", "Cement & Construction", "Education & Logistics"],
    },
    financial: {
      headline: "Vendor & MSME Loans for Trichy Businesses",
      description:
        "Loan assistance for BHEL vendors, OFT suppliers, and Trichy SMEs through nationalised banks and TN co-operative banks.",
      highlights: [
        "Vendor finance for BHEL & OFT suppliers",
        "MSME & Mudra loans for Trichy traders",
        "Business funding guidance across Srirangam, Thillai Nagar, Cantonment",
        "Agri & allied loans for Cauvery delta",
      ],
    },
    legal: {
      headline: "Property, Vendor & Civil Legal Services in Trichy",
      description:
        "Legal support coordinated from Coimbatore with on-ground partner advocates across Trichy district.",
      highlights: [
        "Property documentation across Trichy district",
        "Vendor agreement & contract drafting (BHEL/OFT)",
        "Company registration & GST",
        "Civil & commercial litigation",
      ],
    },
    landmarks: ["Srirangam", "Thillai Nagar", "Cantonment", "Woraiyur", "K.K. Nagar", "Crawford"],
    faqs: [
      {
        q: "Do you transport heavy engineering cargo from Trichy?",
        a: "Yes. We regularly move BHEL and OFT vendor cargo, including ODC (over-dimensional consignments) on multi-axle trailers, with proper permits.",
      },
      {
        q: "Can you arrange vendor finance for BHEL/OFT suppliers?",
        a: "Yes — we have long-standing relationships with banks that specialise in PSU vendor finance and bill discounting.",
      },
    ],
  },

  tirunelveli: {
    slug: "tirunelveli",
    name: "Tirunelveli",
    nameTamil: "திருநெல்வேலி",
    region: "Tamil Nadu",
    postalCode: "627001",
    geo: { lat: "8.7139", lng: "77.7567" },
    tagline: "Connecting Southern Tamil Nadu to Coimbatore Since 1982",
    metaTitle: "Lorry Transport, Loans & Legal Services in Tirunelveli | STA Corporate Solutions",
    metaDescription:
      "Coimbatore–Tirunelveli lorry transport, MSME loans, and legal services for Tirunelveli, Tuticorin, and Kanyakumari belt. 43 years of trust. Call 94430 33055.",
    heroIntro:
      "Tirunelveli — gateway to southern Tamil Nadu, halwa city, and hub for the Tuticorin port hinterland. STA's lorries connect this region to Coimbatore, Chennai, and beyond.",
    about:
      "From the temple economy of Nellaiappar to the cement, salt, and wind-energy trade of the southern districts — Tirunelveli anchors a vibrant region. STA has served Tirunelveli, Tuticorin, and the southern belt with transport, finance, and legal solutions for over four decades.",
    transport: {
      headline: "Coimbatore ↔ Tirunelveli Long-Haul Lorry Service",
      description:
        "Full-load services connecting Tirunelveli with Coimbatore (NH-44), Chennai, and Tuticorin Port. Subject to route availability for return loads.",
      routes: [
        "Coimbatore → Tirunelveli (daily)",
        "Tirunelveli → Tuticorin Port",
        "Tirunelveli → Chennai (long-haul)",
        "Tirunelveli → Madurai → Trichy",
        "Tirunelveli → Kanyakumari & Nagercoil",
      ],
      industries: ["Cement & Construction", "Salt & Marine Trade", "Wind Energy Components", "Halwa & Food Processing", "Agri-Produce"],
    },
    financial: {
      headline: "MSME, Agri & Trade Loans for Tirunelveli Region",
      description:
        "Loan assistance for Tirunelveli, Tuticorin, and Kanyakumari businesses through nationalised banks, RRBs, and co-operative banks.",
      highlights: [
        "MSME & Mudra loans for southern TN traders",
        "Working capital for cement & wind-energy vendors",
        "Business funding guidance across Palayamkottai & Tirunelveli town",
        "Agri & marine-trade finance",
      ],
    },
    legal: {
      headline: "Property, Agri & Marine Legal Services in Tirunelveli",
      description:
        "Legal support coordinated from Coimbatore for Tirunelveli, Tuticorin, and the southern districts.",
      highlights: [
        "Property documentation across southern TN",
        "Agri land & pattadhari documentation",
        "Marine, port & customs legal support",
        "Civil & commercial litigation",
      ],
    },
    landmarks: ["Palayamkottai", "Melapalayam", "Vannarpettai", "Thatchanallur", "Pettai", "South Bypass"],
    faqs: [
      {
        q: "How long does Coimbatore to Tirunelveli lorry transport take?",
        a: "Standard transit is 10–12 hours via NH-44. We typically deliver next-day for full-load bookings made before evening.",
      },
      {
        q: "Do you handle Tuticorin Port export cargo?",
        a: "Yes. We move container-ready and bulk export cargo from Tirunelveli, Tuticorin, and surrounding districts to Tuticorin Port with full documentation support.",
      },
    ],
  },
};

export const CITY_SLUGS: CitySlug[] = [
  "coimbatore",
  "chennai",
  "tiruppur",
  "madurai",
  "erode",
  "salem",
  "trichy",
  "tirunelveli",
];
