// import { PostItem } from "@monorepo/ui";
import Tag from "@/components/Tag/tag";
import { getAllTags, getPostsByTag } from "@/util/util";

import { Flex, PostItem } from "@monorepo/ui";
import Link from "next/link";
export default async function TaggedPage({
  params,
}: {
  params: { tag: string };
}) {
  const postsByTag = getPostsByTag(params.tag);

  return (
    <>
      <ul>
        <PostItem>
          <Link href="/">
            <PostItem.Heading>heading</PostItem.Heading>
            <Flex direction="column" gap="medium">
              <PostItem.Content>content</PostItem.Content>
              <PostItem.Content>content</PostItem.Content>
            </Flex>
          </Link>
          <Flex gap="medium">
            {["tag1", "tag2", "tag3"]?.map((tag) => (
              <Tag key={tag} tag={tag} />
            ))}
          </Flex>
        </PostItem>
      </ul>
    </>
  );
}
