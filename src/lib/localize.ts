import type { Localized, LocaleCode } from "@/content/schema";

const FALLBACK_LOCALE: LocaleCode = "en";

function isLocaleCode(value: string): value is LocaleCode {
  return value === "en" || value === "ko";
}

/** Reads a content record's localized field, falling back to English. */
export function localize(text: Localized, locale: string): string {
  const code = isLocaleCode(locale) ? locale : FALLBACK_LOCALE;
  return text[code] || text[FALLBACK_LOCALE];
}

/** Same, for name variants that may be language-neutral plain strings. */
export function localizeValue(
  value: string | Localized,
  locale: string
): string {
  return typeof value === "string" ? value : localize(value, locale);
}
