// Google Analytics 4 Tracking Library
// Measurement ID should be set in index.html

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

// ============ BOT / AUTOMATION GUARD ============
// Suppresses GA4 events fired by crawlers, headless browsers, link-preview
// fetchers and synthetic monitoring so GSC/GA4 numbers reflect real users.

const BOT_UA_RE = /(bot|crawler|spider|crawling|headless|puppeteer|playwright|lighthouse|gtmetrix|pingdom|monitor|preview|scrape|fetch|wget|curl|http-client|axios|node-fetch|facebookexternalhit|whatsapp|telegrambot|slackbot|linkedinbot|twitterbot|discordbot|embedly|skypeuripreview|google-inspectiontool|google-pagespeed|google-extended|chatgpt|gptbot|claudebot|perplexitybot|anthropic-ai|ccbot|bytespider|amazonbot|applebot)/i;

let _botCache: boolean | null = null;
export const isLikelyBot = (): boolean => {
  if (typeof window === "undefined" || typeof navigator === "undefined") return true;
  if (_botCache !== null) return _botCache;
  try {
    // navigator.webdriver is true for Selenium / Playwright / Puppeteer in headless mode
    if ((navigator as any).webdriver === true) return (_botCache = true);
    if (BOT_UA_RE.test(navigator.userAgent || "")) return (_botCache = true);
    // No language usually = bot. No plugins on a desktop UA = often bot.
    if (!navigator.languages || navigator.languages.length === 0) return (_botCache = true);
    return (_botCache = false);
  } catch {
    return (_botCache = false);
  }
};

// Track custom events
export const trackEvent = (
  eventName: string,
  parameters?: Record<string, any>
) => {
  if (isLikelyBot()) return;
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, parameters);
  }
};

// ============ FUNNEL EVENTS ============

// Contact Form Funnel
export const trackContactFormStart = () => {
  trackEvent("contact_form_start", {
    event_category: "engagement",
    event_label: "Contact Form Started",
  });
};

export const trackContactFormSubmit = (formData?: {
  service_type?: string;
  source_city?: string;
  destination_city?: string;
}) => {
  trackEvent("generate_lead", {
    event_category: "conversion",
    event_label: "Contact Form Submitted",
    currency: "INR",
    value: 100, // Estimated lead value
    ...formData,
  });
};

export const trackContactFormError = (errorMessage: string) => {
  trackEvent("form_error", {
    event_category: "engagement",
    event_label: errorMessage,
  });
};

// Phone Call Tracking
export const trackPhoneClick = (phoneNumber: string, location: string) => {
  trackEvent("phone_click", {
    event_category: "contact",
    event_label: phoneNumber,
    click_location: location,
  });

  // Also track as conversion
  trackEvent("generate_lead", {
    event_category: "conversion",
    event_label: "Phone Call Intent",
    lead_type: "phone",
    currency: "INR",
    value: 150,
  });
};

// WhatsApp Tracking
export const trackWhatsAppClick = (location: string) => {
  trackEvent("whatsapp_click", {
    event_category: "contact",
    event_label: "WhatsApp Contact",
    click_location: location,
  });

  trackEvent("generate_lead", {
    event_category: "conversion",
    event_label: "WhatsApp Intent",
    lead_type: "whatsapp",
    currency: "INR",
    value: 120,
  });
};

// ============ PAGE ENGAGEMENT ============

// Track scroll depth milestones
export const trackScrollDepth = (percentage: number) => {
  trackEvent("scroll_depth", {
    event_category: "engagement",
    event_label: `${percentage}%`,
    percent_scrolled: percentage,
  });
};

// Track time on page
export const trackTimeOnPage = (seconds: number) => {
  trackEvent("time_on_page", {
    event_category: "engagement",
    event_label: `${seconds} seconds`,
    engagement_time_msec: seconds * 1000,
  });
};

// Track section views
export const trackSectionView = (sectionName: string) => {
  trackEvent("section_view", {
    event_category: "engagement",
    event_label: sectionName,
  });
};

// Track CTA clicks
export const trackCTAClick = (ctaName: string, location: string) => {
  trackEvent("cta_click", {
    event_category: "engagement",
    event_label: ctaName,
    click_location: location,
  });
};

// ============ PAGE VIEWS ============

export const trackPageView = (pagePath: string, pageTitle: string) => {
  if (isLikelyBot()) return;
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", getGAMeasurementId(), {
      page_path: pagePath,
      page_title: pageTitle,
    });
  }
};

// ============ E-COMMERCE STYLE EVENTS ============

export const trackServiceView = (serviceName: string) => {
  trackEvent("view_item", {
    event_category: "service",
    items: [
      {
        item_name: serviceName,
        item_category: "Transport Service",
      },
    ],
  });
};

export const trackServiceInterest = (serviceName: string) => {
  trackEvent("add_to_wishlist", {
    event_category: "service",
    items: [
      {
        item_name: serviceName,
        item_category: "Transport Service",
      },
    ],
  });
};

// Helper to get measurement ID
const getGAMeasurementId = (): string => {
  return (window as any).GA_MEASUREMENT_ID || "G-XXXXXXXXXX";
};

// ============ ENGAGEMENT TRACKER HOOK ============

export const initEngagementTracking = () => {
  if (typeof window === "undefined") return;
  if (isLikelyBot()) return; // skip listeners entirely for bots

  let scrollMilestones = [25, 50, 75, 90, 100];
  let trackedMilestones: number[] = [];
  let startTime = Date.now();
  let timeIntervals = [30, 60, 120, 300]; // seconds
  let trackedTimes: number[] = [];

  // Scroll tracking
  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = Math.round((window.scrollY / scrollHeight) * 100);

    scrollMilestones.forEach((milestone) => {
      if (scrollPercent >= milestone && !trackedMilestones.includes(milestone)) {
        trackedMilestones.push(milestone);
        trackScrollDepth(milestone);
      }
    });
  };

  // Time tracking
  const checkTime = () => {
    const elapsed = Math.floor((Date.now() - startTime) / 1000);
    timeIntervals.forEach((interval) => {
      if (elapsed >= interval && !trackedTimes.includes(interval)) {
        trackedTimes.push(interval);
        trackTimeOnPage(interval);
      }
    });
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  const timeInterval = setInterval(checkTime, 5000);

  // Cleanup function
  return () => {
    window.removeEventListener("scroll", handleScroll);
    clearInterval(timeInterval);
  };
};
