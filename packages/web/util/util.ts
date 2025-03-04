export function cn(...args: (string | undefined | null | false)[]) {
  return args.filter(Boolean).join(" ");
}
/**
 * @param {String} text
 * @return {String} 받은 param 을 소문자로 변경한뒤 첫글자를 대문자로 변경하여 반환합니다.
 */
export function capitalize(text: string) {
  const [first, ...rest] = text.toLowerCase();
  return first.toUpperCase() + rest.join('');
}

export function getImageUrl(imageUrl: string) {
  if (!imageUrl) return "/thumbnail2.png";
  return process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT + `/${imageUrl}`;
}

export function createConstant<T extends object>(obj: T) {
  return Object.freeze(obj) as Readonly<T> & {
    readonly [K in keyof T]: T[K];
  };
}
