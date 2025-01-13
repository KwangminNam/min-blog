import { unstable_noStore as noStore } from "next/cache";

async function postViewCount(pageId: string) {
  try {
    const res = await fetch(
      `https://ubjqqlf4hg.execute-api.ap-northeast-2.amazonaws.com/view-count/${pageId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ slug: pageId }),
      }
    );
    if (!res.ok) {
      throw new Error("Failed to post view count");
    }

    const data = await res.json();
    return data.viewCount;
  } catch (error) {
    console.error("Error posting view count:", error);
    return null;
  }
}

async function fetchViewCount(pageId: string) {
  const res = await fetch(
    `https://ubjqqlf4hg.execute-api.ap-northeast-2.amazonaws.com/view-count/${pageId}`,
    {
      next: {
        revalidate: 10,
      },
    }
  );
  const data = await res.json();
  return data.viewCount;
}

const ViewCount: React.FC<{ slug: string }> = async ({ slug }) => {
  await postViewCount(slug);
  const views = await fetchViewCount(slug);
  return <div>ViewCount: {views}</div>;
};

export default ViewCount;
