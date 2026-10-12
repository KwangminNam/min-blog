import { Suspense } from "react";
import { Flex } from "@kwangmins-blog/ui";
import PagedPostList, { getPageParams, parsePage } from "@/components/PostList/paged-post-list";
import TotalCount from "@/components/TotalCount/total-count";
import { APP_PATH } from "@/constant/appPath";
import { posts } from "@/util/post-util";

interface IBlogPagedPageProps {
  params: Promise<{ page: string }>;
}

export function generateStaticParams() {
  return getPageParams(posts.length).map((page) => ({ page }));
}

/** 빌드 목록에 있는 페이지 번호는 params 가 빌드 타임에 확정되어 목록 전체가 정적 셸에 들어간다. */
async function BlogPagedList({ params }: IBlogPagedPageProps) {
  const { page } = await params;
  const currentPage = parsePage(page, posts.length);
  return <PagedPostList posts={posts} currentPage={currentPage} basePath={`/${APP_PATH.blog}`} />;
}

export default function BlogPagedPage({ params }: IBlogPagedPageProps) {
  return (
    <Flex direction="column" gap="medium" css={{ width: "100%" }}>
      <TotalCount totalCount={posts.length} />
      <Suspense fallback={null}>
        <BlogPagedList params={params} />
      </Suspense>
    </Flex>
  );
}
