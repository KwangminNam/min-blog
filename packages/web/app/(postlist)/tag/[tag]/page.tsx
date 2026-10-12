import { Suspense } from "react";
import { slug } from "github-slugger";
import { getAllViewCount } from "@/action/data";
import ListDataBoundary from "@/boundary/list-data-boundary";
import Pagination from "@/components/Pagination/pagination";
import PostList from "@/components/PostList/post-list";
import PostListSkeleton from "@/components/PostList/post-list-skeleton";
import { tag } from "@/components/Tag/tag.css";
import { POST_PER_PAGE } from "@kwangmins-blog/util";
import {
  getAllPostWithViewCount,
  getAllTags,
  getDisplayPosts,
  getPostsByTag,
} from "@/util/post-util";
import { Flex, Typography } from "@kwangmins-blog/ui";

// 태그별 정적 셸을 빌드 타임에 만든다. 목록 링크(Tag 컴포넌트)와 같은 slug 규칙을 쓴다.
export function generateStaticParams() {
  return Array.from(new Set(getAllTags().map((t) => slug(t)))).map((tag) => ({ tag }));
}

interface ITaggedPageProps {
  params: Promise<{ tag: string }>;
  searchParams: Promise<{ page?: string }>;
}

async function TaggedPostList({ params, searchParams }: ITaggedPageProps) {
  const [{ tag: tagName }, { page }] = await Promise.all([params, searchParams]);
  const postsByTag = getPostsByTag(tagName);
  const allViewCount = await getAllViewCount();
  const postMappingWithViewCount = getAllPostWithViewCount(allViewCount, postsByTag);
  const currentPage = Number(page) || 1;
  const displayPosts = getDisplayPosts(currentPage, postMappingWithViewCount);
  const totalPages = Math.ceil(postMappingWithViewCount.length / POST_PER_PAGE);

  return (
    <>
      <Typography variant="large">
        Selected Tag:
        <strong style={{ marginLeft: "10px" }} className={tag({ strong: true })}>
          {tagName}
        </strong>
      </Typography>
      <ListDataBoundary dataLength={displayPosts.length}>
        <PostList posts={displayPosts} isSearchModal={false} />
        <Flex justify="center" align="center">
          <Pagination totalPages={totalPages} currentPage={currentPage} />
        </Flex>
      </ListDataBoundary>
    </>
  );
}

export default function TaggedPage(props: ITaggedPageProps) {
  return (
    <Flex direction="column" gap="large">
      <Suspense fallback={<PostListSkeleton count={POST_PER_PAGE} />}>
        <TaggedPostList {...props} />
      </Suspense>
    </Flex>
  );
}
