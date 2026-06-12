import { useParams } from "react-router-dom";
import { BHK_BY_SLUG } from "@/lib/seo/pillars";
import BHKPage from "./BHKPage";
import PillarCitySubPage from "./PillarCitySubPage";

/**
 * Resolver for /real-estate/:city/:second
 * If :second is a BHK slug → BHKPage, else → PillarCitySubPage.
 */
export default function RealEstateCityChild() {
  const { bhk: param } = useParams();
  // The route declares :bhk, but we re-route based on slug
  if (param && BHK_BY_SLUG[param]) return <BHKPage />;
  return <PillarCitySubPage />;
}
