import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from "lucide-react";
import logo from "@/assets/logo.png";

const serviceLinks = [
  { name: "Full Load Transport", href: "/services#full-load" },
  { name: "Part Load Transport", href: "/services#part-load" },
  { name: "Interstate Transport", href: "/services#interstate" },
  { name: "Textile Cargo", href: "/services#textile" },
  { name: "Construction Material", href: "/services#construction" },
];

const areaLinks = [
  { name: "Coimbatore", href: "/service-areas#coimbatore" },
  { name: "Tiruppur", href: "/service-areas#tiruppur" },
  { name: "Chennai", href: "/service-areas#chennai" },
  { name: "Salem", href: "/service-areas#salem" },
  { name: "Madurai", href: "/service-areas#madurai" },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src={logo} alt="Shameena Transports" className="h-10 w-auto bg-card rounded p-1" />
              <div>
                <span className="font-bold text-lg">Shameena</span>
                <span className="font-semibold text-lg text-secondary"> Transports</span>
              </div>
            </div>
            <p className="text-sm opacity-90">
              No.1 Lorry Service in Coimbatore & Tamil Nadu. Fast, Safe & Reliable Goods Transport since 2005.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-secondary transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-secondary transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-secondary transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm opacity-90 hover:opacity-100 hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Service Areas</h3>
            <ul className="space-y-2">
              {areaLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm opacity-90 hover:opacity-100 hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span className="text-sm opacity-90">
                  123, Transport Nagar, Avinashi Road, Coimbatore - 641018, Tamil Nadu
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <a href="tel:+919047721209" className="text-sm opacity-90 hover:text-secondary">
                  +91 90477 21209
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <a href="mailto:info@shameena.com" className="text-sm opacity-90 hover:text-secondary">
                  info@shameena.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-5 w-5 flex-shrink-0" />
                <span className="text-sm opacity-90">24/7 Available</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm opacity-80">
              © {new Date().getFullYear()} Shameena Transports. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/privacy" className="text-sm opacity-80 hover:opacity-100">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm opacity-80 hover:opacity-100">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
