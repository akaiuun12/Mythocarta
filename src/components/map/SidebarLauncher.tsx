"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { CompassIcon } from "@/components/icons";

interface SidebarLauncherProps {
  open: boolean;
  activeCount: number;
  onOpen: () => void;
}

/**
 * Replaces the old always-on legend panel. The map keeps the whole viewport;
 * the voyages are one tap away, and the badge reports how many are running so
 * the collapsed state still answers "is anything drawn right now?".
 */
export function SidebarLauncher({
  open,
  activeCount,
  onOpen,
}: SidebarLauncherProps) {
  const t = useTranslations("sidebar");

  return (
    <AnimatePresence>
      {!open && (
        <motion.button
          key="sidebar-launcher"
          type="button"
          onClick={onOpen}
          aria-label={t("open")}
          title={t("open")}
          initial={{ opacity: 0, x: -16, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -16, scale: 0.9 }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="glass-panel absolute left-4 top-[5.75rem] z-30 flex h-12 w-12 items-center justify-center rounded-2xl"
          style={{ color: "var(--deep)" }}
        >
          <CompassIcon className="h-[22px] w-[22px]" />

          {activeCount > 0 && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold text-white"
              style={{ background: "var(--deep)" }}
            >
              {activeCount}
            </motion.span>
          )}
        </motion.button>
      )}
    </AnimatePresence>
  );
}
