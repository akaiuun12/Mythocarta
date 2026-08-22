import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "ko"],
  defaultLocale: "en",
  // Detects the visitor's preferred language (Accept-Language header /
  // previously stored cookie) and redirects to /ko when applicable.
  localeDetection: true,
});

export type Locale = (typeof routing.locales)[number];
