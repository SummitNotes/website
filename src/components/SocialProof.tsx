import React from "react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import {
  Star,
  Quote,
  Shield,
  Users,
  MessageSquare,
  Languages,
  Sparkles,
  FolderOpen,
  FileText,
  Search,
  Mountain,
  Scale,
  Briefcase,
} from "lucide-react";

interface Testimonial {
  quote: string;
  role: string;
  company: string;
  rating: number;
  icon: React.ReactNode;
}

interface MainFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface SmallFeature {
  icon: React.ReactNode;
  value: string;
  label: string;
}

const SocialProof: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      quote:
        "I tried 10+ meeting note tools. Every one required uploading audio to the cloud. As a litigator, that's a non-starter. Summit is the only one that keeps everything local.",
      role: "Corporate Attorney",
      company: "Solo Practice, 15+ years",
      rating: 5,
      icon: <Scale className="w-5 h-5 text-gray-600" />,
    },
    {
      quote:
        "I had my own toolset built from multiple apps to get local AI insights. Summit replaced my entire workflow with one elegant app.",
      role: "IT Consultant",
      company: "Fortune 500 Clients",
      rating: 5,
      icon: <Briefcase className="w-5 h-5 text-gray-600" />,
    },
  ];

  const mainFeatures: MainFeature[] = [
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Actionable Meeting Summaries",
      description:
        "Auto-generated meeting summaries suitable for client deliverables, with action items and key insights formatted professionally.",
    },
    {
      icon: <Search className="h-6 w-6" />,
      title: "Powerful Search",
      description:
        "Full-text search through transcripts, summaries and tags. Find any conversation instantly with the Similar Documents feature.",
    },
    {
      icon: <Mountain className="h-6 w-6" />,
      title: "Platform Independent",
      description:
        "No meeting bots required. Works with Zoom, Slack, Teams, Google Meet—any platform where you can hear audio.",
    },
  ];

  const smallFeatures: SmallFeature[] = [
    {
      icon: <Shield className="w-5 h-5" />,
      value: "100% Local",
      label: "All AI runs on your Mac. Nothing leaves your device.",
    },
    {
      icon: <Users className="w-5 h-5" />,
      value: "Speaker ID",
      label: "Automatically detect and label different speakers.",
    },
    {
      icon: <MessageSquare className="w-5 h-5" />,
      value: "Chat with Docs",
      label: "Ask questions about your meetings with local AI.",
    },
    {
      icon: <Languages className="w-5 h-5" />,
      value: "100+ Languages",
      label: "Transcribe in English, Spanish, French, and more.",
    },
    {
      icon: <Sparkles className="w-5 h-5" />,
      value: "AI Cleanup",
      label: "Remove filler words and false starts automatically.",
    },
    {
      icon: <FolderOpen className="w-5 h-5" />,
      value: "Smart Templates",
      label: "Custom templates for different meeting types.",
    },
  ];

  return (
    <div className="py-16 px-4 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-7xl mx-auto">
        {/* Testimonials */}
        <div className="text-center mb-12">
          <Badge
            variant="secondary"
            className="mb-4 bg-yellow-50 text-yellow-700 border-yellow-200"
          >
            <Star className="w-3 h-3 mr-1 fill-yellow-500" />
            Trusted by Privacy-Conscious Professionals
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            What Users Are Saying
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-20 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 bg-background hover:shadow-lg transition-shadow flex flex-col h-full"
            >
              <div className="flex gap-1 mb-4 hidden">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <Quote className="w-8 h-8 text-muted-foreground/30 mb-3" />
              <p className="text-muted-foreground leading-relaxed flex-1">
                "{testimonial.quote}"
              </p>
              <div className="border-t pt-4 mt-4 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-foreground">
                    {testimonial.role}
                  </p>
                  <p className="text-xs text-muted-foreground hidden">
                    {testimonial.company}
                  </p>
                </div>
                <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                  {testimonial.icon}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Main Features */}
        <div className="text-center mb-12">
          <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
            Everything You Need, Nothing You Don't
          </h3>
          <p className="text-muted-foreground">
            Purpose-built for professionals who need meeting documentation
            without complexity
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {mainFeatures.map((feature, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted text-muted-foreground group-hover:bg-sky-400 group-hover:text-white transition-colors">
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Small Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {smallFeatures.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-4 rounded-lg bg-background border hover:border-sky-200 hover:shadow-sm transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center mb-2">
                {feature.icon}
              </div>
              <p className="font-semibold text-foreground text-sm">
                {feature.value}
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                {feature.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialProof;
