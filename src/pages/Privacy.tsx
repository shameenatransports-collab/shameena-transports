import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { resetCookieConsent } from "@/components/analytics/CookieConsent";

const Privacy = () => {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://sta-corporate.in/" },
      { "@type": "ListItem", position: 2, name: "Privacy Policy", item: "https://sta-corporate.in/privacy" },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Privacy Policy | DPDP Act 2023 Compliant | STA Corporate Solutions</title>
        <meta
          name="description"
          content="STA Corporate Solutions Privacy Policy aligned with India's Digital Personal Data Protection Act 2023 — data principal rights, grievance officer, retention, cookies and consent."
        />
        <link rel="canonical" href="https://sta-corporate.in/privacy" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>
      <Layout>
        <section className="relative py-16 md:py-24 bg-primary">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <p className="text-eyebrow text-primary-foreground/70 mb-3">DPDP Act 2023 · IT Act 2000</p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
                Privacy Policy
              </h1>
              <p className="text-lg text-primary-foreground/90">Effective: 1 June 2026 · Version 2.0</p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">

              {/* 1. Data Fiduciary */}
              <Card>
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">1. Who we are (Data Fiduciary)</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong>STA Corporate Solutions</strong> ("STA", "we", "us") is the Data Fiduciary
                    for personal data collected through <span className="font-mono">sta-corporate.in</span> and our
                    contact channels. Headquartered at No.302/2A7, VK Road, Peelamedu, Coimbatore – 641004,
                    Tamil Nadu, India.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    This policy is governed by the <strong>Digital Personal Data Protection Act, 2023 (DPDP Act)</strong>,
                    the <strong>Information Technology Act, 2000</strong> and the IT (Reasonable Security Practices and
                    Procedures and Sensitive Personal Data or Information) Rules, 2011. The site is intended
                    for users in India.
                  </p>
                </CardContent>
              </Card>

              {/* 2. What we collect */}
              <Card>
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">2. Categories of personal data</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">You give us</h3>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1.5 text-sm">
                        <li>Name, mobile number</li>
                        <li>Pickup &amp; delivery city, cargo details (transport)</li>
                        <li>Business name &amp; loan-scheme interest (financial)</li>
                        <li>Nature of legal matter (legal)</li>
                        <li>Qualifications, education goals and destination preferences (optional AI education guidance)</li>
                        <li>Anything you write in the enquiry message</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Collected automatically</h3>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1.5 text-sm">
                        <li>IP address &amp; approximate location (city/state)</li>
                        <li>Device, browser, OS, screen size</li>
                        <li>Pages visited, time spent, scroll depth</li>
                        <li>Referrer URL &amp; UTM parameters</li>
                        <li>Consent record (analytics on/off + timestamp)</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-4">
                    We do not knowingly collect sensitive personal data (financial credentials, biometrics,
                    health, sexual orientation, religious belief) through this site. Do not share such data
                    in enquiry messages.
                  </p>
                </CardContent>
              </Card>

              {/* 3. Purposes & lawful basis */}
              <Card>
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">3. Purposes &amp; lawful basis</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="text-left py-2 pr-4 font-semibold text-foreground">Purpose</th>
                          <th className="text-left py-2 pr-4 font-semibold text-foreground">Data used</th>
                          <th className="text-left py-2 font-semibold text-foreground">DPDP basis</th>
                        </tr>
                      </thead>
                      <tbody className="text-muted-foreground">
                        <tr className="border-b border-border/60"><td className="py-2 pr-4">Respond to your enquiry / quote</td><td className="py-2 pr-4">Name, mobile, request</td><td className="py-2">Consent (§6)</td></tr>
                        <tr className="border-b border-border/60"><td className="py-2 pr-4">Fulfil booked services</td><td className="py-2 pr-4">Contact + service details</td><td className="py-2">Performance of contract (§7(a))</td></tr>
                        <tr className="border-b border-border/60"><td className="py-2 pr-4">Security &amp; fraud prevention</td><td className="py-2 pr-4">IP, device, honeypot signals</td><td className="py-2">Legitimate use (§7(j))</td></tr>
                        <tr className="border-b border-border/60"><td className="py-2 pr-4">Site analytics (GA4)</td><td className="py-2 pr-4">Anonymised page data</td><td className="py-2">Consent (§6)</td></tr>
                        <tr><td className="py-2 pr-4">Legal &amp; tax compliance</td><td className="py-2 pr-4">Billing records</td><td className="py-2">Legal obligation (§7(c))</td></tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              {/* 4. Cookies */}
              <Card id="cookies">
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">4. Cookies &amp; consent</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We use Google Consent Mode v2. Non-essential cookies fire only after you grant consent.
                    Essential cookies (session, security, consent record) operate under DPDP legitimate use.
                  </p>
                  <div className="space-y-4">
                    <div className="border-l-4 border-accent pl-4">
                      <h3 className="font-semibold text-foreground mb-1">Essential</h3>
                      <p className="text-sm text-muted-foreground">Session integrity, security, storage of your consent choice. Cannot be disabled.</p>
                    </div>
                    <div className="border-l-4 border-secondary pl-4">
                      <h3 className="font-semibold text-foreground mb-1">Analytics</h3>
                      <p className="text-sm text-muted-foreground">Google Analytics 4 — aggregated, IP-truncated. Retention 26 months.</p>
                    </div>
                    <div className="border-l-4 border-muted-foreground pl-4">
                      <h3 className="font-semibold text-foreground mb-1">Marketing</h3>
                      <p className="text-sm text-muted-foreground">Off by default. Used for re-targeting only if you opt in.</p>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-muted rounded-lg">
                    <p className="text-sm text-foreground mb-3"><strong>Manage anytime:</strong></p>
                    <Button onClick={resetCookieConsent} variant="outline" size="sm">Update consent preferences</Button>
                  </div>
                </CardContent>
              </Card>

              {/* 5. Sharing */}
              <Card>
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">5. Sharing &amp; processors</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">We never sell your data. We share only with:</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-2 text-sm">
                    <li><strong>Google LLC</strong> — GA4 analytics (processor; data anonymised, EU/US servers)</li>
                    <li><strong>Meta Platforms</strong> — only if marketing consent granted</li>
                    <li><strong>Service partners</strong> (banks, registrars, transport partners) — only what's needed to fulfil your specific request</li>
                    <li><strong>Lovable Cloud and Lovable AI</strong> — when you explicitly request AI education suggestions, your academic details are processed to generate a response. Do not submit identifiers or documents. AI suggestions are not verified admission advice.</li>
                    <li><strong>Authorities</strong> — when required by Indian law, court order or to protect rights</li>
                  </ul>
                  <p className="text-xs text-muted-foreground mt-3">
                    Cross-border transfer (to GA4 / Meta servers) is permitted under DPDP §16 to countries not
                    notified as restricted by the Central Government.
                  </p>
                </CardContent>
              </Card>

              {/* 6. Retention */}
              <Card>
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">6. Retention schedule</h2>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 text-sm ml-2">
                    <li><strong>AI education inputs and suggestions:</strong> not saved in STA student records or browser storage; retained in page memory until you leave or reload. Service providers process requests under their policies. If you send the WhatsApp draft, that becomes an enquiry message.</li>
                    <li><strong>Enquiry messages:</strong> 12 months from last contact, then erased</li>
                    <li><strong>Booked-service records (invoices, LRs):</strong> 7 years (Income Tax Act / GST)</li>
                    <li><strong>Analytics data:</strong> 26 months in GA4, then auto-deleted</li>
                    <li><strong>Consent record:</strong> until you withdraw + 3 years (audit trail)</li>
                    <li><strong>Marketing list:</strong> until you opt out</li>
                  </ul>
                </CardContent>
              </Card>

              {/* 7. Your rights as Data Principal */}
              <Card>
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">7. Your rights as a Data Principal</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">Under the DPDP Act you have the right to:</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 text-sm ml-2">
                    <li><strong>Access</strong> — get a summary of personal data we hold about you (§11)</li>
                    <li><strong>Correction &amp; completion</strong> — fix inaccurate or incomplete data (§12)</li>
                    <li><strong>Erasure</strong> — ask us to delete data no longer needed (§12)</li>
                    <li><strong>Withdraw consent</strong> — as easy as giving it (§6(4))</li>
                    <li><strong>Nominate</strong> — appoint someone to exercise rights on your behalf (§14)</li>
                    <li><strong>Grievance redressal</strong> — escalate to our Grievance Officer, then to the Data Protection Board (§13)</li>
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <Link to="/data-request">
                      <Button>File a Data Request</Button>
                    </Link>
                    <a href="tel:+919443033055">
                      <Button variant="outline">Call grievance line</Button>
                    </a>
                  </div>
                  <p className="text-xs text-muted-foreground mt-3">We respond within 30 days as required by DPDP rules.</p>
                </CardContent>
              </Card>

              {/* 8. Security */}
              <Card>
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">8. Security measures</h2>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 text-sm ml-2">
                    <li>HTTPS / TLS 1.3 across the entire site</li>
                    <li>Honeypot + rate-limited enquiry forms to deter spam &amp; scraping</li>
                    <li>Bot-filtering on analytics so personal data isn't conflated with crawler traffic</li>
                    <li>Principle of least access for staff handling enquiry data</li>
                    <li>Reasonable security practices per IT Rules 2011, Rule 8</li>
                  </ul>
                  <p className="text-xs text-muted-foreground mt-3">
                    On a notifiable personal-data breach we will inform the Data Protection Board of India
                    and affected Data Principals as required by DPDP §8(6).
                  </p>
                </CardContent>
              </Card>

              {/* 9. Children */}
              <Card>
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">9. Children's data</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Our services are intended for adults aged 18+. We do not knowingly process personal data
                    of children (under 18) without verifiable parental consent (DPDP §9). If you believe a
                    child has submitted data, contact us to erase it.
                  </p>
                </CardContent>
              </Card>

              {/* 10. Grievance Officer */}
              <Card>
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">10. Grievance Officer (DPDP §10(2)(c) / IT Rules)</h2>
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="font-semibold text-foreground">Grievance Officer — STA Corporate Solutions</p>
                    <p className="text-muted-foreground text-sm mt-1">No.302/2A7, VK Road, Peelamedu, Coimbatore – 641004, Tamil Nadu</p>
                    <p className="text-muted-foreground text-sm">Phone: +91 94430 33055 (Mon–Sat, 09:00–19:00 IST)</p>
                    <p className="text-muted-foreground text-sm">Email: <a href="mailto:shameenatransports@gmail.com" className="underline">shameenatransports@gmail.com</a></p>
                    <p className="text-muted-foreground text-sm">Online: <Link to="/data-request" className="underline">sta-corporate.in/data-request</Link></p>
                  </div>
                  <p className="text-xs text-muted-foreground mt-3">
                    Unsatisfied? Escalate to the Data Protection Board of India (DPB) once notified
                    under DPDP §18.
                  </p>
                </CardContent>
              </Card>

              {/* 11. Updates */}
              <Card>
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">11. Policy updates</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Material changes will trigger a re-consent prompt (we bump the cookie-consent version).
                    Minor changes are posted here with a new effective date.
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
