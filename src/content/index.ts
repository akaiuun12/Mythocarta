/**
 * The content registry.
 *
 * Every entity file is imported explicitly rather than glob-loaded: the bundler
 * can see exactly what exists, and a new file that nobody registered fails
 * review instead of silently doing nothing. Adding an entity is a two-line
 * change — the import, and the array entry.
 */
import type { FigureRecord, PlaceRecord, RouteRecord } from "./schema";
import { validateContent } from "./validate";

// ── Places ──────────────────────────────────────────────────────────────────
import { argos } from "./places/argos";
import { athens } from "./places/athens";
import { aulis } from "./places/aulis";
import { calydon } from "./places/calydon";
import { corinth } from "./places/corinth";
import { delphi } from "./places/delphi";
import { iolcus } from "./places/iolcus";
import { ithaca } from "./places/ithaca";
import { knossos } from "./places/knossos";
import { mycenae } from "./places/mycenae";
import { olympia } from "./places/olympia";
import { pylos } from "./places/pylos";
import { salamis } from "./places/salamis";
import { sparta } from "./places/sparta";
import { thebes } from "./places/thebes";
import { tiryns } from "./places/tiryns";
import { troy } from "./places/troy";

// ── Figures ─────────────────────────────────────────────────────────────────
import { agamemnon as agamemnonFigure } from "./figures/agamemnon";
import { diomedes } from "./figures/diomedes";
import { menelaus } from "./figures/menelaus";
import { minos } from "./figures/minos";
import { nestor as nestorFigure } from "./figures/nestor";
import { odysseus as odysseusFigure } from "./figures/odysseus";
import { oedipus } from "./figures/oedipus";
import { pelias } from "./figures/pelias";
import { priam } from "./figures/priam";
import { pythia } from "./figures/pythia";
import { sisyphus } from "./figures/sisyphus";
import { telemachus as telemachusFigure } from "./figures/telemachus";
import { theseus } from "./figures/theseus";

// ── Routes ──────────────────────────────────────────────────────────────────
import { agamemnon as agamemnonRoute } from "./routes/agamemnon";
import { menelaus as menelausRoute } from "./routes/menelaus";
import { nestor as nestorRoute } from "./routes/nestor";
import { odysseus as odysseusRoute } from "./routes/odysseus";
import { telemachus as telemachusRoute } from "./routes/telemachus";

export const PLACES: PlaceRecord[] = [
  athens,
  sparta,
  mycenae,
  troy,
  pylos,
  ithaca,
  knossos,
  thebes,
  argos,
  delphi,
  corinth,
  iolcus,
  tiryns,
  calydon,
  aulis,
  olympia,
  salamis,
];

export const FIGURES: FigureRecord[] = [
  theseus,
  menelaus,
  agamemnonFigure,
  priam,
  nestorFigure,
  odysseusFigure,
  minos,
  oedipus,
  diomedes,
  pythia,
  sisyphus,
  pelias,
  telemachusFigure,
];

export const ROUTES: RouteRecord[] = [
  odysseusRoute,
  telemachusRoute,
  nestorRoute,
  agamemnonRoute,
  menelausRoute,
];

export const PLACE_BY_ID = new Map(PLACES.map((place) => [place.id, place]));
export const FIGURE_BY_ID = new Map(FIGURES.map((figure) => [figure.id, figure]));
export const ROUTE_BY_ID = new Map(ROUTES.map((route) => [route.id, route]));

/**
 * Fail the build — not the browser — when the knowledge base is inconsistent.
 * Guarded to the server so the validator never ships in the client bundle.
 */
if (typeof window === "undefined") {
  const errors = validateContent(PLACES, FIGURES, ROUTES);
  if (errors.length > 0) {
    throw new Error(
      `Mythocarta content validation failed:\n  - ${errors.join("\n  - ")}`
    );
  }
}

export * from "./schema";
