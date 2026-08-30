// Analytics.tsx 의 인라인 로더가 window 에 붙이는 공통 GA 헬퍼.
// 5개 사이트가 같은 규격(gaEvent / gaPageView)을 씁니다.
// GA 측정 ID가 없으면 함수 자체가 없으므로 옵셔널 체이닝으로 호출합니다.
declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    gaEvent?: (name: string, params?: Record<string, unknown>) => void;
    gaPageView?: (path?: string) => void;
  }
}

export {};
