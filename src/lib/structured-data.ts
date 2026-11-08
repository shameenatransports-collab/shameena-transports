// Centralized JSON-LD Schema definitions for SEO
// Optimized for local search dominance in Coimbatore & Tamil Nadu

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://sta-corporate.in/#organization",
  "name": "STA Corporate Solutions",
  "legalName": "STA Corporate Solutions",
  "url": "https://sta-corporate.in",
  "logo": "https://sta-corporate.in/logo.png",
  "description": "STA Corporate Solutions — Transportation since 1982 (43+ years). Financial Services and Legal & CA practices launched mid-2025. Three integrated practices for Coimbatore and Tiruppur, headquartered in Coimbatore.",
  "foundingDate": "1982",
  "slogan": "Transport Since 1982 · Three Integrated Practices for Coimbatore & Tiruppur",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "No 10/135-G, Gurusamy Pillai St Extn, Podanur",
    "addressLocality": "Coimbatore",
    "addressRegion": "Tamil Nadu",
    "postalCode": "641023",
    "addressCountry": "IN"
  },
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+91-94430-33055",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": ["English", "Tamil"]
    },
    {
      "@type": "ContactPoint",
      "telephone": "+91-90477-21209",
      "contactType": "sales",
      "areaServed": "IN",
      "availableLanguage": ["English", "Tamil"]
    }
  ],
  "knowsAbout": [
    "Full Load Lorry Transport",
    "Return Load Transport",
    "Factory Shifting",
    "Startup India Recognition",
    "Startup and Deep-Tech Funding Assistance",
    "Seed Funding and Grants",
    "Government Startup Schemes",
    "Property Documentation",
    "Company Registration",
    "GST Registration",
    "Trademark Filing",
    "GST and Income Tax Compliance"
  ],
  "areaServed": [
    { "@type": "City", "name": "Coimbatore" },
    { "@type": "City", "name": "Tiruppur" },
    { "@type": "AdministrativeArea", "name": "Coimbatore District" },
    { "@type": "AdministrativeArea", "name": "Tiruppur District" }
  ],
  "sameAs": []
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://sta-corporate.in/#localbusiness",
  "name": "STA Corporate Solutions",
  "alternateName": ["STA Corporate", "STA Solutions", "STA Coimbatore", "STA Corporate Solutions Coimbatore"],
  "image": ["https://sta-corporate.in/logo.png"],
  "description": "STA Corporate Solutions — Transportation since 1982 (43+ years of service excellence). Financial Services (startup and deep-tech funding assistance) and Legal & CA practices added mid-2025. Three integrated practices for businesses in Coimbatore and Tiruppur.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "No 10/135-G, Gurusamy Pillai St Extn, Podanur",
    "addressLocality": "Coimbatore",
    "addressRegion": "Tamil Nadu",
    "postalCode": "641023",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "11.0168",
    "longitude": "76.9558"
  },
  "url": "https://sta-corporate.in",
  "telephone": "+91-94430-33055",
  "priceRange": "$$",
  "currenciesAccepted": "INR",
  "paymentAccepted": "Cash, UPI, Bank Transfer",
  "foundingDate": "1982",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    "opens": "09:00",
    "closes": "19:00"
  },
  "areaServed": [
    { "@type": "City", "name": "Coimbatore" },
    { "@type": "City", "name": "Tiruppur" },
    { "@type": "AdministrativeArea", "name": "Coimbatore District" },
    { "@type": "AdministrativeArea", "name": "Tiruppur District" }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "STA Corporate Solutions Services",
    "itemListElement": [
      {
        "@type": "OfferCatalog",
        "name": "Transportation Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Full Load Lorry Transport" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Return Load Transport", "description": "Subject to route availability; confirm before booking." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Factory Shifting" } }
        ]
      },
      {
        "@type": "OfferCatalog",
        "name": "Financial Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Startup India (DPIIT) Recognition Assistance" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Seed Funding and Grant Application Assistance" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Deep-Tech Funding Assistance" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Bank Credit Documentation for Startups", "description": "For startups and deep-tech companies, strictly not personal loans. STA is not a lender; approval is decided by the bank or relevant authority." } }
        ]
      },
      {
        "@type": "OfferCatalog",
        "name": "Legal & CA Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Property Documentation" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Company Registration" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Litigation Support" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "GST & Income Tax Compliance" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Accounts & Audit Support" } }
        ]
      }
    ]
  }
};

export const transportServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://sta-corporate.in/transportation#service",
  "name": "Full Load Lorry Transport Service Coimbatore",
  "serviceType": "Full Truck Load Transport",
  "provider": {
    "@type": "LocalBusiness",
    "name": "STA Corporate Solutions",
    "@id": "https://sta-corporate.in/#localbusiness"
  },
  "areaServed": [
    { "@type": "City", "name": "Coimbatore" },
    { "@type": "City", "name": "Tiruppur" },
    { "@type": "AdministrativeArea", "name": "Coimbatore District" },
    { "@type": "AdministrativeArea", "name": "Tiruppur District" }
  ],
  "description": "Dedicated full load lorry transport in Coimbatore and Tiruppur districts since 1982 with 12+ own lorries from Coimbatore.",
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceCurrency": "INR"
  }
};

