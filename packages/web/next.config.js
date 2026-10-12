const path = require("path");
const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");
const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // ECS(Docker) 배포용: 실행에 필요한 파일만 .next/standalone 으로 추려낸다.
  output: "standalone",
  // 모노레포 루트 기준으로 워크스페이스 패키지까지 트레이싱한다.
  outputFileTracingRoot: path.join(__dirname, "../../"),
  // Next 16의 PPR. 정적 셸은 빌드 타임에, Suspense 안의 동적 영역은 요청 시 스트리밍된다.
  cacheComponents: true,
  images:{
    remotePatterns:[
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
        
      }
    ]
  },
  transpilePackages: ["@kwangmins-blog/ui"],
  // 목록 페이지네이션을 쿼리(?page=2)에서 경로(/page/2)로 옮겼다. 기존 링크/색인 주소를 보존한다.
  async redirects() {
    const page = [{ type: "query", key: "page", value: "(?<page>\\d+)" }];
    return [
      { source: "/blog", has: page, destination: "/blog/page/:page", permanent: true },
      { source: "/tag/:tag", has: page, destination: "/tag/:tag/page/:page", permanent: true },
    ];
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(new VeliteWebpackPlugin());
    config.resolve.extensionAlias = {
      ".js": [".ts", ".tsx", ".js", ".jsx"],
      ".mjs": [".mts", ".mjs"]
    };

    return config;
  }
};

class VeliteWebpackPlugin {
  static started = false;
  constructor(/** @type {import('velite').Options} */ options = {}) {
    this.options = options;
  }
  apply(/** @type {import('webpack').Compiler} */ compiler) {
    // executed three times in nextjs !!!
    // twice for the server (nodejs / edge runtime) and once for the client
    compiler.hooks.beforeCompile.tapPromise("VeliteWebpackPlugin", async () => {
      if (VeliteWebpackPlugin.started) return;
      VeliteWebpackPlugin.started = true;
      const dev = compiler.options.mode === "development";
      this.options.watch = this.options.watch ?? dev;
      this.options.clean = this.options.clean ?? !dev;
      const { build } = await import("velite");
      await build(this.options); // start velite
    });
  }
}

module.exports = withVanillaExtract(nextConfig);
