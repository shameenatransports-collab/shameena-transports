import { z } from "zod";

export const enquirySchema = z.object({
  name: z.string().trim().min(2, "Enter your name").max(100, "Name is too long"),
  phone: z.string().trim().regex(/^(?:\+91[\s-]?)?[6-9]\d{9}$/, "Enter a valid Indian mobile number"),
  route: z.string().trim().min(2, "Enter pickup and delivery city").max(140, "Route is too long"),
  service: z.string().trim().min(2, "Enter the service needed").max(120, "Service is too long"),
  details: z.string().trim().max(500, "Details must be under 500 characters").optional(),
});

export function transportEnquiryUrl(input: unknown, pagePath: string) {
  const data = enquirySchema.parse(input);
  const path = z.string().max(250).regex(/^\/[a-z0-9/-]*$/i).parse(pagePath);
  const message = `STA Corporate Solutions enquiry\nName: ${data.name}\nPhone: ${data.phone}\nRoute/City: ${data.route}\nService: ${data.service}${data.details ? `\nDetails: ${data.details}` : ""}\nPage: https://sta-corporate.in${path}`;
  return `https://wa.me/919443033055?text=${encodeURIComponent(message)}`;
}