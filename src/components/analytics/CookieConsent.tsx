import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

interface ConsentPreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

interface StoredConsent extends ConsentPreferences {
  ts: string; // ISO timestamp — DPDP audit trail
  version: number;
}

const CONSENT_KEY = "sta_corporate_cookie_consent";
const CONSENT_VERSION = 2; // bump on policy change to re-prompt users

export function CookieConsent() {
  const [open, setOpen] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState<ConsentPreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    try {
      const savedRaw = localStorage.getItem(CONSENT_KEY);
      if (!savedRaw) {
        const timer = setTimeout(() => setOpen(true), 1500);
        return () => clearTimeout(timer);
      }
      const parsed = JSON.parse(savedRaw) as Partial<StoredConsent>;
      // Re-prompt if user consented before the current policy version
      if (!parsed.version || parsed.version < CONSENT_VERSION) {
        const timer = setTimeout(() => setOpen(true), 1500);
        return () => clearTimeout(timer);
      }
      updateGoogleConsent(parsed as ConsentPreferences);
    } catch {
      const timer = setTimeout(() => setOpen(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const updateGoogleConsent = (prefs: ConsentPreferences) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: prefs.analytics ? "granted" : "denied",
        ad_storage: prefs.marketing ? "granted" : "denied",
        ad_user_data: prefs.marketing ? "granted" : "denied",
        ad_personalization: prefs.marketing ? "granted" : "denied",
      });
    }
  };

  const persist = (prefs: ConsentPreferences) => {
    const stored: StoredConsent = { ...prefs, ts: new Date().toISOString(), version: CONSENT_VERSION };
    try { localStorage.setItem(CONSENT_KEY, JSON.stringify(stored)); } catch { /* noop */ }
    updateGoogleConsent(prefs);
    setOpen(false);
  };

  const handleAcceptAll = () => persist({ necessary: true, analytics: true, marketing: true });
  const handleRejectAll = () => persist({ necessary: true, analytics: false, marketing: false });
  const handleSavePreferences = () => persist(preferences);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">
            Your privacy choices
          </DialogTitle>
          <DialogDescription className="text-base pt-2">
            STA Corporate Solutions is the Data Fiduciary for this site. Under the
            Digital Personal Data Protection Act 2023, we ask for your free, specific
            and informed consent before using non-essential cookies. You can withdraw
            consent anytime — your right.
          </DialogDescription>
        </DialogHeader>

        {showDetails ? (
          <div className="space-y-4 py-4">
            <div className="flex items-center justify-between gap-4">
              <div className="space-y-0.5">
                <Label className="font-semibold">Essential</Label>
                <p className="text-sm text-muted-foreground">
                  Required for site functionality, security and consent storage.
                  Lawful basis: legitimate use (DPDP §7).
                </p>
              </div>
              <Switch checked disabled />
            </div>

            <div className="flex items-center justify-between gap-4">
              <div className="space-y-0.5">
                <Label className="font-semibold">Analytics</Label>
                <p className="text-sm text-muted-foreground">
                  Google Analytics 4 — anonymised page-view, scroll and time-on-page
                  metrics so we can improve the site. Purpose: service improvement.
                </p>
              </div>
              <Switch
                checked={preferences.analytics}
                onCheckedChange={(checked) =>
                  setPreferences((p) => ({ ...p, analytics: checked }))
                }
              />
            </div>

            <div className="flex items-center justify-between gap-4">
              <div className="space-y-0.5">
                <Label className="font-semibold">Marketing</Label>
                <p className="text-sm text-muted-foreground">
                  Re-targeting and ad-campaign measurement. Purpose: relevant
                  advertising. You can opt out anytime without losing access.
                </p>
              </div>
              <Switch
                checked={preferences.marketing}
                onCheckedChange={(checked) =>
                  setPreferences((p) => ({ ...p, marketing: checked }))
                }
              />
            </div>

            <p className="text-xs text-muted-foreground pt-2">
              Read our{" "}
              <a href="/privacy" className="underline hover:text-foreground">Privacy Policy</a>{" "}
              · File a request via{" "}
              <a href="/data-request" className="underline hover:text-foreground">Data Request</a>.
            </p>
          </div>
        ) : (
          <p className="text-sm text-muted-foreground py-2">
            We use essential cookies to run the site, and optional analytics &amp; marketing
            cookies only with your consent. Choose below — you can change this anytime
            from the Privacy Policy page.
          </p>
        )}

        <DialogFooter className="flex-col sm:flex-row gap-2">
          {showDetails ? (
            <>
              <Button variant="outline" onClick={() => setShowDetails(false)}>Back</Button>
              <Button onClick={handleSavePreferences}>Save preferences</Button>
            </>
          ) : (
            <>
              <Button variant="outline" onClick={handleRejectAll}>Reject all</Button>
              <Button variant="secondary" onClick={() => setShowDetails(true)}>Customise</Button>
              <Button onClick={handleAcceptAll}>Accept all</Button>
            </>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

// Export function to reset consent (useful for footer privacy link)
export const resetCookieConsent = () => {
  localStorage.removeItem(CONSENT_KEY);
  window.location.reload();
};
