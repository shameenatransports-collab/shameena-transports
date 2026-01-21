import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { AnalyticsProvider } from "@/components/analytics/AnalyticsProvider";

import Index from "./pages/Index";

const About = lazy(() => import("./pages/About"));
const Transportation = lazy(() => import("./pages/Transportation"));
const FinancialServices = lazy(() => import("./pages/FinancialServices"));
const LegalServices = lazy(() => import("./pages/LegalServices"));
const Services = lazy(() => import("./pages/Services"));
const Fleet = lazy(() => import("./pages/Fleet"));
const ServiceAreas = lazy(() => import("./pages/ServiceAreas"));
const ReturnLoads = lazy(() => import("./pages/ReturnLoads"));
const Contact = lazy(() => import("./pages/Contact"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const NotFound = lazy(() => import("./pages/NotFound"));

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
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AnalyticsProvider>
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/transportation" element={<Transportation />} />
                <Route path="/financial-services" element={<FinancialServices />} />
                <Route path="/legal-services" element={<LegalServices />} />
                <Route path="/services" element={<Services />} />
                <Route path="/fleet" element={<Fleet />} />
                <Route path="/return-loads" element={<ReturnLoads />} />
                <Route path="/service-areas" element={<ServiceAreas />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </AnalyticsProvider>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
