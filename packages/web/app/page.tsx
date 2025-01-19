import { getAllViewCount } from "@/action/data";
import ListDataBoundary from "@/boundary/ListDataBoundary";
import PostList from "@/components/PostList/post-list";
import SideBar from "@/components/SideBar/side-bar";
import { getAllPostWithViewCount } from "@/util/util";
import { Flex } from "@monorepo/ui";

export interface ViewCount {
  slug: string;
  viewCount: number;
}

export default async function Home() {
  const allViewCount = await getAllViewCount();
  const postMappingWithViewCount = getAllPostWithViewCount(allViewCount);

  console.log(postMappingWithViewCount, "postMappingWithViewCount");
  return (
    <Flex gap="medium">
      <Flex css={{ width: "70%" }}>
        <ListDataBoundary dataLength={postMappingWithViewCount.length}>
          <PostList posts={postMappingWithViewCount} isSearchModal={false} />
        </ListDataBoundary>
      </Flex>
      <SideBar />
    </Flex>
  );
}
