import { Suspense } from "react";
import { connection } from "next/server";
import { getAllViewCount } from "@/action/data";
import ListDataBoundary from "@/boundary/list-data-boundary";
import Intro from "@/components/Intro/intro";
import PostList from "@/components/PostList/post-list";
import PostListSkeleton from "@/components/PostList/post-list-skeleton";
import { POST_PER_PAGE } from "@kwangmins-blog/util";
import {
  getAllPostWithViewCount,
  getTopMostViewedPosts,
} from "@/util/post-util";
import { Flex } from "@kwangmins-blog/ui";

/** 조회수 기준 정렬이 필요한 동적 영역. 데이터는 'use cache'로 1분 단위 런타임 캐시된다. */
async function TopViewedPosts() {
  await connection();
  const allViewCount = await getAllViewCount();
  const topMostViewedPosts = getTopMostViewedPosts(
    getAllPostWithViewCount(allViewCount)
  );

  return (
    <ListDataBoundary dataLength={topMostViewedPosts.length}>
      <PostList posts={topMostViewedPosts} isSearchModal={false} />
    </ListDataBoundary>
  );
}

export default function Home() {
  return (
    <Flex direction="column" gap="medium" css={{ width: "100%" }}>
      <Intro
        title={`Most Viewed Post TOP ${POST_PER_PAGE}`}
        description={`조회수가 높은 순으로 정렬된 ${POST_PER_PAGE}개의 포스트 입니다.`}
      />
      <Suspense fallback={<PostListSkeleton count={POST_PER_PAGE} />}>
        <TopViewedPosts />
      </Suspense>
    </Flex>
  );
}
