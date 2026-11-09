import { Duration, Stack, type StackProps, CfnOutput } from "aws-cdk-lib";
import * as iam from "aws-cdk-lib/aws-iam";
import type { Construct } from "constructs";

export interface GithubOidcStackProps extends StackProps {
  /** "owner/repo" */
  githubRepo: string;
  existingProviderArn?: string;
}

/**
 * GitHub Actions 가 장기 액세스 키 없이 배포하도록 OIDC 로 assume 하는 역할.
 * 최초 1회 로컬에서 `yarn workspace @kwangmins-blog/infra deploy:oidc` 로 배포한다.
 */
export class GithubOidcStack extends Stack {
  constructor(scope: Construct, id: string, props: GithubOidcStackProps) {
    super(scope, id, props);

    const provider = props.existingProviderArn
      ? iam.OpenIdConnectProvider.fromOpenIdConnectProviderArn(this, "Provider", props.existingProviderArn)
      : new iam.OpenIdConnectProvider(this, "Provider", {
          url: "https://token.actions.githubusercontent.com",
          clientIds: ["sts.amazonaws.com"],
        });

    const role = new iam.Role(this, "DeployRole", {
      roleName: "kwangmin-blog-github-deploy",
      maxSessionDuration: Duration.hours(1),
      assumedBy: new iam.OpenIdConnectPrincipal(provider, {
        StringEquals: {
          "token.actions.githubusercontent.com:aud": "sts.amazonaws.com",
          // main 브랜치에서 실행된 워크플로만 배포 가능.
          "token.actions.githubusercontent.com:sub": `repo:${props.githubRepo}:ref:refs/heads/main`,
        },
      }),
    });

    role.addToPolicy(
      new iam.PolicyStatement({
        actions: ["sts:AssumeRole"],
        resources: [`arn:aws:iam::${this.account}:role/cdk-*`],
      })
    );
    // SST 는 CDK 부트스트랩 역할 없이 직접 리소스를 만들므로 넓은 권한이 필요하다. main 브랜치에서만 assume 할 수 있다.
    role.addManagedPolicy(iam.ManagedPolicy.fromAwsManagedPolicyName("AdministratorAccess"));

    new CfnOutput(this, "DeployRoleArn", { value: role.roleArn });
  }
}
