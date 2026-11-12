import { Navigate, useLocation } from "react-router-dom";
import { legacyDestination } from "@/lib/seo/legacy-routes";
import NotFound from "./NotFound";

export default function LegacyRoute() {
  const { pathname } = useLocation();
  const destination = legacyDestination(pathname);
  return destination ? <Navigate to={destination} replace /> : <NotFound />;
}