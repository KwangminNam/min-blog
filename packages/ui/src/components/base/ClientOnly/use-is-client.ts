"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

/**
 * 서버 렌더와 하이드레이션 중에는 false, 그 이후와 클라이언트 내비게이션에서는 처음부터 true.
 * useEffect + useState 로 마운트를 기다리는 방식보다 렌더가 한 번 적다.
 */
const useIsClient = () =>
  useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );

export default useIsClient;
