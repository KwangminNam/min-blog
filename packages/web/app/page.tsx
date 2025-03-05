import { revalidateAllViewCount } from "@/action/action";
import { getAllViewCount } from "@/action/data";
import ListDataBoundary from "@/boundary/list-data-boundary";
import Intro from "@/components/Intro/intro";
import PostList from "@/components/PostList/post-list";
import { POST_PER_PAGE } from "@kwangmins-blog/util";

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
        title={`Most Viewed Post TOP ${POST_PER_PAGE}`}
        description={`조회수가 높은 순으로 정렬된 ${POST_PER_PAGE}개의 포스트 입니다.`}
      />
      <ListDataBoundary dataLength={topMostViewedPosts.length}>
        <PostList posts={topMostViewedPosts} isSearchModal={false} />
      </ListDataBoundary>
    </Flex>
  );
}
