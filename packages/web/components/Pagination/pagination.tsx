"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { IPaginationProps } from "./pagination.interface";
import Link from "next/link";
import { Button } from "@monorepo/ui";

export default function Pagination({
  totalPages,
  className
}: IPaginationProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentPage = Number(searchParams.get("page")) || 1;

  const prevPage = currentPage - 1;
  const nextPage = currentPage + 1;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <div className={className}>
      {totalPages}
      {prevPage >= 1 ? (
        <Link href={createPageURL(prevPage)}>
          <Button>Previous</Button>
        </Link>
      ) : null}
      {Array.from({ length: totalPages }, (_, index) => index + 1).map(
        (page) => (
          <Link href={createPageURL(page)}>
            <Button>{page}</Button>
          </Link>
        )
      )}
      {nextPage <= totalPages ? (
        <Link href={createPageURL(nextPage)}>
          <Button>Next</Button>
        </Link>
      ) : null}
    </div>
  );
}
