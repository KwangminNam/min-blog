import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  try {
    console.log(req);
    return new Response("hi", { status: 200 });
  } catch {
    console.error("error");
  }
}
