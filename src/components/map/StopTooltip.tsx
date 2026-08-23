"use client";

import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import type { RouteRecord, RouteStop } from "@/content";
import { localize } from "@/lib/localize";

interface StopTooltipProps {
  route: RouteRecord;
  stop: RouteStop;
  point: { x: number; y: number };
  onClose: () => void;
}

/**
 * The mythic-landfall counterpart to CityTooltip — for a stop with no place
 * marker of its own (Ogygia, the isle of the Sirens), showing exactly the
 * name, note, and sources the sidebar already carries for it.
 */
export function StopTooltip({ route, stop, point, onClose }: StopTooltipProps) {
  const locale = useLocale();
  const t = useTranslations("tooltip");

  // Every non-place stop is validated to carry its own name — see validate.ts.
  const name = stop.name ? localize(stop.name, locale) : stop.id;

  return (
    // Same split as CityTooltip: a plain wrapper owns the fixed placement,
    // Framer Motion's own transform stays confined to the animated child.
    <div
      className="absolute z-20"
      style={{
        left: point.x,
        top: point.y,
        transform: "translate(-50%, calc(-100% - 20px))",
      }}
    >
      <motion.aside
        initial={{ opacity: 0, y: 10, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 6, scale: 0.97 }}
        transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
        className="glass-strong w-[min(16rem,calc(100vw-2rem))] rounded-2xl p-4"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label={t("close")}
          className="absolute right-2.5 top-2.5 rounded-full p-1 opacity-40 transition-opacity hover:opacity-80 sm:hidden"
        >
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        <p
          className="flex items-center gap-1.5 text-[9.5px] font-semibold uppercase tracking-[0.08em]"
          style={{ color: route.color }}
        >
          <span
            className="h-1.5 w-1.5 shrink-0 rounded-full"
            style={{ background: route.color }}
          />
          {localize(route.title, locale)}
        </p>

        <h2 className="font-display mt-1 text-base font-semibold leading-tight">
          {name}
        </h2>

        {stop.note && (
          <p
            className="mt-2 text-xs leading-relaxed"
            style={{ color: "var(--ink-soft)" }}
          >
            {localize(stop.note, locale)}
          </p>
        )}

        {stop.sources && stop.sources.length > 0 && (
          <p
            className="mt-2 text-[10px] italic tracking-wide"
            style={{ color: "var(--ink-faint)" }}
          >
            {stop.sources
              .map((source) => [source.work, source.locus].filter(Boolean).join(" "))
              .join(" · ")}
          </p>
        )}
      </motion.aside>
    </div>
  );
}
