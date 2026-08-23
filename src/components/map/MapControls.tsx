"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { MinusIcon, MountainIcon, PlusIcon } from "@/components/icons";

interface MapControlsProps {
  showTerrain: boolean;
  onToggleTerrain: () => void;
  onZoomIn: () => void;
  onZoomOut: () => void;
}

export function MapControls({
  showTerrain,
  onToggleTerrain,
  onZoomIn,
  onZoomOut,
}: MapControlsProps) {
  const t = useTranslations("controls");

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="absolute bottom-9 right-4 z-20 flex flex-col items-end gap-2"
    >
      <button
        type="button"
        onClick={onToggleTerrain}
        aria-pressed={showTerrain}
        aria-label={showTerrain ? t("terrainOff") : t("terrainOn")}
        title={showTerrain ? t("terrainOff") : t("terrainOn")}
        className="glass-panel flex h-11 w-11 items-center justify-center rounded-xl transition-colors"
        style={{
          background: showTerrain ? "rgba(13, 90, 107, 0.9)" : undefined,
          color: showTerrain ? "#fffdf7" : "var(--ink-soft)",
        }}
      >
        <MountainIcon className="h-[18px] w-[18px]" />
      </button>

      <div className="glass-panel flex flex-col overflow-hidden rounded-xl">
        <button
          type="button"
          onClick={onZoomIn}
          aria-label={t("zoomIn")}
          className="p-2 transition-colors hover:bg-white/50"
          style={{ color: "var(--ink-soft)" }}
        >
          <PlusIcon className="h-[18px] w-[18px]" />
        </button>
        <span
          className="mx-2 h-px"
          style={{ background: "rgba(51, 41, 27, 0.12)" }}
        />
        <button
          type="button"
          onClick={onZoomOut}
          aria-label={t("zoomOut")}
          className="p-2 transition-colors hover:bg-white/50"
          style={{ color: "var(--ink-soft)" }}
        >
          <MinusIcon className="h-[18px] w-[18px]" />
        </button>
      </div>
    </motion.div>
  );
}
