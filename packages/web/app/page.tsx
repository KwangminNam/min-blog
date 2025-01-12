import DarkModeBtn from "@/components/DarkModeButton/dark-mode-button";
import PostList from "@/components/PostList/post-list";
import { getAllPosts, getAllTags } from "@/util/util";

async function postAllViewCount() {
  try {
    const res = await fetch(
      `https://ubjqqlf4hg.execute-api.ap-northeast-2.amazonaws.com/view-count`
    );
    if (!res.ok) {
      throw new Error("Failed to post view count");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error posting view count:", error);
    return null;
  }
}

export default async function Home() {
  const posts = getAllPosts();
  const viewCount = await postAllViewCount();
  return (
    <>
      <PostList posts={posts} />
      <DarkModeBtn />
    </>
  );
}
