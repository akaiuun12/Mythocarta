import type { MetadataRoute } from "next";
import { IS_INDEXABLE, SITE_URL } from "@/lib/siteUrl";

export default function robots(): MetadataRoute.Robots {
  // A branch preview is served on a public URL like any other deployment; only
  // production asks to be indexed, so previews cannot outrank the real site.
  if (!IS_INDEXABLE) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