export const transportBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "MovingCompany"],
  "@id": "https://sta-corporate.in/#transport-business",
  "name": "STA Corporate Solutions Transport — Tamil Nadu",
  "url": "https://sta-corporate.in/transportation",
  "telephone": "+91-94430-33055",
  "image": "https://sta-corporate.in/logo.png",
  "priceRange": "$$",
  "foundingDate": "1982",
  "description": "Full load lorry transport and return load transport subject to route availability across Tamil Nadu from Coimbatore.",
  "address": localBusinessSchema.address,
  "geo": localBusinessSchema.geo,
  "areaServed": localBusinessSchema.areaServed,
  "makesOffer": [
    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Full Load Lorry Transport", "serviceType": "Full Truck Load Transport" } },
    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Return Load Transport", "serviceType": "Return Load Transport" } },
    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Factory and Warehouse Shifting", "serviceType": "Commercial Relocation" } }
  ]
};

export const createCityTransportSchema = (city: { name: string; slug: string; metaDescription: string; geo: { lat: string; lng: string } }) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `https://sta-corporate.in/${city.slug}#transport-service`,
  "name": `Full Load Lorry Transport in ${city.name}, Tamil Nadu`,
  "serviceType": "Full Truck Load Transport",
  "description": city.metaDescription,
  "provider": { "@id": "https://sta-corporate.in/#transport-business" },
  "areaServed": {
    "@type": "City",
    "name": city.name,
    "geo": { "@type": "GeoCoordinates", "latitude": city.geo.lat, "longitude": city.geo.lng }
  },
  "offers": { "@type": "Offer", "availability": "https://schema.org/InStock", "priceCurrency": "INR" }
});

export const financialServiceSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "@id": "https://sta-corporate.in/financial-services#service",
  "name": "Startup & Deep-Tech Funding Assistance Coimbatore & Tiruppur",
  "serviceType": "Funding Assistance",
  "provider": {
    "@type": "LocalBusiness",
    "name": "STA Corporate Solutions",
    "@id": "https://sta-corporate.in/#localbusiness"
  },
  "areaServed": [
    { "@type": "City", "name": "Coimbatore" },
    { "@type": "City", "name": "Tiruppur" },
    { "@type": "AdministrativeArea", "name": "Coimbatore District" },
    { "@type": "AdministrativeArea", "name": "Tiruppur District" }
  ],
  "description": "Funding assistance for startups and deep-tech companies: Startup India recognition, seed funding and grants, bank-credit documentation and fundraising readiness in Coimbatore and Tiruppur. Not a lender. Not for personal loans.",
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceCurrency": "INR"
  }
};

export const legalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "@id": "https://sta-corporate.in/legal-services#service",
  "name": "Legal & CA Services Coimbatore & Tiruppur — Business Legal, Tax and Compliance",
  "serviceType": "Legal Assistance",
  "provider": {
    "@type": "LocalBusiness",
    "name": "STA Corporate Solutions",
    "@id": "https://sta-corporate.in/#localbusiness"
  },
  "areaServed": [
    { "@type": "City", "name": "Coimbatore" },
    { "@type": "City", "name": "Tiruppur" },
    { "@type": "AdministrativeArea", "name": "Coimbatore District" },
    { "@type": "AdministrativeArea", "name": "Tiruppur District" }
  ],
  "description": "Legal documentation and CA professional services for businesses and corporates: company formation, contracts, IP, GST, income-tax, accounts and compliance support in Coimbatore and Tiruppur.",
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceCurrency": "INR"
  }
};

export const createBreadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://sta-corporate.in/#website",
  "url": "https://sta-corporate.in",
  "name": "STA Corporate Solutions",
  "description": "STA Corporate Solutions — Transport since 1982. Three integrated practices for Coimbatore and Tiruppur: Transportation, Financial Services and Legal & CA.",
  "publisher": {
    "@id": "https://sta-corporate.in/#organization"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://sta-corporate.in/contact?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
};

export const fullLoadServiceSchema = transportServiceSchema;

export const returnLoadServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://sta-corporate.in/return-loads#service",
  "name": "Return Load Transport Coimbatore Tamil Nadu",
  "serviceType": "Return Load Transport",
  "provider": {
    "@type": "LocalBusiness",
    "name": "STA Corporate Solutions",
    "@id": "https://sta-corporate.in/#localbusiness"
  },
  "areaServed": { "@type": "State", "name": "Tamil Nadu" },
  "description": "Cost-effective return load transport on available routes from Coimbatore. Save up to 40% on select Tamil Nadu routes.",
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/LimitedAvailability",
    "priceCurrency": "INR"
  }
};

export const fleetSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": "https://sta-corporate.in/fleet#vehicles",
  "name": "STA Corporate Solutions Fleet — Coimbatore",
  "description": "Our fleet of 12+ modern lorries for transport services across Tamil Nadu",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "item": { "@type": "Vehicle", "name": "Multi-Axle Trailer", "description": "20-25 Ton capacity — heavy machinery & ODC cargo" } },
    { "@type": "ListItem", "position": 2, "item": { "@type": "Vehicle", "name": "Open Body Lorry", "description": "10-20 Ton capacity — construction materials & bulk goods" } }
  ]
};
