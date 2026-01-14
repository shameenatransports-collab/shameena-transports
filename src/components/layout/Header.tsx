import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/sta-logo.png";
const navLinks = [{
  name: "Home",
  href: "/"
}, {
  name: "About Us",
  href: "/about"
}, {
  name: "Services",
  href: "/services"
}, {
  name: "Return Loads",
  href: "/return-loads"
}, {
  name: "Fleet",
  href: "/fleet"
}, {
  name: "Service Areas",
  href: "/service-areas"
}, {
  name: "Contact",
  href: "/contact"
}];
export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  return <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Shameena Transports Logo" className="h-10 md:h-12 w-auto" />
            <div className="hidden sm:block">
              <span className="font-bold text-lg text-primary">Shameena</span>
              <span className="font-semibold text-lg text-secondary"> Transporting Agents </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map(link => <Link key={link.href} to={link.href} className={`text-sm font-medium transition-colors hover:text-accent ${location.pathname === link.href ? "text-accent" : "text-foreground"}`}>
                {link.name}
              </Link>)}
          </nav>

          <div className="flex items-center gap-3">
            <a href="tel:+919047721209" className="hidden md:flex">
              <Button variant="default" size="sm" className="gap-2">
                <Phone className="h-4 w-4" />
                Call Now
              </Button>
            </a>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 text-foreground" aria-label="Toggle menu">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && <nav className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-2">
              {navLinks.map(link => <Link key={link.href} to={link.href} onClick={() => setIsOpen(false)} className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${location.pathname === link.href ? "bg-accent text-accent-foreground" : "text-foreground hover:bg-muted"}`}>
                  {link.name}
                </Link>)}
              <a href="tel:+919047721209" className="px-4 py-2">
                <Button variant="default" size="sm" className="w-full gap-2">
                  <Phone className="h-4 w-4" />
                  Call Now
                </Button>
              </a>
            </div>
          </nav>}
      </div>
    </header>;
}