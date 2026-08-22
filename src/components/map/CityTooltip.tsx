"use client";

import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { FIGURE_BY_ID, type PlaceRecord } from "@/content";
import { localize, localizeValue } from "@/lib/localize";

interface CityTooltipProps {
  place: PlaceRecord;
  point: { x: number; y: number };
  onClose: () => void;
}

export function CityTooltip({ place, point, onClose }: CityTooltipProps) {
  const locale = useLocale();
  const t = useTranslations("tooltip");

  const ruler = place.rulerId ? FIGURE_BY_ID.get(place.rulerId) : undefined;

  // Alternate names are the point of the knowledge base — Sparta is also
  // Lacedaemon — so they are surfaced here rather than buried in the data.
  const alternates = (place.names.variants ?? []).filter(
    (variant) => variant.kind === "alternate"
  );
  const note = alternates.find((variant) => variant.note)?.note;

  return (
    <motion.aside
      initial={{ opacity: 0, y: 10, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 6, scale: 0.97 }}
      transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
      className="glass-strong absolute z-20 w-[17rem] rounded-2xl p-4"
      style={{
        left: point.x,
        top: point.y,
        transform: "translate(-50%, calc(-100% - 24px))",
      }}
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

      <header>
        <h2 className="font-display text-lg font-semibold leading-tight">
          {localize(place.names.primary, locale)}
        </h2>
        <p
          className="mt-0.5 text-[10px] italic tracking-wider"
          style={{ color: "var(--ink-soft)" }}
        >
          {place.names.ancient}
        </p>
      </header>

      {ruler && (
        <p className="mt-2.5 flex flex-wrap items-baseline gap-x-1.5 gap-y-1 text-xs">
          <span
            className="rounded-full px-2 py-0.5 text-[9.5px] font-semibold uppercase tracking-[0.08em]"
            style={{ background: "rgba(13, 90, 107, 0.12)", color: "#0d5a6b" }}
          >
            {place.rulerTitle ? localize(place.rulerTitle, locale) : ""}
          </span>
          <span className="font-semibold">
            {localize(ruler.names.primary, locale)}
          </span>
        </p>
      )}

      <p
        className="mt-2.5 text-xs leading-relaxed"
        style={{ color: "var(--ink-soft)" }}
      >
        {localize(place.summary, locale)}
      </p>

      {alternates.length > 0 && (
        <footer
          className="mt-3 border-t pt-2.5"
          style={{ borderColor: "rgba(51, 41, 27, 0.12)" }}
        >
          <p className="text-[9.5px] font-semibold uppercase tracking-[0.08em]" style={{ color: "var(--ink-faint)" }}>
            {t("alsoKnownAs")}
          </p>
          <p className="mt-1 font-display text-[13px] font-medium">
            {alternates
              .map((variant) => localizeValue(variant.value, locale))
              .join(" · ")}
          </p>
          {note && (
            <p
              className="mt-1 text-[10.5px] leading-relaxed"
              style={{ color: "var(--ink-soft)" }}
            >
              {localize(note, locale)}
            </p>
          )}
        </footer>
      )}
    </motion.aside>
  );
}
