import React from "react";
import { Button, ArrowIcon } from "@kwangmins-blog/ui";
import Link from "next/link";
import { cn } from "@kwangmins-blog/util";

interface PaginationButtonProps {
  href: string;
  buttonText?: string | number;
  direction?: "up" | "down" | "left" | "right";
  isActive?: boolean;
}

const PaginationButton: React.FC<PaginationButtonProps> = ({
  href,
  buttonText,
  direction,
  isActive
}) => {
  return (
    <Link href={href}>
      <Button size="smallest" className={cn(isActive && "is-active")}>
        {direction && <ArrowIcon size={16} direction={direction} />}
        {buttonText}
      </Button>
    </Link>
  );
};

export default PaginationButton;
