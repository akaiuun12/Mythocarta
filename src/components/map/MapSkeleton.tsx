"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Logo } from "@/components/Logo";

export function MapSkeleton() {
  const t = useTranslations("map");

  return (
    <div
      className="absolute inset-0 flex flex-col items-center justify-center gap-4"
      style={{
        background:
          "radial-gradient(ellipse at center, #f5eddb 0%, #efe6d0 55%, #e4d7ba 100%)",
      }}
      aria-busy="true"
    >
      <motion.div
        animate={{ scale: [1, 1.06, 1], opacity: [0.75, 1, 0.75] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <Logo className="h-14 w-14" />
      </motion.div>
      <p className="font-display text-base" style={{ color: "var(--ink-soft)" }}>
        {t("loading")}
      </p>
    </div>
  );
}
