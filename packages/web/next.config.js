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
