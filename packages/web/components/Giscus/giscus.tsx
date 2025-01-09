"use client";

import { useGiscusScript } from "./_hooks/useGiscusScript";

export default function Giscus() {
  const { ref, isLoading } = useGiscusScript();
  return (
    <section>
      {isLoading && <p>댓글 로딩 중...</p>} {/* 로딩 상태 표시 */}
      <div ref={ref} />
      <div>
        {JSON.stringify(process.env.NEXT_PUBLIC_APP_ENVIRONMENT ?? "test")}
      </div>
    </section>
  );
}
