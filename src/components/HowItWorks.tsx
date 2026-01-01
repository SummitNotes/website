import React from "react";
import { Badge } from "./ui/badge";
import { Mic, Sparkles, FileText, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: <Mic className="w-6 h-6" />,
    number: "01",
    title: "Record",
    description: "Hit record during any meeting. Works with Zoom, Teams, Slack, Meet—any platform where you can hear audio.",
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    number: "02",
    title: "Transcribe",
    description: "Local AI converts audio to searchable text with automatic speaker identification. Nothing ever leaves your Mac.",
  },
  {
    icon: <FileText className="w-6 h-6" />,
    number: "03",
    title: "Summarize",
    description: "Get client-ready summaries with key insights and action items, formatted professionally and ready to share.",
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-gray-50/50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-sky-50 text-sky-700 border-sky-200">
            How It Works
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            From Meeting to Summary in Minutes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three steps. Zero cloud uploads. Complete privacy.
          </p>
        </div>

        {/* Steps with connecting line */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting line - hidden on mobile */}
            <div className="hidden md:block absolute top-16 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-sky-200 via-emerald-200 to-violet-200"></div>

            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step card */}
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:border-sky-100 transition-all duration-300 h-full">
                  {/* Number badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-50 to-emerald-50 text-sky-600 border border-sky-100">
                      {step.icon}
                    </div>
                    <span className="text-4xl font-bold text-gray-100">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow between cards - hidden on mobile and after last card */}
                {index < steps.length - 1 && (
                  <div className="hidden md:flex absolute -right-4 top-16 z-10 w-8 h-8 bg-white rounded-full shadow-sm border border-gray-100 items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
