import React from "react";
import { Twitter, Youtube, Linkedin, Mail } from "lucide-react";

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className = "" }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`bg-muted/30 border-t border-border ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Product Section */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Product
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/#features"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="https://apps.apple.com/app/summit-ai-notes/id6754717420?l=en-GB&mt=12"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Download
                </a>
              </li>
            </ul>
          </div>

          {/* Use Cases Section */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Use Cases
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/use-cases/consulting"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Consulting
                </a>
              </li>
              <li>
                <a
                  href="/use-cases/legal"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Legal
                </a>
              </li>
              <li>
                <a
                  href="/use-cases/finance"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Finance
                </a>
              </li>
              <li>
                <a
                  href="/use-cases/healthcare"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Healthcare
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/blog"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/docs"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="/guides"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Guides
                </a>
              </li>
              <li>
                <a
                  href="/faq"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/about"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/support"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Support
                </a>
              </li>
              <li>
                <a
                  href="/press"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Press Kit
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/privacy"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="/security"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Security
                </a>
              </li>
              <li>
                <a
                  href="/cookies"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Logo and Copyright */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <img src="/logo.svg" alt="Summit AI Notes" className="w-8 h-8 rounded-lg" />
                <span className="font-semibold text-foreground">
                  Summit AI Notes
                </span>
              </div>
              <p className="text-muted-foreground text-sm">
                © {currentYear} All rights reserved.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6">
              <a
                href="https://twitter.com/summitainotes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/company/summit-ai-notes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com/@summitainotes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="mailto:hello@summitnotes.app"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
