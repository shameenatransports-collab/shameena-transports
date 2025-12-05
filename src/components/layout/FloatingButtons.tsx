import { Phone, MessageCircle } from "lucide-react";

export function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919876543210?text=Hi%2C%20I%20need%20lorry%20transport%20service"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-card shadow-lg hover:scale-110 transition-transform"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-7 w-7" />
      </a>

      {/* Call Button */}
      <a
        href="tel:+919876543210"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-accent text-accent-foreground shadow-lg hover:scale-110 transition-transform"
        aria-label="Call Now"
      >
        <Phone className="h-7 w-7" />
      </a>
    </div>
  );
}
