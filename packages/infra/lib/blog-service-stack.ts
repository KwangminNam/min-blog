import * as path from "node:path";
import { Duration, RemovalPolicy, Stack, type StackProps, CfnOutput } from "aws-cdk-lib";
import * as ec2 from "aws-cdk-lib/aws-ec2";
import * as ecs from "aws-cdk-lib/aws-ecs";
import * as ecsPatterns from "aws-cdk-lib/aws-ecs-patterns";
import * as elbv2 from "aws-cdk-lib/aws-elasticloadbalancingv2";
import * as acm from "aws-cdk-lib/aws-certificatemanager";
import * as route53 from "aws-cdk-lib/aws-route53";
import * as route53Targets from "aws-cdk-lib/aws-route53-targets";
import * as dynamodb from "aws-cdk-lib/aws-dynamodb";
import * as logs from "aws-cdk-lib/aws-logs";
import { Platform } from "aws-cdk-lib/aws-ecr-assets";
import type { Construct } from "constructs";

export interface BlogServiceStackProps extends StackProps {
  hostedZoneName: string;
  subdomain?: string;
  viewCountTableName: string;
}

// 빌드 타임에 번들로 인라인되는 공개 환경 변수. synth 시점의 process.env 에서 읽는다.
const PUBLIC_BUILD_ARGS = [
  "NEXT_PUBLIC_GITHUB_COMMENT_REPO_ID",
  "NEXT_PUBLIC_GITHUB_COMMENT_REPO",
  "NEXT_PUBLIC_GITHUB_COMMENT_CATEGORY",
  "NEXT_PUBLIC_GITHUB_COMMENT_CATEGORY_ID",
  "NEXT_PUBLIC_GTM_ID",
  "NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT",
] as const;

export class BlogServiceStack extends Stack {
  constructor(scope: Construct, id: string, props: BlogServiceStackProps) {
    super(scope, id, props);

    const { hostedZoneName, subdomain, viewCountTableName } = props;
    const primaryDomain = subdomain ? `${subdomain}.${hostedZoneName}` : hostedZoneName;
    const aliasDomains = subdomain ? [] : [`www.${hostedZoneName}`];

    const zone = route53.HostedZone.fromLookup(this, "Zone", { domainName: hostedZoneName });

    const certificate = new acm.Certificate(this, "Certificate", {
      domainName: primaryDomain,
      subjectAlternativeNames: aliasDomains,
      validation: acm.CertificateValidation.fromDns(zone),
    });

    // NAT Gateway(월 $35+)를 피하려고 퍼블릭 서브넷만 두고 태스크에 퍼블릭 IP를 준다.
    // 인바운드는 ALB 보안 그룹에서만 허용되므로 태스크가 직접 노출되지는 않는다.
    const vpc = new ec2.Vpc(this, "Vpc", {
      maxAzs: 2,
      natGateways: 0,
      subnetConfiguration: [{ name: "public", subnetType: ec2.SubnetType.PUBLIC, cidrMask: 24 }],
    });

    const cluster = new ecs.Cluster(this, "Cluster", { vpc });

    const logGroup = new logs.LogGroup(this, "Logs", {
      retention: logs.RetentionDays.ONE_MONTH,
      removalPolicy: RemovalPolicy.DESTROY,
    });

    const buildArgs = Object.fromEntries(
      PUBLIC_BUILD_ARGS.map((key) => [key, process.env[key] ?? ""])
    );

    const service = new ecsPatterns.ApplicationLoadBalancedFargateService(this, "Web", {
      cluster,
      cpu: 256,
      memoryLimitMiB: 512,
      desiredCount: 1,
      assignPublicIp: true,
      taskSubnets: { subnetType: ec2.SubnetType.PUBLIC },
      runtimePlatform: {
        cpuArchitecture: ecs.CpuArchitecture.X86_64,
        operatingSystemFamily: ecs.OperatingSystemFamily.LINUX,
      },
      taskImageOptions: {
        image: ecs.ContainerImage.fromAsset(path.resolve(__dirname, "../../.."), {
          file: "Dockerfile",
          platform: Platform.LINUX_AMD64,
          buildArgs,
        }),
        containerPort: 3000,
        environment: {
          AWS_REGION: this.region,
          VIEW_COUNT_TABLE_NAME: viewCountTableName,
        },
        logDriver: ecs.LogDrivers.awsLogs({ streamPrefix: "web", logGroup }),
      },
      protocol: elbv2.ApplicationProtocol.HTTPS,
      certificate,
      redirectHTTP: true,
      domainName: primaryDomain,
      domainZone: zone,
      // 배포 실패 시 이전 태스크 정의로 자동 롤백.
      circuitBreaker: { rollback: true },
      minHealthyPercent: 100,
      maxHealthyPercent: 200,
      healthCheckGracePeriod: Duration.seconds(30),
    });

    service.targetGroup.configureHealthCheck({
      path: "/api/health",
      healthyThresholdCount: 2,
      interval: Duration.seconds(15),
    });
    // 롤링 배포 시 기존 태스크를 빨리 내리도록 기본 300초에서 줄인다.
    service.targetGroup.setAttribute("deregistration_delay.timeout_seconds", "30");

    // 트래픽이 몰릴 때만 2개까지. 'use cache'는 태스크별 메모리라 목록 조회수가 태스크마다 최대 1분 다를 수 있다.
    const scaling = service.service.autoScaleTaskCount({ minCapacity: 1, maxCapacity: 2 });
    scaling.scaleOnCpuUtilization("Cpu", { targetUtilizationPercent: 70 });

    // 기존 SST 스택이 만든 조회수 테이블을 그대로 쓴다(데이터 보존). 이 스택은 테이블을 소유하지 않는다.
    const table = dynamodb.Table.fromTableName(this, "ViewCountTable", viewCountTableName);
    // 앱이 실제로 쓰는 작업만 허용한다(상세 조회 / 증가 / 목록 스캔).
    table.grant(
      service.taskDefinition.taskRole,
      "dynamodb:GetItem",
      "dynamodb:UpdateItem",
      "dynamodb:Scan"
    );

    for (const alias of aliasDomains) {
      new route53.ARecord(this, `Alias-${alias}`, {
        zone,
        recordName: alias,
        target: route53.RecordTarget.fromAlias(
          new route53Targets.LoadBalancerTarget(service.loadBalancer)
        ),
      });
    }

    new CfnOutput(this, "SiteUrl", { value: `https://${primaryDomain}` });
    new CfnOutput(this, "LoadBalancerDns", { value: service.loadBalancer.loadBalancerDnsName });
  }
}
