import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Download, Mic, FileText, Lock, Sparkles, ArrowRight } from 'lucide-react';

interface Step {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
  details: string[];
}

const HowItWorks: React.FC = () => {
  const steps: Step[] = [
    {
      number: 1,
      title: "Download & Install",
      description: "One-time setup on your Mac",
      icon: <Download className="w-6 h-6" />,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      details: [
        "Native macOS app - no browser required",
        "Installs in under 60 seconds",
        "No cloud account needed to start"
      ]
    },
    {
      number: 2,
      title: "Record Your Meeting",
      description: "System audio and microphone capture",
      icon: <Mic className="w-6 h-6" />,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      details: [
        "Works with Zoom, Teams, Meet, or in-person",
        "Captures both sides of the conversation",
        "Runs silently in the background"
      ]
    },
    {
      number: 3,
      title: "AI Processing",
      description: "100% local on your Mac",
      icon: <Lock className="w-6 h-6" />,
      color: "text-green-600",
      bgColor: "bg-green-50",
      details: [
        "Processing happens on-device",
        "Zero data sent to cloud servers unless you want to",
        "Your conversations stay private"
      ]
    },
    {
      number: 4,
      title: "Get Your Summary",
      description: "Client-ready documentation",
      icon: <FileText className="w-6 h-6" />,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      details: [
        "Structured summaries with action items",
        "Key insights automatically extracted",
        "Export to your preferred format"
      ]
    }
  ];

  return (
    <div className="relative py-20 bg-background">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 space-y-4">
            <Badge variant="secondary" className="w-fit mx-auto bg-gradient-to-r from-purple-50 to-blue-50 text-purple-700 border-purple-200">
              <Sparkles className="w-3 h-3 mr-1" />
              Simple Yet Powerful
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From meeting to deliverable documentation in four simple steps
            </p>
          </div>

          {/* Video Demo */}
          <div className="mb-16">
            <div className="relative w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-2xl">
              <div className="relative pb-[56.25%]">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/FFXmkCWVJVg?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&loop=1&playlist=FFXmkCWVJVg"
                  title="How Summit AI Notes Works"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>

          {/* Steps Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* Connector Arrow (hidden on mobile, shown on larger screens between cards) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-24 -right-3 z-10">
                    <ArrowRight className="w-6 h-6 text-muted-foreground/30" />
                  </div>
                )}

                <Card className="h-full p-6 bg-background border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-lg ${step.bgColor} ${step.color} flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform`}>
                    {step.icon}
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {step.description}
                  </p>

                  {/* Details */}
                  <ul className="space-y-2">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <div className={`w-1 h-1 rounded-full ${step.bgColor} ${step.color} mt-1.5 flex-shrink-0`}></div>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            ))}
          </div>

          {/* Privacy Callout */}
          <Card className="p-8 bg-gradient-to-br from-green-50 to-blue-50 border-green-200">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <Lock className="w-8 h-8 text-green-600" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Why Local Processing Matters
                </h3>
                <p className="text-muted-foreground">
                  Cloud-based tools like Otter.ai and Fireflies.ai upload your recordings to their servers for processing.
                  That's a dealbreaker when you've signed NDAs or handle sensitive client information.
                  Summit AI Notes processes everything locally on your Mac - no exceptions, no compromises.
                </p>
              </div>
              <div className="flex-shrink-0">
                <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-300">
                  NDA-Safe
                </Badge>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
