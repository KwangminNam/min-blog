// ALB 타깃 그룹 / 컨테이너 헬스체크용. 외부 의존성(DynamoDB 등)은 확인하지 않는다.
export function GET() {
  return Response.json({ ok: true });
}
