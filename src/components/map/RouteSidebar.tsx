"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { useLocale, useTranslations } from "next-intl";
import { FIGURE_BY_ID, PLACE_BY_ID, ROUTES } from "@/content";
import { localize } from "@/lib/localize";
import { CloseIcon, RouteIcon } from "@/components/icons";

interface RouteSidebarProps {
  open: boolean;
  activeRouteIds: string[];
  onToggleRoute: (routeId: string) => void;
  onClearAll: () => void;
  onClose: () => void;
}

export function RouteSidebar({
  open,
  activeRouteIds,
  onToggleRoute,
  onClearAll,
  onClose,
}: RouteSidebarProps) {
  const locale = useLocale();
  const t = useTranslations("sidebar");

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.aside
          key="route-sidebar"
          initial={{ x: -28, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -28, opacity: 0 }}
          transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
          className="glass-strong absolute bottom-4 left-4 top-[5.75rem] z-30 flex w-[min(21rem,calc(100vw-2rem))] flex-col rounded-2xl"
          aria-label={t("title")}
        >
          <header className="flex items-start justify-between gap-3 px-5 pb-3 pt-4">
            <div className="min-w-0">
              <h2 className="font-display text-base font-semibold tracking-wide">
                {t("title")}
              </h2>
              <p
                className="mt-0.5 text-[11px] leading-snug"
                style={{ color: "var(--ink-soft)" }}
              >
                {activeRouteIds.length > 0 ? t("activeHint") : t("subtitle")}
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label={t("close")}
              className="-mr-1 -mt-1 shrink-0 rounded-full p-1.5 transition-colors hover:bg-white/50"
              style={{ color: "var(--ink-soft)" }}
            >
              <CloseIcon className="h-4 w-4" />
            </button>
          </header>

          <div className="min-h-0 flex-1 overflow-y-auto px-3 pb-2">
            <ul className="space-y-2">
              {ROUTES.map((route) => {
                const active = activeRouteIds.includes(route.id);
                const figure = FIGURE_BY_ID.get(route.figureId);

                return (
                  <li key={route.id}>
                    <button
                      type="button"
                      role="switch"
                      aria-checked={active}
                      onClick={() => onToggleRoute(route.id)}
                      className="w-full rounded-xl p-3 text-left transition-colors"
                      style={{
                        background: active
                          ? "rgba(255, 255, 255, 0.55)"
                          : "transparent",
                        boxShadow: active
                          ? "inset 0 0 0 1px rgba(255,255,255,0.7)"
                          : "none",
                      }}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-colors duration-300"
                          style={{
                            background: active
                              ? route.color
                              : "rgba(51, 41, 27, 0.07)",
                            color: active ? "#fffdf7" : "var(--ink-soft)",
                          }}
                        >
                          <RouteIcon name={route.icon} className="h-[18px] w-[18px]" />
                        </span>

                        <span className="min-w-0 flex-1">
                          <span className="block font-display text-[15px] font-semibold leading-tight">
                            {figure
                              ? localize(figure.names.primary, locale)
                              : route.id}
                          </span>
                          <span
                            className="block text-[10.5px] leading-tight"
                            style={{ color: "var(--ink-soft)" }}
                          >
                            {localize(route.title, locale)}
                          </span>
                        </span>

                        <span
                          className="flex h-[18px] w-8 shrink-0 items-center rounded-full p-[2px] transition-colors duration-300"
                          style={{
                            background: active
                              ? route.color
                              : "rgba(51, 41, 27, 0.18)",
                            justifyContent: active ? "flex-end" : "flex-start",
                          }}
                        >
                          <motion.span
                            layout
                            transition={{
                              type: "spring",
                              stiffness: 520,
                              damping: 34,
                            }}
                            className="h-[14px] w-[14px] rounded-full bg-white shadow-sm"
                          />
                        </span>
                      </div>

                      <p
                        className="mt-2 text-[11px] leading-relaxed"
                        style={{ color: "var(--ink-soft)" }}
                      >
                        {localize(route.summary, locale)}
                      </p>

                      <AnimatePresence initial={false}>
                        {active && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden"
                          >
                            <p
                              className="mt-3 text-[9.5px] font-semibold uppercase tracking-[0.08em]"
                              style={{ color: "var(--ink-faint)" }}
                            >
                              {t("stops")}
                            </p>
                            <ol className="mt-1.5 space-y-1">
                              {route.stops.map((stop) => {
                                const place = stop.placeId
                                  ? PLACE_BY_ID.get(stop.placeId)
                                  : undefined;
                                const label = place
                                  ? localize(place.names.primary, locale)
                                  : stop.name
                                    ? localize(stop.name, locale)
                                    : stop.id;

                                return (
                                  <li
                                    key={stop.id}
                                    className="flex items-baseline gap-2 text-[11px]"
                                  >
                                    <span
                                      className="mt-[5px] h-1 w-1 shrink-0 rounded-full"
                                      style={{ background: route.color }}
                                    />
                                    <span style={{ color: "var(--ink-soft)" }}>
                                      {label}
                                    </span>
                                  </li>
                                );
                              })}
                            </ol>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          <AnimatePresence>
            {activeRouteIds.length > 0 && (
              <motion.footer
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden px-5"
              >
                <button
                  type="button"
                  onClick={onClearAll}
                  className="my-3 w-full rounded-lg py-2 text-[11px] font-semibold uppercase tracking-[0.08em] transition-colors hover:bg-white/50"
                  style={{ color: "var(--ink-soft)" }}
                >
                  {t("clearAll")}
                </button>
              </motion.footer>
            )}
          </AnimatePresence>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
