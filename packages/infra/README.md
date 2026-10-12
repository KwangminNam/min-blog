# infra (AWS CDK)

블로그를 ECS Fargate 로 배포하는 CDK 앱.

| 스택 | 내용 |
|---|---|
| `BlogService` | VPC(퍼블릭 서브넷 2개, NAT 없음), ECS 클러스터, Fargate 서비스(0.25 vCPU / 0.5 GB, 1~2 태스크), HTTPS ALB, ACM 인증서, Route53 레코드, 로그 그룹 |
| `BlogGithubOidc` | GitHub Actions 가 장기 키 없이 배포하기 위한 OIDC 역할 |

조회수 DynamoDB 테이블(`production-web-ViewCount-v2`)은 기존 SST 스택이 만든 것을 **이름으로 참조만** 한다. 이 앱은 테이블을 만들거나 지우지 않는다.

## 명령

루트에서:

```bash
yarn deploy                                        # BlogService 배포 (Docker 필요)
yarn workspace @kwangmins-blog/infra diff          # 변경 사항 미리보기
yarn workspace @kwangmins-blog/infra deploy -c subdomain=ecs   # ecs.kwangmin-nam.com 으로만 배포
yarn workspace @kwangmins-blog/infra deploy:oidc   # OIDC 역할 (최초 1회)
```

`NEXT_PUBLIC_*` 값은 이미지 빌드 시 번들에 들어가므로, 로컬 배포 전에 셸에 export 해 둔다(`packages/web/.env.production` 의 값).

## SST → ECS 전환 절차

기존 SST 스택이 `kwangmin-nam.com` / `www` 레코드를 소유하고 있어서, 같은 이름으로 바로 배포하면 CloudFormation 이 실패한다. 서브도메인으로 먼저 검증한 뒤 넘어간다.

1. **테이블 백업.** 콘솔 또는 CLI 로 온디맨드 백업을 만든다.
   ```bash
   aws dynamodb create-backup --table-name production-web-ViewCount-v2 \
     --backup-name pre-ecs-migration --region ap-northeast-2
   ```
2. **CDK 부트스트랩 확인.** SST v2 가 이미 해 두었을 가능성이 높다. 없으면 실행한다.
   ```bash
   npx cdk bootstrap aws://<ACCOUNT_ID>/ap-northeast-2
   ```
3. **서브도메인으로 검증 배포.**
   ```bash
   yarn workspace @kwangmins-blog/infra deploy -c subdomain=ecs
   ```
   `https://ecs.kwangmin-nam.com` 에서 상세 페이지 조회수 증가, 목록, 댓글, OG 이미지를 확인한다. 첫 synth 때 생기는 `packages/infra/cdk.context.json` 은 커밋한다.
4. **SST 스택 제거.** main 브랜치(SST 코드가 남아 있는 곳)에서 실행한다. 조회수 테이블이 함께 지워지지 않는지 먼저 확인한다.
   ```bash
   # 테이블의 삭제 정책 확인. Retain 이 아니면 4번을 진행하기 전에 콘솔에서 삭제 보호를 켠다.
   aws dynamodb update-table --table-name production-web-ViewCount-v2 \
     --deletion-protection-enabled --region ap-northeast-2
   cd packages/web && npx sst remove --stage production
   ```
5. **본 도메인으로 배포.** 서브도메인 스택은 그대로 업데이트되며 apex/www 레코드가 생긴다.
   ```bash
   yarn deploy
   ```
6. **CI 전환.** `deploy:oidc` 로 역할을 만들고 출력된 `DeployRoleArn` 을 GitHub 시크릿 `AWS_DEPLOY_ROLE_ARN` 에 등록한다. 기존 `AWS_ACCESS_KEY_ID`/`AWS_SECRET_ACCESS_KEY` 시크릿과 IAM 사용자 키는 삭제한다. 이후 main 에 머지하면 GitHub Actions 가 배포한다.

4~5 사이에는 사이트가 잠시 내려간다(수 분). 무중단이 필요하면 5번 전에 Route53 레코드를 수동으로 ALB 로 바꾸는 방식으로 조정한다.

## 알려진 제약

- **목록 조회수 캐시는 태스크별 메모리.** 태스크가 2개로 늘면 홈/목록의 조회수가 태스크마다 최대 1분 다를 수 있다. 문제가 되면 Redis 기반 `cacheHandlers` 를 붙인다.
- **CloudFront 없음.** ALB 가 직접 서빙한다. 정적 에셋 엣지 캐싱이나 WAF 가 필요하면 앞단에 CloudFront 를 추가한다(인증서는 us-east-1 필요).
- **없는 포스트 URL 은 404 화면이지만 HTTP 200.** PPR 이 정적 셸을 먼저 보내기 때문이다. `noindex` 메타는 붙으므로 검색 노출에는 영향이 없다.
