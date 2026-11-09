# ECS → 서버리스(SST v3 + OpenNext) 전환

조회수 테이블(`production-web-ViewCount-v2`)은 이름으로 참조만 하므로 어느 단계에서도 지워지지 않는다.

폴더 이름의 작은따옴표 때문에 `~/Downloads/kwangmin's-blog` 에서는 Next 빌드가 깨진다. 배포는 따옴표 없는 경로에서 실행한다.

## 1. 테스트 배포 (CloudFront 기본 주소, DNS 변경 없음)

```bash
NODE_OPTIONS=--max-old-space-size=4096 npx sst deploy --stage preview
```

출력된 URL 에서 아래를 확인한다.

- `curl -sI <URL>/blog/<slug>` 응답에 `x-nextjs-postponed: 1`
- 상세 페이지 조회수 표시, 새로고침 시 증가
- 목록 / 태그 / 댓글 / `/api/og` / `/_next/image`
- 조회수 스켈레톤이 먼저 보인 뒤 숫자로 바뀌는지

## 2. production 스테이지 선배포 (도메인 없이)

SST 첫 배포에서 CloudFront KeyValueStore 가 비어 503 이 나는 버그가 있다([sst#6894](https://github.com/anomalyco/sst/issues/6894)). 재배포하면 복구된다. 본 도메인이 바로 넘어가지 않도록 먼저 도메인 없이 배포한다.

```bash
SKIP_DOMAIN=1 NODE_OPTIONS=--max-old-space-size=4096 npx sst deploy --stage production
```

출력된 CloudFront 주소가 503 이면 같은 명령을 한 번 더 실행한다.

## 3. 본 도메인 전환 (CI)

`NEXT_PUBLIC_*` 값(댓글, GTM 등)은 GitHub 시크릿에만 있으므로 본 배포는 로컬이 아니라 CI 로 한다. 테스트 스테이지에서 댓글과 GTM 이 비어 있는 것은 정상이다.

```bash
# 2-1. 백업
aws dynamodb create-backup --table-name production-web-ViewCount-v2 \
  --backup-name pre-serverless-migration --region ap-northeast-2

# 2-2. 배포 역할에 SST 권한 추가
yarn workspace @kwangmins-blog/infra deploy:oidc
```

이후 브랜치를 main 에 머지하면 CI 가 `sst deploy --stage production` 을 실행하고, dns override 로 apex/www 레코드를 CloudFront 로 넘긴다.

ALB 는 아직 살아 있으므로 문제가 생기면 Route53 레코드를 ALB 로 되돌리면 된다.

## 4. ECS 제거

사이트가 정상인 것을 확인한 뒤 실행한다.

```bash
cd packages/infra && npx cdk destroy BlogService

# BlogService 가 apex/www 레코드를 함께 지웠는지 확인한다.
aws route53 list-resource-record-sets --hosted-zone-id <ZONE_ID> \
  --query "ResourceRecordSets[?Type=='A']"
```

레코드가 사라졌다면 `npx sst refresh --stage production` 후 `npx sst deploy --stage production` 으로 복구한다.

## 5. 정리

- 테스트 스테이지 제거: `npx sst remove --stage preview`
- 코드 정리: `Dockerfile`, `.dockerignore`, `BlogService` 스택, `/api/health`, `output: "standalone"` 주석

## 실제 전환 기록 (2026-11-09)

- 4단계 `cdk destroy BlogService` 가 예상대로 apex/www **A 레코드를 지웠다**(AAAA 는 남음). 사이트가 IPv4 로 수 분간 접속되지 않았다.
- `aws route53 change-resource-record-sets` 로 SST 가 만든 것과 같은 alias(CloudFront 호스티드 존 `Z2FDTNDATAQYW2`)를 UPSERT 해 복구했다.
- 같은 방식으로 다른 CDK 스택을 내릴 때는 레코드를 먼저 스택에서 떼거나, 삭제 직후 레코드를 확인한다.
