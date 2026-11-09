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
  "description": "STA Corporate Solutions — lorry transport since 1982 (43+ years) for businesses in Coimbatore district, headquartered in Coimbatore.",
  "foundingDate": "1982",
  "slogan": "Lorry Transport Since 1982 · Coimbatore",
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
    "Factory Shifting"
  ],
  "areaServed": [
    { "@type": "City", "name": "Coimbatore" },
    { "@type": "AdministrativeArea", "name": "Coimbatore District" }
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
  "description": "STA Corporate Solutions — Full Load lorry transport since 1982 (43+ years) for businesses in Coimbatore.",
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
    { "@type": "AdministrativeArea", "name": "Coimbatore District" }
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
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Factory Shifting" } }
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
    { "@type": "AdministrativeArea", "name": "Coimbatore District" }
  ],
  "description": "Dedicated full load lorry transport in Coimbatore district since 1982 with 12+ own lorries from Coimbatore.",
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
  "description": "Full load lorry transport in Coimbatore district since 1982.",
  "address": localBusinessSchema.address,
  "geo": localBusinessSchema.geo,
  "areaServed": localBusinessSchema.areaServed,
  "makesOffer": [
    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Full Load Lorry Transport", "serviceType": "Full Truck Load Transport" } },
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
  "description": "STA Corporate Solutions — lorry transport since 1982 for Coimbatore district.",
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
