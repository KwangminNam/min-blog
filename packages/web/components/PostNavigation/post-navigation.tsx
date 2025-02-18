import { Flex } from "@kwangmins-blog/ui";

import PostNavigationItem from "./_components/post-navigation-item";
import { getAllPosts } from "@/util/post-util";

export default function PostNavigation({ slug }: { slug: string }) {
  const posts = getAllPosts();
  const currentIndex = posts.findIndex((p) => p.slugAsParams === slug);
  const prevPost = currentIndex > 0 ? posts[currentIndex - 1] : null;
  const nextPost =
    currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;

  return (
    <Flex
      justify="between"
      gap="medium"
      css={{
        marginTop: "4rem",
        borderTop: "1px solid $border"
      }}
    >
      {prevPost && (
        <PostNavigationItem
          title={prevPost.title}
          slugAsParams={prevPost.slugAsParams}
          text="이전 포스트"
        />
      )}
      {nextPost && (
        <PostNavigationItem
          title={nextPost.title}
          slugAsParams={nextPost.slugAsParams}
          text="다음 포스트"
        />
      )}
    </Flex>
  );
}
