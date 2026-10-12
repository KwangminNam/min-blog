"use client";

import { useEffect, useRef, useState } from "react";
import { postViewCountAction } from "@/action/action";
import { themeColor, Typography } from "@kwangmins-blog/ui";
import CountUp from "react-countup";

interface ViewCountClientProps {
  slug: string;
  initialViews: number;
}

const ViewCountClient: React.FC<ViewCountClientProps> = ({
  slug,
  initialViews,
}) => {
  const [views, setViews] = useState(initialViews);
  // StrictMode의 이중 effect 실행으로 조회수가 두 번 오르는 것을 막는다.
  const countedSlug = useRef<string | null>(null);

  useEffect(() => {
    if (countedSlug.current === slug) return;
    countedSlug.current = slug;

    postViewCountAction(slug).then((next) => {
      if (typeof next === "number") setViews(next);
    });
  }, [slug]);

  return (
    <Typography variant="small" css={{ color: themeColor.color.secondaryFontColor }}>
      조회수:
      <CountUp
        style={{ color: themeColor.color.secondaryFontColor }}
        start={0}
        end={views}
        preserveValue
        duration={1.5}
        easingFn={(t, b, c, d) => {
          return c * (-Math.pow(2, -10 * t / d) + 1) + b;
        }}
      />
    </Typography>
  );
};

export default ViewCountClient;
