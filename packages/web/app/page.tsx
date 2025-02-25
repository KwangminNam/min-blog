import { revalidateAllViewCount } from "@/action/action";
import { getAllViewCount } from "@/action/data";
import ListDataBoundary from "@/boundary/list-data-boundary";
import Intro from "@/components/Intro/intro";
import PostList from "@/components/PostList/post-list";
import SideBar from "@/components/SideBar/side-bar";
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
      <Intro title="Most Viewed Post" description="Most Viewed Post" />
      <ListDataBoundary dataLength={topMostViewedPosts.length}>
        <PostList
          posts={topMostViewedPosts}
          isSearchModal={false}
          isTopMostViewed
        />
      </ListDataBoundary>
    </Flex>
  );
}
