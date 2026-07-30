import React from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Check, ArrowRight } from "lucide-react";

const features = [
  "Unlimited recordings",
  "AI summaries & action items",
  "Full transcript with speaker ID",
  "Search across all meetings",
  "Chat with your documents",
  "100+ languages supported",
  "All updates to the current Summit product included",
];

const APP_STORE_URL =
  "https://apps.apple.com/app/summit-ai-notes/id6754717420?l=en-GB&mt=12";

interface Plan {
  id: string;
  name: string;
  tagline: string;
  price: string;
  period: string;
  note?: string;
  cta: string;
  badge?: { label: string; className: string };
  featured?: boolean;
}

const plans: Plan[] = [
  {
    id: "monthly",
    name: "Monthly",
    tagline: "Maximum flexibility",
    price: "12.99",
    period: "/month",
    note: "Cancel anytime",
    cta: "Start Free Trial",
  },
  {
    id: "yearly",
    name: "Yearly",
    tagline: "Best for steady use",
    price: "89.99",
    period: "/year",
    note: "Just $7.50/mo, billed annually",
    cta: "Start Free Trial",
    badge: {
      label: "Save 42%",
      className: "bg-orange-500 text-white border-orange-500",
    },
  },
  {
    id: "lifetime",
    name: "Lifetime",
    tagline: "Pay once and own Summit forever",
    price: "149.99",
    period: "one-time",
    note: "Costs less than 12 months of monthly billing",
    cta: "Get Lifetime Access",
    badge: {
      label: "Founding offer",
      className: "bg-emerald-600 text-white border-emerald-600",
    },
    featured: true,
  },
];

interface PricingSectionProps {
  className?: string;
}

const PricingSection: React.FC<PricingSectionProps> = ({ className = "" }) => {
  return (
    <section id="pricing" className={`py-24 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">
              Choose how you want to own your meeting notes
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Every option includes private, on-device recording,
              transcription, and AI summaries.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid lg:grid-cols-3 gap-6 items-stretch">
            {plans.map((plan) => (
              <Card
                key={plan.id}
                className={`relative flex flex-col p-8 bg-white w-full max-w-md mx-auto lg:max-w-none ${
                  plan.featured
                    ? "lg:-my-3 lg:p-9 border-sky-200 ring-1 ring-sky-200 shadow-xl shadow-sky-100/60 z-10"
                    : "border-border"
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className={`${plan.badge.className} shadow-sm`}>
                      {plan.badge.label}
                    </Badge>
                  </div>
                )}

                <div className="mb-6">
                  <h3
                    className={`font-semibold text-foreground mb-1 ${
                      plan.featured ? "text-xl" : "text-lg"
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {plan.tagline}
                  </p>
                </div>

                <div className="mb-8">
                  <div className="whitespace-nowrap">
                    <span
                      className={`font-semibold text-foreground align-super ${
                        plan.featured ? "text-2xl" : "text-xl"
                      }`}
                    >
                      $
                    </span>
                    <span
                      className={`font-bold text-foreground ${
                        plan.featured ? "text-4xl lg:text-5xl" : "text-4xl"
                      }`}
                    >
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground ml-1.5">
                      {plan.period}
                    </span>
                  </div>
                  <p
                    className={`text-sm mt-1.5 ${
                      plan.featured
                        ? "text-sky-700 font-medium"
                        : "text-muted-foreground"
                    }`}
                  >
                    {plan.note}
                  </p>
                </div>

                <ul className="space-y-3.5 mb-8 flex-1">
                  {features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-3 text-sm text-muted-foreground"
                    >
                      <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href={APP_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-auto"
                >
                  {plan.featured ? (
                    <Button
                      className="w-full bg-[#0b1220] hover:bg-[#111827] text-white shadow-lg shadow-sky-900/20"
                      size="lg"
                    >
                      {plan.cta}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  ) : (
                    <Button
                      variant="outline"
                      className="w-full border-slate-300 text-[#0b1220] hover:bg-slate-50 hover:border-slate-400"
                      size="lg"
                    >
                      {plan.cta}
                    </Button>
                  )}
                </a>
              </Card>
            ))}
          </div>

          {/* Founding offer context */}
          <p className="text-center text-sm text-muted-foreground mt-12 max-w-2xl mx-auto">
            The Lifetime plan is a limited founding offer for early adopters.
            It covers all updates to the current Summit product; optional cloud
            services or separate products, if we introduce them, are not
            included.
          </p>

          {/* Trust footer */}
          <p className="text-center text-sm text-muted-foreground/80 mt-8 pt-8 border-t border-border/50 max-w-md mx-auto">
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
