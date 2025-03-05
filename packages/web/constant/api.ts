import { createConstant } from "@kwangmins-blog/util";

const API_PATH = createConstant({
  viewCount: "/view-count",
} as const);

export default API_PATH;

