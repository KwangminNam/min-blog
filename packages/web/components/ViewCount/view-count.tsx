import { getViewCountAction } from "@/action/action";
import ViewCountClient from "./increase-view";

const ViewCount: React.FC<{
  slug: string;
  isOnlyViewCount?: boolean;
}> = async ({ slug, isOnlyViewCount = false }) => {
  const initialViews = await getViewCountAction(slug);

  return (
    <ViewCountClient
      isOnlyViewCount={isOnlyViewCount}
      slug={slug}
      initialViews={initialViews}
    />
  );
};

export default ViewCount;
