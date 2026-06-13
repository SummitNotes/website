import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  HardDrive,
  Ban,
  KeyRound,
} from "lucide-react";

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

const boundarySignals = [
  {
    icon: <Ban className="w-4 h-4" />,
    label: "not training data",
    tone: "text-orange-600",
  },
  {
    icon: <HardDrive className="w-4 h-4" />,
    label: "stored locally",
    tone: "text-emerald-600",
  },
  {
    icon: <KeyRound className="w-4 h-4" />,
    label: "user-controlled retention",
    tone: "text-sky-600",
  },
];

type SlideDirection = "next" | "prev";

const HeroSection: React.FC<HeroSectionProps> = ({
  title = "Client Meeting Notes",
  subtitle = "That Never Leave Your Mac",
  description = "Record Zoom, Teams, Meet, or in-person calls. Summit turns them into searchable transcripts, client-ready summaries, and action items locally on your Mac.",
  ctaText = "Start 15 Free Recordings",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState<number | null>(null);
  const [slideDirection, setSlideDirection] = useState<SlideDirection>("next");
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      goToSlide((currentIndex + 1) % screenshots.length, "next");
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  useEffect(() => {
    if (previousIndex === null) return;
    const timeout = setTimeout(() => setPreviousIndex(null), 700);
    return () => clearTimeout(timeout);
  }, [currentIndex, previousIndex]);

  const goToSlide = (
    index: number,
    direction: SlideDirection = index > currentIndex ? "next" : "prev",
  ) => {
    if (index === currentIndex) return;
    setPreviousIndex(currentIndex);
    setSlideDirection(direction);
    setCurrentIndex(index);
  };

  const handleSlideSelect = (index: number) => {
    goToSlide(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrev = () => {
    goToSlide(
      (currentIndex - 1 + screenshots.length) % screenshots.length,
      "prev",
    );
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    goToSlide((currentIndex + 1) % screenshots.length, "next");
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <div className="relative min-h-[90vh] overflow-hidden bg-[#f7fbfd]">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70 saturate-[0.75]"
        style={{ backgroundImage: "url('/mountain-daytime.webp')" }}
      />
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f8fbfd]/90 via-[#eef7fa]/75 to-[#f8fbfd]/95" />
      <div className="absolute inset-x-0 bottom-0 h-72 bg-[radial-gradient(circle_at_50%_100%,rgba(16,185,129,0.16),transparent_58%)]" />

      <div className="relative z-10 container mx-auto px-4 pt-8 pb-20">
        <div className="max-w-7xl mx-auto">
          {/* Logo and Product Name */}
          <div className="flex items-center gap-4 mb-16">
            <div className="relative group">
              <div className="w-14 h-14 rounded-2xl shadow-lg overflow-hidden bg-gradient-to-b from-white via-white to-sky-100 transition-transform group-hover:scale-105 ring-1 ring-white/70">
                <img
                  src="/logo.svg"
                  alt="Summit AI Notes"
                  className="w-full h-full"
                />
              </div>
              <div className="absolute inset-0 rounded-2xl bg-sky-400/30 blur-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div>
              <span className="text-xl font-bold text-[#0b1220] block">
                Summit AI Notes
              </span>
              <span className="text-sm text-slate-600">for macOS</span>
            </div>
          </div>

          {/* Main content - Centered with screenshot below */}
          <div className="text-center max-w-4xl mx-auto mb-12">
            {/* Main Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#0b1220] leading-[1.1] mb-6">
              {title}
              <span className="block mt-2 text-[#0ea5e9]">{subtitle}</span>
            </h1>

            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-8">
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
                  className="bg-[#0b1220] hover:bg-[#111827] text-white px-10 py-7 text-lg font-semibold shadow-xl shadow-sky-900/20 hover:shadow-2xl hover:shadow-sky-900/25 transition-all group border border-sky-300/20"
                >
                  {ctaText}
                  <ArrowRight className="w-5 h-5 ml-2 text-[#38bdf8] group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <span className="text-sm text-slate-500">
                No signup needed.{" "}
                <a
                  href="#pricing"
                  className="text-slate-600 hover:text-[#0b1220] transition-colors border-b border-slate-300 hover:border-slate-500 pb-px"
                >
                  See pricing
                </a>
              </span>
            </div>
          </div>

          {/* Mobile Boundary Strip - visible below lg */}
          <div
            className="flex lg:hidden flex-wrap justify-center gap-2 mt-6 mb-2"
            aria-hidden="true"
          >
            {boundarySignals.map((signal) => (
              <div
                key={signal.label}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-white/85 backdrop-blur-sm rounded-lg shadow-sm border border-white/70"
              >
                <span className={signal.tone}>{signal.icon}</span>
                <span className="text-xs font-medium text-slate-600">
                  {signal.label}
                </span>
              </div>
            ))}
          </div>

          {/* Floating Boundary Cards - visible on lg+ screens */}
          <div
            className="hidden lg:block relative mt-2 -mb-2"
            aria-hidden="true"
          >
            <div className="relative max-w-5xl mx-auto h-16">
              <div
                className="absolute left-0 top-0 animate-float"
                style={
                  {
                    "--card-rotate": "-4deg",
                    "--float-duration": "6s",
                    "--float-delay": "0s",
                  } as React.CSSProperties
                }
              >
                <div className="flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-xl shadow-md border border-orange-100">
                  <span className="text-orange-600">
                    <Ban className="w-4 h-4" />
                  </span>
                  <div>
                    <span className="text-sm font-medium text-slate-700 block">
                      not training data
                    </span>
                    <span className="text-[10px] text-orange-600/70 block -mt-0.5">
                      vendor boundary
                    </span>
                  </div>
                </div>
              </div>

              <div
                className="absolute left-[18%] top-2 animate-float"
                style={
                  {
                    "--card-rotate": "3deg",
                    "--float-duration": "7s",
                    "--float-delay": "0.8s",
                  } as React.CSSProperties
                }
              >
                <div className="flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-xl shadow-md border border-emerald-100">
                  <span className="text-emerald-600">
                    <HardDrive className="w-4 h-4" />
                  </span>
                  <div>
                    <span className="text-sm font-medium text-slate-700 block">
                      stored locally
                    </span>
                    <span className="text-[10px] text-emerald-600/70 block -mt-0.5">
                      on this Mac
                    </span>
                  </div>
                </div>
              </div>

              <div
                className="absolute left-1/2 -translate-x-1/2 -top-1 animate-float"
                style={
                  {
                    "--card-rotate": "-2deg",
                    "--float-duration": "5.5s",
                    "--float-delay": "1.5s",
                  } as React.CSSProperties
                }
              >
                <div className="flex items-center gap-2 px-5 py-2 bg-white/90 backdrop-blur-sm rounded-xl shadow-md border border-slate-200">
                  <span className="text-xs font-bold text-orange-600">
                    model
                  </span>
                  <div>
                    <span className="text-sm font-medium text-slate-700 block">
                      training_set: never
                    </span>
                    <span className="text-[10px] text-sky-600/70 block -mt-0.5">
                      your calls stay out
                    </span>
                  </div>
                </div>
              </div>

              <div
                className="absolute right-[18%] top-2 animate-float"
                style={
                  {
                    "--card-rotate": "-3deg",
                    "--float-duration": "6.5s",
                    "--float-delay": "0.4s",
                  } as React.CSSProperties
                }
              >
                <div className="flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-xl shadow-md border border-sky-100">
                  <span className="text-sky-600">
                    <KeyRound className="w-4 h-4" />
                  </span>
                  <div>
                    <span className="text-sm font-medium text-slate-700 block">
                      retention is yours
                    </span>
                    <span className="text-[10px] text-sky-600/70 block -mt-0.5">
                      delete whenever
                    </span>
                  </div>
                </div>
              </div>

              <div
                className="absolute right-0 top-0 animate-float"
                style={
                  {
                    "--card-rotate": "5deg",
                    "--float-duration": "7.5s",
                    "--float-delay": "1.2s",
                  } as React.CSSProperties
                }
              >
                <div className="flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-xl shadow-md border border-slate-200">
                  <span className="text-slate-700 font-mono text-xs">
                    /calls
                  </span>
                  <div>
                    <span className="text-sm font-medium text-slate-700 block">
                      client-strategy.wav
                    </span>
                    <span className="text-[10px] text-slate-400 block -mt-0.5">
                      local file path
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Screenshot Carousel */}
          <div className="relative mt-8 mx-auto max-w-5xl">
            {/* Glow effect behind */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0ea5e9]/18 via-[#10b981]/16 to-[#f97316]/12 blur-3xl scale-90 -z-10"></div>

            {/* Carousel container */}
            <div className="relative" style={{ perspective: "2000px" }}>
              {/* Main screenshot display */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-slate-950/20 ring-1 ring-white/80">
                {screenshots.map((screenshot, index) => (
                  <img
                    key={screenshot.src}
                    src={screenshot.src}
                    alt={screenshot.alt}
                    className={`w-full transition-[opacity,transform] duration-700 ease-out ${
                      index === currentIndex
                        ? `opacity-100 translate-x-0 ${
                            previousIndex === null
                              ? ""
                              : slideDirection === "next"
                                ? "animate-carousel-enter-next"
                                : "animate-carousel-enter-prev"
                          }`
                        : index === previousIndex
                          ? `absolute inset-0 opacity-0 ${
                              slideDirection === "next"
                                ? "animate-carousel-exit-next"
                                : "animate-carousel-exit-prev"
                            }`
                          : "absolute inset-0 opacity-0 translate-x-full"
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
                  onClick={() => handleSlideSelect(index)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-[#0b1220] text-white shadow-sm"
                      : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                  }`}
                  aria-label={`Go to ${screenshot.label}`}
                >
                  <span
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex ? "bg-[#38bdf8]" : "bg-gray-400"
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
