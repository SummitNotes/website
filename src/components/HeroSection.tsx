import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ArrowRight, Shield, ChevronLeft, ChevronRight } from "lucide-react";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  ctaText?: string;
}

const screenshots = [
  {
    src: "/screenshot-1.jpg",
    alt: "Meeting summary with action items and key insights",
    label: "Summary",
  },
  {
    src: "/screenshot-2.jpg",
    alt: "Transcript view with speaker identification",
    label: "Transcript",
  },
  {
    src: "/screenshot-3.jpg",
    alt: "Powerful search across all meetings",
    label: "Search",
  },
  {
    src: "/screenshot-4.jpg",
    alt: "Chat with your meetings",
    label: "Chat",
  },
];

const HeroSection: React.FC<HeroSectionProps> = ({
  title = "Meeting Notes",
  subtitle = "That Stay on Your Mac",
  description = "Record, transcribe, and summarize with AI that runs entirely on your device. No cloud uploads. No meeting bots. Just private, professional documentation.",
  ctaText = "Free for 30 Meetings",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % screenshots.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + screenshots.length) % screenshots.length,
    );
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % screenshots.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <div className="relative min-h-[90vh] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/mountain-daytime.webp')" }}
      />
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white/80" />

      <div className="relative z-10 container mx-auto px-4 pt-8 pb-20">
        <div className="max-w-7xl mx-auto">
          {/* Logo and Product Name */}
          <div className="flex items-center gap-4 mb-16">
            <div className="relative group">
              <div className="w-14 h-14 rounded-2xl shadow-lg overflow-hidden bg-gradient-to-b from-white via-white to-sky-100 transition-transform group-hover:scale-105">
                <img
                  src="/logo.svg"
                  alt="Summit AI Notes"
                  className="w-full h-full"
                />
              </div>
              <div className="absolute inset-0 rounded-2xl bg-sky-400/30 blur-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div>
              <span className="text-xl font-bold text-foreground block">
                Summit AI Notes
              </span>
              <span className="text-sm text-muted-foreground">for macOS</span>
            </div>
          </div>

          {/* Main content - Centered with screenshot below */}
          <div className="text-center max-w-4xl mx-auto mb-12">
            {/* Trust Badge */}
            <Badge
              variant="secondary"
              className="mb-6 bg-white/80 backdrop-blur-sm text-[#1f98cf] border-[#c1e2f1] shadow-sm"
            >
              <Shield className="w-3 h-3 mr-1.5" />
              100% Local AI Processing
            </Badge>

            {/* Main Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] mb-6">
              {title}
              <span className="block mt-2 text-[#1f98cf]">{subtitle}</span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
              {description}
            </p>

            {/* CTA Button */}
            <div className="flex flex-col items-center gap-3">
              <a
                href="https://apps.apple.com/app/summit-ai-notes/id6754717420?l=en-GB&mt=12"
                target="_blank"
                rel="noopener noreferrer"
                className="download-button"
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-sky-500 to-sky-400 hover:from-sky-600 hover:to-sky-500 text-white px-10 py-7 text-lg font-semibold shadow-lg shadow-sky-500/25 hover:shadow-xl hover:shadow-sky-500/30 transition-all group"
                >
                  {ctaText}
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <span className="text-sm text-muted-foreground font-medium px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-sm">
                No Subscription!
              </span>
            </div>
          </div>

          {/* Screenshot Carousel */}
          <div className="relative mt-8 mx-auto max-w-5xl">
            {/* Glow effect behind */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1f98cf]/15 via-[#59b9e1]/20 to-[#a4d6e8]/15 blur-3xl scale-90 -z-10"></div>

            {/* Carousel container */}
            <div className="relative" style={{ perspective: "2000px" }}>
              {/* Main screenshot display */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-gray-900/20">
                {screenshots.map((screenshot, index) => (
                  <img
                    key={screenshot.src}
                    src={screenshot.src}
                    alt={screenshot.alt}
                    className={`w-full transition-all duration-700 ease-out ${
                      index === currentIndex
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-95 absolute inset-0"
                    }`}
                    style={{
                      borderRadius: "24px",
                    }}
                  />
                ))}
              </div>

              {/* Navigation arrows */}
              <button
                onClick={goToPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white hover:scale-110 transition-all z-10"
                aria-label="Previous screenshot"
              >
                <ChevronLeft className="w-6 h-6 text-gray-700" />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white hover:scale-110 transition-all z-10"
                aria-label="Next screenshot"
              >
                <ChevronRight className="w-6 h-6 text-gray-700" />
              </button>
            </div>

            {/* Dot indicators with labels */}
            <div className="flex items-center justify-start sm:justify-center gap-3 mt-6 overflow-x-auto pb-2 px-4 -mx-4 sm:mx-0 sm:px-0">
              {screenshots.map((screenshot, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-sky-100 text-sky-700 shadow-sm"
                      : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                  }`}
                  aria-label={`Go to ${screenshot.label}`}
                >
                  <span
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex ? "bg-sky-500" : "bg-gray-400"
                    }`}
                  />
                  <span className="text-sm font-medium">
                    {screenshot.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default HeroSection;
