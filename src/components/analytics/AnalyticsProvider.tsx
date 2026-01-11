import { useEffect } from "react";
import { usePageTracking, useEngagementTracking } from "@/hooks/use-analytics";
import { CookieConsent } from "./CookieConsent";

interface AnalyticsProviderProps {
  children: React.ReactNode;
}

export function AnalyticsProvider({ children }: AnalyticsProviderProps) {
  // Track page views on route changes
  usePageTracking();
  
  // Track engagement (scroll, time on page)
  useEngagementTracking();

  return (
    <>
      {children}
      <CookieConsent />
    </>
  );
}
