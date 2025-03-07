/* eslint-disable */

import { NextRequest } from "next/server";
import { ImageResponse } from "next/og";
import { SITE } from "@/constant/site";
import fs from "fs";
import path from "path";

const interBold = fs.readFileSync(
  path.resolve(process.cwd(), "public/fonts/Inter-Bold.ttf")
);

export async function GET(req: NextRequest) {
  try {
    const fontBold = await interBold;

    const { searchParams } = req.nextUrl;
    const title = searchParams.get("title");
    const thumbnail = searchParams.get("thumbnail");
    if (!title) {
      return new Response("No title or thumbnail provided", { status: 500 });
    }

    const heading =
      title.length > 140 ? `${title.substring(0, 140)}...` : title;

    return new ImageResponse(
      (
        <div tw="flex relative flex-col p-12 w-full h-full items-start text-black bg-white">
          <div tw="flex items-center justify-between w-full">
            <div tw="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                width="24"
                height="24"
              >
                <path d="M4 11a9 9 0 0 1 9 9" />
                <path d="M4 4a16 16 0 0 1 16 16" />
                <circle cx="5" cy="19" r="1" />
              </svg>
              <p tw="ml-2 font-bold text-5xl">Kwangmin's Frontend Blog</p>
            </div>
            <img
              src={thumbnail ?? ""}
              alt="thumbnail"
              width="350"
              height="350"
              style={{
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
          </div>
          <div tw="flex flex-col flex-1 py-10">
            <div tw="text-xl text-gray-500">BLOG POST</div>
            <div tw="flex text-[80px] font-bold text-[50px] max-w-[800px]">
              {heading}
            </div>
          </div>
          <div tw="flex items-center w-full justify-between">
            <div tw="flex text-xl">{SITE.route53}</div>
            <div tw="flex items-center text-xl">
              <div tw="flex ml-2">{SITE.url.github}</div>
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: "Inter",
            data: fontBold,
            style: "normal",
            weight: 700,
          },
        ],
      }
    );
  } catch (error) {
    console.error(error, "error");
    return new Response("Failed to generate image", { status: 500 });
  }
}
