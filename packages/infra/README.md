# infra (AWS CDK)

GitHub Actions 가 장기 액세스 키 없이 배포하도록 OIDC 역할(`BlogGithubOidc`)만 관리한다. 사이트 자체는 `packages/web/sst.config.ts`(SST) 로 배포한다.

```bash
yarn workspace @kwangmins-blog/infra diff          # 변경 사항 미리보기
yarn workspace @kwangmins-blog/infra deploy:oidc   # 역할 배포
```

출력된 `DeployRoleArn` 은 GitHub 시크릿 `AWS_DEPLOY_ROLE_ARN` 에 등록한다.
