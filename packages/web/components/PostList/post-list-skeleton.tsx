import { themeColor } from "@kwangmins-blog/ui";

/** 목록의 PPR 폴백. 정적 셸에 포함되어 데이터가 스트리밍될 때까지 자리를 잡아 둔다. */
const PostListSkeleton: React.FC<{ count?: number }> = ({ count = 5 }) => (
  <ul style={{ width: "100%" }} aria-busy="true" aria-label="포스트 목록 불러오는 중">
    {Array.from({ length: count }, (_, i) => (
      <li
        key={i}
        style={{
          height: 120,
          marginBottom: 16,
          borderRadius: 8,
          background: themeColor.color.borderColor,
          opacity: 0.4,
        }}
      />
    ))}
  </ul>
);

export default PostListSkeleton;
