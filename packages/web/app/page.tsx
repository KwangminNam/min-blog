import { getAllViewCount } from "@/action/data";
import PostList from "@/components/PostList/post-list";
import { getAllPosts } from "@/util/util";

interface ViewCount {
  slug: string;
  viewCount: number;
}

export default async function Home() {
  const posts = getAllPosts();
  const viewCount = await getAllViewCount();

  const postsWithViews = posts.map((post) => ({
    ...post,
    viewCount:
      viewCount?.viewCounts.find(
        (vc: ViewCount) => vc.slug === post.slugAsParams
      )?.viewCount ?? 0
  }));

  return (
    <>
      <PostList posts={postsWithViews} />
    </>
  );
}
