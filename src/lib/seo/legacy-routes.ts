/** Old page names resolve to current transport pages without duplicate listings. */
export function legacyDestination(pathname: string): string | undefined {
  const path = pathname.replace(/\/+$/, "") || "/";
  const replacements: Record<string, string> = {
    "/coimbatore": "/transportation/coimbatore",
    "/services": "/transportation",
    "/fleet": "/open-body-lorry-coimbatore",
    "/return-loads": "/transportation/services/return-load",
    "/tiruppur": "/service-areas",
    "/startup-funding-guide": "/transportation",
    "/msme-loan-guide": "/transportation",
    "/overseas-real-estate": "/transportation",
    "/dubai-real-estate": "/transportation",
  };
  if (replacements[path]) return replacements[path];
  if (["financial-services", "legal-services", "edu-consultancy", "real-estate"].some(p => path === `/${p}` || path.startsWith(`/${p}/`))) return "/transportation";
  if (["chennai", "madurai", "erode", "salem", "trichy", "tirunelveli"].some(c => path === `/${c}`)) return "/service-areas";
  return undefined;
}