export interface IPaginationProps {
  totalPages: number;
  currentPage: number;
  /** 1페이지 경로. 2페이지부터는 `${basePath}/page/${n}` */
  basePath: string;
  className?: string;
}
