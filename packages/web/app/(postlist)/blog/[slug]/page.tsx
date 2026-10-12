import { MDXContent } from "@/components/Mdx/mdx-components";
import { formatDate, getAllPosts, getPostBySlug } from "@/util/post-util";
import { Flex, Heading, themeColor, Typography } from "@kwangmins-blog/ui";
import { Metadata } from "next";
import Comment from "@/components/Comment/comment";
import ViewCount, { ViewCountFallback } from "@/components/ViewCount/view-count";
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

interface IPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: IPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

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

/**
 * 포스트 본문. params를 여기서 await한다.
 * generateStaticParams에 있는 slug는 빌드 타임에 params가 확정되므로 이 컴포넌트 전체가 정적 셸에 포함되고,
 * 그 안의 조회수만 중첩 Suspense로 요청 시 스트리밍된다(PPR).
 */
async function PostDetail({ params }: IPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post || !post.published) {
    notFound();
  }

  return (
    <>
      <Flex justify="start" align="center" gap="small">
        <Typography
          css={{ color: themeColor.color.secondaryFontColor }}
          variant="small"
        >
          {formatDate(post.date)}
        </Typography>
        {/* PPR 동적 영역: 이 경계 안의 조회수만 요청 시 렌더된다. */}
        <Suspense fallback={<ViewCountFallback />}>
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
    </>
  );
}

export default function Page({ params }: IPageProps) {
  return (
    <Flex gap="large" css={{ width: "100%" }}>
      <Flex direction="column" gap="medium" css={{ width: "100%" }}>
        <BackButton text="Back to Blog" href={`/${APP_PATH.blog}`} />
        {/* 빌드 목록에 없는 slug로 들어온 경우에만 이 폴백이 보이고, 이후 notFound()로 처리된다. */}
        <Suspense fallback={null}>
          <PostDetail params={params} />
        </Suspense>
      </Flex>
      <TableOfContents />
    </Flex>
  );
}
