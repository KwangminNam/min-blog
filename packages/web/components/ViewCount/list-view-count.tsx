import { themeColor, Typography } from "@kwangmins-blog/ui";

/** 목록용 조회수. 이미 조회된 값을 표시만 하므로 서버/클라이언트 어디서든 렌더 가능하다. */
const ListViewCount: React.FC<{ viewCount?: number }> = ({ viewCount = 0 }) => (
  <Typography
    css={{ color: themeColor.color.secondaryFontColor }}
    variant="smallest"
  >
    조회수:{viewCount}
  </Typography>
);

export default ListViewCount;
