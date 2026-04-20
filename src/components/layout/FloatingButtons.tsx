import { Phone, MessageCircle } from "lucide-react";
import { trackPhoneClick, trackWhatsAppClick } from "@/lib/analytics";

export function FloatingButtons() {
  const handlePhoneClick = () => trackPhoneClick("+919443033055", "floating_button");
  const handleWhatsAppClick = () => trackWhatsAppClick("floating_button");

  return (
    <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-40 flex flex-col gap-3">
      <a
        href="https://wa.me/919443033055?text=Hi%2C%20I%20need%20lorry%20transport%20service"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl transition-all duration-500 ease-apple hover:-translate-y-0.5"
        aria-label="Chat on WhatsApp"
        onClick={handleWhatsAppClick}
      >
        <span aria-hidden className="absolute inset-0 rounded-full bg-[#25D366] opacity-50 animate-ping group-hover:opacity-0" />
        <MessageCircle className="relative h-5 w-5 sm:h-6 sm:w-6" />
      </a>

      <a
        href="tel:+919443033055"
        className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-accent text-accent-foreground shadow-lg hover:shadow-xl transition-all duration-500 ease-apple hover:-translate-y-0.5"
        aria-label="Call Now"
        onClick={handlePhoneClick}
      >
        <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
      </a>
    </div>
  );
}
