import { posts } from "#site/content/blog";
import Tag from "@/components/Tag/tag";
import { getPostBySlug } from "@/util/util";
import { Flex, Heading } from "@monorepo/ui";

export default async function Page({ params }: { params: { slug: string[] } }) {
  const slug = params?.slug?.join("/");

  const post = await getPostBySlug(slug);
  return (
    <>
      <Heading level="h1">{post?.title}</Heading>
      <ul>
        <li>{post?.date}</li>
        <li>{post?.description}</li>
      </ul>
      <Flex>
        {post?.tags?.map((tag) => (
          <Tag tag={tag} key={tag} />
        ))}
      </Flex>
    </>
  );
}
