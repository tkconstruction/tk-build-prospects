import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Hammer } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-accent rounded-lg">
                <Hammer className="h-5 w-5 text-accent-foreground" />
              </div>
              <div>
                <h3 className="font-bold text-lg leading-tight">TK Construction</h3>
                <p className="text-xs text-secondary-foreground/80">& Roofing LLC</p>
              </div>
            </div>
            <p className="text-sm text-secondary-foreground/80">
              Professional construction and roofing services in the Pacific Northwest.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-secondary-foreground/80 hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-secondary-foreground/80 hover:text-accent transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-sm text-secondary-foreground/80 hover:text-accent transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-secondary-foreground/80 hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-secondary-foreground/80 hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <Phone className="h-5 w-5 text-accent mt-0.5" />
                <a href="tel:+15551234567" className="text-sm text-secondary-foreground/80 hover:text-accent transition-colors">
                  (555) 123-4567
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="h-5 w-5 text-accent mt-0.5" />
                <a href="mailto:info@tkconstruction.com" className="text-sm text-secondary-foreground/80 hover:text-accent transition-colors">
                  info@tkconstruction.com
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-accent mt-0.5" />
                <span className="text-sm text-secondary-foreground/80">
                  Seattle, WA
                </span>
              </li>
            </ul>
          </div>

          {/* Business Hours & Social */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Business Hours</h3>
            <div className="space-y-2 mb-6">
              <p className="text-sm text-secondary-foreground/80">Monday - Friday: 8am - 6pm</p>
              <p className="text-sm text-secondary-foreground/80">Saturday: 9am - 4pm</p>
              <p className="text-sm text-secondary-foreground/80">Sunday: Closed</p>
            </div>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-accent/10 rounded-lg hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-accent/10 rounded-lg hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-accent/10 rounded-lg hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-secondary-foreground/20 text-center">
          <p className="text-sm text-secondary-foreground/60">
            © {currentYear} TK Construction & Roofing LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
