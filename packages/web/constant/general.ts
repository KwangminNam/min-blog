export const THEME = Object.freeze({
  dark: "dark",
  light: "light",
} as const);

export const REVALIDATE_TAG = Object.freeze({
  viewCount: "view-count",
  allViewCount: "all-view-count",
} as const);

export const DYNAMODB_VIEW_COUNT_TABLE_NAME = "production-web-ViewCount";
export const TAG_PREFIX = "#";
export const POST_PER_PAGE = 5;
export const BLUR_DATA_URL =
  "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBAB  bWyZJf74GZgAAAABJRU5ErkJggg==";

export type TTheme = typeof THEME;