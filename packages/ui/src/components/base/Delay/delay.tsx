import React from "react";
import { delay } from "./delay.css";

interface IDelay {
  /** 이 시간(ms)이 지나야 children 이 보인다. 그 전에 Suspense 가 풀리면 끝내 보이지 않는다. */
  ms?: number;
  /** 감싸는 요소. 인라인 문맥(조회수 등)은 span, 블록 문맥(목록 스켈레톤 등)은 div. */
  as?: "span" | "div";
  children: React.ReactNode;
}

/**
 * suspensive 의 Delay 를 모티브로 한 지연 노출 래퍼. 주로 Suspense fallback 의 스켈레톤을 감싸
 * 빠른 응답에서 스켈레톤이 번쩍이는 것을 막는다.
 *
 * suspensive 는 JS 타이머로 지연하지만, 여기서는 PPR 정적 셸(빌드 타임 HTML)에 그대로 들어가도록
 * CSS animation-delay 로 지연한다. 그래서 서버 컴포넌트에서도 쓸 수 있고 render prop(isDelayed)은 없다.
 */
const Delay = ({ ms = 200, as: Component = "span", children }: IDelay) => (
  <Component className={delay[Component]} style={{ animationDelay: `${ms}ms` }}>
    {children}
  </Component>
);

export default Delay;
