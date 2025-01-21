import useCreatePageUrl from "@/hooks/useCreatePageUrl";
import { Button, ArrowIcon } from "@monorepo/ui";

import Link from "next/link";

const PaginationButton = ({
  targetPage,
  buttonText,
  direction,
  isActive,
}: {
  targetPage: number;
  buttonText?: string | number;
  direction?: "up" | "down" | "left" | "right";
  isActive?: boolean;
}) => {

  const { createPageURL } = useCreatePageUrl();
  return (
    <Link href={createPageURL(targetPage)}>
      <Button
        size="smallest"
        style={{ backgroundColor: isActive ? "#FFB088" : "initial" }}
      >
        {direction && <ArrowIcon size={16} direction={direction} />}
        {buttonText}
      </Button>
    </Link>
  );
};

export default PaginationButton;
