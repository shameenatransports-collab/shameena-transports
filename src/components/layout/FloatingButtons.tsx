import { Phone, MessageCircle } from "lucide-react";
import { trackPhoneClick, trackWhatsAppClick } from "@/lib/analytics";

export function FloatingButtons() {
  const handlePhoneClick = () => {
    trackPhoneClick("+919443033055", "floating_button");
  };

  const handleWhatsAppClick = () => {
    trackWhatsAppClick("floating_button");
  };

  return (
    <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-50 flex flex-col gap-2 sm:gap-3">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919443033055?text=Hi%2C%20I%20need%20lorry%20transport%20service"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-card shadow-lg hover:scale-110 transition-transform"
        aria-label="Chat on WhatsApp"
        onClick={handleWhatsAppClick}
      >
        <MessageCircle className="h-5 w-5 sm:h-7 sm:w-7" />
      </a>

      {/* Call Button */}
      <a
        href="tel:+919443033055"
        className="flex items-center justify-center w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-accent text-accent-foreground shadow-lg hover:scale-110 transition-transform"
        aria-label="Call Now"
        onClick={handlePhoneClick}
      >
        <Phone className="h-5 w-5 sm:h-7 sm:w-7" />
      </a>
    </div>
  );
}
