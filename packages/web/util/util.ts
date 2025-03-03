export function cn(...args: (string | undefined | null | false)[]) {
  return args.filter(Boolean).join(" ");
}

export function getImageUrl(imageUrl: string) {
  if (!imageUrl) return "/thumbnail2.png";
  return process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT + `/${imageUrl}`;
}
