import { Typography } from "@kwangmins-blog/ui";

const TotalCount: React.FC<{
  totalCount: number;
}> = ({ totalCount }) => {
  return <Typography variant="smallest">총 {totalCount}건</Typography>;
};

export default TotalCount;
