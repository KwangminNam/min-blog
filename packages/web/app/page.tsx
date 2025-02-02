import { revalidateAllViewCount } from "@/action/action";
import { getAllViewCount } from "@/action/data";
import ListDataBoundary from "@/boundary/ListDataBoundary";
import Intro from "@/components/Intro/intro";
import PostList from "@/components/PostList/post-list";
import SideBar from "@/components/SideBar/side-bar";
import {
  getAllPostWithViewCount,
  getTopMostViewedPosts
} from "@/util/post-util";
import { Flex, Heading, Typography } from "@monorepo/ui";

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
    <Flex align="center" justify="center" css={{ width: "100%" }} direction="column">
      <Intro title="Most Viewed Post" description="Most Viewed Post" />
      <Flex gap="medium" justify="center" css={{ width: "100%" }}>
        <Flex css={{ width: "100%" }} justify="center">
          <ListDataBoundary dataLength={topMostViewedPosts.length}>
            <PostList
              posts={topMostViewedPosts}
              isSearchModal={false}
              isTopMostViewed
            />
          </ListDataBoundary>
        </Flex>
        {/* <SideBar /> */}
      </Flex>
    </Flex>
  );
}
