import { Link } from "react-router-dom";
import { Phone, MapPin, Clock, Truck, Banknote, Scale } from "lucide-react";
import logo from "@/assets/sta-logo.png";

const serviceLinks = [
  { name: "Transportation", href: "/transportation", icon: Truck },
  { name: "Financial Services", href: "/financial-services", icon: Banknote },
  { name: "Legal Services", href: "/legal-services", icon: Scale },
];

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Our Fleet", href: "/fleet" },
  { name: "Service Areas", href: "/service-areas" },
  { name: "Return Loads", href: "/return-loads" },
  { name: "Contact", href: "/contact" },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
];

const serviceAreas = [
  "Coimbatore", "Tiruppur", "Erode", "Salem", "Chennai",
  "Madurai", "Trichy", "Karur", "Namakkal", "Dindigul",
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <img src={logo} alt="STA Corporate Solutions" className="h-10 w-auto bg-card rounded p-1" />
              <div>
                <span className="font-bold text-lg">STA</span>
                <span className="font-semibold text-lg text-secondary"> Corporate Solutions</span>
              </div>
            </div>
            <p className="text-sm opacity-90">
              Coimbatore's trusted partner for Transportation, Loan Services & Legal Services since 1982. 
              Lowest commission rates across Tamil Nadu.
            </p>
            <div className="space-y-2 pt-2">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span className="text-sm opacity-90">
                  No.302/2A7, VK Road, Peelamedu, Coimbatore - 641004, Tamil Nadu, India
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <div className="text-sm opacity-90">
                  <a href="tel:+919443033055" className="hover:text-secondary">+91 94430 33055</a>
                  {" · "}
                  <a href="tel:+919047721209" className="hover:text-secondary">+91 90477 21209</a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 flex-shrink-0" />
                <span className="text-sm opacity-90">Mon - Sat: 9 AM - 7 PM</span>
              </div>
            </div>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm opacity-90 hover:opacity-100 hover:text-secondary transition-colors flex items-center gap-2">
                    <link.icon className="h-4 w-4" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm opacity-90 hover:opacity-100 hover:text-secondary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas for Local SEO */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Service Areas</h3>
            <ul className="space-y-1">
              {serviceAreas.map((area) => (
                <li key={area}>
                  <Link to="/service-areas" className="text-sm opacity-90 hover:opacity-100 hover:text-secondary transition-colors">
                    {area}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar with Local SEO text */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <p className="text-xs opacity-60 text-center mb-4">
            STA Corporate Solutions — Lorry Transport, MSME Loans, Mudra Loans, Business Loans, Home Loans, Legal Services, Company Registration, Property Documentation in Coimbatore, Tiruppur, Erode, Salem, Chennai, Madurai, Trichy, Tamil Nadu.
          </p>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm opacity-80">
              © {new Date().getFullYear()} STA Corporate Solutions. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/privacy" className="text-sm opacity-80 hover:opacity-100">Privacy Policy</Link>
              <Link to="/terms" className="text-sm opacity-80 hover:opacity-100">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
