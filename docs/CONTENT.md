# Contributing to the knowledge base

Mythocarta's mythology is **content**, not interface copy. It does not live in
the i18n message catalogues — it lives in `src/content/` as a small typed
knowledge base that is meant to grow for years.

This document is the whole contract for adding to it.

---

## Why it is built this way

Mythological knowledge accumulates in an awkward shape. Sparta is also
Lacedaemon. Troy is also Ilion, and Ilium, and Troia. Corinth used to be Ephyra.
Every one of those is a fact someone will want to add six months from now,
attached to an entity that already exists.

So the store is built around four rules:

| Rule | Why |
| --- | --- |
| **One entity per file** | Adding a fact is an isolated diff. Two people editing two cities never conflict. |
| **All languages side by side** | Stating a fact and translating it are the same edit, so EN and KO cannot drift apart. |
| **Names are a list, not a string** | A place does not have *a* name. It has a primary name, an ancient form, a Greek spelling, alternates, and epithets — each with its own note and source. |
| **Claims carry sources** | Myth is contested by nature. `sources: [{ work: "Iliad", locus: "2.581" }]` is how a later reader checks you. |

```
src/content/
├── schema.ts          the types, and the definePlace/defineFigure/defineRoute helpers
├── validate.ts        referential-integrity checks that run at build time
├── index.ts           the registry — every entity is imported and listed here
├── places/<id>.ts     a location on the map
├── figures/<id>.ts    a person: ruler, hero, oracle
└── routes/<id>.ts     a narrative voyage
```

---

## Walkthrough: adding an alternate name

The canonical case. Sparta is also called Lacedaemon, and we want that on the
map, in the tooltip, and in the structured data an AI reads.

Open [`src/content/places/sparta.ts`](../src/content/places/sparta.ts) and add
one entry to `names.variants`:

```ts
{
  kind: "alternate",
  value: { en: "Lacedaemon", ko: "라케다이몬" },
  note: {
    en: "Homer's usual name for the kingdom, after Lacedaemon, son of Zeus…",
    ko: "호메로스가 이 왕국을 부를 때 주로 쓰는 이름…",
  },
  sources: [{ work: "Iliad", locus: "2.581" }],
}
```

That is the entire change. No component, route, or translation file is touched.
The name immediately appears in the city's hover card under *Also known as*, and
in the page's JSON-LD as an `alternateName`, which is what lets a search or
answer engine respond to "what else was Sparta called?".

### The `kind` field

| kind | Use for | Example |
| --- | --- | --- |
| `ancient` | Romanized ancient Greek | `Spartē` |
| `greek` | Native Greek script | `Σπάρτη` |
| `latin` | Latin / Roman form | `Ilium` |
| `alternate` | A genuinely different name | `Lacedaemon`, `Ephyra` |
| `epithet` | A formulaic descriptor | *sandy Pylos*, *rich in gold* |
| `modern` | The present-day name | `Hisarlık` |

`value` may be a plain string when the form is language-neutral (Greek script, a
romanization) or a `{ en, ko }` object when each language spells it differently.

---

## Walkthrough: adding a place

1. Create `src/content/places/<id>.ts`. The `id` is a permanent slug — figures
   and routes reference it, so choose it once and never rename it.

   ```ts
   import { definePlace } from "../schema";

   export const tiryns = definePlace({
     id: "tiryns",
     kind: "city",
     coordinates: [22.7997, 37.5994], // [longitude, latitude]
     names: {
       primary: { en: "Tiryns", ko: "티린스" },
       ancient: "Tiryns",
       variants: [{ kind: "greek", value: "Τίρυνς" }],
     },
     rulerId: "diomedes",
     rulerTitle: { en: "King of Tiryns", ko: "티린스의 왕" },
     summary: {
       en: "Cyclopean-walled citadel where Heracles served Eurystheus.",
       ko: "헤라클레스가 에우리스테우스를 섬긴 키클롭스식 성벽의 성채.",
     },
     tags: ["peloponnese", "heracles"],
     sources: [{ work: "Iliad", locus: "2.559" }],
   });
   ```

2. Register it in [`src/content/index.ts`](../src/content/index.ts) — an import
   and an entry in the `PLACES` array.

Nothing else. The marker, the hover card, the JSON-LD entry, and both languages
all follow from the record.

