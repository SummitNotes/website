import React, { useState } from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Check, ArrowRight } from "lucide-react";

type PricingMode = "subscribe" | "buy-once";

const features = [
  "Unlimited recordings",
  "AI summaries & action items",
  "Full transcript with speaker ID",
  "Search across all meetings",
  "Chat with your documents",
  "100+ languages supported",
  "All future updates included",
];

const APP_STORE_URL =
  "https://apps.apple.com/app/summit-ai-notes/id6754717420?l=en-GB&mt=12";

interface PricingSectionProps {
  className?: string;
}

const PricingSection: React.FC<PricingSectionProps> = ({ className = "" }) => {
  const [mode, setMode] = useState<PricingMode>("subscribe");

  return (
    <section id="pricing" className={`py-24 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">
              Simple, Transparent Pricing
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Every plan includes all features. Choose how you'd like to pay.
            </p>
          </div>

          {/* Toggle */}
          <div className="flex justify-center mb-12">
            <div
              role="tablist"
              aria-label="Payment type"
              className="relative inline-flex bg-muted rounded-full p-1.5 border border-border/50 shadow-inner"
            >
              {/* Sliding indicator */}
              <div
                className={`absolute top-1.5 bottom-1.5 rounded-full bg-white shadow-md ring-1 ring-black/5 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                  mode === "subscribe"
                    ? "left-1.5 w-[calc(50%-3px)]"
                    : "left-[calc(50%+1.5px)] w-[calc(50%-3px)]"
                }`}
              />
              <button
                role="tab"
                aria-selected={mode === "subscribe"}
                aria-controls="subscribe-panel"
                onClick={() => setMode("subscribe")}
                className={`relative z-10 px-6 py-2.5 rounded-full text-sm font-semibold transition-colors duration-200 ${
                  mode === "subscribe"
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground/70"
                }`}
              >
                Subscribe
              </button>
              <button
                role="tab"
                aria-selected={mode === "buy-once"}
                aria-controls="buy-once-panel"
                onClick={() => setMode("buy-once")}
                className={`relative z-10 px-6 py-2.5 rounded-full text-sm font-semibold transition-colors duration-200 ${
                  mode === "buy-once"
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground/70"
                }`}
              >
                Buy Once
              </button>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="relative">
            {/* Subscribe View */}
            <div
              role="tabpanel"
              id="subscribe-panel"
              className={`transition-all duration-300 ease-out ${
                mode === "subscribe"
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4 absolute inset-x-0 top-0 pointer-events-none"
              }`}
            >
              <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                {/* Monthly */}
                <Card className="p-8">
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      Monthly
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Cancel anytime
                    </p>
                  </div>
                  <div className="mb-8">
                    <span className="text-2xl font-semibold text-foreground align-super">
                      $
                    </span>
                    <span className="text-4xl font-bold text-foreground">
                      12.99
                    </span>
                    <span className="text-muted-foreground ml-1">/month</span>
                    <p className="text-sm mt-1">&nbsp;</p>
                  </div>
                  <ul className="space-y-3.5 mb-8">
                    {features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-3 text-sm text-muted-foreground"
                      >
                        <Check className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={APP_STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      className="w-full border-sky-200 text-sky-700 hover:bg-sky-50 hover:border-sky-300"
                      size="lg"
                    >
                      Start Free Trial
                    </Button>
                  </a>
                </Card>

                {/* Yearly */}
                <Card className="p-8 relative border-sky-200 shadow-lg shadow-sky-100/50">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-sky-500 text-white border-sky-500 shadow-sm">
                      Save 42%
                    </Badge>
                  </div>
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      Yearly
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Recommended
                    </p>
                  </div>
                  <div className="mb-8">
                    <span className="text-2xl font-semibold text-foreground align-super">
                      $
                    </span>
                    <span className="text-4xl font-bold text-foreground">
                      89.99
                    </span>
                    <span className="text-muted-foreground ml-1">/year</span>
                    <p className="text-sm text-sky-600 font-medium mt-1">
                      Just $7.50/mo, billed annually
                    </p>
                  </div>
                  <ul className="space-y-3.5 mb-8">
                    {features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-3 text-sm text-muted-foreground"
                      >
                        <Check className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={APP_STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      className="w-full bg-gradient-to-r from-sky-500 to-sky-400 hover:from-sky-600 hover:to-sky-500 text-white shadow-lg shadow-sky-500/25"
                      size="lg"
                    >
                      Start Free Trial
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </a>
                </Card>
              </div>

              {/* Lifetime teaser */}
              <p className="text-center text-sm text-muted-foreground mt-6">
                Prefer to own it?{" "}
                <button
                  onClick={() => setMode("buy-once")}
                  className="text-sky-600 font-medium hover:text-sky-700 hover:underline transition-colors"
                >
                  Get lifetime access for $149.99 &rarr;
                </button>
              </p>
            </div>

            {/* Buy Once View */}
            <div
              role="tabpanel"
              id="buy-once-panel"
              className={`transition-all duration-300 ease-out ${
                mode === "buy-once"
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4 absolute inset-x-0 top-0 pointer-events-none"
              }`}
            >
              <div className="max-w-lg mx-auto">
                <Card className="p-10 relative border-sky-200 shadow-lg shadow-sky-100/50">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-sky-500 text-white border-sky-500 shadow-sm">
                      Best Value
                    </Badge>
                  </div>
                  <div className="text-center mb-6">
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      Lifetime Access
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Pay once, own it forever
                    </p>
                  </div>
                  <div className="text-center mb-8">
                    <span className="text-3xl font-semibold text-foreground align-super">
                      $
                    </span>
                    <span className="text-5xl font-bold text-foreground">
                      149.99
                    </span>
                    <span className="text-muted-foreground ml-2">
                      one-time
                    </span>
                    <p className="text-sm text-sky-600 font-medium mt-2">
                      Pays for itself in under 12 months
                    </p>
                  </div>
                  <ul className="space-y-3.5 mb-8">
                    {features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-3 text-sm text-muted-foreground"
                      >
                        <Check className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={APP_STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button
                      className="w-full bg-gradient-to-r from-sky-500 to-sky-400 hover:from-sky-600 hover:to-sky-500 text-white shadow-lg shadow-sky-500/25"
                      size="lg"
                    >
                      Get Lifetime Access
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </a>
                </Card>
              </div>

              {/* Subscription teaser */}
              <p className="text-center text-sm text-muted-foreground mt-6">
                Prefer a subscription?{" "}
                <button
                  onClick={() => setMode("subscribe")}
                  className="text-sky-600 font-medium hover:text-sky-700 hover:underline transition-colors"
                >
                  Plans from $12.99/mo &rarr;
                </button>
              </p>
            </div>
          </div>

          {/* Trust footer */}
          <p className="text-center text-sm text-muted-foreground/80 mt-12 pt-8 border-t border-border/50 max-w-md mx-auto">
            Start with 15 free recordings. Available on the Mac App Store.
            <br />
            Prices may vary by region.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
