"use client";

import { useGiscusScript } from "./_hooks/useGiscusScript";

export default function Giscus() {
  const { ref, isLoading } = useGiscusScript();
  return (
    <section>
      {isLoading && <p>댓글 로딩 중...</p>}
      <div ref={ref} />
    </section>
  );
}
