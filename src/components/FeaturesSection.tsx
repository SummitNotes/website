"use client";

import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Shield, 
  FileText, 
  Clock, 
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
            ? "bg-blue-600 text-white"
            : "bg-muted text-muted-foreground group-hover:bg-blue-600 group-hover:text-white"
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
      icon: <Shield className="h-6 w-6" />,
      title: "Privacy-First Local Processing",
      description: "Zero cloud dependency. All transcription happens on-device for complete privacy and confidentiality - perfect for NDAs and sensitive client work.",
      highlight: true
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Actionable Meeting Summaries",
      description: "Auto-generated meeting summaries suitable for client deliverables, with action items and key insights formatted professionally."
    },
    {
      icon: <Search className="h-6 w-6" />,
      title: "Powerful Search",
      description: "Full-text search through transcripts, summary and tags. Take advantage of Similar Documents Feature.",
      highlight: false
    },
    {
      icon: <Mountain className="h-6 w-6" />,
      title: "Platform Independent",
      description: "Summit AI doesn't depend on meeting bots and is truly platform independent. Works with Zoom, Slack, Teams, Google Meet and other popular platforms.",
      highlight: false
    },
    {
      icon: <AppleIcon className="h-6 w-6" />,
      title: "Mac-Native Design",
      description: "Built specifically for macOS professionals who value premium, integrated tools that work seamlessly with their existing workflow."
    },
    // {
    //   icon: <Mic className="h-6 w-6" />,
    //   title: "Dual Audio Capture",
    //   description: "Simultaneously records your voice and client's system audio (Zoom, Teams, etc.) for complete conversation context with separate audio tracks.",
    //   highlight: false
    // },
    // {
    //   icon: <FolderOpen className="h-6 w-6" />,
    //   title: "Document-Centric Organization",
    //   description: "Each meeting becomes a structured document with summary, transcripts, and audio files organized in ~/Documents/Summit AI Notes/ for easy client access and audit."
    // },
    // {
    //   icon: <Zap className="h-6 w-6" />,
    //   title: "Real-Time + Post-Meeting Transcription",
    //   description: "Live transcription during meetings plus high-quality batch processing afterward for maximum accuracy and immediate insights."
    // },
  ];

  const painPoints = [
    "Poor meeting notes leading to awkward moments when you can't deliver effective reports",
    "10 hours per week on non-billable administrative tasks",
    "Manual transcription of client conversations for deliverables",
    "Scattered information across handwritten notes, recordings, and memory"
  ];

  return (
    <div className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Problem Section */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-red-50 text-red-700 border-red-200">
            <Clock className="w-3 h-3 mr-1" />
            The Hidden Cost of Poor Meeting Documentation
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Independent Consultants Lose 10+ Hours Weekly
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Despite spending 23 hours per week in client meetings, consultants struggle with meeting documentation, 
            leading to ineffective reports and billable hour pressure.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {painPoints.map((point, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-red-50 rounded-lg border border-red-100">
                <div className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                </div>
                <p className="text-red-700 text-sm leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Solution Section */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-green-50 text-green-700 border-green-200">
            <Zap className="w-3 h-3 mr-1" />
            The Summit AI Notes Solution
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Transform Meetings Into Professional Assets
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Summit AI Notes helps independent management consultants reclaim 3-4 billable hours per week through 
            automated transcription, intelligent organization, and professional client deliverables.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;