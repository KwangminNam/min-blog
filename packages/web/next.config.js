const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");
const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*", // 모든 경로를 대상으로 함
        has: [
          {
            type: "host",
            value: "www.kwangmin-nam.com" // www 서브도메인인 경우
          }
        ],
        destination: "https://kwangmin-nam.com/:path*{?query}", // non-www 도메인으로 동일 경로 및 쿼리 파라미터 포함
        permanent: true // 301 영구 리다이렉트
      }
    ];
  },
  transpilePackages: ["@monorepo/ui"],
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
