import { getLocale, getTranslations } from "next-intl/server";
import { FIGURE_BY_ID, PLACES, ROUTES } from "@/content";
import { localize, localizeValue } from "@/lib/localize";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

/**
 * JSON-LD for search engines and answer engines (AEO).
 *
 * The knowledge base is the source: every place ships its coordinates and every
 * alternate name as `alternateName`, so an engine asked "what else was Sparta
 * called?" can answer from the markup instead of guessing.
 */
export async function StructuredData() {
  const locale = await getLocale();
  const t = await getTranslations("meta");
  const inLanguage = locale === "ko" ? "ko-KR" : "en-US";

  const places = PLACES.map((place) => {
    const ruler = place.rulerId ? FIGURE_BY_ID.get(place.rulerId) : undefined;

    return {
      "@type": "Place",
      "@id": `${SITE_URL}/#place-${place.id}`,
      name: localize(place.names.primary, locale),
      alternateName: [
        place.names.ancient,
        ...(place.names.variants ?? []).map((variant) =>
          localizeValue(variant.value, locale)
        ),
      ],
      description: localize(place.summary, locale),
      geo: {
        "@type": "GeoCoordinates",
        longitude: place.coordinates[0],
        latitude: place.coordinates[1],
      },
      ...(ruler && {
        subjectOf: {
          "@type": "Person",
          name: localize(ruler.names.primary, locale),
          description: localize(ruler.summary, locale),
        },
      }),
    };
  });

  const routes = ROUTES.map((route) => {
    const figure = FIGURE_BY_ID.get(route.figureId);
    return {
      "@type": "TouristTrip",
      "@id": `${SITE_URL}/#route-${route.id}`,
      name: localize(route.title, locale),
      description: localize(route.summary, locale),
      ...(figure && {
        about: {
          "@type": "Person",
          name: localize(figure.names.primary, locale),
        },
      }),
      itinerary: {
        "@type": "ItemList",
        numberOfItems: route.stops.length,
        itemListElement: route.stops.map((stop, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "Place",
            name: stop.placeId
              ? localize(
                  PLACES.find((place) => place.id === stop.placeId)!.names
                    .primary,
                  locale
                )
              : localize(stop.name!, locale),
            geo: {
              "@type": "GeoCoordinates",
              longitude: stop.coordinates[0],
              latitude: stop.coordinates[1],
            },
          },
        })),
      },
    };
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "Mythocarta",
        description: t("description"),
        inLanguage,
      },
      ...places,
      ...routes,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
