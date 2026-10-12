import React from "react";
import type { IPaginationProps } from "./pagination.interface";
import { Flex } from "@kwangmins-blog/ui";
import PaginationButton from "./_components/pagination-button";
import { createPagePath } from "./page-path";

/**
 * 쿼리(useSearchParams) 대신 경로로 페이지를 표현한다.
 * 요청 시점 데이터에 의존하지 않으므로 서버 컴포넌트로 렌더되어 정적 셸에 포함된다.
 */
const Pagination: React.FC<IPaginationProps> = ({
  totalPages,
  currentPage,
  basePath,
}) => {
  const prevPage = currentPage - 1;
  const nextPage = currentPage + 1;

  return (
    <Flex justify="end" align="center" gap="small">
      {prevPage >= 1 ? (
        <PaginationButton href={createPagePath(basePath, prevPage)} direction="left" />
      ) : null}
      {Array.from({ length: totalPages }, (_, index) => index + 1).map(
        (page) => (
          <PaginationButton
            isActive={page === currentPage}
            key={page}
            href={createPagePath(basePath, page)}
            buttonText={page}
          />
        )
      )}
      {nextPage <= totalPages ? (
        <PaginationButton href={createPagePath(basePath, nextPage)} direction="right" />
      ) : null}
    </Flex>
  );
};

export default Pagination;
