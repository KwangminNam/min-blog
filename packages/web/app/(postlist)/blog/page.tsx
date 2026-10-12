import { Flex } from "@kwangmins-blog/ui";
import PagedPostList from "@/components/PostList/paged-post-list";
import TotalCount from "@/components/TotalCount/total-count";
import { APP_PATH } from "@/constant/appPath";
import { posts } from "@/util/post-util";

/** 블로그 1페이지. 요청 시점 데이터는 각 아이템의 조회수 숫자뿐이다. */
export default function BlogPage() {
  return (
    <Flex direction="column" gap="medium" css={{ width: "100%" }}>
      <TotalCount totalCount={posts.length} />
      <PagedPostList posts={posts} currentPage={1} basePath={`/${APP_PATH.blog}`} />
    </Flex>
  );
}
