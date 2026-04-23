// Centralized JSON-LD Schema definitions for SEO
// Optimized for local search dominance in Coimbatore & Tamil Nadu

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.stacorporate.com/#organization",
  "name": "STA Corporate Solutions",
  "legalName": "STA Corporate Solutions",
  "url": "https://www.stacorporate.com",
  "logo": "https://www.stacorporate.com/logo.png",
  "description": "Since 1982 — 43+ years of business support including Transportation, Business Loan Assistance & Legal Services in Coimbatore & Tamil Nadu.",
  "foundingDate": "1982",
  "slogan": "Trusted Since 1982 — Transport, Business Loan Assistance & Legal Services",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "No.302/2A7, VK Road, Peelamedu",
    "addressLocality": "Coimbatore",
    "addressRegion": "Tamil Nadu",
    "postalCode": "641004",
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
  "sameAs": []
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.stacorporate.com/#localbusiness",
  "name": "STA Corporate Solutions — Transportation, Loan Services & Legal Services Coimbatore",
  "alternateName": ["STA Corporate", "STA Solutions", "STA Coimbatore", "STA Corporate Solutions Coimbatore"],
  "image": ["https://www.stacorporate.com/logo.png"],
  "description": "Since 1982, STA Corporate Solutions supports Transportation (Full Load & Return Load), Business Loan Assistance (MSME, Mudra, government funding schemes), and Legal Services (Property, Company, Litigation) in Coimbatore & Tamil Nadu.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "No.302/2A7, VK Road, Peelamedu",
    "addressLocality": "Coimbatore",
    "addressRegion": "Tamil Nadu",
    "postalCode": "641004",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "11.0168",
    "longitude": "76.9558"
  },
  "url": "https://www.stacorporate.com",
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
    { "@type": "City", "name": "Erode" },
    { "@type": "City", "name": "Salem" },
    { "@type": "City", "name": "Chennai" },
    { "@type": "City", "name": "Madurai" },
    { "@type": "City", "name": "Trichy" },
    { "@type": "City", "name": "Karur" },
    { "@type": "City", "name": "Namakkal" },
    { "@type": "City", "name": "Dindigul" },
    { "@type": "State", "name": "Tamil Nadu" }
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
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Return Load Transport" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Factory Shifting" } }
        ]
      },
      {
        "@type": "OfferCatalog",
        "name": "Financial Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "MSME Loans" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mudra Loans" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Government Funding Scheme Guidance" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Business Loans" } }
        ]
      },
      {
        "@type": "OfferCatalog",
        "name": "Legal Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Property Documentation" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Company Registration" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Litigation Support" } }
        ]
      }
    ]
  }
};

export const transportServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.stacorporate.com/transportation#service",
  "name": "Full Load Lorry Transport Service Coimbatore",
  "serviceType": "Full Truck Load Transport",
  "provider": {
    "@type": "LocalBusiness",
    "name": "STA Corporate Solutions",
    "@id": "https://www.stacorporate.com/#localbusiness"
  },
  "areaServed": [
    { "@type": "City", "name": "Coimbatore" },
    { "@type": "City", "name": "Tiruppur" },
    { "@type": "City", "name": "Erode" },
    { "@type": "City", "name": "Salem" },
    { "@type": "City", "name": "Chennai" },
    { "@type": "City", "name": "Madurai" },
    { "@type": "City", "name": "Trichy" },
    { "@type": "State", "name": "Tamil Nadu" }
  ],
  "description": "Dedicated full load lorry transport across Tamil Nadu since 1982 with 12+ own lorries from Coimbatore.",
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceCurrency": "INR"
  }
};

export const transportBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "MovingCompany"],
  "@id": "https://www.stacorporate.com/#transport-business",
  "name": "STA Corporate Solutions Transport — Tamil Nadu",
  "url": "https://www.stacorporate.com/transportation",
  "telephone": "+91-94430-33055",
  "image": "https://www.stacorporate.com/logo.png",
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
  "@id": `https://www.stacorporate.com/${city.slug}#transport-service`,
  "name": `Full Load Lorry Transport in ${city.name}, Tamil Nadu`,
  "serviceType": "Full Truck Load Transport",
  "description": city.metaDescription,
  "provider": { "@id": "https://www.stacorporate.com/#transport-business" },
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
  "@id": "https://www.stacorporate.com/financial-services#service",
  "name": "Business Loan Assistance Coimbatore — MSME, Mudra & Government Funding",
  "serviceType": "Loan Assistance",
  "provider": {
    "@type": "LocalBusiness",
    "name": "STA Corporate Solutions",
    "@id": "https://www.stacorporate.com/#localbusiness"
  },
  "areaServed": [
    { "@type": "City", "name": "Coimbatore" },
    { "@type": "City", "name": "Tiruppur" },
    { "@type": "City", "name": "Erode" },
    { "@type": "City", "name": "Salem" },
    { "@type": "City", "name": "Chennai" },
    { "@type": "State", "name": "Tamil Nadu" }
  ],
  "description": "Loan assistance for eligible businesses, industries and companies: MSME, Mudra, government funding schemes, business, industrial and commercial vehicle loan documentation support in Coimbatore, Tamil Nadu. Not for personal loans.",
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceCurrency": "INR"
  }
};

export const legalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "@id": "https://www.stacorporate.com/legal-services#service",
  "name": "Legal Services Coimbatore & Tamil Nadu — Property, Business, Corporate Law",
  "serviceType": "Legal Assistance",
  "provider": {
    "@type": "LocalBusiness",
    "name": "STA Corporate Solutions",
    "@id": "https://www.stacorporate.com/#localbusiness"
  },
  "areaServed": [
    { "@type": "City", "name": "Coimbatore" },
    { "@type": "City", "name": "Chennai" },
    { "@type": "City", "name": "Tiruppur" },
    { "@type": "City", "name": "Erode" },
    { "@type": "City", "name": "Salem" },
    { "@type": "City", "name": "Madurai" },
    { "@type": "City", "name": "Trichy" },
    { "@type": "State", "name": "Tamil Nadu" }
  ],
  "description": "Legal documentation and consultation support for individuals, businesses, and corporates. Property documentation, company formation, litigation, IP, and compliance support across Tamil Nadu.",
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
  "@id": "https://www.stacorporate.com/#website",
  "url": "https://www.stacorporate.com",
  "name": "STA Corporate Solutions",
  "description": "Transportation, Loan Services & Legal Services in Coimbatore & Tamil Nadu — Since 1982",
  "publisher": {
    "@id": "https://www.stacorporate.com/#organization"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://www.stacorporate.com/contact?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
};

export const fullLoadServiceSchema = transportServiceSchema;

export const returnLoadServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.stacorporate.com/return-loads#service",
  "name": "Return Load Transport Coimbatore Tamil Nadu",
  "serviceType": "Part Load Return Transport",
  "provider": {
    "@type": "LocalBusiness",
    "name": "STA Corporate Solutions",
    "@id": "https://www.stacorporate.com/#localbusiness"
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
  "@id": "https://www.stacorporate.com/fleet#vehicles",
  "name": "STA Corporate Solutions Fleet — Coimbatore",
  "description": "Our fleet of 12+ modern lorries for transport services across Tamil Nadu",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "item": { "@type": "Vehicle", "name": "Multi-Axle Trailer", "description": "20-25 Ton capacity — heavy machinery & ODC cargo" } },
    { "@type": "ListItem", "position": 2, "item": { "@type": "Vehicle", "name": "Open Body Lorry", "description": "10-20 Ton capacity — construction materials & bulk goods" } }
  ]
};
