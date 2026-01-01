import React from 'react';
import { Quote } from 'lucide-react';

interface Testimonial {
  quote: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "I have tried many, many AI meeting note apps (at least over 10) and this is by far the best one.",
    role: "Attorney in Law",
  },
  {
    quote: "I had my own toolset built from multiple apps to get local AI insights. Now I just use Summit!",
    role: "IT Professional",
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-muted/30 via-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Professionals Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by professionals who value privacy and productivity
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <Quote className="absolute top-6 left-6 w-8 h-8 text-sky-200" />
              <div className="pt-8">
                <p className="text-lg text-foreground leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-400 to-sky-600 flex items-center justify-center text-white font-semibold">
                    {testimonial.role.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
