# Launch checklist (needs the owner)

1. **GA4:** replace `G-XXXXXXXXXX` in `index.html` (two places) with the real Measurement ID from analytics.google.com.
2. **Google Search Console:** add the property for https://sta-corporate.in, copy the HTML-tag verification value into `index.html` as a `google-site-verification` meta tag, then submit https://sta-corporate.in/sitemap.xml.
3. **Supabase:** confirm Row Level Security is enabled on every table. `.env` is no longer tracked; keep the three VITE_SUPABASE_* values in the hosting/Lovable environment (see `.env.example`).
4. **WhatsApp Business:** enquiry forms currently open a wa.me chat to +91 94430 33055. Connecting the WhatsApp Business API needs an authorised Meta Business account.
5. **Google Business Profile:** update the address to the Podanur address above.
