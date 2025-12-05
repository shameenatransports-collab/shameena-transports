import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+91 90477 21209"],
    action: "tel:+919047721209",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    details: ["+91 90477 21209"],
    action: "https://wa.me/919047721209",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@shameena.com", "bookings@shameena.com"],
    action: "mailto:info@shameena.com",
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Booking: 8 AM - 10 PM", "Transport: 24/7"],
    action: null,
  },
];

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

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
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Lorry Booking Coimbatore - Shameena Transports</title>
        <meta name="description" content="Contact Shameena Transports for lorry booking in Coimbatore. Call +91 90477 21209 or WhatsApp for instant quotes. 24/7 goods transport service in Tamil Nadu." />
        <link rel="canonical" href="https://www.shameena.com/contact" />
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
                  Send Transport Enquiry
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
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d250614.54606878997!2d76.74231889999999!3d11.0168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x2fc1c81e183ed282!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Shameena Transports Location"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <MapPin className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">
                          Shameena Transports Head Office
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          123, Transport Nagar, Avinashi Road,<br />
                          Near CODISSIA Trade Fair Complex,<br />
                          Coimbatore - 641018, Tamil Nadu
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Contact */}
                <div className="mt-6 p-6 bg-primary rounded-lg text-primary-foreground">
                  <h3 className="font-semibold text-lg mb-4">Need Immediate Assistance?</h3>
                  <div className="flex flex-col sm:flex-row gap-3">
                  <a href="tel:+919047721209" className="flex-1">
                      <Button variant="secondary" size="lg" className="w-full gap-2">
                        <Phone className="h-5 w-5" />
                        Call Now
                      </Button>
                    </a>
                    <a
                      href="https://wa.me/919047721209?text=Hi%2C%20I%20need%20lorry%20transport%20service"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
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
