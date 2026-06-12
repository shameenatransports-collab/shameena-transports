import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { clientLogger } from "./lib/client-logger.ts";

// Install global error / rejection / console capture as early as possible.
clientLogger.install();

createRoot(document.getElementById("root")!).render(<App />);
