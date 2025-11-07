import React from 'react';
import { Card } from './ui/card';
import { Check, Sparkles } from 'lucide-react';

interface PricingSectionProps {
  className?: string;
}

const PricingSection: React.FC<PricingSectionProps> = ({ className = '' }) => {
  return (
    <section className={`py-24 bg-gradient-to-br from-background via-muted/20 to-background ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Privacy-first meeting notes without the enterprise price tag
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Coming Soon Card */}
          <Card className="p-8 relative border-2 border-border hover:shadow-xl transition-shadow">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-foreground mb-2">Early Access</h3>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-4xl font-bold text-foreground">TBA</span>
              </div>
              <p className="text-muted-foreground">
                Pricing details coming soon. Join the waitlist for special early access rates.
              </p>
            </div>

            <div className="mb-8">
              <h4 className="font-semibold text-foreground mb-4">What's Included:</h4>
              <ul className="space-y-3">
                {[
                  'Unlimited meeting recordings',
                  'Local AI transcription',
                  'AI-powered summaries',
                  'LM Studio integration',
                  'Cloud LLM support (OpenAI, Anthropic, Google)',
                  'Searchable meeting archive',
                  'Export to text, PDF, clipboard',
                  'Regular updates and improvements',
                  'Email support'
                ].map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button className="w-full py-3 px-6 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
              Join Waitlist
            </button>
          </Card>

          {/* Enterprise Card */}
          <Card className="p-8 relative border-2 border-purple-300 bg-gradient-to-br from-purple-50 to-blue-50 hover:shadow-xl transition-shadow">
            <div className="absolute top-4 right-4">
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-purple-600 text-white text-sm font-semibold rounded-full">
                <Sparkles className="w-4 h-4" />
                Coming Soon
              </span>
            </div>

            <div className="mb-6 mt-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">Enterprise</h3>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-4xl font-bold text-foreground">Custom</span>
              </div>
              <p className="text-muted-foreground">
                For teams and organizations with advanced needs
              </p>
            </div>

            <div className="mb-8">
              <h4 className="font-semibold text-foreground mb-4">Everything in Early Access, plus:</h4>
              <ul className="space-y-3">
                {[
                  'Volume licensing discounts',
                  'Centralized billing and management',
                  'Priority support with SLA',
                  'Custom integrations',
                  'Advanced security features',
                  'Training and onboarding',
                  'Dedicated account manager'
                ].map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button className="w-full py-3 px-6 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors">
              Contact Sales
            </button>
          </Card>
        </div>

        {/* FAQ-style info */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h4 className="font-semibold text-foreground mb-2">Free Trial?</h4>
              <p className="text-muted-foreground">
                Yes! We plan to offer a free trial so you can experience Summit's privacy-first approach before committing.
              </p>
            </Card>

            <Card className="p-6">
              <h4 className="font-semibold text-foreground mb-2">Refund Policy?</h4>
              <p className="text-muted-foreground">
                We'll offer a satisfaction guarantee with a clear refund policy. Details will be provided at launch.
              </p>
            </Card>

            <Card className="p-6">
              <h4 className="font-semibold text-foreground mb-2">Payment Options?</h4>
              <p className="text-muted-foreground">
                We'll support major credit cards and offer both monthly and annual billing options.
              </p>
            </Card>

            <Card className="p-6">
              <h4 className="font-semibold text-foreground mb-2">Educational Discount?</h4>
              <p className="text-muted-foreground">
                We're exploring discounts for students, educators, and non-profit organizations.
              </p>
            </Card>
          </div>
        </div>

        {/* Early Access CTA */}
        <div className="mt-16 text-center">
          <Card className="p-8 bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Get Early Access Pricing
            </h3>
            <p className="text-muted-foreground mb-6">
              Join our waitlist now to receive special early access pricing when we launch.
            </p>
            <a
              href="#waitlist"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-lg"
            >
              Join the Waitlist
            </a>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
