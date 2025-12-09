import { useEffect, useState } from "react";
import logo from "@/assets/sta-logo.png";

interface LoadingScreenProps {
  onLoadComplete?: () => void;
}

export function LoadingScreen({ onLoadComplete }: LoadingScreenProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onLoadComplete?.();
    }, 1500);

    return () => clearTimeout(timer);
  }, [onLoadComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-primary transition-opacity duration-500">
      <div className="flex flex-col items-center gap-6">
        {/* Logo with pulse animation */}
        <div className="relative">
          <img
            src={logo}
            alt="Shameena Transports"
            className="h-24 md:h-32 w-auto bg-card rounded-lg p-3 shadow-2xl animate-pulse"
          />
          {/* Glow effect */}
          <div className="absolute inset-0 bg-secondary/20 rounded-lg blur-xl -z-10 animate-pulse" />
        </div>

        {/* Company name */}
        <div className="text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-primary-foreground">
            Shameena Transports
          </h1>
          <p className="text-sm text-primary-foreground/80 mt-1">
            Reliable Logistics Since 1982
          </p>
        </div>

        {/* Loading indicator */}
        <div className="flex gap-1.5 mt-4">
          <div className="w-2.5 h-2.5 bg-secondary rounded-full animate-bounce [animation-delay:-0.3s]" />
          <div className="w-2.5 h-2.5 bg-secondary rounded-full animate-bounce [animation-delay:-0.15s]" />
          <div className="w-2.5 h-2.5 bg-secondary rounded-full animate-bounce" />
        </div>
      </div>
    </div>
  );
}
