import { createConstant } from "@/util/util";

export const SITE = createConstant({
  title: "kwangminnam blog",
  description: "프론트엔드 개발자 남광민 입니다.",
  author: "남광민/KwangminNam",
  tel: "01038895389",
  email: "kwnagmindev@gmail.com",
  route53: "https://www.kwangmin-nam.com",
  url: {
    github: "https://github.com/kwangminnam",

  },
});


export type TSiteConfig = typeof SITE;