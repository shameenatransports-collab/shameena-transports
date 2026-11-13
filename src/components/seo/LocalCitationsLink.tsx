import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { LOCAL_CITATIONS_PATH } from "@/lib/seo/local-citations";

export function LocalCitationsLink() {
  return <Link to={LOCAL_CITATIONS_PATH} className="inline-flex items-center gap-2 text-primary underline underline-offset-4">
    Podanur office details, local areas & port references <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
  </Link>;
}