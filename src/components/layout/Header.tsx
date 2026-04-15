import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logo from "@/assets/sta-logo.png";

const serviceLinks = [
  { name: "Transportation", href: "/transportation" },
  { name: "Financial Services", href: "/financial-services" },
  { name: "Legal Services", href: "/legal-services" },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services", hasDropdown: true },
  { name: "Fleet", href: "/fleet" },
  { name: "Service Areas", href: "/service-areas" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="STA Corporate Solutions Logo" className="h-10 md:h-12 w-auto" />
            <div className="hidden sm:block">
              <span className="font-bold text-lg text-primary">STA</span>
              <span className="font-semibold text-lg text-secondary"> Corporate Solutions</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-5">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-accent ${
                location.pathname === "/" ? "text-accent" : "text-foreground"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`text-sm font-medium transition-colors hover:text-accent ${
                location.pathname === "/about" ? "text-accent" : "text-foreground"
              }`}
            >
              About
            </Link>

            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-accent text-foreground">
                Services <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48">
                {serviceLinks.map((link) => (
                  <DropdownMenuItem key={link.href} asChild>
                    <Link to={link.href} className="w-full cursor-pointer">
                      {link.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              to="/fleet"
              className={`text-sm font-medium transition-colors hover:text-accent ${
                location.pathname === "/fleet" ? "text-accent" : "text-foreground"
              }`}
            >
              Fleet
            </Link>
            <Link
              to="/service-areas"
              className={`text-sm font-medium transition-colors hover:text-accent ${
                location.pathname === "/service-areas" ? "text-accent" : "text-foreground"
              }`}
            >
              Service Areas
            </Link>
            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors hover:text-accent ${
                location.pathname === "/contact" ? "text-accent" : "text-foreground"
              }`}
            >
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <a href="tel:+919443033055" className="hidden md:flex">
              <Button variant="default" size="sm" className="gap-2">
                <Phone className="h-4 w-4" />
                Call Now
              </Button>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-2">
              <Link to="/" onClick={() => setIsOpen(false)} className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${location.pathname === "/" ? "bg-accent text-accent-foreground" : "text-foreground hover:bg-muted"}`}>
                Home
              </Link>
              <Link to="/about" onClick={() => setIsOpen(false)} className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${location.pathname === "/about" ? "bg-accent text-accent-foreground" : "text-foreground hover:bg-muted"}`}>
                About
              </Link>

              <div className="px-4 py-2">
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Services</span>
              </div>
              {serviceLinks.map((link) => (
                <Link key={link.href} to={link.href} onClick={() => setIsOpen(false)} className={`px-6 py-2 text-sm font-medium rounded-md transition-colors ${location.pathname === link.href ? "bg-accent text-accent-foreground" : "text-foreground hover:bg-muted"}`}>
                  {link.name}
                </Link>
              ))}

              <Link to="/fleet" onClick={() => setIsOpen(false)} className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${location.pathname === "/fleet" ? "bg-accent text-accent-foreground" : "text-foreground hover:bg-muted"}`}>
                Fleet
              </Link>
              <Link to="/service-areas" onClick={() => setIsOpen(false)} className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${location.pathname === "/service-areas" ? "bg-accent text-accent-foreground" : "text-foreground hover:bg-muted"}`}>
                Service Areas
              </Link>
              <Link to="/contact" onClick={() => setIsOpen(false)} className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${location.pathname === "/contact" ? "bg-accent text-accent-foreground" : "text-foreground hover:bg-muted"}`}>
                Contact
              </Link>

              <a href="tel:+919443033055" className="px-4 py-2">
                <Button variant="default" size="sm" className="w-full gap-2">
                  <Phone className="h-4 w-4" />
                  Call Now
                </Button>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
