import "server-only";

import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
  DynamoDBDocumentClient,
  GetCommand,
  ScanCommand,
  UpdateCommand,
  type ScanCommandOutput,
} from "@aws-sdk/lib-dynamodb";
import { cache } from "react";
import { cacheLife, cacheTag } from "next/cache";
import {
  DYNAMODB_VIEW_COUNT_TABLE_NAME,
  REVALIDATE_TAG,
} from "@/constant/general";

export interface ViewCount {
  slug: string;
  viewCount: number;
}

// 컨테이너는 장기 실행 프로세스라 클라이언트를 모듈 스코프에서 한 번만 만들어 커넥션을 재사용한다.
const client = DynamoDBDocumentClient.from(
  new DynamoDBClient({ region: process.env.AWS_REGION ?? "ap-northeast-2" })
);

const TableName = DYNAMODB_VIEW_COUNT_TABLE_NAME;

/** 상세 페이지용. 캐시하지 않는 실시간 조회라 PPR의 동적 영역(Suspense 내부)에서만 호출한다. */
export async function getViewCount(slug: string): Promise<number> {
  try {
    const { Item } = await client.send(
      new GetCommand({ TableName, Key: { id: slug } })
    );
    return Number(Item?.viewCount ?? 0);
  } catch (error) {
    console.error("[view-count] get failed", error);
    return 0;
  }
}

/**
 * 목록/홈용 전체 조회수. Scan 비용이 있어 'use cache'로 런타임 캐시하고 1분 단위로 갱신한다.
 * 페이지뷰마다 무효화하지 않으므로 목록 조회수는 최대 1분 정도 늦게 반영된다.
 */
export async function getAllViewCount(): Promise<ViewCount[]> {
  "use cache";
  cacheLife("minutes");
  cacheTag(REVALIDATE_TAG.allViewCount);

  try {
    const viewCounts: ViewCount[] = [];
    let ExclusiveStartKey: ScanCommandOutput["LastEvaluatedKey"];
    do {
      const page: ScanCommandOutput = await client.send(
        new ScanCommand({
          TableName,
          ProjectionExpression: "id, viewCount",
          ExclusiveStartKey,
        })
      );
      for (const item of page.Items ?? []) {
        viewCounts.push({
          slug: String(item.id),
          viewCount: Number(item.viewCount ?? 0),
        });
      }
      ExclusiveStartKey = page.LastEvaluatedKey;
    } while (ExclusiveStartKey);
    return viewCounts;
  } catch (error) {
    console.error("[view-count] scan failed", error);
    return [];
  }
}

export async function incrementViewCount(slug: string): Promise<number | null> {
  try {
    const { Attributes } = await client.send(
      new UpdateCommand({
        TableName,
        Key: { id: slug },
        UpdateExpression: "SET viewCount = if_not_exists(viewCount, :start) + :inc",
        ExpressionAttributeValues: { ":inc": 1, ":start": 0 },
        ReturnValues: "UPDATED_NEW",
      })
    );
    return Number(Attributes?.viewCount ?? 0);
  } catch (error) {
    console.error("[view-count] increment failed", error);
    return null;
  }
}

/**
 * slug → 조회수 Map. 목록의 각 아이템이 따로 호출해도 한 요청 안에서는 한 번만 계산되도록
 * React cache 로 요청 단위 중복을 제거한다('use cache' 는 요청 간 공유).
 */
export const getViewCountMap = cache(async (): Promise<Map<string, number>> => {
  const viewCounts = await getAllViewCount();
  return new Map(viewCounts.map(({ slug, viewCount }) => [slug, viewCount]));
});
