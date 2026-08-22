/**
 * The canonical origin this deployment speaks under.
 *
 * Four files need this — `metadataBase`, the sitemap, robots.txt, and the
 * JSON-LD `@id`s — and every one of them bakes the value into something a
 * crawler keeps. Getting it wrong does not break the page, it publishes a site
 * that tells Google its canonical home is `http://localhost:3000`, which is why
 * this is resolved in one place rather than copied four times.
 *
 * Order matters:
 *
 *   1. `NEXT_PUBLIC_SITE_URL` — an explicit custom domain always wins.
 *   2. On a production deployment, the project's stable production domain.
 *   3. On a preview deployment, that deployment's own URL, so a preview never
 *      claims production's canonical and never asks to be indexed in its place.
 *   4. localhost, for `next dev`.
 *
 * Steps 2 and 3 are supplied by the host automatically, so a fresh deployment
 * is correct before anyone has configured anything.
 */
function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) return explicit.replace(/\/$/, "");

  // Vercel exposes these without a protocol, e.g. "mythocarta.vercel.app".
  const host =
    process.env.VERCEL_ENV === "production"
      ? process.env.VERCEL_PROJECT_PRODUCTION_URL
      : process.env.VERCEL_URL ?? process.env.VERCEL_PROJECT_PRODUCTION_URL;

  if (host) return `https://${host.replace(/\/$/, "")}`;

  return "http://localhost:3000";
}

export const SITE_URL = resolveSiteUrl();

/**
 * Whether crawlers should index this deployment.
 *
 * Preview builds are served on public URLs. Left to itself, every branch
 * preview competes with production for the same queries — so only production
 * invites indexing.
 */
export const IS_INDEXABLE =
  !process.env.VERCEL_ENV || process.env.VERCEL_ENV === "production";
