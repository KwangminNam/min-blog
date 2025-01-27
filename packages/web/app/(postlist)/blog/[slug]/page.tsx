import { MDXContent } from "@/components/Mdx/mdx-components";
import { formatDate, getAllPosts, getPostBySlug } from "@/util/post-util";
import { Flex, Heading, Typography } from "@monorepo/ui";
import { Metadata } from "next";
import Comment from "@/components/Comment/comment";
import ViewCount from "@/components/ViewCount/view-count";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import Tags from "@/components/Tag/tags";
import PostNavigation from "@/components/PostNavigation/post-navigation";

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

  console.log("!@!@!@!@!@!@", post.thumbnail);
  ogSearchParams.set("title", post.title);

  const thumbnailUrl = `/api/og?${ogSearchParams.toString()}&thumbnail=${post.thumbnail}`;

  console.log(thumbnailUrl, "thubnial");

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
          url: thumbnailUrl,
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
      images: [thumbnailUrl]
    }
  };
}

console.log("OPEN");

export default async function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const post = await getPostBySlug(slug);

  if (!post || !post.published) {
    notFound();
  }

  return (
    <article className="article">
      <Heading level="h1" css={{ textAlign: "center" }}>
        {post.title}
      </Heading>
      <Flex gap="small" justify="center" direction="column" align="center">
        <Typography css={{ color: "#94a3b8" }} variant="small">
          {formatDate(post.date)}
        </Typography>
        <Suspense fallback={<div>Loading...</div>}>
          <ViewCount slug={slug} />
        </Suspense>
      </Flex>
      <MDXContent code={post.body as string} />
      <Flex gap="small" direction="column" wrap="wrap">
        <Typography variant="large">Tags</Typography>
        <Flex gap="small" direction="row" wrap="wrap">
          <Tags />
        </Flex>
      </Flex>
      <PostNavigation slug={slug} />
      <Comment />
    </article>
  );
}
