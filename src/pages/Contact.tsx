import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import {
  trackContactFormStart,
  trackContactFormSubmit,
  trackPhoneClick,
  trackWhatsAppClick,
} from "@/lib/analytics";
import { localBusinessSchema, createBreadcrumbSchema } from "@/lib/structured-data";
const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+91 94430 33055", "+91 90477 21209"],
    action: "tel:+919443033055",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    details: ["+91 94430 33055"],
    action: "https://wa.me/919443033055",
  },
  {
    icon: MapPin,
    title: "Address",
    details: ["No.302/2A7, VK Road, Peelamedu, Coimbatore - 641004"],
    action: null,
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Booking: 8 AM - 10 PM", "Transport: 24/7"],
    action: null,
  },
];

const contactSchema = z.object({
  name: z.string().trim().min(2, "Enter your name").max(100, "Name is too long"),
  phone: z.string().trim().regex(/^(?:\+91[\s-]?)?[6-9]\d{9}$/, "Enter a valid Indian mobile number"),
  email: z.string().trim().email("Enter a valid email").max(255).optional().or(z.literal("")),
  pickup: z.string().trim().min(2, "Enter pickup location").max(120, "Pickup is too long"),
  destination: z.string().trim().min(2, "Enter destination").max(120, "Destination is too long"),
  goods: z.string().trim().min(2, "Enter goods or service type").max(120, "Goods detail is too long"),
  message: z.string().trim().max(500, "Details must be under 500 characters").optional(),
});

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    pickup: "",
    destination: "",
    goods: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [formStarted, setFormStarted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = contactSchema.safeParse(formData);
    if (!parsed.success) {
      const nextErrors: Record<string, string> = {};
      parsed.error.issues.forEach((issue) => {
        nextErrors[String(issue.path[0])] = issue.message;
      });
      setErrors(nextErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Track successful submission
    trackContactFormSubmit({
      source_city: parsed.data.pickup,
      destination_city: parsed.data.destination,
      service_type: parsed.data.goods,
    });

    toast({
      title: "Enquiry Submitted!",
      description: "Our team will contact you within 30 minutes.",
    });

    setFormData({
      name: "",
      phone: "",
      email: "",
      pickup: "",
      destination: "",
      goods: "",
      message: "",
    });
    setIsSubmitting(false);
    setFormStarted(false);
    setErrors({});
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    // Track form start on first interaction
    if (!formStarted) {
      setFormStarted(true);
      trackContactFormStart();
    }
    const { name, value } = e.target;
    const nextValue = name === "phone" ? value.replace(/[^0-9+\s-]/g, "") : value;
    setFormData({ ...formData, [name]: nextValue });
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handlePhoneClick = (phone: string) => {
    trackPhoneClick(phone, "contact_page");
  };

  const handleWhatsAppClick = () => {
    trackWhatsAppClick("contact_page");
  };

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://www.stacorporate.com" },
    { name: "Contact", url: "https://www.stacorporate.com/contact" },
  ]);

  return (
    <>
      <Helmet>
        <title>Contact Us | Business Enquiries - STA Corporate Solutions</title>
        <meta name="description" content="Contact STA Corporate Solutions for business enquiries. Call +91 94430 33055 or WhatsApp for instant quotes. Transportation, Trading, Financial Services & Real Estate." />
        <link rel="canonical" href="https://www.stacorporate.com/contact" />
        <meta property="og:title" content="Contact STA Corporate Solutions | Get a Quote" />
        <meta property="og:description" content="Call +91 94430 33055 or WhatsApp for instant quotes. Complete business solutions." />
        <meta property="og:url" content="https://www.stacorporate.com/contact" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
      </Helmet>
      <Layout>
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 bg-primary">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
                Contact Us
              </h1>
              <p className="text-lg text-primary-foreground/90">
                Get in touch for instant quotes, bookings, or any transport enquiries
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="border-border hover:border-accent transition-colors">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 rounded-full bg-accent mx-auto flex items-center justify-center mb-4">
                      <info.icon className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                    {info.details.map((detail, idx) => (
                      <div key={idx} className="text-sm text-muted-foreground">
                        {info.action ? (
                          <a href={info.action} className="hover:text-accent">
                            {detail}
                          </a>
                        ) : (
                          detail
                        )}
                      </div>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Map */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Enquiry Form */}
              <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Send Enquiry
              </h2>
              <Card className="border-border">
                  <CardContent className="p-6">
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium text-foreground mb-1 block">
                            Your Name *
                          </label>
                          <Input
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Enter your name"
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium text-foreground mb-1 block">
                            Phone Number *
                          </label>
                          <Input
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            placeholder="+91 98765 43210"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground mb-1 block">
                          Email (Optional)
                        </label>
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                        />
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium text-foreground mb-1 block">
                            Pickup Location *
                          </label>
                          <Input
                            name="pickup"
                            value={formData.pickup}
                            onChange={handleChange}
                            required
                            placeholder="e.g., Coimbatore"
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium text-foreground mb-1 block">
                            Destination *
                          </label>
                          <Input
                            name="destination"
                            value={formData.destination}
                            onChange={handleChange}
                            required
                            placeholder="e.g., Chennai"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground mb-1 block">
                          Type of Goods *
                        </label>
                        <Input
                          name="goods"
                          value={formData.goods}
                          onChange={handleChange}
                          required
                          placeholder="e.g., Textile, Machinery, Construction Material"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground mb-1 block">
                          Additional Details
                        </label>
                        <Textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Weight, dimensions, preferred date, special requirements..."
                          rows={4}
                        />
                      </div>
                      <Button type="submit" size="lg" className="w-full gap-2" disabled={isSubmitting}>
                        <Send className="h-5 w-5" />
                        {isSubmitting ? "Submitting..." : "Submit Enquiry"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Map & Address */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Visit Our Office
                </h2>
                <Card className="border-border overflow-hidden">
                  <div className="aspect-video bg-muted">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.1234!2d77.0216!3d11.0273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859c6d8a6d8a7%3A0x1234567890abcdef!2sVK%20Road%2C%20Peelamedu%2C%20Coimbatore%2C%20Tamil%20Nadu%20641004!5e0!3m2!1sen!2sin!4v1702000000000!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="STA Corporate Solutions Location"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <MapPin className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">
                          STA Corporate Solutions
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          No.302/2A7, VK Road, Peelamedu,<br />
                          Coimbatore - 641004, Tamil Nadu<br />
                          GST: 33AHTPA8379E1Z3
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Contact */}
                <div className="mt-6 p-6 bg-primary rounded-lg text-primary-foreground">
                  <h3 className="font-semibold text-lg mb-4">Need Immediate Assistance?</h3>
                  <div className="flex flex-col sm:flex-row gap-3">
                  <a 
                    href="tel:+919443033055" 
                    className="flex-1"
                    onClick={() => handlePhoneClick("+919443033055")}
                  >
                      <Button variant="secondary" size="lg" className="w-full gap-2">
                        <Phone className="h-5 w-5" />
                        Call Now
                      </Button>
                    </a>
                    <a
                      href="https://wa.me/919443033055?text=Hi%2C%20I%20need%20lorry%20transport%20service"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                      onClick={handleWhatsAppClick}
                    >
                      <Button
                        variant="outline"
                        size="lg"
                        className="w-full gap-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                      >
                        <MessageCircle className="h-5 w-5" />
                        WhatsApp
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Contact;
