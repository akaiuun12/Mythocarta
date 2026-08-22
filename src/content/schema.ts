/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  Mythocarta content schema
 * ─────────────────────────────────────────────────────────────────────────────
 *
 *  The mythological knowledge in this project is *content*, not UI copy, so it
 *  does not live in the i18n message catalogues. It lives here as a small
 *  typed knowledge base:
 *
 *      content/places/<id>.ts    a location on the map (city, sanctuary, isle)
 *      content/figures/<id>.ts   a person (ruler, hero, oracle)
 *      content/routes/<id>.ts    a narrative voyage across the map
 *
 *  One entity per file, so that adding a fact — a new alternate name, a new
 *  citation, a new city — is an isolated, reviewable diff that never conflicts
 *  with another contributor's edit.
 *
 *  Every record carries all languages side by side. Translating a fact and
 *  stating a fact are the same edit, which keeps EN and KO from drifting apart.
 *
 *  See docs/CONTENT.md for the contribution walkthrough.
 */

export type LocaleCode = "en" | "ko";

/** A string that exists in every supported language. */
export type Localized = Record<LocaleCode, string>;

/**
 * Where a claim comes from. Mythological "facts" are contested by nature, so
 * naming the source is how the knowledge base stays honest and auditable.
 */
export interface SourceRef {
  /** Ancient work or modern reference, e.g. "Iliad", "Bibliotheca". */
  work: string;
  /** Passage locator, e.g. "2.581-590". */
  locus?: string;
  url?: string;
}

/**
 * Ancient places accumulate names: Sparta is also Lacedaemon, Troy is also
 * Ilion and Ilium. Rather than flattening these into one label, each variant is
 * recorded with its kind, an optional explanatory note, and its source.
 */
export type NameKind =
  /** Romanized ancient Greek form, e.g. "Spartē". */
  | "ancient"
  /** Native Greek script, e.g. "Σπάρτη". */
  | "greek"
  /** Latin / Roman form, e.g. "Ilium". */
  | "latin"
  /** A different name for the same place, e.g. "Lacedaemon" for Sparta. */
  | "alternate"
  /** A formulaic epithet, e.g. "sandy Pylos". */
  | "epithet"
  /** Present-day name, when it differs. */
  | "modern";

export interface NameVariant {
  kind: NameKind;
  /** Plain string when the form is language-neutral (Greek script, romanization). */
  value: string | Localized;
  /** Why this name exists — a dynasty, a founder, a region. */
  note?: Localized;
  sources?: SourceRef[];
}

export type PlaceKind = "city" | "sanctuary" | "island" | "landmark";

export interface PlaceRecord {
  /** Stable slug. Never rename — routes and figures reference it. */
  id: string;
  kind: PlaceKind;
  /** [longitude, latitude] */
  coordinates: [number, number];
  names: {
    /** The label shown on the map, per language. */
    primary: Localized;
    /** Romanized ancient form, shown as the marker's subtitle. */
    ancient: string;
    /** Everything else this place has been called. */
    variants?: NameVariant[];
  };
  /** id of a figure in content/figures — validated at build time. */
  rulerId?: string;
  /** How that figure is styled here, e.g. "King of Mycenae" / "Oracle". */
  rulerTitle?: Localized;
  summary: Localized;
  /** Free-form facets for future filtering, e.g. "trojan-war", "odyssey". */
  tags?: string[];
  sources?: SourceRef[];
}

export interface FigureRecord {
  id: string;
  names: {
    primary: Localized;
    ancient: string;
    variants?: NameVariant[];
  };
  /** Short epithet shown next to the name, e.g. "the cunning". */
  epithet?: Localized;
  summary: Localized;
  /** ids of places in content/places — validated at build time. */
  placeIds?: string[];
  tags?: string[];
  sources?: SourceRef[];
}

/**
 * A narrative stop along a voyage. Some stops are real places on the map
 * (`placeId`), others are mythic locations with no fixed identity — Ogygia,
 * the isle of the Sirens — which carry their own name and coordinates.
 */
export interface RouteStop {
  id: string;
  /** When set, the stop inherits its name from that place record. */
  placeId?: string;
  /** Required when there is no placeId. */
  name?: Localized;
  coordinates: [number, number];
  note?: Localized;
  sources?: SourceRef[];
}

export interface RouteRecord {
  id: string;
  /** id of the figure whose voyage this is. */
  figureId: string;
  title: Localized;
  summary: Localized;
  /** Line colour on the map and in the sidebar. */
  color: string;
  /** Icon key rendered in the sidebar (see components/icons). */
  icon: "odyssey" | "sail" | "crown" | "chariot";
  /**
   * The sailed track as [longitude, latitude] control points, ordered from
   * departure to arrival. These are hand-placed to follow real coastlines and
   * straits; the renderer smooths them into a curve, so a dozen points per leg
   * is plenty — do not add points to fake smoothness.
   */
  path: [number, number][];
  /**
   * Stretches the traveller covered overland — a chariot road, the march up
   * from the harbour to the citadel. Each entry is one continuous land leg.
   *
   * These are kept out of `path` on purpose: `path` is the *sailed* track, and
   * a keel that appears to cross a headland is the one thing a map like this
   * must never show. Land legs are drawn dashed instead, so a reader can see
   * exactly where the hull stopped and the wheels started.
   */
  landPaths?: [number, number][][];
  /** Narrative landfalls, in order. Rendered as labelled stops. */
  stops: RouteStop[];
  sources?: SourceRef[];
}

/* ── Definition helpers ───────────────────────────────────────────────────
 * Wrapping each record in these gives editors autocompletion and catches a
 * typo'd field at author time rather than at render time.
 */

export const definePlace = (record: PlaceRecord): PlaceRecord => record;
export const defineFigure = (record: FigureRecord): FigureRecord => record;
export const defineRoute = (record: RouteRecord): RouteRecord => record;
