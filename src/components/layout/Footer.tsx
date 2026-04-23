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
    <footer className="relative bg-primary text-primary-foreground overflow-hidden">
      {/* subtle ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/4 h-96 w-96 rounded-full opacity-[0.08] blur-3xl"
        style={{ background: "hsl(var(--primary-glow))" }}
      />
      <div className="container mx-auto px-4 py-16 md:py-20 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Company */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-2.5">
              <img src={logo} alt="STA Corporate Solutions" className="h-10 w-auto bg-card rounded-lg p-1" />
              <div className="leading-tight tracking-tight">
                <div className="font-semibold text-base">STA</div>
                <div className="text-sm text-primary-foreground/70">Corporate Solutions</div>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/75 leading-relaxed max-w-md">
              Coimbatore's trusted partner for Transportation, Business Loan Assistance & Legal Services since 1982.
              Transparent support across Tamil Nadu.
            </p>
            <div className="space-y-3 pt-1">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 opacity-70" />
                <span className="text-sm text-primary-foreground/80">
                  No.302/2A7, VK Road, Peelamedu, Coimbatore - 641004, Tamil Nadu, India
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 flex-shrink-0 opacity-70" />
                <div className="text-sm text-primary-foreground/80">
                  <a href="tel:+919443033055" className="hover:text-secondary transition-colors">+91 94430 33055</a>
                  <span className="opacity-40 mx-1.5">·</span>
                  <a href="tel:+919047721209" className="hover:text-secondary transition-colors">+91 90477 21209</a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-4 w-4 flex-shrink-0 opacity-70" />
                <span className="text-sm text-primary-foreground/80">Mon – Sat · 9 AM – 7 PM</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-eyebrow text-primary-foreground/60 mb-5">Our Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors duration-300 ease-apple flex items-center gap-2"
                  >
                    <link.icon className="h-3.5 w-3.5 opacity-70" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-eyebrow text-primary-foreground/60 mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors duration-300 ease-apple"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h3 className="text-eyebrow text-primary-foreground/60 mb-5">Service Areas</h3>
            <ul className="space-y-2">
              {serviceAreas.map((area) => (
                <li key={area}>
                  <Link
                    to="/service-areas"
                    className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors duration-300 ease-apple"
                  >
                    {area}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10">
          <p className="text-xs text-primary-foreground/50 text-center mb-5 leading-relaxed max-w-4xl mx-auto">
            STA Corporate Solutions — Lorry Transport, MSME Loans, Mudra Loans, Business Loan Assistance, Government Funding Scheme Guidance, Legal Services, Company Registration, Property Documentation in Coimbatore, Tiruppur, Erode, Salem, Chennai, Madurai, Trichy, Tamil Nadu.
          </p>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-primary-foreground/60">
              © {new Date().getFullYear()} STA Corporate Solutions. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/privacy" className="text-xs text-primary-foreground/60 hover:text-primary-foreground transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-xs text-primary-foreground/60 hover:text-primary-foreground transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
