import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { AnalyticsProvider } from "@/components/analytics/AnalyticsProvider";
import { ErrorBoundary } from "@/components/system/ErrorBoundary";
import { ContentWatchdog } from "@/components/system/ContentWatchdog";

import Index from "./pages/Index";

const About = lazy(() => import("./pages/About"));
const Transportation = lazy(() => import("./pages/Transportation"));
const Services = lazy(() => import("./pages/Services"));
const OpenBodyLorry = lazy(() => import("./pages/OpenBodyLorry"));
const ServiceAreas = lazy(() => import("./pages/ServiceAreas"));
const Contact = lazy(() => import("./pages/Contact"));
const Privacy = lazy(() => import("./pages/Privacy"));
const DataRequest = lazy(() => import("./pages/DataRequest"));
const Terms = lazy(() => import("./pages/Terms"));
const CityLanding = lazy(() => import("./pages/CityLanding"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Programmatic SEO templates
const PillarCityPage = lazy(() => import("./pages/seo/PillarCityPage"));
const PillarSubPage = lazy(() => import("./pages/seo/PillarSubPage"));
const PillarCitySubPage = lazy(() => import("./pages/seo/PillarCitySubPage"));
const RouteCorridorPage = lazy(() => import("./pages/seo/RouteCorridorPage"));

const queryClient = new QueryClient();

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-4">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        <span className="text-muted-foreground text-sm">Loading...</span>
      </div>
    </div>
  );
}

const App = () => (
  <ErrorBoundary scope="App">
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <AnalyticsProvider>
              <ContentWatchdog />
              <ErrorBoundary scope="Routes">
                <Suspense fallback={<PageLoader />}>
                  <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/about" element={<About />} />
                    {/* Pillar landing pages — must come before /:pillar/:city dynamic */}
                    <Route path="/transportation" element={<Transportation />} />
                    

                    <Route path="/services" element={<Navigate to="/transportation" replace />} />
                    <Route path="/services/transport-categories" element={<Services />} />

                    {/* Pillar × sub-service (no city) */}
                    <Route path="/transportation/services/:sub" element={<PillarSubPage />} />
                    

                    {/* Special sub-types */}
                    <Route path="/transportation/routes/:slug" element={<RouteCorridorPage />} />

                    {/* Pillar × city × sub */}
                    <Route path="/transportation/:city/:sub" element={<PillarCitySubPage />} />
                    

                    {/* Pillar × city */}
                    <Route path="/transportation/:city" element={<PillarCityPage />} />
                    

                    <Route path="/open-body-lorry-coimbatore" element={<OpenBodyLorry />} />
                    <Route path="/fleet" element={<Navigate to="/open-body-lorry-coimbatore" replace />} />
                    <Route path="/return-loads" element={<Navigate to="/transportation" replace />} />

                    <Route path="/service-areas" element={<ServiceAreas />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="/data-request" element={<DataRequest />} />
                    <Route path="/terms" element={<Terms />} />
                    {/* City landing pages: Coimbatore district */}
                    <Route path="/coimbatore" element={<CityLanding />} />
                    <Route path="/tiruppur" element={<Navigate to="/coimbatore" replace />} />
                    {/* Redirects for retired pages and areas */}
                    <Route path="/financial-services/*" element={<Navigate to="/transportation" replace />} />
                    <Route path="/financial-services" element={<Navigate to="/transportation" replace />} />
                    <Route path="/legal-services/*" element={<Navigate to="/transportation" replace />} />
                    <Route path="/legal-services" element={<Navigate to="/transportation" replace />} />
                    <Route path="/startup-funding-guide" element={<Navigate to="/transportation" replace />} />
                    <Route path="/msme-loan-guide" element={<Navigate to="/transportation" replace />} />
                    <Route path="/edu-consultancy/*" element={<Navigate to="/transportation" replace />} />
                    {["chennai", "madurai", "erode", "salem", "trichy", "tirunelveli"].map((c) => (
                      <Route key={c} path={`/${c}`} element={<Navigate to="/service-areas" replace />} />
                    ))}
                    <Route path="/overseas-real-estate" element={<Navigate to="/" replace />} />
                    <Route path="/real-estate/*" element={<Navigate to="/" replace />} />
                    <Route path="/dubai-real-estate" element={<Navigate to="/" replace />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </Suspense>
              </ErrorBoundary>
            </AnalyticsProvider>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  </ErrorBoundary>
);

export default App;