> **Coordinates are `[longitude, latitude]`,** which is the GeoJSON order and the
> reverse of what most people say out loud. The validator rejects anything
> outside the Mediterranean frame, so a swapped pair fails the build rather than
> silently placing Tiryns in the Indian Ocean.

---

## Walkthrough: adding a voyage

Routes are the one place where the data has to be drawn rather than looked up.

```ts
export const menelaus = defineRoute({
  id: "menelaus",
  figureId: "menelaus",       // must exist in content/figures
  title: { en: "…", ko: "…" },
  summary: { en: "…", ko: "…" },
  color: "#7c3aed",
  icon: "sail",               // odyssey | sail | crown | chariot
  path: [ /* [lng, lat] control points, departure → arrival */ ],
  landPaths: [ /* optional: stretches covered overland */ ],
  stops: [ /* narrative landfalls, in order */ ],
});
```

**`path` is a set of control points, not a polyline.** The renderer runs them
through a centripetal Catmull-Rom spline
([`src/lib/routeGeometry.ts`](../src/lib/routeGeometry.ts)), which curves the
track into something that looks sailed while still passing exactly through every
point you place.

Two consequences worth internalising:

- **Place points to avoid land, not to fake smoothness.** Put them at capes,
  strait mouths, and channel midpoints — the places a real helmsman would aim
  for. Curvature is free; a route that cuts across the Peloponnese is not.
- **Do not pad straight legs.** An open-sea crossing needs two points. Adding
  ten does not make it smoother, it just makes the diff harder to read.

**`path` is the *sailed* track and nothing else.** When a traveller left the
ship — Agamemnon walking up from Nauplia to Mycenae, Telemachus taking a chariot
from Pylos to Sparta — that stage goes in `landPaths`, as one array of points per
continuous leg. Land legs are drawn dashed and thinner, which is the only honest
way to show a keel that stopped at the beach:

```ts
landPaths: [
  [[21.6958, 37.0277], [22.11, 37.04], [22.4297, 37.0741]], // the chariot road
],
```

Each entry in `stops` is a landfall. A stop with a `placeId` inherits its name
from that place and is labelled by the existing city marker; a stop without one
is a mythic location — Ogygia, the isle of the Sirens — and carries its own
`name` and `coordinates`, drawn as a small label that fades in exactly when the
animated line reaches it.

Give every stop a `note`. The sidebar prints it under the landfall's name while
the voyage is switched on, so the note is where the story of an anchorage
actually reaches a reader — a stop without one is just a dot.

---

## Validation

[`src/content/validate.ts`](../src/content/validate.ts) runs on the server as the
registry loads, which means **`next build` fails** — loudly, with the offending
id — if any of this is true:

- two entities share an id
- a place names a `rulerId` that has no figure file
- a route names a `figureId`, or a stop names a `placeId`, that does not exist
- a stop has neither a `placeId` nor its own `name`
- any localized field is missing its `en` or `ko` value
- a coordinate falls outside the Mediterranean frame (usually a swapped pair)
- a route has fewer than two path points, or a land leg has fewer than two

Broken content therefore cannot reach production, which is what lets the
knowledge base grow without a reviewer having to check every fact by hand.

Run the checks yourself with:

```bash
npm run typecheck   # field names, shapes, icon keys
npm run build       # the above, plus referential integrity
```

---

## Where content surfaces

One record feeds four places at once, which is the reason for the indirection:

| Surface | Reads |
| --- | --- |
| Map markers | `names.primary`, `names.ancient`, `coordinates` |
| Hover card | `summary`, `rulerId` → figure, `names.ancient` + `variants` of kind `greek` / `latin` / `alternate` |
| Voyage sidebar | route `title`, `summary`, `icon`, `color`, and each stop's `name`, `note` and `sources` |
| JSON-LD (SEO/AEO) | every place as `Place` with `alternateName` + `geo`, every route as `TouristTrip` with its itinerary |

---

## House style

- Write the `summary` as one or two sentences that land on something specific.
  "Golden citadel of Agamemnon, and the hall where his homecoming ended in
  murder" is better than "an important Mycenaean city".
- Korean is a translation of the same fact, not a shorter version of it.
- Cite the ancient work when the claim is contested, which is most of the time.
- Prefer the traditional identification for mythic geography, and say so in the
  `note` when scholars disagree.
