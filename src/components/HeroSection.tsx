import React from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Lock, Users, CheckCircle, ArrowRight, Play, Mic, Shield, Zap } from 'lucide-react';

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
  ctaText = "Join Early Access",
  secondaryCtaText = "See How It Works",
  features = [
    "Early access to launch",
    "50% lifetime discount for first 100 users",
    "Priority feature requests"
  ],
  stats = [
    {
      value: "100%",
      label: "Local Processing",
      icon: <Shield className="w-5 h-5 text-purple-600" />
    },
    {
      value: "Zero",
      label: "Cloud Uploads",
      icon: <Lock className="w-5 h-5 text-blue-600" />
    },
    {
      value: "500+",
      label: "On Waitlist",
      icon: <Users className="w-5 h-5 text-green-600" />
    }
  ]
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
              <Badge variant="secondary" className="w-fit bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 border-blue-200 hover:bg-blue-100">
                <Zap className="w-3 h-3 mr-1" />
                Early Access • Coming Soon
              </Badge>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  {title}
                  <span className="block mt-2 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-gradient">
                    {subtitle}
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                  {description}
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg font-semibold group">
                  {ctaText}
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg" className="px-8 py-6 text-lg font-semibold group">
                  <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  {secondaryCtaText}
                </Button>
              </div>

              {/* Features List */}
              <div className="flex flex-wrap gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
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
                      <span className="text-2xl font-bold text-foreground">{stat.value}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Visual */}
            <div className="relative">
              {/* Main Dashboard Card */}
              <Card className="p-6 bg-background/80 backdrop-blur-sm border-border shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-foreground">Meeting Dashboard</h3>
                    <Badge variant="secondary" className="bg-red-100 text-red-700">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-1 animate-pulse"></div>
                      Recording
                    </Badge>
                  </div>

                  {/* Mock Transcription */}
                  <div className="h-32 bg-gradient-to-r from-slate-50 to-slate-100 rounded-lg p-4 relative overflow-hidden border">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                          <Mic className="w-3 h-3 text-blue-600" />
                        </div>
                        <span className="text-xs font-medium text-slate-600">Transcribing...80%</span>
                      </div>
                      <div className="h-1 bg-blue-200 rounded-full">
                        <div className="h-1 bg-blue-500 rounded-full w-3/4 animate-pulse"></div>
                      </div>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        "Based on our analysis, I recommend focusing on the operational efficiency improvements..."
                      </p>
                    </div>
                  </div>

                  {/* Mock Metrics */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-muted/50 p-3 rounded-lg">
                      <p className="text-sm text-muted-foreground">Meeting Duration</p>
                      <p className="text-lg font-semibold text-foreground">1h 23m</p>
                    </div>
                    <div className="bg-muted/50 p-3 rounded-lg">
                      <p className="text-sm text-muted-foreground">Words Captured</p>
                      <p className="text-lg font-semibold text-foreground">2,847</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Floating Cards */}
              <Card className="absolute -top-4 -right-4 p-4 bg-background border-border shadow-lg transform -rotate-6 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Summary Ready</p>
                    <p className="text-xs text-muted-foreground">Shareable format</p>
                  </div>
                </div>
              </Card>

              <Card className="absolute -bottom-6 -left-6 p-4 bg-background border-border shadow-lg transform rotate-6 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <Shield className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">100% Private</p>
                    <p className="text-xs text-muted-foreground">With local processing</p>
                  </div>
                </div>
              </Card>
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
