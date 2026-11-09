import { createConstant } from "@kwangmins-blog/util";

export const REVALIDATE_TAG = createConstant({
  allViewCount: "all-view-count",
});

// SST v2 시절 만든 테이블을 그대로 재사용한다. 다른 테이블을 쓰려면 VIEW_COUNT_TABLE_NAME 으로 주입한다.
const DYNAMODB_VIEW_COUNT_TABLE_VERSION = "v2";
export const DYNAMODB_VIEW_COUNT_TABLE_NAME =
  process.env.VIEW_COUNT_TABLE_NAME ??
  `production-web-ViewCount-${DYNAMODB_VIEW_COUNT_TABLE_VERSION}`;
