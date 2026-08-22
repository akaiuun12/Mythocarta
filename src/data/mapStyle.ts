import type { LngLatBoundsLike, StyleSpecification } from "maplibre-gl";

export const MAP_CENTER: [number, number] = [21.5, 37.8];
export const MAP_ZOOM = 5.6;
export const MAP_MIN_ZOOM = 4;
export const MAP_MAX_ZOOM = 9.5;

/** Keeps the camera over the ancient Mediterranean world. */
export const MAP_MAX_BOUNDS: LngLatBoundsLike = [
  [-12, 25],
  [46, 51],
];

export const LAYER_TERRAIN = "terrain-hillshade";
export const LAYER_DIM = "world-dim";

/**
 * The "ancient parchment" style: warm land, a soft Aegean, and nothing else.
 * No modern borders, roads, or place labels — antiquity has no use for them.
 *
 * Terrain is defined but starts hidden. A MapLibre source only fetches tiles
 * once a *visible* layer needs it, so the first paint never touches the
 * elevation server; hillshading costs nothing until the reader asks for it.
 *
 * All tiles are key-free open data: OpenFreeMap for vector water, and the
 * Mapzen/AWS Open Data terrain tiles for elevation.
 */
export function createMapStyle(): StyleSpecification {
  return {
    version: 8,
    name: "Mythocarta Ancient",
    sources: {
      openfreemap: {
        type: "vector",
        url: "https://tiles.openfreemap.org/planet",
        attribution:
          '<a href="https://openfreemap.org" target="_blank" rel="noreferrer">OpenFreeMap</a> © <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer">OpenStreetMap</a>',
      },
      relief: {
        type: "raster-dem",
        tiles: [
          "https://s3.amazonaws.com/elevation-tiles-prod/terrarium/{z}/{x}/{y}.png",
        ],
        encoding: "terrarium",
        tileSize: 256,
        maxzoom: 12,
        attribution:
          '<a href="https://registry.opendata.aws/terrain-tiles/" target="_blank" rel="noreferrer">Mapzen / AWS Open Data</a>',
      },
    },
    layers: [
      {
        id: "land",
        type: "background",
        paint: { "background-color": "#efe6d0" },
      },
      {
        id: LAYER_TERRAIN,
        type: "hillshade",
        source: "relief",
        // Hidden on first paint — toggled by the terrain control.
        layout: { visibility: "none" },
        paint: {
          "hillshade-exaggeration": 0.38,
          "hillshade-shadow-color": "#8a7452",
          "hillshade-highlight-color": "#fffaf0",
          "hillshade-accent-color": "#8a7452",
        },
      },
      {
        id: "water",
        type: "fill",
        source: "openfreemap",
        "source-layer": "water",
        paint: { "fill-color": "#9dbcc4" },
      },
      {
        id: "waterway",
        type: "line",
        source: "openfreemap",
        "source-layer": "waterway",
        paint: {
          "line-color": "#9dbcc4",
          "line-width": ["interpolate", ["linear"], ["zoom"], 5, 0.5, 9, 1.5],
        },
      },
    ],
  };
}
