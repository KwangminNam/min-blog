import { getAllViewCount } from "@/action/data";
import ListDataBoundary from "@/boundary/list-data-boundary";
import Pagination from "@/components/Pagination/pagination";
import PostList from "@/components/PostList/post-list";
import { tag } from "@/components/Tag/tag.css";
import { POST_PER_PAGE } from "@kwangmins-blog/util";
import {
  getAllPostWithViewCount,
  getDisplayPosts,
  getPostsByTag,
} from "@/util/post-util";
import { Flex, Typography } from "@kwangmins-blog/ui";
import { notFound } from "next/navigation";

export default async function TaggedPage({
  params,
  searchParams,
}: {
  params: { tag: string };
  searchParams: { page?: string };
}) {
  const postsByTag = getPostsByTag(params.tag);
  const allViewCount = await getAllViewCount();
  const postMappingWithViewCount = getAllPostWithViewCount(
    allViewCount,
    postsByTag
  );
  const currentPage = Number(searchParams.page) || 1;
  const displayPosts = getDisplayPosts(currentPage, postMappingWithViewCount);
  const totalPages = Math.ceil(postMappingWithViewCount.length / POST_PER_PAGE);
  if (!displayPosts) {
    notFound();
  }

  return (
    <Flex direction="column" gap="large">
      <Typography variant="large">
        Selected Tag: 
        <strong
          style={{
            marginLeft: "10px"
          }}
          className={tag({ strong: true })}
        >
          {params.tag}
        </strong>
      </Typography>
      <ListDataBoundary dataLength={displayPosts.length}>
        <PostList posts={displayPosts} isSearchModal={false} />
        <Flex justify="center" align="center">
          <Pagination totalPages={totalPages} currentPage={currentPage} />
        </Flex>
      </ListDataBoundary>
    </Flex>
  );
}
