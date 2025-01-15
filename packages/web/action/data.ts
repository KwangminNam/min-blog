import "server-only";
import API_PATH from "../constant/api";
export async function getViewCount(slug: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}${API_PATH.viewCount}/${slug}`
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
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}${API_PATH.viewCount}`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return 0;
  }
}

export async function postViewCount(slug: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}${API_PATH.viewCount}/${slug}`,
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