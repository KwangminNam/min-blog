import dotenv from 'dotenv'
import { SSTConfig } from "sst";
import { NextjsSite } from "sst/constructs";

export default {
  config(_input) {
    return {
      name: "web",
      region: "ap-northeast-2",
    };
  },
  stacks(app) {
    app.stack(function Site({ stack }) {
      const { stage } = stack;
      const path = envPathMap.get(stage);

      const { parsed: environment } = dotenv.config({ path });
      console.log('Loaded environment:', environment);
      const site = new NextjsSite(stack, "site", {
        environment: {
          ...environment,
          NEXT_PUBLIC_GITHUB_COMMENT_REPO_ID: process.env.NEXT_PUBLIC_GITHUB_COMMENT_REPO_ID || '',
          NEXT_PUBLIC_GITHUB_COMMENT_REPO: process.env.NEXT_PUBLIC_GITHUB_COMMENT_REPO || '',
          NEXT_PUBLIC_GITHUB_COMMENT_CATEGORY: process.env.NEXT_PUBLIC_GITHUB_COMMENT_CATEGORY || '',
          NEXT_PUBLIC_GITHUB_COMMENT_CATEGORY_ID: process.env.NEXT_PUBLIC_GITHUB_COMMENT_CATEGORY_ID || '',
        },
        customDomain: {
          domainName: "kwangmin-nam.com",
          domainAlias: "www.kwangmin-nam.com",
          hostedZone: "kwangmin-nam.com",
        }
      });

      stack.addOutputs({
        SiteUrl: site.url,
      });
    });
  },
} satisfies SSTConfig;

const envPathMap = new Map();

envPathMap.set('production', '.env.production');

