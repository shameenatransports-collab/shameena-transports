import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AlertCircle, RotateCcw, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { clientLogger } from "@/lib/client-logger";

interface Props {
  /** Selector for the main content container to monitor. */
  selector?: string;
  /** Milliseconds to wait before flagging the content as empty. */
  thresholdMs?: number;
}

/**
 * Monitors the main content area. If it stays effectively empty for more than
 * `thresholdMs`, surfaces a non-blocking recovery prompt and logs the event.
 */
export function ContentWatchdog({ selector = "main", thresholdMs = 2000 }: Props) {
  const location = useLocation();
  const [stuck, setStuck] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    setStuck(false);
    setDismissed(false);

    const start = performance.now();
    let raf = 0;
    let timeoutId = 0;

    const isContentful = () => {
      const el = document.querySelector(selector);
      if (!el) return false;
      const rect = (el as HTMLElement).getBoundingClientRect();
      // Consider "empty" if the main has near-zero rendered height OR < 30 chars of text.
      const text = (el.textContent || "").trim();
      return rect.height > 80 && text.length > 30;
    };

    const check = () => {
      if (isContentful()) return;
      timeoutId = window.setTimeout(() => {
        if (!isContentful()) {
          const elapsed = Math.round(performance.now() - start);
          clientLogger.log("error", `Watchdog: <${selector}> empty after ${elapsed}ms`, {
            component: "ContentWatchdog",
            meta: { route: location.pathname },
          });
          setStuck(true);
        }
      }, thresholdMs);
    };

    raf = window.requestAnimationFrame(check);
    return () => {
      window.cancelAnimationFrame(raf);
      window.clearTimeout(timeoutId);
    };
  }, [location.pathname, selector, thresholdMs]);

  if (!stuck || dismissed) return null;

  return (
    <div
      role="alert"
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] max-w-md w-[calc(100%-2rem)] rounded-2xl border border-border bg-background shadow-2xl p-4"
    >
      <div className="flex items-start gap-3">
        <div className="w-9 h-9 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
          <AlertCircle className="w-4 h-4 text-destructive" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-foreground">
            This page seems to be stuck
          </p>
          <p className="text-xs text-muted-foreground mt-0.5">
            The content didn't load within a few seconds. Reload to recover.
          </p>
          <div className="flex gap-2 mt-3">
            <Button size="sm" onClick={() => window.location.reload()} className="gap-2 h-8">
              <RotateCcw className="w-3.5 h-3.5" /> Reload
            </Button>
            <Button size="sm" variant="ghost" onClick={() => setDismissed(true)} className="h-8">
              Dismiss
            </Button>
          </div>
        </div>
        <button
          aria-label="Close"
          onClick={() => setDismissed(true)}
          className="text-muted-foreground hover:text-foreground"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
