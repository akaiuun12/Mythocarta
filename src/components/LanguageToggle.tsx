"use client";

import { useLocale, useTranslations } from "next-intl";
import { useEffect, useRef, useState, useTransition } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { ChevronIcon } from "@/components/icons";

const LOCALE_LABELS: Record<Locale, string> = {
  en: "English",
  ko: "한국어",
};

/**
 * A menu button, not a slider: clicking the current language opens a short
 * list of the others, rather than animating a pill back and forth between two
 * fixed slots — which stopped scaling the moment there were more than two.
 */
export function LanguageToggle() {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("header");
  const [isPending, startTransition] = useTransition();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const switchTo = (next: Locale) => {
    setOpen(false);
    if (next === locale) return;
    startTransition(() => {
      router.replace(pathname, { locale: next });
    });
  };

  return (
    <div
      ref={rootRef}
      className="relative"
      style={{ opacity: isPending ? 0.6 : 1 }}
    >
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t("language")}
        className="glass-panel flex items-center gap-1.5 rounded-full py-1.5 pl-3.5 pr-2.5 text-xs font-semibold uppercase tracking-wider transition-colors"
        style={{ color: "var(--ink)" }}
      >
        <span>{locale}</span>
        <ChevronIcon
          className="h-3 w-3 transition-transform duration-200"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            role="listbox"
            aria-label={t("language")}
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="glass-strong absolute right-0 top-[calc(100%+8px)] z-40 w-32 overflow-hidden rounded-xl p-1"
          >
            {routing.locales.map((code) => {
              const active = code === locale;
              return (
                <li key={code}>
                  <button
                    type="button"
                    role="option"
                    aria-selected={active}
                    onClick={() => switchTo(code)}
                    className="flex w-full items-center justify-between gap-2 rounded-lg px-2.5 py-1.5 text-left text-[13px] font-medium transition-colors hover:bg-white/50"
                    style={{
                      color: active ? "#fffdf7" : "var(--ink)",
                      background: active ? "#2f4858" : "transparent",
                    }}
                  >
                    <span>{LOCALE_LABELS[code]}</span>
                    <span className="text-[10px] uppercase tracking-wider opacity-70">
                      {code}
                    </span>
                  </button>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
