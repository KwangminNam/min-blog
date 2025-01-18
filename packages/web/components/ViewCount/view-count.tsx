import { getViewCountAction } from "@/action/action";
import ViewCountClient from "./increase-view";
import { unstable_noStore } from "next/cache";

const ViewCount: React.FC<{
  slug: string;
  isOnlyViewCount?: boolean;
  viewCount?: number;
}> = async ({ slug, isOnlyViewCount = false, viewCount }) => {
  unstable_noStore();

  if (isOnlyViewCount) {
    return <div>ViewCount: {viewCount}</div>;
}

  const initialViews = await getViewCountAction(slug);

  return <ViewCountClient slug={slug} initialViews={initialViews} />;
};

export default ViewCount;
