import Script from "next/script";
import { GA_MEASUREMENT_ID } from "@/ga.config";
import { GaRouteTracker } from "./GaRouteTracker";

/**
 * Google Analytics 4 — 5개 사이트 공통 규격 (다른 사이트의 analytics.js 와 같은 동작).
 *
 *  - 측정 ID(src/ga.config.ts)가 없거나 형식이 틀리면 아무 것도 렌더하지 않습니다.
 *  - file: / localhost 접속은 집계에서 제외합니다.
 *  - 이벤트는 window.gaEvent(name, params), 페이지 전환은 window.gaPageView(path).
 *    GA가 꺼져 있어도 두 함수는 존재하므로 호출부에 분기가 필요 없습니다.
 */
export function Analytics() {
  const id = GA_MEASUREMENT_ID;
  if (!/^G-[A-Z0-9]{6,}$/.test(id)) return null;

  return (
    <>
      <Script id="ga4-loader" strategy="afterInteractive">
        {`
          (function () {
            var id = ${JSON.stringify(id)};
            window.gaEvent = function (name, params) {
              if (window.gtag) window.gtag("event", name, params || {});
            };
            window.gaPageView = function (path) {
              if (!window.gtag) return;
              window.gtag("event", "page_view", {
                page_path: path || location.pathname + location.search,
                page_location: location.href,
                page_title: document.title,
              });
            };

            if (location.protocol === "file:" ||
                /^(localhost|127\.0\.0\.1|\[::1\])$/.test(location.hostname)) return;

            window.dataLayer = window.dataLayer || [];
            window.gtag = function () { window.dataLayer.push(arguments); };
            window.gtag("js", new Date());
            window.gtag("config", id);

            var s = document.createElement("script");
            s.async = true;
            s.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(id);
            document.head.appendChild(s);
          })();
        `}
      </Script>
      <GaRouteTracker />
    </>
  );
}
