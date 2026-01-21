// Centralized JSON-LD Schema definitions for SEO

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.stacorporate.com/#organization",
  "name": "STA Corporate Solutions",
  "legalName": "STA Corporate Solutions",
  "url": "https://www.stacorporate.com",
  "logo": "https://www.stacorporate.com/logo.png",
  "description": "Since 1982 - 43 Years of Excellence. Complete business solutions including Transportation, Loan Services & Legal Services.",
  "foundingDate": "1982",
  "slogan": "Complete Business Solutions - Lowest Commission Since 1982",
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
  ]
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.stacorporate.com/#localbusiness",
  "name": "STA Corporate Solutions - Transportation, Loan Services & Legal Services",
  "alternateName": ["STA Corporate", "STA Solutions", "STA Business Solutions"],
  "image": ["https://www.stacorporate.com/logo.png"],
  "description": "Since 1982, 43 years of excellence in Transportation, Loan Services & Legal Services. Lowest commission rates in India.",
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
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "500",
    "bestRating": "5",
    "worstRating": "1"
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
  ]
};

export const transportServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.stacorporate.com/transportation#service",
  "name": "Full Load Transport Service",
  "serviceType": "Full Truck Load Transport",
  "provider": {
    "@type": "LocalBusiness",
    "name": "STA Corporate Solutions",
    "@id": "https://www.stacorporate.com/#localbusiness"
  },
  "areaServed": { "@type": "State", "name": "Tamil Nadu" },
  "description": "Dedicated truck booking for exclusive cargo transport across Tamil Nadu since 1982.",
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceCurrency": "INR"
  }
};

export const financialServiceSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "@id": "https://www.stacorporate.com/financial-services#service",
  "name": "Loan & Funding Services",
  "serviceType": "Loan Assistance",
  "provider": {
    "@type": "LocalBusiness",
    "name": "STA Corporate Solutions",
    "@id": "https://www.stacorporate.com/#localbusiness"
  },
  "areaServed": { "@type": "State", "name": "Tamil Nadu" },
  "description": "Government scheme loans, MSME funding, Mudra loans, and private bank financing with lowest processing fees.",
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
  "name": "Legal Services Tamil Nadu",
  "serviceType": "Legal Assistance",
  "provider": {
    "@type": "LocalBusiness",
    "name": "STA Corporate Solutions",
    "@id": "https://www.stacorporate.com/#localbusiness"
  },
  "areaServed": { "@type": "State", "name": "Tamil Nadu" },
  "description": "Comprehensive legal services for individuals, businesses, and corporates. Property documentation, company formation, litigation support.",
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
  "description": "Complete Business Solutions - Transportation, Loan Services & Legal Services",
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
  "name": "Return Load Transport",
  "serviceType": "Part Load Return Transport",
  "provider": {
    "@type": "LocalBusiness",
    "name": "STA Corporate Solutions",
    "@id": "https://www.stacorporate.com/#localbusiness"
  },
  "areaServed": { "@type": "State", "name": "Tamil Nadu" },
  "description": "Cost-effective transport on available return routes. Save up to 40% on select routes.",
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
  "name": "STA Corporate Solutions Fleet",
  "description": "Our fleet of 12+ modern lorries for transport services",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "item": { "@type": "Vehicle", "name": "Light Commercial Vehicle", "description": "1-3 Ton capacity" } },
    { "@type": "ListItem", "position": 2, "item": { "@type": "Vehicle", "name": "Medium Truck", "description": "5-10 Ton capacity" } },
    { "@type": "ListItem", "position": 3, "item": { "@type": "Vehicle", "name": "Heavy Truck", "description": "15-25 Ton capacity" } }
  ]
};
