import { connection } from "next/server";
import { getViewCount } from "@/action/data";
import ViewCountClient from "./increase-view";
import * as styles from "./view-count.css";
import { shimmerBlock } from "@/styles/skeleton.css";

/**
 * 상세 페이지의 PPR 동적 영역.
 * 반드시 <Suspense> 안에서 렌더해야 하며, 나머지 본문은 빌드 타임 정적 셸로 즉시 전달된다.
 */
const ViewCount = async ({ slug }: { slug: string }) => {
  // 요청 시점 렌더링임을 명시한다. 이 지점부터 아래는 프리렌더에서 제외된다.
  await connection();
  const initialViews = await getViewCount(slug);

  return (
    <span className={styles.revealed}>
      <ViewCountClient slug={slug} initialViews={initialViews} />
    </span>
  );
};

/**
 * 정적 셸에 포함되는 폴백. 실제 값과 같은 자리를 차지해 레이아웃 이동을 막고,
 * 값이 스트리밍되기 전까지 shimmer 스켈레톤을 보여 준다.
 */
export const ViewCountFallback = ({ size = "detail" }: { size?: "detail" | "list" }) => (
  <span className={styles.skeleton[size]} role="status" aria-busy="true" aria-label="조회수 불러오는 중">
    <span aria-hidden="true">조회수:</span>
    <span className={`${shimmerBlock} ${styles.bar}`} aria-hidden="true" />
  </span>
);

export default ViewCount;
