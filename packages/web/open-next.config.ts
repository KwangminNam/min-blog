import type { OpenNextConfig } from "@opennextjs/aws/types/open-next.js";

const config = {
  default: {
    override: {
      // PPR의 동적 영역을 스트리밍하려면 필수다. 기본 래퍼는 응답을 버퍼링한다.
      wrapper: "aws-lambda-streaming",
    },
  },
} satisfies OpenNextConfig;

export default config;
