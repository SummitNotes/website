import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { CheckCircle, ArrowRight, Mail, Sparkles, Gift, Zap } from 'lucide-react';

interface WaitlistSignupProps {
  variant?: 'inline' | 'section' | 'modal';
  showBenefits?: boolean;
  title?: string;
  subtitle?: string;
}

const WaitlistSignup: React.FC<WaitlistSignupProps> = ({
  variant = 'section',
  showBenefits = true,
  title = "Join the Early Access Waitlist",
  subtitle = "Be among the first to experience truly private meeting notes"
}) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const benefits = [
    {
      icon: <Gift className="w-5 h-5 text-purple-600" />,
      text: "50% lifetime discount for first 100 users"
    },
    {
      icon: <Zap className="w-5 h-5 text-blue-600" />,
      text: "Early access before public launch"
    },
    {
      icon: <Sparkles className="w-5 h-5 text-green-600" />,
      text: "Priority feature requests and direct support"
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Replace with actual waitlist API endpoint
    try {
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      setIsSubmitted(true);
    } catch (error) {
      console.error('Failed to join waitlist:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (variant === 'inline') {
    return (
      <div className="w-full max-w-md">
        {isSubmitted ? (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium text-green-800">
                You're on the list! Check your email for confirmation.
              </span>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6"
            >
              {isSubmitting ? 'Joining...' : 'Join Waitlist'}
              {!isSubmitting && <ArrowRight className="w-4 h-4 ml-2" />}
            </Button>
          </form>
        )}
      </div>
    );
  }

  if (variant === 'section') {
    return (
      <div className="relative py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-background overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

        {/* Floating Elements */}
        <div className="absolute top-10 right-20 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 left-20 w-24 h-24 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12 bg-background/80 backdrop-blur-sm border-border shadow-2xl">
              <div className="text-center space-y-6">
                {/* Badge */}
                <Badge variant="secondary" className="w-fit mx-auto bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 border-blue-200">
                  <Mail className="w-3 h-3 mr-1" />
                  Limited Early Access Spots
                </Badge>

                {/* Title */}
                <div className="space-y-3">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                    {title}
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    {subtitle}
                  </p>
                </div>

                {/* Form */}
                <div className="pt-4">
                  {isSubmitted ? (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-6 max-w-md mx-auto">
                      <div className="flex flex-col items-center gap-3">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-6 h-6 text-green-600" />
                        </div>
                        <div className="text-center">
                          <h3 className="text-lg font-semibold text-green-800 mb-1">
                            Welcome to the waitlist!
                          </h3>
                          <p className="text-sm text-green-700">
                            Check your email for confirmation and next steps.
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
                      <div className="flex flex-col sm:flex-row gap-3">
                        <input
                          type="email"
                          placeholder="Enter your work email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="flex-1 px-5 py-4 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"
                        />
                        <Button
                          type="submit"
                          size="lg"
                          disabled={isSubmitting}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-base font-semibold group"
                        >
                          {isSubmitting ? 'Joining...' : 'Join Waitlist'}
                          {!isSubmitting && <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />}
                        </Button>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        No spam. Just product updates and early access information.
                      </p>
                    </form>
                  )}
                </div>

                {/* Benefits */}
                {showBenefits && !isSubmitted && (
                  <div className="pt-8 border-t border-border">
                    <p className="text-sm font-medium text-muted-foreground mb-4">
                      Early Access Benefits:
                    </p>
                    <div className="grid md:grid-cols-3 gap-4">
                      {benefits.map((benefit, index) => (
                        <div key={index} className="flex items-start gap-3 text-left">
                          <div className="flex-shrink-0 w-10 h-10 bg-muted rounded-lg flex items-center justify-center">
                            {benefit.icon}
                          </div>
                          <p className="text-sm text-muted-foreground pt-2">
                            {benefit.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  // Modal variant (can be used in exit-intent popup later)
  return (
    <div className="p-6 space-y-4">
      <div className="text-center space-y-2">
        <h3 className="text-2xl font-bold text-foreground">{title}</h3>
        <p className="text-muted-foreground">{subtitle}</p>
      </div>

      {isSubmitted ? (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <span className="text-sm font-medium text-green-800">
              You're on the list! Check your email.
            </span>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Joining...' : 'Join Waitlist'}
          </Button>
        </form>
      )}

      {showBenefits && !isSubmitted && (
        <div className="space-y-2 pt-2">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle className="w-4 h-4 text-green-600" />
              {benefit.text}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WaitlistSignup;
