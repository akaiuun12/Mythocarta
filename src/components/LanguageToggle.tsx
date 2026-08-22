"use client";

import { useLocale } from "next-intl";
import { useTransition } from "react";
import { motion } from "framer-motion";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";

export function LanguageToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const switchTo = (next: Locale) => {
    if (next === locale) return;
    startTransition(() => {
      router.replace(pathname, { locale: next });
    });
  };

  return (
    <div
      className="glass-panel relative flex rounded-full p-1"
      role="group"
      aria-label="Language"
      style={{ opacity: isPending ? 0.6 : 1 }}
    >
      {routing.locales.map((code) => {
        const active = code === locale;
        return (
          <button
            key={code}
            type="button"
            onClick={() => switchTo(code)}
            className="relative rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider transition-colors"
            style={{ color: active ? "#fffdf7" : "var(--ink-soft)" }}
            aria-pressed={active}
          >
            {active && (
              <motion.span
                layoutId="locale-pill"
                className="absolute inset-0 rounded-full"
                style={{ background: "#2f4858" }}
                transition={{ type: "spring", stiffness: 400, damping: 32 }}
              />
            )}
            <span className="relative">{code}</span>
          </button>
        );
      })}
    </div>
  );
}
