/** 경로 기반 페이지네이션 URL. 1페이지는 basePath 그대로 둬서 기존 대표 URL 을 유지한다. */
export const createPagePath = (basePath: string, page: number) =>
  page <= 1 ? basePath : `${basePath}/page/${page}`;
