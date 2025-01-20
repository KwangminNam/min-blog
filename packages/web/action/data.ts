"use server";

import API_PATH from "../constant/api";


export async function getViewCount(slug: string) {

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}${API_PATH.viewCount}/${slug}`, {
      next: {
        tags: ["view-count"],
        revalidate: 1,
      },
    });
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
      `${process.env.NEXT_PUBLIC_API_URL}${API_PATH.viewCount}`, {
      next: {
        tags: ["all-view-count"],
        revalidate: 1,
      },
    });
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