import type {
  FigureRecord,
  Localized,
  PlaceRecord,
  RouteRecord,
} from "./schema";

const LOCALES = ["en", "ko"] as const;

/**
 * Referential and structural checks over the knowledge base.
 *
 * This runs on the server at module load, which means `next build` fails loudly
 * if a contributor references a figure that does not exist, reuses an id, drops
 * a Korean translation, or fat-fingers a coordinate. Broken content can never
 * reach production, so the knowledge base can grow without a review bottleneck.
 */
export function validateContent(
  places: PlaceRecord[],
  figures: FigureRecord[],
  routes: RouteRecord[]
): string[] {
  const errors: string[] = [];

  const placeIds = new Set<string>();
  const figureIds = new Set<string>();

  const requireUnique = (
    id: string,
    seen: Set<string>,
    kind: string
  ): void => {
    if (seen.has(id)) errors.push(`${kind} "${id}" is declared twice.`);
    seen.add(id);
  };

  const requireLocales = (
    text: Localized | undefined,
    label: string
  ): void => {
    if (!text) return;
    for (const locale of LOCALES) {
      if (!text[locale]?.trim()) {
        errors.push(`${label} is missing its "${locale}" translation.`);
      }
    }
  };

  const requireCoordinates = (
    coordinates: [number, number],
    label: string
  ): void => {
    const [lng, lat] = coordinates;
    if (lng < -180 || lng > 180 || lat < -90 || lat > 90) {
      errors.push(`${label} has coordinates outside the world: [${lng}, ${lat}].`);
    }
    // Everything in this project sits in the ancient Mediterranean world;
    // a point outside it is far more likely to be swapped lng/lat than real.
    if (lng < -15 || lng > 50 || lat < 20 || lat > 55) {
      errors.push(
        `${label} sits outside the Mediterranean frame: [${lng}, ${lat}]. ` +
          `Coordinates are [longitude, latitude] — check the order.`
      );
    }
  };

  for (const place of places) {
    requireUnique(place.id, placeIds, "Place");
    requireLocales(place.names.primary, `Place "${place.id}" name`);
    requireLocales(place.summary, `Place "${place.id}" summary`);
    requireLocales(place.rulerTitle, `Place "${place.id}" ruler title`);
    requireCoordinates(place.coordinates, `Place "${place.id}"`);
    if (!place.names.ancient?.trim()) {
      errors.push(`Place "${place.id}" is missing its romanized ancient name.`);
    }
    for (const variant of place.names.variants ?? []) {
      if (typeof variant.value !== "string") {
        requireLocales(variant.value, `Place "${place.id}" ${variant.kind} name`);
      }
      requireLocales(variant.note, `Place "${place.id}" ${variant.kind} note`);
    }
  }

  for (const figure of figures) {
    requireUnique(figure.id, figureIds, "Figure");
    requireLocales(figure.names.primary, `Figure "${figure.id}" name`);
    requireLocales(figure.summary, `Figure "${figure.id}" summary`);
    requireLocales(figure.epithet, `Figure "${figure.id}" epithet`);
    for (const variant of figure.names.variants ?? []) {
      if (typeof variant.value !== "string") {
        requireLocales(variant.value, `Figure "${figure.id}" ${variant.kind} name`);
      }
      requireLocales(variant.note, `Figure "${figure.id}" ${variant.kind} note`);
    }
  }

  // Cross-references are resolved only after every id is known.
  for (const place of places) {
    if (place.rulerId && !figureIds.has(place.rulerId)) {
      errors.push(
        `Place "${place.id}" names ruler "${place.rulerId}", but no such figure exists. ` +
          `Add src/content/figures/${place.rulerId}.ts.`
      );
    }
  }

  for (const figure of figures) {
    for (const placeId of figure.placeIds ?? []) {
      if (!placeIds.has(placeId)) {
        errors.push(
          `Figure "${figure.id}" references place "${placeId}", which does not exist.`
        );
      }
    }
  }

  const routeIds = new Set<string>();
  for (const route of routes) {
    requireUnique(route.id, routeIds, "Route");
    requireLocales(route.title, `Route "${route.id}" title`);
    requireLocales(route.summary, `Route "${route.id}" summary`);

    if (!figureIds.has(route.figureId)) {
      errors.push(
        `Route "${route.id}" belongs to figure "${route.figureId}", which does not exist.`
      );
    }
    if (route.path.length < 2) {
      errors.push(`Route "${route.id}" needs at least two path points.`);
    }
    route.path.forEach((point, index) =>
      requireCoordinates(point, `Route "${route.id}" path point ${index}`)
    );

    (route.landPaths ?? []).forEach((leg, legIndex) => {
      if (leg.length < 2) {
        errors.push(
          `Route "${route.id}" land leg ${legIndex} needs at least two points.`
        );
      }
      leg.forEach((point, index) =>
        requireCoordinates(
          point,
          `Route "${route.id}" land leg ${legIndex} point ${index}`
        )
      );
    });

    const stopIds = new Set<string>();
    for (const stop of route.stops) {
      requireUnique(stop.id, stopIds, `Route "${route.id}" stop`);
      requireCoordinates(stop.coordinates, `Route "${route.id}" stop "${stop.id}"`);
      requireLocales(stop.note, `Route "${route.id}" stop "${stop.id}" note`);

      if (stop.placeId) {
        if (!placeIds.has(stop.placeId)) {
          errors.push(
            `Route "${route.id}" stop "${stop.id}" references place "${stop.placeId}", which does not exist.`
          );
        }
      } else if (!stop.name) {
        errors.push(
          `Route "${route.id}" stop "${stop.id}" needs either a placeId or its own name.`
        );
      } else {
        requireLocales(stop.name, `Route "${route.id}" stop "${stop.id}" name`);
      }
    }
  }

  return errors;
}
