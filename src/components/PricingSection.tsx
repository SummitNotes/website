import React from 'react';
import { Play } from 'lucide-react';

interface PricingSectionProps {
  className?: string;
}

const PricingSection: React.FC<PricingSectionProps> = ({ className = '' }) => {
  return (
    <section className={`py-24 bg-gradient-to-br from-background via-muted/20 to-background ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-sky-100 mb-4">
              <Play className="h-6 w-6 text-sky-600" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              See It In Action
            </h2>
          </div>

          {/* YouTube Video */}
          <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl">
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
    </section>
  );
};

export default PricingSection;
