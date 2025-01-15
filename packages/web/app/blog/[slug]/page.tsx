import { MDXContent } from "@/components/Mdx/mdx-components";

import Tag from "@/components/Tag/tag";
import { getAllPosts, getPostBySlug } from "@/util/util";
import { Flex, Heading } from "@monorepo/ui";
import { Metadata } from "next";
import Comment from "@/components/Comment/comment";
import { Api } from "sst/node/api";
import ViewCount from "@/components/ViewCount/view-count";
import dynamic from "next/dynamic";
import { Suspense } from "react";

export async function generateStaticParams() {
  let posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slugAsParams
  }));
}

export async function generateMetadata({
  params
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const slug = params.slug;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {};
  }

  const ogSearchParams = new URLSearchParams();
  ogSearchParams.set("title", post.title);

  return {
    title: post.title,
    description: post.description,
    authors: { name: "kwangmin" },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: post.slug,
      images: [
        {
          url: `/api/og?${ogSearchParams.toString()}`,
          width: 1200,
          height: 630,
          alt: post.title
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [`/api/og?${ogSearchParams.toString()}`]
    }
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const post = await getPostBySlug(slug);

  return (
    <article>
      <Heading level="h1">{post?.title}</Heading>
      <ViewCount slug={slug} />
      <MDXContent code={post?.body as string} />
      <Flex>
        {post?.tags?.map((tag) => (
          <Tag tag={tag} key={tag} />
        ))}
      </Flex>
      <Comment />
    </article>
  );
}
