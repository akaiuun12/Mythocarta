"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Logo } from "./Logo";
import { LanguageToggle } from "./LanguageToggle";
import { MailIcon } from "./icons";

const DEVELOPER_EMAIL = "akaiuun12@gmail.com";

export function Header() {
  const t = useTranslations("header");

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="pointer-events-none absolute inset-x-0 top-0 z-30 flex items-center justify-between gap-4 p-4 sm:p-5"
    >
      <div className="glass-panel pointer-events-auto flex items-center gap-3 rounded-2xl px-4 py-2.5">
        <Logo className="h-9 w-9 shrink-0" />
        <div>
          <h1 className="font-display text-xl font-semibold leading-tight">
            {t("title")}
          </h1>
          <p className="hidden text-[11px] leading-tight sm:block" style={{ color: "var(--ink-soft)" }}>
            {t("subtitle")}
          </p>
        </div>
      </div>

      <div className="pointer-events-auto flex items-center gap-2">
        <a
          href={`mailto:${DEVELOPER_EMAIL}`}
          aria-label={t("contact")}
          title={t("contact")}
          className="glass-panel flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-white/50"
          style={{ color: "var(--ink-soft)" }}
        >
          <MailIcon className="h-[16px] w-[16px]" />
        </a>
        <LanguageToggle />
      </div>
    </motion.header>
  );
}
