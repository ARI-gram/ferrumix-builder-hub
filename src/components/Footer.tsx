import { Link } from "react-router-dom";
import { Wrench, MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="gradient-dark text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
                <Wrench className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h2 className="font-display text-xl font-bold tracking-wide">
                  FERRUMIX
                </h2>
                <p className="text-xs text-muted-foreground -mt-1">HARDWARE</p>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Your trusted partner for quality hardware supplies in Nairobi.
              Strong tools for smart builds.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Shop Products
                </Link>
              </li>
              <li>
                <Link
                  to="/cart"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Shopping Cart
                </Link>
              </li>
              <li>
                <Link
                  to="/admin"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Admin Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/products?category=cement"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Cement
                </Link>
              </li>
              <li>
                <Link
                  to="/products?category=paint"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Paint
                </Link>
              </li>
              <li>
                <Link
                  to="/products?category=power-tools"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Power Tools
                </Link>
              </li>
              <li>
                <Link
                  to="/products?category=plumbing"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Plumbing
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm">
                  Nairobi CBD, Kenya
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="tel:0798745632"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  07-98-745-632
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:info@ferrumixhardware@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  info@ferrumixhardware@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm">
                  Mon - Sat: 8:00 AM - 6:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-muted mt-10 pt-6 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Ferrumix Hardware. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
