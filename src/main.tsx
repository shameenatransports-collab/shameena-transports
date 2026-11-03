import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { clientLogger } from "./lib/client-logger.ts";
import { initAnalytics } from "./lib/analytics.ts";

// Install global error / rejection / console capture as early as possible.
clientLogger.install();

// Loads gtag.js with the real GA4 Measurement ID (from the Lovable connector
// env var). Consent Mode v2 defaults are already denied in index.html.
initAnalytics();

createRoot(document.getElementById("root")!).render(<App />);
