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
const FinancialServices = lazy(() => import("./pages/FinancialServices"));
const LegalServices = lazy(() => import("./pages/LegalServices"));
const Services = lazy(() => import("./pages/Services"));
const EduConsultancy = lazy(() => import("./pages/EduConsultancy"));
const Fleet = lazy(() => import("./pages/Fleet"));
const ServiceAreas = lazy(() => import("./pages/ServiceAreas"));
const ReturnLoads = lazy(() => import("./pages/ReturnLoads"));
const Contact = lazy(() => import("./pages/Contact"));
const Privacy = lazy(() => import("./pages/Privacy"));
const DataRequest = lazy(() => import("./pages/DataRequest"));
const Terms = lazy(() => import("./pages/Terms"));
const CityLanding = lazy(() => import("./pages/CityLanding"));
const Debug = lazy(() => import("./pages/Debug"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Programmatic SEO templates
const ServicesHub = lazy(() => import("./pages/ServicesHub"));
const PillarCityPage = lazy(() => import("./pages/seo/PillarCityPage"));
const PillarSubPage = lazy(() => import("./pages/seo/PillarSubPage"));
const PillarCitySubPage = lazy(() => import("./pages/seo/PillarCitySubPage"));
const RouteCorridorPage = lazy(() => import("./pages/seo/RouteCorridorPage"));
const RegistrationPage = lazy(() => import("./pages/seo/RegistrationPage"));

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
                    <Route path="/financial-services" element={<FinancialServices />} />
                    <Route path="/legal-services" element={<LegalServices />} />
                    <Route path="/edu-consultancy" element={<EduConsultancy />} />
                    

                    <Route path="/services" element={<ServicesHub />} />
                    <Route path="/services/transport-categories" element={<Services />} />

                    {/* Pillar × sub-service (no city) */}
                    <Route path="/transportation/services/:sub" element={<PillarSubPage />} />
                    <Route path="/financial-services/products/:sub" element={<PillarSubPage />} />
                    <Route path="/legal-services/practice/:sub" element={<PillarSubPage />} />
                    <Route path="/edu-consultancy/programs/:sub" element={<PillarSubPage />} />
                    

                    {/* Special sub-types */}
                    <Route path="/transportation/routes/:slug" element={<RouteCorridorPage />} />
                    <Route path="/legal-services/registrations/:slug" element={<RegistrationPage />} />

                    {/* Pillar × city × sub */}
                    <Route path="/transportation/:city/:sub" element={<PillarCitySubPage />} />
                    <Route path="/financial-services/:city/:sub" element={<PillarCitySubPage />} />
                    <Route path="/legal-services/:city/:sub" element={<PillarCitySubPage />} />
                    <Route path="/edu-consultancy/:city/:sub" element={<PillarCitySubPage />} />
                    {/* Real Estate :city/:second routes to BHK or sub by slug detection */}
                    

                    {/* Pillar × city */}
                    <Route path="/transportation/:city" element={<PillarCityPage />} />
                    <Route path="/financial-services/:city" element={<PillarCityPage />} />
                    <Route path="/legal-services/:city" element={<PillarCityPage />} />
                    <Route path="/edu-consultancy/:city" element={<PillarCityPage />} />
                    

                    <Route path="/fleet" element={<Fleet />} />
                    <Route path="/return-loads" element={<ReturnLoads />} />

                    <Route path="/service-areas" element={<ServiceAreas />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="/data-request" element={<DataRequest />} />
                    <Route path="/terms" element={<Terms />} />
                    <Route path="/debug" element={<Debug />} />
                    {/* City landing pages — Tamil Nadu local SEO */}
                    <Route path="/coimbatore" element={<CityLanding />} />
                    <Route path="/chennai" element={<CityLanding />} />
                    <Route path="/tiruppur" element={<CityLanding />} />
                    <Route path="/madurai" element={<CityLanding />} />
                    <Route path="/erode" element={<CityLanding />} />
                    <Route path="/salem" element={<CityLanding />} />
                    <Route path="/trichy" element={<CityLanding />} />
                    <Route path="/tirunelveli" element={<CityLanding />} />
                    {/* Redirect old real estate routes */}
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
