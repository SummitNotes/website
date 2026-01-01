"use client";

import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  FileText,
  Zap,
  AppleIcon,
  Search,
  Mountain
} from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  highlight?: boolean;
  className?: string;
}

const FeatureCard = ({ icon, title, description, highlight = false, className }: FeatureCardProps) => {
  const isPlatformCard = title === "Platform Independent";

  return (
    <Card
      className={`group relative p-6 transition-all duration-300 hover:shadow-lg ${isPlatformCard ? '' : 'hover:-translate-y-1'} ${
        highlight ? "border-blue-300 bg-blue-50/50" : "hover:border-blue-200"
      } ${className} ${isPlatformCard ? "overflow-visible" : ""}`}
    >
      <div className="flex items-start space-x-4">
        <div className={`flex h-12 w-12 items-center justify-center rounded-lg transition-colors ${
          highlight
            ? "bg-sky-400 text-white"
            : "bg-muted text-muted-foreground group-hover:bg-sky-400 group-hover:text-white"
        }`}>
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
          <p className="text-muted-foreground leading-relaxed text-sm">{description}</p>
        </div>
      </div>

      {/* Platform Logos - Stacked on left side, slide out on hover */}
      {isPlatformCard && (
        <>
          {/* Zoom - Top of stack */}
          <Card className="absolute top-0 -left-10 group-hover:-left-24 group-hover:-top-10 p-2 bg-background border-border shadow-md transform -rotate-6 group-hover:-rotate-3 transition-all duration-500 z-10">
            <div className="w-12 h-12 bg-white rounded flex items-center justify-center p-1">
              <img src="/zoom.jpg" alt="Zoom" className="w-full h-full object-contain rounded" />
            </div>
          </Card>

          {/* Teams - Second */}
          <Card className="absolute top-10 -left-12 group-hover:-left-26 group-hover:top-7 p-2 bg-background border-border shadow-md transform rotate-3 group-hover:rotate-6 transition-all duration-500 z-10">
            <div className="w-12 h-12 bg-white rounded flex items-center justify-center p-1">
              <img src="/teams.jpg" alt="Microsoft Teams" className="w-full h-full object-contain rounded" />
            </div>
          </Card>

          {/* Slack - Third */}
          <Card className="absolute top-20 -left-10 group-hover:-left-24 group-hover:top-23 p-2 bg-background border-border shadow-md transform -rotate-3 group-hover:-rotate-6 transition-all duration-500 z-10">
            <div className="w-12 h-12 bg-white rounded flex items-center justify-center p-1">
              <img src="/slack.jpg" alt="Slack" className="w-full h-full object-contain rounded" />
            </div>
          </Card>

          {/* Google Meet - Bottom of stack */}
          <Card className="absolute top-30 -left-12 group-hover:-left-26 group-hover:top-40 p-2 bg-background border-border shadow-md transform -rotate-6 group-hover:rotate-3 transition-all duration-500 z-10">
            <div className="w-12 h-12 bg-white rounded flex items-center justify-center p-1">
              <img src="/meet.jpg" alt="Google Meet" className="w-full h-full object-contain rounded" />
            </div>
          </Card>
        </>
      )}
    </Card>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Actionable Meeting Summaries",
      description: "Auto-generated meeting summaries suitable for client deliverables, with action items and key insights formatted professionally.",
      highlight: true
    },
    {
      icon: <Search className="h-6 w-6" />,
      title: "Powerful Search",
      description: "Full-text search through transcripts, summaries and tags. Find any conversation instantly with the Similar Documents feature.",
      highlight: false
    },
    {
      icon: <Mountain className="h-6 w-6" />,
      title: "Platform Independent",
      description: "No meeting bots required. Works with Zoom, Slack, Teams, Google Meet—any platform where you can hear audio.",
      highlight: false
    },
    {
      icon: <AppleIcon className="h-6 w-6" />,
      title: "Mac-Native Design",
      description: "Built specifically for macOS. Premium, integrated experience that works seamlessly with your existing workflow."
    },
  ];

  return (
    <div className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Solution Section */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-green-50 text-green-700 border-green-200">
            <Zap className="w-3 h-3 mr-1" />
            Key Features
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Everything You Need, Nothing You Don't
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Purpose-built for consultants who need professional meeting documentation without the complexity.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;