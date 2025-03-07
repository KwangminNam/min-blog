import { MDXContent } from "@/components/Mdx/mdx-components";
import { formatDate, getAllPosts, getPostBySlug } from "@/util/post-util";
import { Flex, Heading, themeColor, Typography } from "@kwangmins-blog/ui";
import { Metadata } from "next";
import Comment from "@/components/Comment/comment";
import ViewCount from "@/components/ViewCount/view-count";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import PostNavigation from "@/components/PostNavigation/post-navigation";
import Tag from "@/components/Tag/tag";
import BackButton from "@/components/BackButton/back-button";
import { APP_PATH } from "@/constant/appPath";
import "@/styles/mdx.css";
import TableOfContents from "@/components/ContentsList/content-list";

// eslint-disable-next-line require-await
export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slugAsParams,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const slug = params.slug;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {};
  }

  const titleParam = encodeURIComponent(post.title);
  const thumbnailParam = encodeURIComponent(
    process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT + `/${post.thumbnail}`
  );
  
  const thumbnailUrl = `https://kwangmin-nam.com/api/og?title=${titleParam}&thumbnail=${thumbnailParam}`;

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
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [thumbnailUrl],
    },
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const post = await getPostBySlug(slug);

  if (!post || !post.published) {
    notFound();
  }

  return (
    <Flex gap="large" css={{ width: "100%" }}>
      <Flex direction="column" gap="medium" css={{ width: "100%" }}>
        <BackButton text="Back to Blog" href={`/${APP_PATH.blog}`} />
        <Flex justify="start" align="center" gap="small">
          <Typography
            css={{ color: themeColor.color.secondaryFontColor }}
            variant="small"
          >
            {formatDate(post.date)}
          </Typography>
          <Suspense fallback={<div>Loading...</div>}>
            <ViewCount slug={slug} />
          </Suspense>
        </Flex>
        <article className="article">
          <Heading level="h1">{post.title}</Heading>
          <div className="mdx-content">
            <MDXContent code={post.body as string} />
          </div>
          <Flex
            gap="small"
            direction="column"
            wrap="wrap"
            css={{
              padding: "40px 0",
              borderTop: `1px solid ${themeColor.color.borderColor}`,
            }}
          >
            <Typography variant="large">Tags</Typography>
            <Flex gap="small" direction="row" wrap="wrap">
              {post.tags?.map((tag) => (
                <Tag key={tag} tag={tag} />
              ))}
            </Flex>
          </Flex>
          <PostNavigation slug={slug} />
          <Comment />
        </article>
      </Flex>
      <TableOfContents />
    </Flex>
  );
}
