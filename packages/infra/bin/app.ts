import { App } from "aws-cdk-lib";
import { GithubOidcStack } from "../lib/github-oidc-stack";

const app = new App();

const env = {
  account: process.env.CDK_DEFAULT_ACCOUNT,
  region: "ap-northeast-2",
};

const ctx = (key: string) => app.node.tryGetContext(key) as string | undefined;

new GithubOidcStack(app, "BlogGithubOidc", {
  env,
  githubRepo: ctx("githubRepo")!,
  // 계정에 GitHub OIDC 공급자가 이미 있으면 ARN 을 넘겨 재사용한다.
  existingProviderArn: ctx("githubOidcProviderArn"),
});
