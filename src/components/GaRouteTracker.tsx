"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

/**
 * App Router의 클라이언트 네비게이션(예: EN ↔ KO 전환)은 gtag가 스스로 감지하지
 * 못하므로 경로가 바뀔 때마다 page_view 를 직접 보낸다. 최초 진입분은
 * Analytics의 gtag config 가 이미 보내므로 첫 렌더는 건너뛴다.
 */
export function GaRouteTracker() {
  const pathname = usePathname();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    window.gaPageView?.(pathname);
  }, [pathname]);

  return null;
}
