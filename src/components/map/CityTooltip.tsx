"use client";

import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import {
  FIGURE_BY_ID,
  type PlaceRecord,
  type RouteRecord,
  type RouteStop,
} from "@/content";
import { localize, localizeValue } from "@/lib/localize";

/** This place as a landfall on one currently-active voyage. */
export interface VoyageStop {
  route: RouteRecord;
  stop: RouteStop;
}

interface CityTooltipProps {
  place: PlaceRecord;
  point: { x: number; y: number };
  onClose: () => void;
  /** The same landfall notes the sidebar shows, surfaced on the map too. */
  voyageStops?: VoyageStop[];
}

export function CityTooltip({
  place,
  point,
  onClose,
  voyageStops = [],
}: CityTooltipProps) {
  const locale = useLocale();
  const t = useTranslations("tooltip");

  const ruler = place.rulerId ? FIGURE_BY_ID.get(place.rulerId) : undefined;

  // Alternate names are the point of the knowledge base — Sparta is also
  // Lacedaemon — so they are surfaced here rather than buried in the data.
  const alternates = (place.names.variants ?? []).filter(
    (variant) => variant.kind === "alternate"
  );
  const note = alternates.find((variant) => variant.note)?.note;

  // The Greek and Latin spellings were recorded from the start but had nowhere
  // to appear, so they only ever reached a reader through the JSON-LD. They
  // belong on the card, next to the romanization they are the source of.
  const classical = [
    place.names.ancient,
    ...(place.names.variants ?? [])
      .filter((variant) => variant.kind === "greek" || variant.kind === "latin")
      .map((variant) => localizeValue(variant.value, locale)),
  ].filter((form, index, forms) => form && forms.indexOf(form) === index);

  return (
    // A plain wrapper carries the fixed "centred above the marker" placement.
    // Framer Motion drives the transform on its own child for the y/scale
    // entrance animation, and would silently overwrite a transform set here —
    // splitting the two is what keeps the card centred instead of hanging off
    // its anchor to one side.
    <div
      className="absolute z-20"
      style={{
        left: point.x,
        top: point.y,
        transform: "translate(-50%, calc(-100% - 24px))",
      }}
    >
      <motion.aside
        initial={{ opacity: 0, y: 10, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 6, scale: 0.97 }}
        transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
        className="glass-strong w-[min(17rem,calc(100vw-2rem))] rounded-2xl p-4"
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
            className="font-classical mt-0.5 text-[10.5px] tracking-wider"
            style={{ color: "var(--ink-soft)" }}
            lang="und"
          >
            {classical.join(" · ")}
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

        {voyageStops.length > 0 && (
          <footer
            className="mt-3 border-t pt-2.5"
            style={{ borderColor: "rgba(51, 41, 27, 0.12)" }}
          >
            <p className="text-[9.5px] font-semibold uppercase tracking-[0.08em]" style={{ color: "var(--ink-faint)" }}>
              {t("onThisVoyage")}
            </p>
            <ul className="mt-1.5 space-y-2.5">
              {voyageStops.map(({ route, stop }) => (
                <li key={route.id}>
                  <p className="flex items-center gap-1.5 text-[11px] font-semibold">
                    <span
                      className="h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ background: route.color }}
                    />
                    {localize(route.title, locale)}
                  </p>
                  {stop.note && (
                    <p
                      className="mt-0.5 text-[10.5px] leading-relaxed"
                      style={{ color: "var(--ink-soft)" }}
                    >
                      {localize(stop.note, locale)}
                    </p>
                  )}
                  {stop.sources && stop.sources.length > 0 && (
                    <p
                      className="mt-0.5 text-[9.5px] italic tracking-wide"
                      style={{ color: "var(--ink-faint)" }}
                    >
                      {stop.sources
                        .map((source) => [source.work, source.locus].filter(Boolean).join(" "))
                        .join(" · ")}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </footer>
        )}
      </motion.aside>
    </div>
  );
}
