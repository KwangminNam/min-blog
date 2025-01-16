import { getViewCountAction } from "@/action/action";
import ViewCountClient from "./increase-view";

const ViewCount: React.FC<{
  slug: string;
  isOnlyViewCount?: boolean;
}> = async ({ slug, isOnlyViewCount = false }) => {
  const initialViews = await getViewCountAction(slug);

  if (isOnlyViewCount) {
    return <div>ViewCount: {initialViews}</div>;
  }

  return <ViewCountClient slug={slug} initialViews={initialViews} />;
};

export default ViewCount;
