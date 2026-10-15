import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import logo from "@/assets/sta-logo.png";

const serviceLinks = [
  { name: "All Services", href: "/services" },
  { name: "Transportation", href: "/transportation" },
  { name: "Financial Services", href: "/financial-services" },
  { name: "Legal Services", href: "/legal-services" },
  { name: "Edu Consultancy", href: "/edu-consultancy" },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Fleet", href: "/fleet" },
  { name: "Service Areas", href: "/service-areas" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => setIsOpen(false), [location.pathname]);

  const solid = scrolled || isOpen;

  const linkBase = cn(
    "text-[13px] font-medium tracking-tight transition-colors duration-300 ease-apple",
    solid
      ? "text-foreground/80 hover:text-foreground"
      : "text-primary-foreground/85 hover:text-primary-foreground"
  );
  const activeCls = solid ? "text-foreground" : "text-primary-foreground";

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 border-b transition-all duration-500 ease-apple",
        solid
          ? "glass-strong border-border/40 shadow-sm"
          : "bg-transparent border-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-[72px]">
          <Link to="/" className="flex items-center gap-2.5 group">
            <img
              src={logo}
              alt="STA Corporate Solutions"
              className="h-9 md:h-10 w-auto transition-transform duration-500 ease-apple group-hover:scale-[1.04]"
            />
            <div className="hidden sm:block leading-tight tracking-tight">
              <span className={cn("font-semibold text-[15px]", solid ? "text-primary" : "text-primary-foreground")}>STA</span>
              <span className={cn("font-medium text-[15px]", solid ? "text-foreground/70" : "text-primary-foreground/75")}> Corporate Solutions</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link to="/" className={cn(linkBase, location.pathname === "/" && activeCls)}>
              Home
            </Link>
            <Link to="/about" className={cn(linkBase, location.pathname === "/about" && activeCls)}>
              About
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className={cn(linkBase, "flex items-center gap-1 outline-none")}>
                Services <ChevronDown className="h-3.5 w-3.5 opacity-60" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-52 mt-2 glass-strong border-border/40">
                {serviceLinks.map((link) => (
                  <DropdownMenuItem key={link.href} asChild>
                    <Link to={link.href} className="w-full cursor-pointer text-[13px]">
                      {link.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/fleet" className={cn(linkBase, location.pathname === "/fleet" && activeCls)}>
              Fleet
            </Link>
            <Link
              to="/service-areas"
              className={cn(linkBase, location.pathname === "/service-areas" && activeCls)}
            >
              Service Areas
            </Link>
            <Link
              to="/contact"
              className={cn(linkBase, location.pathname === "/contact" && activeCls)}
            >
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <a href="tel:+919443033055" className="hidden md:flex">
              <Button
                size="sm"
                className="gap-2 rounded-full px-4 h-9 text-[13px] font-medium shadow-sm hover:shadow-md ease-apple"
              >
                <Phone className="h-3.5 w-3.5" />
                Call Now
              </Button>
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                "lg:hidden p-2 -mr-2 rounded-full transition-colors",
                solid ? "text-foreground hover:bg-foreground/5" : "text-primary-foreground hover:bg-primary-foreground/10"
              )}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-opacity duration-500 ease-apple",
            isOpen ? "opacity-100" : "max-h-0 opacity-0 pointer-events-none"
          )}
        >
          <nav
            className="my-2 rounded-3xl border border-border/60 bg-background py-4 shadow-xl overflow-y-auto overscroll-contain"
            style={{ maxHeight: "calc(100dvh - 96px)" }}
          >
            <div className="flex flex-col gap-1">
              {navLinks.slice(0, 2).map((l) => (
                <MobileLink key={l.href} to={l.href} active={location.pathname === l.href}>
                  {l.name}
                </MobileLink>
              ))}
              <div className="px-4 pt-3 pb-1">
                <span className="text-eyebrow text-muted-foreground">Services</span>
              </div>
              {serviceLinks.map((link) => (
                <MobileLink
                  key={link.href}
                  to={link.href}
                  indent
                  active={location.pathname === link.href}
                >
                  {link.name}
                </MobileLink>
              ))}
              {navLinks.slice(2).map((l) => (
                <MobileLink key={l.href} to={l.href} active={location.pathname === l.href}>
                  {l.name}
                </MobileLink>
              ))}
              <a href="tel:+919443033055" className="px-4 pt-3">
                <Button size="sm" className="w-full gap-2 rounded-full">
                  <Phone className="h-4 w-4" />
                  Call Now
                </Button>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

function MobileLink({
  to,
  children,
  active,
  indent,
}: {
  to: string;
  children: React.ReactNode;
  active?: boolean;
  indent?: boolean;
}) {
  return (
    <Link
      to={to}
      className={cn(
        "px-4 py-2.5 text-[14px] font-medium rounded-lg mx-2 transition-colors duration-300 ease-apple",
        indent && "pl-7",
        active ? "bg-primary/10 text-primary" : "text-foreground hover:bg-primary/5"
      )}
    >
      {children}
    </Link>
  );
}
