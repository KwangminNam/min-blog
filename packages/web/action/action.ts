"use server"

import { revalidateTag } from "next/cache";
import { getAllViewCount, getViewCount, postViewCount } from "./data";
import { REVALIDATE_TAG } from "@/constant/general";

export async function postViewCountAction(slug: string) {
  if (process.env.NODE_ENV === "development") {
    return;
  }
  const res = await postViewCount(slug);
  return res;1
}

export async function getAllViewCountAction() {
  const res = await getAllViewCount();
  return res;
}

export async function getViewCountAction(slug: string) {
  const res = await getViewCount(slug);
  return res;
}

export async function revalidateViewCount() {
  revalidateTag(REVALIDATE_TAG.viewCount);
}

export async function revalidateAllViewCount() {
  revalidateTag(REVALIDATE_TAG.allViewCount);
}
