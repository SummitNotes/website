import React from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Lock, CheckCircle, ArrowRight, Play, Shield, Zap } from 'lucide-react';

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  ctaText?: string;
  secondaryCtaText?: string;
  features?: string[];
  stats?: Array<{
    value: string;
    label: string;
    icon: React.ReactNode;
  }>;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title = "Meeting Notes That Respect",
  subtitle = "Confidentiality",
  description = "The first meeting assistant built for professionals who can't use cloud-based tools. 100% local processing means your conversations never leave your Mac.",
  ctaText = "Download",
  secondaryCtaText = "See How It Works",
  features = [
    // Todo features
    // "Early access to launch",
    // "50% lifetime discount for first 100 users",
    // "Priority feature requests"
  ],
  stats = [
    {
      value: "100%",
      label: "Local Processing",
      icon: <Shield className="w-5 h-5 text-purple-600" />,
    },
    {
      value: "Zero",
      label: "Cloud Uploads",
      icon: <Lock className="w-5 h-5 text-blue-600" />,
    },
    // {
    //   value: "500+",
    //   label: "On Waitlist",
    //   icon: <Users className="w-5 h-5 text-green-600" />
    // }
  ],
}) => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-background via-background to-muted/20 overflow-hidden pt-16 md:pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-40 left-20 w-24 h-24 bg-green-500/10 rounded-full blur-xl animate-pulse delay-2000"></div>

      <div className="relative z-10 container mx-auto px-4 pt-20 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">
              {/* Badge */}
              <Badge
                variant="secondary"
                className="w-fit bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 border-blue-200 hover:bg-blue-100"
              >
                <Zap className="w-3 h-3 mr-1" />
                All local recording and processing!
              </Badge>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  {title}
                  <span className="block mt-2 bg-gradient-to-r from-sky-500 via-sky-200 to-sky-400 bg-clip-text text-transparent">
                    {subtitle}
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                  {description}
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
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
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-6 text-lg font-semibold group"
                  onClick={() => {
                    const element = document.getElementById("how-it-works");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  {secondaryCtaText}
                </Button>
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
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center lg:text-left">
                    <div className="flex items-center justify-center lg:justify-start gap-2 mb-1">
                      {stat.icon}
                      <span className="text-2xl font-bold text-foreground">
                        {stat.value}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {stat.label}
                    </p>
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
