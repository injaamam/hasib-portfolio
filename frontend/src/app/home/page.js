import PageView from "@/components/PageView";
import { pageData } from "@/lib/siteData";

export default function HomePage() {
  return <PageView page={pageData.home} />;
}
