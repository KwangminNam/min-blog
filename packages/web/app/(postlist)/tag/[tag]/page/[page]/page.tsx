import { Suspense } from "react";
import { Flex } from "@kwangmins-blog/ui";
import { getPageParams, parsePage } from "@/components/PostList/paged-post-list";
import { getPostsByTag } from "@/util/post-util";
import TaggedPostList, { getTagSlugs } from "../../tagged-post-list";

interface ITaggedPagedPageProps {
  params: Promise<{ tag: string; page: string }>;
}

export function generateStaticParams() {
  return getTagSlugs().flatMap((tag) =>
    getPageParams(getPostsByTag(tag).length).map((page) => ({ tag, page }))
  );
}

async function TagPagedList({ params }: ITaggedPagedPageProps) {
  const { tag, page } = await params;
  const currentPage = parsePage(page, getPostsByTag(tag).length);
  return <TaggedPostList tagParam={tag} currentPage={currentPage} />;
}

export default function TaggedPagedPage({ params }: ITaggedPagedPageProps) {
  return (
    <Flex direction="column" gap="large">
      <Suspense fallback={null}>
        <TagPagedList params={params} />
      </Suspense>
    </Flex>
  );
}
