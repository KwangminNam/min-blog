import { getViewCountAction, postViewCountAction } from "@/action/action";
import { postViewCount } from "@/action/data";

const ViewCount: React.FC<{ slug: string }> = async ({ slug }) => {
  await postViewCountAction(slug);
  const views = await getViewCountAction(slug);
  return <div>ViewCount: {views}</div>;
};

export default ViewCount;
