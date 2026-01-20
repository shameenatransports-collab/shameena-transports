import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { resetCookieConsent } from "@/components/analytics/CookieConsent";

const Privacy = () => {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.stacorporate.com" },
      { "@type": "ListItem", "position": 2, "name": "Privacy Policy", "item": "https://www.stacorporate.com/privacy" }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Privacy Policy | STA Corporate Solutions - Data Protection & Cookie Usage</title>
        <meta name="description" content="Privacy Policy for STA Corporate Solutions. Learn how we collect, use, and protect your personal data. GDPR compliant cookie usage and data handling practices." />
        <link rel="canonical" href="https://www.stacorporate.com/privacy" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>
      <Layout>
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 bg-primary">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
                Privacy Policy
              </h1>
              <p className="text-lg text-primary-foreground/90">
                Last updated: January 2025
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              
              {/* Introduction */}
              <Card>
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Introduction</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    STA Corporate Solutions ("we", "our", or "us") is committed to protecting your privacy. 
                    This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                    when you visit our website www.stacorporate.com or use our services.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    We comply with the Information Technology Act, 2000, and follow GDPR principles 
                    for data protection and privacy.
                  </p>
                </CardContent>
              </Card>

              {/* Information We Collect */}
              <Card>
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Information We Collect</h2>
                  
                  <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">Personal Information</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    When you contact us or request a quote, we may collect:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>Name and contact details (phone number, email address)</li>
                    <li>Service-specific information (pickup/delivery locations, property details, etc.)</li>
                    <li>Type of service required</li>
                    <li>Business name (if applicable)</li>
                    <li>Communication preferences</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">Automatically Collected Information</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    When you visit our website, we may automatically collect:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>Device information (browser type, operating system)</li>
                    <li>IP address and approximate location</li>
                    <li>Pages visited and time spent on site</li>
                    <li>Referral source (how you found us)</li>
                    <li>Click patterns and scroll behavior</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Cookie Policy */}
              <Card id="cookies">
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Cookie Policy</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    We use cookies and similar tracking technologies to enhance your browsing experience 
                    and analyze website traffic. You can manage your cookie preferences at any time.
                  </p>

                  <div className="space-y-6">
                    <div className="border-l-4 border-accent pl-4">
                      <h3 className="font-semibold text-foreground mb-2">Essential Cookies</h3>
                      <p className="text-sm text-muted-foreground">
                        Required for the website to function properly. These cannot be disabled.
                        They include session management and security features.
                      </p>
                    </div>

                    <div className="border-l-4 border-secondary pl-4">
                      <h3 className="font-semibold text-foreground mb-2">Analytics Cookies</h3>
                      <p className="text-sm text-muted-foreground">
                        Help us understand how visitors interact with our website using Google Analytics 4.
                        We track page views, scroll depth, time on site, and user journeys to improve our service.
                        This data is anonymized and aggregated.
                      </p>
                    </div>

                    <div className="border-l-4 border-muted-foreground pl-4">
                      <h3 className="font-semibold text-foreground mb-2">Marketing Cookies</h3>
                      <p className="text-sm text-muted-foreground">
                        Used to deliver relevant advertisements and measure ad campaign effectiveness.
                        These may be set by third-party advertising partners.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-muted rounded-lg">
                    <p className="text-sm text-foreground mb-3">
                      <strong>Manage Your Preferences:</strong> You can change your cookie settings at any time.
                    </p>
                    <Button onClick={resetCookieConsent} variant="outline" size="sm">
                      Update Cookie Preferences
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* How We Use Information */}
              <Card>
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">How We Use Your Information</h2>
                  <ul className="list-disc list-inside text-muted-foreground space-y-3 ml-4">
                    <li>To provide and manage the services you request</li>
                    <li>To respond to your enquiries and provide quotes</li>
                    <li>To communicate about your services and transactions</li>
                    <li>To improve our website and customer experience</li>
                    <li>To analyze website usage and optimize performance</li>
                    <li>To send promotional communications (with your consent)</li>
                    <li>To comply with legal obligations</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Data Sharing */}
              <Card>
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Data Sharing & Third Parties</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We do not sell your personal information. We may share data with:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-3 ml-4">
                    <li><strong>Google Analytics:</strong> For website analytics (anonymized data)</li>
                    <li><strong>Service Partners:</strong> To fulfill your service requests</li>
                    <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Your Rights */}
              <Card>
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Your Rights</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    You have the following rights regarding your personal data:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-3 ml-4">
                    <li><strong>Access:</strong> Request a copy of your personal data</li>
                    <li><strong>Correction:</strong> Request correction of inaccurate data</li>
                    <li><strong>Deletion:</strong> Request deletion of your personal data</li>
                    <li><strong>Objection:</strong> Object to processing of your data</li>
                    <li><strong>Portability:</strong> Request transfer of your data</li>
                    <li><strong>Withdraw Consent:</strong> Withdraw consent for marketing communications</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    To exercise any of these rights, contact us at +91 94430 33055 or visit our office.
                  </p>
                </CardContent>
              </Card>

              {/* Data Security */}
              <Card>
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Data Security</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We implement appropriate technical and organizational measures to protect your personal 
                    information against unauthorized access, alteration, disclosure, or destruction. 
                    However, no method of transmission over the Internet is 100% secure.
                  </p>
                </CardContent>
              </Card>

              {/* Data Retention */}
              <Card>
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Data Retention</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We retain personal data only as long as necessary for the purposes outlined in this policy, 
                    or as required by law. Business records are retained for 7 years for legal and accounting purposes. 
                    Analytics data is retained for 26 months.
                  </p>
                </CardContent>
              </Card>

              {/* Contact */}
              <Card>
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Contact Us</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    For privacy-related questions or to exercise your rights, contact us:
                  </p>
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="font-semibold text-foreground">STA Corporate Solutions</p>
                    <p className="text-muted-foreground">No.302/2A7, VK Road, Peelamedu</p>
                    <p className="text-muted-foreground">Coimbatore - 641004, Tamil Nadu</p>
                    <p className="text-muted-foreground mt-2">Phone: +91 94430 33055</p>
                  </div>
                </CardContent>
              </Card>

              {/* Updates */}
              <Card>
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Policy Updates</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We may update this Privacy Policy from time to time. Changes will be posted on this page 
                    with an updated revision date. We encourage you to review this policy periodically.
                  </p>
                </CardContent>
              </Card>

            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Privacy;