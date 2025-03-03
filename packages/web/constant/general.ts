import { createConstant } from "@/util/util";

export const THEME = createConstant({
  dark: "dark",
  light: "light",
});

export const DEVICE_TYPE = createConstant({
  DESKTOP: 'DESKTOP' as const,
  TABLET: 'TABLET' as const,
  MOBILE: 'MOBILE' as const,
});

export const BREAKPOINTS = createConstant({
  DESKTOP: 1024,
  TABLET: 445,
});

export const REVALIDATE_TAG = createConstant({
  viewCount: "view-count",
  allViewCount: "all-view-count",
});


export const DYNAMODB_VIEW_COUNT_TABLE_NAME = "production-web-ViewCount";
export const TAG_PREFIX = "#";
export const POST_PER_PAGE = 5;
export const BLUR_DATA_URL =
  "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBAB  bWyZJf74GZgAAAABJRU5ErkJggg==";

export type TTheme = typeof THEME;