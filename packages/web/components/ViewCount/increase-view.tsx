"use client";

import { useLayoutEffect, useEffect } from "react";
import {
  postViewCountAction,
  revalidateAllViewCount,
  revalidateViewCount,
} from "@/action/action";

interface ViewCountClientProps {
  slug: string;
  initialViews: number;
}

const ViewCountClient: React.FC<ViewCountClientProps> = ({
  slug,
  initialViews,
}) => {
  useEffect(() => {
    postViewCountAction(slug);
    revalidateViewCount();
    revalidateAllViewCount();
  }, [slug]);

  return <div>ViewCount: {initialViews}</div>;
};

export default ViewCountClient;
