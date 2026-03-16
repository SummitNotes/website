import { useState, useEffect } from "react";

const CONSENT_KEY = "summit-cookie-consent";

type Consent = "granted" | "denied" | null;

function getConsent(): Consent {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(CONSENT_KEY) as Consent;
}

function setConsent(value: "granted" | "denied") {
  localStorage.setItem(CONSENT_KEY, value);
  // Dispatch event so the inline PostHog script can react
  window.dispatchEvent(new CustomEvent("cookie-consent", { detail: value }));
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Only show if user hasn't made a choice yet
    if (getConsent() === null) {
      // Small delay so it doesn't flash on load
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  function handleAccept() {
    setConsent("granted");
    setDismissed(true);
    setTimeout(() => setVisible(false), 400);
  }

  function handleDecline() {
    setConsent("denied");
    setDismissed(true);
    setTimeout(() => setVisible(false), 400);
  }

  if (!visible) return null;

  return (
    <div
      className={`fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:max-w-sm z-50 transition-all duration-500 ease-out ${
        dismissed
          ? "translate-y-4 opacity-0 pointer-events-none"
          : "translate-y-0 opacity-100"
      }`}
    >
      <div className="bg-white/95 backdrop-blur-xl border border-border rounded-2xl shadow-2xl shadow-black/10 p-5 relative overflow-hidden">
        {/* Decorative cookie crumb dots */}
        <div className="absolute top-2 right-3 text-2xl select-none" aria-hidden="true">
          🍪
        </div>

        <div className="pr-8">
          <p className="text-sm font-semibold text-foreground mb-1">
            One cookie. That's it.
          </p>
          <p className="text-xs text-muted-foreground leading-relaxed mb-3">
            We use a single, privacy-focused analytics cookie (PostHog, EU-hosted)
            to understand how people use our site. No ads, no trackers, no profiling.
            And yes — you can opt out even from this one.
          </p>
        </div>

        <div className="flex gap-2">
          <button
            onClick={handleAccept}
            className="flex-1 text-xs font-medium px-4 py-2 rounded-lg bg-foreground text-background hover:bg-foreground/90 transition-colors cursor-pointer"
          >
            Fine by me
          </button>
          <button
            onClick={handleDecline}
            className="flex-1 text-xs font-medium px-4 py-2 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors cursor-pointer"
          >
            No thanks
          </button>
        </div>

        <p className="text-[10px] text-muted-foreground/60 mt-2 text-center">
          <a href="/cookies" className="underline hover:text-muted-foreground transition-colors">
            Cookie policy
          </a>
        </p>
      </div>
    </div>
  );
}
