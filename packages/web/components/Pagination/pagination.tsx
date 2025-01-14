"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { IPaginationProps } from "./pagination.interface";
import Link from "next/link";
import { Button } from "@monorepo/ui";
import useCreatePageUrl from "@/hooks/useCreatePageUrl";

export default function Pagination({
  totalPages,
  className
}: IPaginationProps) {

  const { createPageURL, prevPage, nextPage } = useCreatePageUrl();

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
  )
}
