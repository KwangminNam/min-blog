import { getViewCountAction } from "@/action/action";
import ViewCountClient from "./increase-view";

import { themeColor, Typography } from "@kwangmins-blog/ui";

const ViewCount: React.FC<{
  slug: string;
  isOnlyViewCount?: boolean;
  viewCount?: number;
}> = async ({ slug, isOnlyViewCount = false, viewCount }) => {
  

  if (isOnlyViewCount) {
    return <Typography css={{color: themeColor.color.secondaryFontColor}} variant="smallest">조회수:{viewCount}</Typography>;
  }

  const initialViews = await getViewCountAction(slug);

  return <ViewCountClient slug={slug} initialViews={initialViews} />;
};

export default ViewCount;
