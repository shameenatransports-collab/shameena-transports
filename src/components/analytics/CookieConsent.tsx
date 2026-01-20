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

const CONSENT_KEY = "sta_corporate_cookie_consent";

export function CookieConsent() {
  const [open, setOpen] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState<ConsentPreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const savedConsent = localStorage.getItem(CONSENT_KEY);
    if (!savedConsent) {
      // Delay showing modal for better UX
      const timer = setTimeout(() => setOpen(true), 1500);
      return () => clearTimeout(timer);
    } else {
      const parsed = JSON.parse(savedConsent);
      updateGoogleConsent(parsed);
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

  const handleAcceptAll = () => {
    const allAccepted: ConsentPreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    localStorage.setItem(CONSENT_KEY, JSON.stringify(allAccepted));
    updateGoogleConsent(allAccepted);
    setOpen(false);
  };

  const handleRejectAll = () => {
    const rejected: ConsentPreferences = {
      necessary: true,
      analytics: false,
      marketing: false,
    };
    localStorage.setItem(CONSENT_KEY, JSON.stringify(rejected));
    updateGoogleConsent(rejected);
    setOpen(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem(CONSENT_KEY, JSON.stringify(preferences));
    updateGoogleConsent(preferences);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">
            🍪 Cookie Preferences
          </DialogTitle>
          <DialogDescription className="text-base pt-2">
            We use cookies to enhance your browsing experience, analyze site traffic, 
            and personalize content. Your privacy matters to us.
          </DialogDescription>
        </DialogHeader>

        {showDetails ? (
          <div className="space-y-4 py-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="font-semibold">Essential Cookies</Label>
                <p className="text-sm text-muted-foreground">
                  Required for website functionality
                </p>
              </div>
              <Switch checked disabled />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="font-semibold">Analytics Cookies</Label>
                <p className="text-sm text-muted-foreground">
                  Help us understand how visitors use our site
                </p>
              </div>
              <Switch
                checked={preferences.analytics}
                onCheckedChange={(checked) =>
                  setPreferences((p) => ({ ...p, analytics: checked }))
                }
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="font-semibold">Marketing Cookies</Label>
                <p className="text-sm text-muted-foreground">
                  Used to deliver relevant advertisements
                </p>
              </div>
              <Switch
                checked={preferences.marketing}
                onCheckedChange={(checked) =>
                  setPreferences((p) => ({ ...p, marketing: checked }))
                }
              />
            </div>
          </div>
        ) : (
          <p className="text-sm text-muted-foreground py-2">
            By clicking "Accept All", you consent to our use of cookies. 
            Click "Customize" to manage your preferences.
          </p>
        )}

        <DialogFooter className="flex-col sm:flex-row gap-2">
          {showDetails ? (
            <>
              <Button variant="outline" onClick={() => setShowDetails(false)}>
                Back
              </Button>
              <Button onClick={handleSavePreferences}>Save Preferences</Button>
            </>
          ) : (
            <>
              <Button variant="outline" onClick={handleRejectAll}>
                Reject All
              </Button>
              <Button variant="secondary" onClick={() => setShowDetails(true)}>
                Customize
              </Button>
              <Button onClick={handleAcceptAll}>Accept All</Button>
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