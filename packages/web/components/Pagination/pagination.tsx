"use client";
import { IPaginationProps } from "./pagination.interface";
import { Flex } from "@monorepo/ui";
import useCreatePageUrl from "@/hooks/useCreatePageUrl";
import PaginationButton from "./_components/pagination-button";

export default function Pagination({
  totalPages,
}: IPaginationProps) {

  const {  prevPage, nextPage } = useCreatePageUrl();

  return (
    <Flex justify="end" align="center" gap="small">
      {prevPage >= 1 ? (
        <PaginationButton targetPage={prevPage} direction="left" />
      ) : null}
      {Array.from({ length: totalPages }, (_, index) => index + 1).map(
        (page) => (
          <PaginationButton key={page} targetPage={page} buttonText={page} />
        )
      )}
      {nextPage <= totalPages ? (
        <PaginationButton targetPage={nextPage} direction="right" />
      ) : null}
    </Flex>
  )
}
