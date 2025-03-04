"use client";
import React from "react";
import type { IPaginationProps } from "./pagination.interface";
import { Flex } from "@kwangmins-blog/ui";
import useCreatePageUrl from "@/hooks/useCreatePageUrl";
import PaginationButton from "./_components/pagination-button";

const Pagination: React.FC<IPaginationProps> = ({
  totalPages,
  currentPage,
}) => {
  const { prevPage, nextPage } = useCreatePageUrl();

  return (
    <Flex justify="end" align="center" gap="small">
      {prevPage >= 1 ? (
        <PaginationButton targetPage={prevPage} direction="left" />
      ) : null}
      {Array.from({ length: totalPages }, (_, index) => index + 1).map(
        (page) => (
          <PaginationButton
            isActive={page === currentPage}
            key={page}
            targetPage={page}
            buttonText={page}
          />
        )
      )}
      {nextPage <= totalPages ? (
        <PaginationButton targetPage={nextPage} direction="right" />
      ) : null}
    </Flex>
  );
};

export default Pagination;
