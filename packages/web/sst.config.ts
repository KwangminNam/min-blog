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
      const site = new NextjsSite(stack, "site", {
        environment,
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

