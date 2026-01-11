import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  trackPageView,
  initEngagementTracking,
  trackSectionView,
} from "@/lib/analytics";

// Hook to track page views on route change
export function usePageTracking() {
  const location = useLocation();

  useEffect(() => {
    // Map routes to readable titles
    const pageTitles: Record<string, string> = {
      "/": "Home - Shameena Transports",
      "/services": "Services - Full Load & Return Load Transport",
      "/service-areas": "Service Areas - Tamil Nadu Coverage",
      "/fleet": "Our Fleet - Modern Transport Vehicles",
      "/about": "About Us - Since 1982",
      "/contact": "Contact Us - Get Quote",
    };

    const pageTitle =
      pageTitles[location.pathname] ||
      `Shameena Transports - ${location.pathname}`;

    trackPageView(location.pathname, pageTitle);
  }, [location.pathname]);
}

// Hook for engagement tracking (scroll, time)
export function useEngagementTracking() {
  useEffect(() => {
    const cleanup = initEngagementTracking();
    return cleanup;
  }, []);
}

// Hook for intersection observer based section tracking
export function useSectionTracking(sectionRef: React.RefObject<HTMLElement>, sectionName: string) {
  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            trackSectionView(sectionName);
            observer.disconnect(); // Track only once
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, [sectionRef, sectionName]);
}
