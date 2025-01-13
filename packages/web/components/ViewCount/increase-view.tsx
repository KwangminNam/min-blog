"use client";

import { useEffect, useState } from "react";
import { postViewCountAction } from "@/action/action";

interface ViewCountClientProps {
  slug: string;
  initialViews: number;
}

const ViewCountClient: React.FC<ViewCountClientProps> = ({
  slug,
  initialViews
}) => {
  // const [isClient, setIsClient] = useState(false);

  // useEffect(() => {
  //   setIsClient(true);
  // }, []);

  // useEffect(() => {
  //   if (isClient) {
  //     postViewCountAction(slug);
  //   }
  // }, [slug]);

  return <div>{initialViews}</div>;
};

export default ViewCountClient;
