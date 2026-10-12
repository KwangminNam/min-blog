import { Suspense } from "react";
import { Flex } from "@kwangmins-blog/ui";
import TaggedPostList, { getTagSlugs } from "./tagged-post-list";

interface ITaggedPageProps {
  params: Promise<{ tag: string }>;
}

export function generateStaticParams() {
  return getTagSlugs().map((tag) => ({ tag }));
}

async function TagFirstPage({ params }: ITaggedPageProps) {
  const { tag } = await params;
  return <TaggedPostList tagParam={tag} currentPage={1} />;
}

export default function TaggedPage({ params }: ITaggedPageProps) {
  return (
    <Flex direction="column" gap="large">
      <Suspense fallback={null}>
        <TagFirstPage params={params} />
      </Suspense>
    </Flex>
  );
}
