import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustBadges } from "@/components/home/TrustBadges";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { ProcessSection } from "@/components/home/ProcessSection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { ServiceAreasPreview } from "@/components/home/ServiceAreasPreview";
import { FAQSection } from "@/components/home/FAQSection";
import { CTASection } from "@/components/home/CTASection";
import { AnimatedSection } from "@/components/ui/animated-section";

const Index = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.shameena.com/#organization",
    "name": "Shameena Transports",
    "url": "https://www.shameena.com",
    "logo": "https://www.shameena.com/logo.png",
    "description": "Since 1982 - 43 Years of Heritage in Logistics. Tamil Nadu's Most Reliable Lorry Service. Customer Satisfaction is Our Priority. Return Loads Available at Cheaper Rates.",
    "foundingDate": "1982",
    "slogan": "43 Years of Heritage in Logistics and Transportation",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+91-90477-21209",
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
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.shameena.com/#localbusiness",
    "name": "Shameena Transports - Most Reliable Lorry Service Tamil Nadu",
    "alternateName": ["Shameena Transport", "Shameena Logistics", "Shameena Trucking", "Shameena Transport Coimbatore"],
    "image": [
      "https://www.shameena.com/logo.png",
      "https://www.shameena.com/fleet.jpg"
    ],
    "description": "Shameena Transports - Since 1982, 43 years of heritage in logistics and transportation. Tamil Nadu's most reliable lorry service provider. Customer satisfaction is our priority. Return loads available at cheaper rates. Full load and part load transport services across Coimbatore, Chennai, Tiruppur, Erode, Salem, Madurai, Trichy. 12+ lorries, 10000+ successful deliveries.",
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
    "areaServed": [
      {"@type": "City", "name": "Coimbatore", "containedInPlace": {"@type": "State", "name": "Tamil Nadu"}},
      {"@type": "City", "name": "Chennai", "containedInPlace": {"@type": "State", "name": "Tamil Nadu"}},
      {"@type": "City", "name": "Tiruppur", "containedInPlace": {"@type": "State", "name": "Tamil Nadu"}},
      {"@type": "City", "name": "Erode", "containedInPlace": {"@type": "State", "name": "Tamil Nadu"}},
      {"@type": "City", "name": "Salem", "containedInPlace": {"@type": "State", "name": "Tamil Nadu"}},
      {"@type": "City", "name": "Madurai", "containedInPlace": {"@type": "State", "name": "Tamil Nadu"}},
      {"@type": "City", "name": "Trichy", "containedInPlace": {"@type": "State", "name": "Tamil Nadu"}},
      {"@type": "City", "name": "Karur", "containedInPlace": {"@type": "State", "name": "Tamil Nadu"}},
      {"@type": "State", "name": "Tamil Nadu", "containedInPlace": {"@type": "Country", "name": "India"}}
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Transport Services",
      "itemListElement": [
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Full Truck Load Transport"}},
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Part Load Transport"}},
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Return Load Transport - Cheaper Rates"}},
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Local Lorry Service"}},
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Textile Transport"}},
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Industrial Cargo Transport"}}
      ]
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.shameena.com/#service",
    "name": "Lorry Transport Service in Tamil Nadu",
    "serviceType": "Goods Transport",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Shameena Transports"
    },
    "areaServed": {
      "@type": "State",
      "name": "Tamil Nadu"
    },
    "description": "Professional lorry and goods transport service covering all major cities in Tamil Nadu including Coimbatore, Chennai, Tiruppur, Erode, Salem, Madurai, Trichy, and Karur.",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "priceCurrency": "INR"
      }
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.shameena.com"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What areas does Shameena Transports serve in Tamil Nadu?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Shameena Transports provides lorry and goods transport services across all major cities in Tamil Nadu including Coimbatore, Chennai, Tiruppur, Erode, Salem, Madurai, Trichy, Karur, and all districts."
        }
      },
      {
        "@type": "Question",
        "name": "What types of goods can Shameena Transports carry?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We transport all types of goods including textiles, manufacturing materials, construction materials, FMCG products, industrial cargo, machinery, and household goods. Our fleet includes various truck sizes to accommodate different cargo requirements."
        }
      },
      {
        "@type": "Question",
        "name": "Is Shameena Transports available 24/7?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Shameena Transports operates 24 hours a day, 7 days a week. You can book our lorry services anytime by calling +91 90477 21209 or contacting us via WhatsApp."
        }
      },
      {
        "@type": "Question",
        "name": "How can I get a quote for transport services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can get a free quote by calling us at +91 90477 21209, messaging us on WhatsApp, or filling out the contact form on our website. We provide competitive rates for all transport requirements."
        }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Shameena Transports | Since 1982 - Most Reliable Lorry Service in Tamil Nadu</title>
        <meta name="description" content="Shameena Transports - Since 1982, 43 years of heritage in logistics. Most Reliable Lorry Service in Coimbatore & Tamil Nadu. Customer satisfaction priority. Return loads at cheaper rates. Full Load, Part Load. Call +91 90477 21209" />
        <meta name="keywords" content="transport in tamil nadu, lorry service tamil nadu, goods transport tamil nadu, shameena transports, lorry service coimbatore, truck transport coimbatore, return load transport, cheaper transport rates, reliable lorry service, 43 years transport company, textile transport tiruppur, chennai goods transport, madurai lorry service, full truck load, part load transport, since 1982 transport" />
        <link rel="canonical" href="https://www.shameena.com" />
        <meta property="og:title" content="Shameena Transports | Since 1982 - Most Reliable Lorry Service in Tamil Nadu" />
        <meta property="og:description" content="43 Years of Heritage in Logistics. Most Reliable Transport Service. Return Loads at Cheaper Rates. Coimbatore, Chennai, Tiruppur, Erode, Salem, Madurai. 24/7 Service." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.shameena.com" />
        <meta property="og:image" content="https://www.shameena.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Shameena Transports | Since 1982 - Most Reliable Lorry Service" />
        <meta name="twitter:description" content="43 Years of Heritage. Return Loads at Cheaper Rates. 24/7 Service." />
        <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <Layout>
        <HeroSection />
        <AnimatedSection>
          <TrustBadges />
        </AnimatedSection>
        <AnimatedSection delay={100}>
          <ServicesPreview />
        </AnimatedSection>
        <AnimatedSection delay={100}>
          <ProcessSection />
        </AnimatedSection>
        <AnimatedSection delay={100}>
          <WhyChooseUs />
        </AnimatedSection>
        <AnimatedSection delay={100}>
          <ServiceAreasPreview />
        </AnimatedSection>
        <AnimatedSection delay={100}>
          <FAQSection />
        </AnimatedSection>
        <AnimatedSection delay={100}>
          <CTASection />
        </AnimatedSection>
      </Layout>
    </>
  );
};

export default Index;
