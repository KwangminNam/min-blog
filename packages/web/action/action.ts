"use server"

import { getAllViewCount, getViewCount, postViewCount } from "./data";

export async function  postViewCountAction(slug: string) {
  const res = await postViewCount(slug);
  return res;
}

export async function getAllViewCountAction() {
  const res = await getAllViewCount();
  return res;
}

export async function getViewCountAction(slug: string) {
  const res = await getViewCount(slug);
  return res;
}
