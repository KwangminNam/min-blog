"use client";

import { useEffect, useState } from "react";
import {
  postViewCountAction,
  revalidateAllViewCount,
  revalidateViewCount
} from "@/action/action";
import { themeColor, Typography } from "@kwangmins-blog/ui";
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
    <Typography variant="small" css={{color: themeColor.color.secondaryFontColor}}>
      조회수:
      <CountUp
        style={{color: themeColor.color.secondaryFontColor}}
        start={0}
        end={initialViews}
        duration={1.5}
        easingFn={(t, b, c, d) => {
          return c * (-Math.pow(2, -10 * t/d) + 1) + b;
        }}
      />
    </Typography>
  );
};

export default ViewCountClient;
