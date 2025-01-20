"use client";

import { useEffect, useState } from "react";
import {
  postViewCountAction,
  revalidateAllViewCount,
  revalidateViewCount
} from "@/action/action";
import { Typography } from "@monorepo/ui";
import CountUp from "react-countup";

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

  return (
    <Typography variant="small" css={{color: '#94a3b8'}}>
      조회수:
      <CountUp
        style={{color: '#94a3b8'}}
        start={0}
        end={initialViews}
        duration={1.5}
        easingFn={(t, b, c, d) => {
          // easeOutExpo 함수
          return c * (-Math.pow(2, -10 * t/d) + 1) + b;
        }}
      />
    </Typography>
  );
};

export default ViewCountClient;
