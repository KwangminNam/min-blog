"use client";

import { useEffect, useState } from "react";
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
  const [count, setCount] = useState(initialViews);

  useEffect(() => {
    postViewCountAction(slug);
    revalidateViewCount();
    revalidateAllViewCount();
  }, [slug]);

  useEffect(() => {
    if (count < initialViews) {
      const timer = setTimeout(() => {
        setCount(prev => Math.min(prev + 1, initialViews));
      }, 50);

      return () => clearTimeout(timer);
    }
  }, [count, initialViews]);

  return <Typography variant="small">조회수: {count}</Typography>;
};

export default ViewCountClient;
