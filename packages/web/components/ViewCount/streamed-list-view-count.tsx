import { Suspense } from "react";
import { connection } from "next/server";
import { getViewCountMap } from "@/action/data";
import ListViewCount from "./list-view-count";
import { ViewCountFallback } from "./view-count";
import * as styles from "./view-count.css";

async function ListViewCountValue({ slug }: { slug: string }) {
  // 요청 시점 렌더링. 빌드 타임 프리렌더에서는 폴백(스켈레톤)만 셸에 들어간다.
  await connection();
  const viewCountMap = await getViewCountMap();

  return (
    <span className={styles.revealed}>
      <ListViewCount viewCount={viewCountMap.get(slug) ?? 0} />
    </span>
  );
}

/**
 * 목록 아이템의 조회수 자리만 PPR 동적 영역으로 만든다.
 * 제목/설명/썸네일 등 나머지 아이템 내용은 정적 셸에 그대로 포함된다.
 */
const StreamedListViewCount = ({ slug }: { slug: string }) => (
  <Suspense fallback={<ViewCountFallback size="list" />}>
    <ListViewCountValue slug={slug} />
  </Suspense>
);

export default StreamedListViewCount;
