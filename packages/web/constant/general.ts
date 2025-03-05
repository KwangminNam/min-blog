import { createConstant } from "@kwangmins-blog/util";

export const REVALIDATE_TAG = createConstant({
  viewCount: "view-count",
  allViewCount: "all-view-count",
});


export const DYNAMODB_VIEW_COUNT_TABLE_NAME = "production-web-ViewCount";