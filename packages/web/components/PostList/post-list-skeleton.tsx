import { shimmerBlock } from "@/styles/skeleton.css";
import * as styles from "./post-list-skeleton.css";

// 아이템마다 줄 길이를 조금씩 달리해 실제 목록처럼 보이게 한다.
const LINE_WIDTHS = [
  ["22%", "68%", "86%"],
  ["18%", "54%", "78%"],
  ["25%", "72%", "64%"],
];

/** 홈(조회수 TOP) 목록의 PPR 폴백. 실제 아이템과 같은 치수의 shimmer 스켈레톤. */
const PostListSkeleton: React.FC<{ count?: number }> = ({ count = 5 }) => (
  <ul style={{ width: "100%" }} role="status" aria-busy="true" aria-label="포스트 목록 불러오는 중">
    {Array.from({ length: count }, (_, i) => {
      const widths = LINE_WIDTHS[i % LINE_WIDTHS.length];
      return (
        <li key={i} className={styles.item} aria-hidden="true">
          <span className={`${shimmerBlock} ${styles.thumbnail}`} />
          <span className={styles.lines}>
            {widths.map((width, j) => (
              <span
                key={j}
                className={`${shimmerBlock} ${styles.line}`}
                style={{ width, height: j === 1 ? 16 : 12 }}
              />
            ))}
          </span>
        </li>
      );
    })}
  </ul>
);

export default PostListSkeleton;
