import React from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Lock, CheckCircle, ArrowRight, Shield, Zap } from "lucide-react";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  ctaText?: string;
  features?: string[];
  stats?: Array<{
    value: string;
    label: string;
    icon: React.ReactNode;
    hoverText?: string;
  }>;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title = "AI Meeting Notes That Never Leave Your Mac",
  subtitle = "",
  description = "Record, transcribe, and summarize client meetings entirely on your Mac. No cloud servers. No data uploads. Perfect for consultants under NDA.",
  ctaText = "Free for 30 Meetings",
  features = [
    // Todo features
    // "Early access to launch",
    // "50% lifetime discount for first 100 users",
    // "Priority feature requests"
  ],
  stats = [
    {
      value: "100%",
      label: "Local",
      icon: <Shield className="w-5 h-5 text-purple-600" />,
      hoverText: "All AI runs on your Mac",
    },
    {
      value: "0",
      label: "Cloud Uploads",
      icon: <Lock className="w-5 h-5 text-blue-600" />,
      hoverText: "Your data never leaves",
    },
  ],
}) => {
  return (
    <div className="relative bg-gradient-to-br from-background via-background to-muted/20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-40 left-20 w-24 h-24 bg-green-500/10 rounded-full blur-xl animate-pulse delay-2000"></div>

      <div className="relative z-10 container mx-auto px-4 pt-8 pb-16">
        <div className="max-w-7xl mx-auto">
          {/* Logo and Product Name - Always Visible */}
          <div className="flex items-center gap-3 mb-12">
            <img
              src="/logo512x512.jpg"
              alt="Summit AI Notes"
              className="w-12 h-12 rounded-xl shadow-lg"
            />
            <span className="text-xl font-semibold text-foreground">
              Summit AI Notes
            </span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">
              {/* Pain Point Badge */}
              <Badge
                variant="secondary"
                className="w-fit bg-gradient-to-r from-red-50 to-orange-50 text-red-700 border-red-200"
              >
                <Zap className="w-3 h-3 mr-1" />
                Stop losing 10+ hours/week on meeting admin
              </Badge>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  {title}
                  {subtitle && (
                    <span className="block mt-2 bg-gradient-to-r from-sky-500 via-sky-200 to-sky-400 bg-clip-text text-transparent">
                      {subtitle}
                    </span>
                  )}
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                  {description}
                </p>
              </div>

              {/* CTA Button */}
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <div className="flex flex-col gap-2">
                  <a
                    href="https://apps.apple.com/app/summit-ai-notes/id6754717420?l=en-GB&mt=12"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="lg"
                      className="bg-sky-400 hover:bg-sky-600 text-white px-8 py-6 text-lg font-semibold group"
                    >
                      {ctaText}
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </a>
                  <span className="text-sm text-muted-foreground">
                    Then $29.99 one-time · No subscription
                  </span>
                </div>
              </div>

              {/* Features List */}
              <div className="flex flex-wrap gap-4">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    {feature}
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 pt-8 border-t border-border hidden">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="text-center lg:text-left group relative cursor-default"
                  >
                    <div className="flex items-center justify-center lg:justify-start gap-2 mb-1">
                      {stat.icon}
                      <span className="text-2xl font-bold text-foreground">
                        {stat.value}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {stat.label}
                    </p>
                    {stat.hoverText && (
                      <div className="absolute -bottom-8 left-0 right-0 lg:left-auto lg:right-auto opacity-0 group-hover:opacity-100 transition-opacity text-xs text-muted-foreground bg-background/90 px-2 py-1 rounded whitespace-nowrap">
                        {stat.hoverText}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Video Demo */}
            <div className="relative w-full rounded-lg overflow-hidden shadow-2xl">
              <div className="relative pb-[56.25%]">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/NEfCIwPjf0E?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&loop=1&playlist=NEfCIwPjf0E"
                  title="How Summit AI Notes Works"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-muted/20 to-transparent"></div>
    </div>
  );
};

export default HeroSection;
