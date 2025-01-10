import dotenv from 'dotenv'
import { SSTConfig } from "sst";
import { NextjsSite, Table, Function, Api } from "sst/constructs";

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

      const table = new Table(stack, "ViewCount", {
        fields: {
          id: "string",
        },
        primaryIndex: { partitionKey: "id" },
      });

      const updateViewCountFunction = new Function(stack, "UpdateViewCountFunction", {
        handler: "lambda/handler.handler",
        environment: {
          TABLE_NAME: table.tableName,
        },
        permissions: ["dynamodb:PutItem"] // Add specific permissions
      });

      const getViewCountFunction = new Function(stack, "GetViewCountFunction", {
        handler: "lambda/handler.getViewCount",
        environment: {
          TABLE_NAME: table.tableName,
        },
        permissions: ["dynamodb:GetItem"] // Add specific permissions
      });
      updateViewCountFunction.attachPermissions([table]);
      getViewCountFunction.attachPermissions([table]);

      const api = new Api(stack, "Api", {
        routes: {
          "POST /view-count": updateViewCountFunction,
          "GET /view-count": getViewCountFunction,
        },
      });

      const { parsed: environment } = dotenv.config({ path });


      const site = new NextjsSite(stack, "site", {
        bind: [api],
        environment: {
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
        ApiEndpoint: api.url,
      });
    });
  },
} satisfies SSTConfig;

const envPathMap = new Map();

envPathMap.set('production', '.env.production');

