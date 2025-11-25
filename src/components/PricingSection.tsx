import React from 'react';
import { TrendingUp } from 'lucide-react';

interface PricingSectionProps {
  className?: string;
}

const PricingSection: React.FC<PricingSectionProps> = ({ className = '' }) => {
  return (
    <section className={`py-24 bg-gradient-to-br from-background via-muted/20 to-background ${className}`}>
      {/* Value Proposition */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 border border-green-200">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
              <TrendingUp className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              ROI Calculator: Your Time is Worth More
            </h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="text-center p-4 bg-white/70 rounded-lg">
                <div className="text-3xl font-bold text-green-600">3-4</div>
                <div className="text-sm text-muted-foreground">Hours Saved Weekly</div>
              </div>
              <div className="text-center p-4 bg-white/70 rounded-lg">
                <div className="text-3xl font-bold text-green-600">$2,400-3,600</div>
                <div className="text-sm text-muted-foreground">Monthly Value Created</div>
              </div>
              <div className="text-center p-4 bg-white/70 rounded-lg">
                <div className="text-3xl font-bold text-green-600">$29.<small>99</small></div>
                <div className="text-sm text-muted-foreground">One Time Investment!</div>
              </div>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              At $200-300/hour billing rates, Summit AI Notes pays for itself in just 10 minutes of saved time! 
            </p>
          </div>
        </div>
    </section>
  );
};

export default PricingSection;
