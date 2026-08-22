import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Cormorant_Garamond, Gowun_Batang, Noto_Sans_KR } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from "next-intl/server";
import { routing } from "@/i18n/routing";
import { Analytics } from "@/components/Analytics";
import "../globals.css";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

/**
 * Three faces, split by role rather than by language:
 *
 *   display  Cormorant Garamond for Latin, Gowun Batang for Hangul. Cormorant
 *            carries no Hangul glyphs, so the browser falls through to Gowun
 *            Batang per character — one CSS stack, correct in both languages.
 *   body     Noto Sans KR, which covers Latin and Hangul in one metric-
 *            consistent family, so EN and KO interfaces line up identically.
 *
 * Google serves Korean split across unicode-range chunks, so a reader browsing
 * in English never downloads a Hangul glyph.
 */
const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

// Google does not expose Hangul as a named subset for these families — the
// glyphs live in the unnamed default ranges. Omitting `subsets` keeps every
// range, which requires opting out of preload; that is the right trade anyway,
// since preloading a full Hangul face would block the first paint for readers
// who never see a Korean character. The browser still fetches only the
// unicode-range chunks a page actually uses.
const displayKo = Gowun_Batang({
  weight: ["400", "700"],
  variable: "--font-display-ko",
  display: "swap",
  preload: false,
});

const body = Noto_Sans_KR({
  weight: ["400", "500", "700"],
  variable: "--font-body",
  display: "swap",
  preload: false,
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });

  return {
    metadataBase: new URL(SITE_URL),
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    applicationName: "Mythocarta",
    alternates: {
      canonical: `/${locale}`,
      languages: { en: "/en", ko: "/ko" },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: `/${locale}`,
      siteName: "Mythocarta",
      locale: locale === "ko" ? "ko_KR" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
    },
  };
}

export const viewport = {
  themeColor: "#0d5a6b",
  width: "device-width",
  initialScale: 1,
  // The map owns the viewport; letting it zoom the page fights the gesture.
  maximumScale: 1,
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${display.variable} ${displayKo.variable} ${body.variable}`}
    >
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
}
