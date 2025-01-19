"use client";

import { useEffect } from "react";
import {
  postViewCountAction,
  revalidateAllViewCount,
  revalidateViewCount
} from "@/action/action";
import { Typography } from "@monorepo/ui";

interface ViewCountClientProps {
  slug: string;
  initialViews: number;
}

const ViewCountClient: React.FC<ViewCountClientProps> = ({
  slug,
  initialViews
}) => {
  useEffect(() => {
    postViewCountAction(slug);
    revalidateViewCount();
    revalidateAllViewCount();
  }, [slug]);

  return <Typography variant="small">조회수: {initialViews}</Typography>;
};

export default ViewCountClient;
