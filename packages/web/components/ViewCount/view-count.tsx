import { getViewCountAction } from "@/action/action";
import ViewCountClient from "./increase-view";
import { unstable_noStore as noStore } from "next/cache";

const ViewCount: React.FC<{
  slug: string;
}> = async ({ slug }) => {
  noStore();
  const initialViews = await getViewCountAction(slug);

  return <ViewCountClient slug={slug} initialViews={initialViews} />;
};

export default ViewCount;
