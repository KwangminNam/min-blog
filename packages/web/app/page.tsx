import { revalidateAllViewCount } from "@/action/action";
import { getAllViewCount } from "@/action/data";
import ListDataBoundary from "@/boundary/ListDataBoundary";
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
    <>
      <Typography variant="large">Most Viewed Post</Typography>
      <Flex gap="medium" justify="between" css={{ width: "100%" }}>
        <Flex css={{ width: "100%" }}>
          <ListDataBoundary dataLength={topMostViewedPosts.length}>
            <PostList
              posts={topMostViewedPosts}
              isSearchModal={false}
              isTopMostViewed
            />
          </ListDataBoundary>
        </Flex>
        <SideBar />
      </Flex>
    </>
  );
}
