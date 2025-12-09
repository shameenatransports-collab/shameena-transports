import { useState } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { LoadingScreen } from "./components/ui/loading-screen.tsx";

function Root() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <LoadingScreen onLoadComplete={() => setIsLoading(false)} />}
      <div className={isLoading ? "opacity-0" : "opacity-100 transition-opacity duration-500"}>
        <App />
      </div>
    </>
  );
}

createRoot(document.getElementById("root")!).render(<Root />);
