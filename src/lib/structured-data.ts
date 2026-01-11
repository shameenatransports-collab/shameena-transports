// Centralized JSON-LD Schema definitions for SEO

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.shameena.com/#organization",
  "name": "Shameena Transports",
  "legalName": "Shameena Transporting Agents",
  "url": "https://www.shameena.com",
  "logo": "https://www.shameena.com/logo.png",
  "description": "Since 1982 - 43 Years of Heritage in Logistics. Tamil Nadu's trusted Full Load & Return Load lorry transport service.",
  "foundingDate": "1982",
  "slogan": "Full Load & Return Load Transport - 43 Years of Heritage",
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
  "@id": "https://www.shameena.com/#localbusiness",
  "name": "Shameena Transports - Full Load & Return Load Transport Tamil Nadu",
  "alternateName": ["Shameena Transport", "Shameena Logistics", "Shameena Trucking", "Shameena Transporting Agents"],
  "image": ["https://www.shameena.com/logo.png", "https://www.shameena.com/fleet.jpg"],
  "description": "Since 1982, 43 years of heritage in Full Load & Return Load transport. Coimbatore, Chennai, Tiruppur, Salem, Madurai. 12+ lorries, 10000+ deliveries.",
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
  "url": "https://www.shameena.com",
  "telephone": "+91-94430-33055",
  "priceRange": "$$",
  "currenciesAccepted": "INR",
  "paymentAccepted": "Cash, UPI, Bank Transfer",
  "foundingDate": "1982",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    "opens": "00:00",
    "closes": "23:59"
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

export const fullLoadServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.shameena.com/services#full-load",
  "name": "Full Load Lorry Transport",
  "serviceType": "Full Truck Load Transport",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Shameena Transports",
    "@id": "https://www.shameena.com/#localbusiness"
  },
  "areaServed": { "@type": "State", "name": "Tamil Nadu" },
  "description": "Dedicated truck booking for exclusive cargo transport. Book an entire lorry for your shipment with complete control over timing and routes.",
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceCurrency": "INR"
  }
};

export const returnLoadServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.shameena.com/services#return-load",
  "name": "Return Load Transport",
  "serviceType": "Part Load Return Transport",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Shameena Transports",
    "@id": "https://www.shameena.com/#localbusiness"
  },
  "areaServed": { "@type": "State", "name": "Tamil Nadu" },
  "description": "Cost-effective transport on available return routes. Save up to 40% when trucks are returning empty on specific routes. Subject to availability.",
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/LimitedAvailability",
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
  "@id": "https://www.shameena.com/#website",
  "url": "https://www.shameena.com",
  "name": "Shameena Transports",
  "description": "Full Load & Return Load Lorry Transport Service in Tamil Nadu",
  "publisher": {
    "@id": "https://www.shameena.com/#organization"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://www.shameena.com/service-areas?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
};

export const fleetSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": "https://www.shameena.com/fleet#vehicles",
  "name": "Shameena Transports Fleet",
  "description": "Our fleet of 12+ modern lorries for Full Load and Return Load transport",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "Vehicle",
        "name": "Light Commercial Vehicle",
        "description": "1-3 Ton capacity for small shipments"
      }
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@type": "Vehicle",
        "name": "Medium Truck",
        "description": "5-10 Ton capacity for medium loads"
      }
    },
    {
      "@type": "ListItem",
      "position": 3,
      "item": {
        "@type": "Vehicle",
        "name": "Heavy Truck",
        "description": "15-25 Ton capacity for full loads"
      }
    }
  ]
};
