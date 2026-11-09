/// <reference path="./.sst/platform/config.d.ts" />

const DOMAIN = "kwangmin-nam.com";
// 조회수 테이블은 SST v2 시절 만든 것을 이름으로 참조만 한다. 이 앱은 테이블을 만들거나 지우지 않는다.
const VIEW_COUNT_TABLE = "production-web-ViewCount-v2";

export default $config({
  app(input) {
    return {
      name: "min-blog",
      home: "aws",
      removal: input?.stage === "production" ? "retain" : "remove",
      providers: { aws: { region: "ap-northeast-2" } },
    };
  },
  async run() {
    const isProduction = $app.stage === "production";
    // SST 첫 배포에서 CloudFront KeyValueStore 가 비어 503 이 나는 경우가 있다(sst#6894, 재배포로 복구).
    // 본 도메인을 붙이기 전에 SKIP_DOMAIN=1 로 먼저 배포해 CloudFront 주소에서 확인한다.
    const attachDomain = isProduction && process.env.SKIP_DOMAIN !== "1";

    const site = new sst.aws.Nextjs("Site", {
      // SST 기본값(3.x)은 Next 16.4를 지원하지 않는다.
      openNextVersion: "4.1.13",
      domain: attachDomain
        ? { name: DOMAIN, redirects: [`www.${DOMAIN}`], dns: sst.aws.dns({ override: true }) }
        : undefined,
      environment: {
        NEXT_PUBLIC_GITHUB_COMMENT_REPO_ID: process.env.NEXT_PUBLIC_GITHUB_COMMENT_REPO_ID ?? "",
        NEXT_PUBLIC_GITHUB_COMMENT_REPO: process.env.NEXT_PUBLIC_GITHUB_COMMENT_REPO ?? "",
        NEXT_PUBLIC_GITHUB_COMMENT_CATEGORY: process.env.NEXT_PUBLIC_GITHUB_COMMENT_CATEGORY ?? "",
        NEXT_PUBLIC_GITHUB_COMMENT_CATEGORY_ID: process.env.NEXT_PUBLIC_GITHUB_COMMENT_CATEGORY_ID ?? "",
        NEXT_PUBLIC_GTM_ID: process.env.NEXT_PUBLIC_GTM_ID ?? "",
        NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT ?? "",
      },
      permissions: [
        {
          actions: ["dynamodb:GetItem", "dynamodb:UpdateItem", "dynamodb:Scan"],
          resources: [`arn:aws:dynamodb:ap-northeast-2:*:table/${VIEW_COUNT_TABLE}`],
        },
      ],
    });

    return { url: site.url };
  },
});
