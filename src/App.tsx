import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
const LegacyRoute = lazy(() => import("./pages/LegacyRoute"));

// Programmatic SEO templates
const PillarCityPage = lazy(() => import("./pages/seo/PillarCityPage"));
const PillarSubPage = lazy(() => import("./pages/seo/PillarSubPage"));
const PillarCitySubPage = lazy(() => import("./pages/seo/PillarCitySubPage"));
const RouteCorridorPage = lazy(() => import("./pages/seo/RouteCorridorPage"));
const ReturnLoadPage = lazy(() => import("./pages/seo/ReturnLoadPage"));

const LanePages = lazy(() => import("./pages/seo/LanePages"));

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
                    

                    <Route path="/services/transport-categories" element={<Services />} />

                    {/* Pillar × sub-service (no city) */}
                    <Route path="/transportation/services/:sub" element={<PillarSubPage />} />
                    

                    <Route path="/transportation/from-coimbatore" element={<LanePages />} />
                    <Route path="/transportation/from-coimbatore/:destination" element={<LanePages />} />
                    <Route path="/transportation/from-coimbatore/:destination/:vehicle" element={<LanePages />} />
                    <Route path="/transportation/industries/:industry" element={<LanePages />} />
                    {/* Special sub-types */}
                    <Route path="/transportation/routes/:slug" element={<RouteCorridorPage />} />
                    <Route path="/transportation/return-load/:origin" element={<ReturnLoadPage />} />

                    {/* Pillar × city × sub */}
                    <Route path="/transportation/:city/:sub" element={<PillarCitySubPage />} />
                    

                    {/* Pillar × city */}
                    <Route path="/transportation/:city" element={<PillarCityPage />} />
                    

                    <Route path="/open-body-lorry-coimbatore" element={<OpenBodyLorry />} />

                    <Route path="/service-areas" element={<ServiceAreas />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="/data-request" element={<DataRequest />} />
                    <Route path="/terms" element={<Terms />} />
                    {/* Retired aliases are resolved without listing them as current pages. */}
                    <Route path="*" element={<LegacyRoute />} />
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
