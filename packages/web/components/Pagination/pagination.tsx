"use client";
import { IPaginationProps } from "./pagination.interface";
import Link from "next/link";
import { Button, Flex } from "@monorepo/ui";
import useCreatePageUrl from "@/hooks/useCreatePageUrl";

export default function Pagination({
  totalPages,
}: IPaginationProps) {

  const { createPageURL, prevPage, nextPage } = useCreatePageUrl();

  return (
    <Flex justify="end" align="center" gap="small">
      {prevPage >= 1 ? (
        <Link href={createPageURL(prevPage)}>
          <Button size="small">Previous</Button>
        </Link>
      ) : null}
      {Array.from({ length: totalPages }, (_, index) => index + 1).map(
        (page) => (
          <Link href={createPageURL(page)} key={page}>
            <Button size="small">{page}</Button>
          </Link>
        )
      )}
      {nextPage <= totalPages ? (
        <Link href={createPageURL(nextPage)}>
          <Button size="small">Next</Button>
        </Link>
      ) : null}
    </Flex>
  )
}
