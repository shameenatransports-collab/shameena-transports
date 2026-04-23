import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { Phone, MessageCircle, ArrowUpRight, Truck, Banknote, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Parallax } from "@/components/ui/parallax";
import heroBg from "@/assets/hero-bg.jpg";

const verticals = [
  { icon: Truck, title: "Transportation", href: "/transportation", desc: "Full Load lorry across Tamil Nadu" },
  { icon: Banknote, title: "Financial Services", href: "/financial-services", desc: "MSME · Mudra · Home · Business" },
  { icon: Scale, title: "Legal Services", href: "/legal-services", desc: "All 38 districts of Tamil Nadu" },
];

const easeApple = [0.22, 1, 0.36, 1] as const;

export function HeroSection() {
  const reduced = useReducedMotion();

  return (
    <section
      className="relative isolate min-h-[100svh] flex items-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Parallax background */}
      <Parallax className="absolute inset-0 -z-10" distance={80} scaleTo={1.12}>
        <img
          src={heroBg}
          alt=""
          className="w-full h-[120%] object-cover"
          loading="eager"
          fetchPriority="high"
        />
      </Parallax>

      {/* Cinematic overlay */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/85 via-primary/80 to-primary/95"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_hsl(var(--primary-glow)/0.25),_transparent_60%)]"
      />

      <div className="container mx-auto px-4 pt-32 pb-20 md:pt-40 md:pb-28 relative">
        <div className="max-w-5xl mx-auto text-center">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: reduced ? 0 : 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeApple, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-background/95 text-[11px] font-bold tracking-[0.18em] uppercase text-primary shadow-xl ring-1 ring-primary-foreground/40 backdrop-blur-2xl mb-8"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
            Trusted Since 1982 · Coimbatore
          </motion.div>

          {/* Display headline */}
          <motion.h1
            initial={{ opacity: 0, y: reduced ? 0 : 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: easeApple, delay: 0.2 }}
            className="text-display-2xl text-primary-foreground mb-6"
          >
            Built on trust.
            <br />
            <span className="bg-gradient-to-r from-secondary via-secondary to-primary-foreground bg-clip-text text-transparent">
              Driven for decades.
            </span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: reduced ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: easeApple, delay: 0.35 }}
            className="text-headline text-primary-foreground/85 max-w-2xl mx-auto mb-3"
          >
            Transportation, Financial & Legal Services for businesses across
            Coimbatore and Tamil Nadu.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: easeApple, delay: 0.5 }}
            className="text-sm md:text-base text-primary-foreground/60 mb-12 tracking-tight"
          >
            43+ years · Coimbatore HQ · Tamil Nadu business support
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: reduced ? 0 : 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easeApple, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 justify-center mb-20"
          >
            <a href="tel:+919443033055">
              <Button
                size="lg"
                className="rounded-full px-7 h-12 text-[14px] font-medium gap-2 bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-xl ease-apple"
              >
                <Phone className="h-4 w-4" />
                +91 94430 33055
              </Button>
            </a>
            <a
              href="https://wa.me/919443033055?text=Hi%2C%20I%20need%20information%20about%20STA%20Corporate%20Solutions%20services"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-7 h-12 text-[14px] font-medium gap-2 glass-subtle border-primary-foreground/25 text-primary-foreground hover:bg-primary-foreground/10 ease-apple"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp Us
              </Button>
            </a>
          </motion.div>

          {/* Verticals — glass row */}
          <motion.div
            initial={{ opacity: 0, y: reduced ? 0 : 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: easeApple, delay: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-4xl mx-auto"
          >
            {verticals.map((v) => (
              <Link
                key={v.title}
                to={v.href}
                className="group glass rounded-2xl p-5 text-left hover-lift focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-secondary/15 backdrop-blur-sm flex items-center justify-center">
                    <v.icon className="h-4.5 w-4.5 text-secondary" strokeWidth={2} />
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-primary-foreground/40 group-hover:text-primary-foreground transition-colors duration-500 ease-apple" />
                </div>
                <h3 className="text-[15px] font-semibold text-primary-foreground tracking-tight mb-1">
                  {v.title}
                </h3>
                <p className="text-[12.5px] text-primary-foreground/60">{v.desc}</p>
              </Link>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-primary-foreground/40 text-[10px] tracking-[0.3em] uppercase"
      >
        Scroll
      </motion.div>
    </section>
  );
}
