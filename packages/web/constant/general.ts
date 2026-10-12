import { createConstant } from "@kwangmins-blog/util";

export const REVALIDATE_TAG = createConstant({
  allViewCount: "all-view-count",
});

// 기존 SST 스택이 만든 테이블을 그대로 재사용한다. ECS 태스크에는 VIEW_COUNT_TABLE_NAME 으로 주입된다.
const DYNAMODB_VIEW_COUNT_TABLE_VERSION = "v2";
export const DYNAMODB_VIEW_COUNT_TABLE_NAME =
  process.env.VIEW_COUNT_TABLE_NAME ??
  `production-web-ViewCount-${DYNAMODB_VIEW_COUNT_TABLE_VERSION}`;
