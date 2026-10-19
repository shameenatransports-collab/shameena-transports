# Architecture rules
- Keep education AI prompts and model calls in the education-pathways Cloud function; the browser only submits validated preferences and displays streamed text.
- Do not persist student profiles or AI answers; only service availability state is stored to prevent repeated calls after access or credit failures.
- Education AI is an intentional public guest endpoint; enforce bounded inputs and explicit adult consent without introducing student accounts.
- Generate city-page enquiry context and practice heritage through the shared local-content module; locality describes the customer’s location, not a branch, so city templates remain accurate without duplicating business claims.
- Keep all public city routes in the sitemap enumerator and link them through the regional directory; this makes existing landing pages discoverable without creating duplicate routes.