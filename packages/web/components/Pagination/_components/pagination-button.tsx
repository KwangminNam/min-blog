import React from "react";
import useCreatePageUrl from "@/hooks/useCreatePageUrl";
import { Button, ArrowIcon } from "@kwangmins-blog/ui";
import Link from "next/link";
import { cn } from "@kwangmins-blog/util";

interface PaginationButtonProps {
  targetPage: number;
  buttonText?: string | number;
  direction?: "up" | "down" | "left" | "right";
  isActive?: boolean;
}

const PaginationButton: React.FC<PaginationButtonProps> = ({
  targetPage,
  buttonText,
  direction,
  isActive
}) => {
  const { createPageURL } = useCreatePageUrl();
  return (
    <Link href={createPageURL(targetPage)}>
      <Button size="smallest" className={cn(isActive && "is-active")}>
        {direction && <ArrowIcon size={16} direction={direction} />}
        {buttonText}
      </Button>
    </Link>
  );
};

export default PaginationButton;
