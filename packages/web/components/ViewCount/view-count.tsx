import { getViewCountAction } from "@/action/action";
// import ViewCountClient from "./increase-view";

const ViewCount: React.FC<{
  slug: string;
}> = async ({ slug }) => {
  const initialViews = await getViewCountAction(slug);

  return <div>ViewCount: {initialViews}</div>;
};

export default ViewCount;
