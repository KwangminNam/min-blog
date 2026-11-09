- monorepo with yarn berry v4(web/ui/util/infra)
- Next.js 16 (webpack build)
- React 19
- Design System with Vite
- PPR(Partial Prerendering) with Cache Components
  - 포스트 본문은 빌드 타임 정적 셸, 조회수만 요청 시 스트리밍
- Server Action with server components
- Velite for blog contents
- TypeScript
- Vanilla Extract
- Compound Components pattern

- AWS Lambda + CloudFront + S3 (SST v3, OpenNext)
- DynamoDB (AWS SDK v3, 서버에서 직접 접근)

- CI/CD with Github Actions (OIDC → SST deploy)

ECS → 서버리스 전환 절차는 [docs/serverless-migration.md](docs/serverless-migration.md) 참고.
