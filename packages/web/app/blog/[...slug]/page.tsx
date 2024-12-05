import { posts } from "#site/content/blog";
import { MDXContent } from "@/components/Mdx/mdx-components";

import Tag from "@/components/Tag/tag";
import { getPostBySlug } from "@/util/util";
import { Flex, Heading } from "@monorepo/ui";

export default async function Page({ params }: { params: { slug: string[] } }) {
  const slug = params?.slug?.join("/");

  const post = await getPostBySlug(slug);

  return (
    <article>
      <Heading level="h1">{post?.title}</Heading>

      <MDXContent code={post?.body as string} />
      <Flex>
        {post?.tags?.map((tag) => (
          <Tag tag={tag} key={tag} />
        ))}
      </Flex>
    </article>
  );
}
