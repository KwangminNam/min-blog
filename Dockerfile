# syntax=docker/dockerfile:1.7
# 블로그(Next 16 standalone) 이미지. 빌드 컨텍스트는 모노레포 루트.
#   docker build -t kwangmin-blog .

ARG NODE_VERSION=22

FROM node:${NODE_VERSION}-bookworm-slim AS base
ENV NEXT_TELEMETRY_DISABLED=1 \
    HUSKY=0
WORKDIR /app
RUN corepack enable

# 1) 의존성: package.json 만 먼저 복사해 레이어 캐시를 살린다.
FROM base AS deps
COPY package.json yarn.lock .yarnrc.yml ./
COPY .yarn/releases ./.yarn/releases
COPY packages/web/package.json packages/web/
COPY packages/ui/package.json packages/ui/
COPY packages/util/package.json packages/util/
COPY packages/infra/package.json packages/infra/
# 인프라(CDK) 의존성은 이미지에 필요 없으므로 web 과 그 워크스페이스 의존성만 설치한다.
RUN yarn workspaces focus @kwangmins-blog/web

# 2) 빌드
FROM base AS builder
# NEXT_PUBLIC_* 는 빌드 타임에 번들에 인라인되므로 build-arg 로 받는다.
ARG NEXT_PUBLIC_GITHUB_COMMENT_REPO_ID \
    NEXT_PUBLIC_GITHUB_COMMENT_REPO \
    NEXT_PUBLIC_GITHUB_COMMENT_CATEGORY \
    NEXT_PUBLIC_GITHUB_COMMENT_CATEGORY_ID \
    NEXT_PUBLIC_GTM_ID \
    NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT
ENV NEXT_PUBLIC_GITHUB_COMMENT_REPO_ID=$NEXT_PUBLIC_GITHUB_COMMENT_REPO_ID \
    NEXT_PUBLIC_GITHUB_COMMENT_REPO=$NEXT_PUBLIC_GITHUB_COMMENT_REPO \
    NEXT_PUBLIC_GITHUB_COMMENT_CATEGORY=$NEXT_PUBLIC_GITHUB_COMMENT_CATEGORY \
    NEXT_PUBLIC_GITHUB_COMMENT_CATEGORY_ID=$NEXT_PUBLIC_GITHUB_COMMENT_CATEGORY_ID \
    NEXT_PUBLIC_GTM_ID=$NEXT_PUBLIC_GTM_ID \
    NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT=$NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT
# webpack 컴파일이 Node 기본 힙(약 2GB)을 넘으므로 한도를 올린다.
ENV NODE_OPTIONS=--max-old-space-size=4096
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# 빌드 중 DynamoDB 접근은 없다(조회수는 모두 PPR 동적 영역에서 요청 시 조회).
RUN yarn workspace @kwangmins-blog/web build

# 3) 런타임: standalone 산출물만 담는다.
FROM node:${NODE_VERSION}-bookworm-slim AS runner
ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1 \
    PORT=3000 \
    HOSTNAME=0.0.0.0
WORKDIR /app
RUN groupadd --system --gid 1001 nodejs && useradd --system --uid 1001 --gid nodejs nextjs

COPY --from=builder --chown=nextjs:nodejs /app/packages/web/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/packages/web/.next/static ./packages/web/.next/static
COPY --from=builder --chown=nextjs:nodejs /app/packages/web/public ./packages/web/public

USER nextjs
EXPOSE 3000
# OG 라우트가 process.cwd() 기준으로 public/fonts 를 읽으므로 web 디렉터리에서 실행한다.
WORKDIR /app/packages/web
HEALTHCHECK --interval=30s --timeout=5s --start-period=20s --retries=3 \
  CMD node -e "fetch('http://127.0.0.1:3000/api/health').then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))"
CMD ["node", "server.js"]
