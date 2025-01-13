// import "server-only";
import { unstable_noStore as noStore } from "next/cache";

export async function getViewCount(slug: string) {
  try {
    const res = await fetch(
      `https://ubjqqlf4hg.execute-api.ap-northeast-2.amazonaws.com/view-count/${slug}`,
      {
        cache: 'no-store' // noStore() 대신 cache: 'no-store' 사용
      }
    );
    const data = await res.json();
    return data.viewCount;
  } catch (error) {
    console.error(error);
    return 0;
  }
}

export async function getAllViewCount() {
  try {
    const res = await fetch(`https://ubjqqlf4hg.execute-api.ap-northeast-2.amazonaws.com/view-count`);
    const data = await res.json();
    return data.viewCount;
  } catch (error) {
    console.error(error);
    return 0;
  }
}

export async function postViewCount(slug: string) {
  try {
    const res = await fetch(
      `https://ubjqqlf4hg.execute-api.ap-northeast-2.amazonaws.com/view-count/${slug}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ slug }),
      }
    );
    console.log("postViewCount", res);
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