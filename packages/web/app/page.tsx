import { revalidateAllViewCount } from "@/action/action";
import { getAllViewCount } from "@/action/data";
import ListDataBoundary from "@/boundary/list-data-boundary";
import Intro from "@/components/Intro/intro";
import PostList from "@/components/PostList/post-list";

import {
  getAllPostWithViewCount,
  getTopMostViewedPosts,
} from "@/util/post-util";
import { Flex } from "@kwangmins-blog/ui";

export interface ViewCount {
  slug: string;
  viewCount: number;
}

export default async function Home() {
  const allViewCount = await getAllViewCount();
  const postMappingWithViewCount = getAllPostWithViewCount(allViewCount);
  const topMostViewedPosts = getTopMostViewedPosts(postMappingWithViewCount);

  revalidateAllViewCount();
  return (
    <Flex direction="column" gap="medium" css={{ width: "100%" }}>
      <Intro
        title="Most Viewed Post TOP 5"
        description="조회수가 높은 순으로 정렬되었습니다."
      />
      <ListDataBoundary dataLength={topMostViewedPosts.length}>
        <PostList posts={topMostViewedPosts} isSearchModal={false} />
      </ListDataBoundary>
    </Flex>
  );
}
