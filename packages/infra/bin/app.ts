import { App } from "aws-cdk-lib";
import { BlogServiceStack } from "../lib/blog-service-stack";
import { GithubOidcStack } from "../lib/github-oidc-stack";

const app = new App();

const env = {
  account: process.env.CDK_DEFAULT_ACCOUNT,
  region: "ap-northeast-2",
};

const ctx = (key: string) => app.node.tryGetContext(key) as string | undefined;

new BlogServiceStack(app, "BlogService", {
  env,
  hostedZoneName: ctx("hostedZoneName")!,
  // 전환 검증용: -c subdomain=ecs 로 배포하면 ecs.kwangmin-nam.com 에만 붙는다.
  // 생략하면 apex + www 로 배포된다(기존 SST 스택 제거 후).
  subdomain: ctx("subdomain"),
  viewCountTableName: ctx("viewCountTableName")!,
});

new GithubOidcStack(app, "BlogGithubOidc", {
  env,
  githubRepo: ctx("githubRepo")!,
  // 계정에 GitHub OIDC 공급자가 이미 있으면 ARN 을 넘겨 재사용한다.
  existingProviderArn: ctx("githubOidcProviderArn"),
});
