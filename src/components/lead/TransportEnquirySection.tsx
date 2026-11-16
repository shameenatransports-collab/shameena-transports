import { LeadEnquiryForm } from "./LeadEnquiryForm";

export function TransportEnquirySection({ path, route, service }: { path: string; route: string; service: string }) {
  return (
    <section className="py-12 md:py-16 bg-background" aria-label="Transport enquiry">
      <div className="container mx-auto px-4 max-w-3xl">
        <LeadEnquiryForm key={path} city="Coimbatore" route={route} service={service} />
      </div>
    </section>
  );
}