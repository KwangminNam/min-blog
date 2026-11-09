"use client";

import React from "react";
import useIsClient from "./use-is-client";

interface IClientOnly {
  /** 서버 렌더와 하이드레이션 중에 대신 보여 줄 내용 */
  fallback?: React.ReactNode;
  children: React.ReactNode;
}

/** suspensive 의 ClientOnly 를 모티브로 한 래퍼. children 은 클라이언트에서만 렌더한다. */
const ClientOnly = ({ fallback = null, children }: IClientOnly) =>
  useIsClient() ? <>{children}</> : <>{fallback}</>;

export default ClientOnly;
