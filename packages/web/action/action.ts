"use server";

import { getPostBySlug } from "@/util/post-util";
import { incrementViewCount } from "./data";

/**
 * 상세 페이지 진입 시 클라이언트에서 한 번 호출한다.
 * 존재하는 포스트 slug만 허용해 임의 키로 테이블이 오염되는 것을 막는다.
 */
export async function postViewCountAction(slug: string) {
  if (process.env.NODE_ENV === "development") {
    return null;
  }
  if (!getPostBySlug(slug)) {
    return null;
  }
  const viewCount = await incrementViewCount(slug);
  return viewCount;
}
