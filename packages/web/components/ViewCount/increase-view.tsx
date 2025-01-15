"use client";

import { useLayoutEffect, useEffect } from "react";
import { postViewCountAction } from "@/action/action";

interface ViewCountClientProps {
  slug: string;
  initialViews: number;
  isOnlyViewCount: boolean;
}

const ViewCountClient: React.FC<ViewCountClientProps> = ({
  slug,
  initialViews,
  isOnlyViewCount
}) => {
  useEffect(() => {
    if (!isOnlyViewCount) {
      postViewCountAction(slug);
    }
  }, [slug]);

  return <div>ViewCount: {initialViews}</div>;
};

export default ViewCountClient;
