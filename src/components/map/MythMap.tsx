"use client";

import { useEffect, useRef, useState } from "react";
import maplibregl, {
  GeoJSONSource,
  Map as MapLibreMap,
  Marker,
} from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { AnimatePresence } from "framer-motion";
import { useLocale } from "next-intl";
import {
  PLACES,
  PLACE_BY_ID,
  ROUTES,
  type PlaceRecord,
  type RouteRecord,
} from "@/content";
import { localize } from "@/lib/localize";
import {
  createMapStyle,
  LAYER_DIM,
  LAYER_TERRAIN,
  MAP_CENTER,
  MAP_MAX_BOUNDS,
  MAP_MAX_ZOOM,
  MAP_MIN_ZOOM,
  MAP_ZOOM,
} from "@/data/mapStyle";
import {
  fractionAlong,
  getSmoothedLandPaths,
  getSmoothedPath,
  pathBounds,
  pathLength,
  pointsAlong,
  type Point,
} from "@/lib/routeGeometry";
import { CityTooltip } from "./CityTooltip";
import { MapControls } from "./MapControls";

const WORLD_POLYGON: GeoJSON.Feature = {
  type: "Feature",
  properties: {},
  geometry: {
    type: "Polygon",
    coordinates: [
      [
        [-180, -85],
        [180, -85],
        [180, 85],
        [-180, 85],
        [-180, -85],
      ],
    ],
  },
};

const EMPTY_LINE: GeoJSON.Feature = {
  type: "Feature",
  properties: {},
  geometry: { type: "LineString", coordinates: [] },
};

/**
 * How close the camera comes when a reader picks a city. Deliberately not the
 * maximum: the point is to put the city in the middle of the frame with its
 * neighbours still in view, not to dive into it.
 */
const PLACE_FOCUS_ZOOM = 7;

function multiLineFeature(legs: Point[][]): GeoJSON.Feature {
  return {
    type: "Feature",
    properties: {},
    geometry: { type: "MultiLineString", coordinates: legs },
  };
}

function lineFeature(coordinates: Point[]): GeoJSON.Feature {
  return {
    type: "Feature",
    properties: {},
    geometry: { type: "LineString", coordinates },
  };
}

function drawDurationFor(path: Point[]): number {
  return 1000 + Math.min(4200, pathLength(path) * 42);
}

export interface MythMapProps {
  activeRouteIds: string[];
  showTerrain: boolean;
  onToggleTerrain: () => void;
  sidebarOpen: boolean;
}

export function MythMap({
  activeRouteIds,
  showTerrain,
  onToggleTerrain,
  sidebarOpen,
}: MythMapProps) {
  const locale = useLocale();

  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<MapLibreMap | null>(null);
  const cityMarkersRef = useRef(new Map<string, Marker>());
  const cityElementsRef = useRef(new Map<string, HTMLElement>());
  const stopMarkersRef = useRef(new Map<string, Marker[]>());
  const framesRef = useRef(new Map<string, number>());
  const activeIdsRef = useRef(new Set<string>());
  const previousIdsRef = useRef(new Set<string>());
  const sidebarOpenRef = useRef(sidebarOpen);
  /** The city a reader deliberately picked, as opposed to merely hovered. */
  const pinnedIdRef = useRef<string | null>(null);

  const [ready, setReady] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  // Bumped on every camera move so the tooltip re-projects with the map.
  const [, setViewVersion] = useState(0);

  sidebarOpenRef.current = sidebarOpen;

  /* ── Bootstrap (once) ───────────────────────────────────────────────── */
  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    const map = new maplibregl.Map({
      container: containerRef.current,
      style: createMapStyle(),
      center: MAP_CENTER,
      zoom: MAP_ZOOM - 0.5,
      minZoom: MAP_MIN_ZOOM,
      maxZoom: MAP_MAX_ZOOM,
      maxBounds: MAP_MAX_BOUNDS,
      dragRotate: false,
      pitchWithRotate: false,
      attributionControl: { compact: true },
    });
    map.touchZoomRotate.disableRotation();

    map.on("move", () => setViewVersion((version) => version + 1));
    map.on("click", () => {
      pinnedIdRef.current = null;
      setSelectedId(null);
    });

    map.on("load", () => {
      // The dimming veil sits above the land and below the routes, so an active
      // voyage glows against a darkened world.
      map.addSource(LAYER_DIM, { type: "geojson", data: WORLD_POLYGON });
      map.addLayer({
        id: LAYER_DIM,
        type: "fill",
        source: LAYER_DIM,
        paint: {
          "fill-color": "#1c2a33",
          "fill-opacity": 0,
          "fill-opacity-transition": { duration: 700 },
        },
      });

      for (const route of ROUTES) {
        const sourceId = `route-${route.id}`;

        // Overland stages — a chariot road, a march up from the harbour — are
        // drawn dashed and slightly thinner, so a reader can tell at a glance
        // which stretches were sailed and which were walked.
        if (route.landPaths?.length) {
          const landSourceId = `${sourceId}-land`;
          map.addSource(landSourceId, {
            type: "geojson",
            data: multiLineFeature(getSmoothedLandPaths(route.id, route.landPaths)),
          });
          map.addLayer({
            id: landSourceId,
            type: "line",
            source: landSourceId,
            layout: { "line-cap": "round", "line-join": "round" },
            paint: {
              "line-color": route.color,
              "line-width": 2,
              "line-dasharray": [1, 2],
              "line-opacity": 0,
              "line-opacity-transition": { duration: 500, delay: 250 },
            },
          });
        }

        map.addSource(sourceId, { type: "geojson", data: EMPTY_LINE });
        map.addLayer({
          id: `${sourceId}-glow`,
          type: "line",
          source: sourceId,
          layout: { "line-cap": "round", "line-join": "round" },
          paint: {
            "line-color": route.color,
            "line-width": 12,
            "line-blur": 9,
            "line-opacity": 0,
            "line-opacity-transition": { duration: 400 },
          },
        });
        map.addLayer({
          id: `${sourceId}-line`,
          type: "line",
          source: sourceId,
          layout: { "line-cap": "round", "line-join": "round" },
          paint: {
            "line-color": route.color,
            "line-width": 3,
            "line-opacity": 0,
            "line-opacity-transition": { duration: 400 },
          },
        });
      }

      setReady(true);
      map.easeTo({ zoom: MAP_ZOOM, duration: 1400 });
    });

    mapRef.current = map;

    return () => {
      for (const frame of framesRef.current.values()) cancelAnimationFrame(frame);
      framesRef.current.clear();
      map.remove();
      mapRef.current = null;
    };
  }, []);

  /* ── City markers (rebuilt when the language changes) ────────────────── */
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !ready) return;

    for (const marker of cityMarkersRef.current.values()) marker.remove();
    cityMarkersRef.current.clear();
    cityElementsRef.current.clear();

    for (const place of PLACES) {
      const name = localize(place.names.primary, locale);

      const element = document.createElement("button");
      element.type = "button";
      element.className = "city-marker";
      element.setAttribute("aria-label", name);

      const dot = document.createElement("span");
      dot.className = "city-marker__dot";

      const label = document.createElement("span");
      label.className = "city-marker__label";
      label.textContent = name;

      const ancient = document.createElement("span");
      ancient.className = "city-marker__ancient";
      ancient.textContent = place.names.ancient;
      label.appendChild(ancient);

      element.append(dot, label);

      // Hovering previews a city; clicking *pins* it and brings the camera
      // over. The distinction matters because focusing slides the marker out
      // from under the cursor — without a pin, the pointerleave that follows
      // would close the very card the click just opened.
      element.addEventListener("pointerenter", () => {
        if (pinnedIdRef.current) return;
        setSelectedId(place.id);
      });
      element.addEventListener("pointerleave", (event) => {
        // Touch taps fire a synthetic enter/leave pair; keep the card open there.
        if (event.pointerType === "touch") return;
        if (pinnedIdRef.current) return;
        setSelectedId(null);
      });
      element.addEventListener("click", (event) => {
        event.stopPropagation();
        pinnedIdRef.current = place.id;
        setSelectedId(place.id);
        focusPlace(place);
      });

      const marker = new maplibregl.Marker({
        element,
        anchor: "top",
        offset: [0, -8],
      })
        .setLngLat(place.coordinates)
        .addTo(map);

      cityMarkersRef.current.set(place.id, marker);
      cityElementsRef.current.set(place.id, element);
    }

    applyDimming(activeIdsRef.current);
  }, [ready, locale]);

  /* ── Terrain: the source only fetches tiles once the layer is shown ──── */
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !ready) return;
    map.setLayoutProperty(
      LAYER_TERRAIN,
      "visibility",
      showTerrain ? "visible" : "none"
    );
  }, [showTerrain, ready]);

  /* ── Route activation: draw, dim, label, and frame ───────────────────── */
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !ready) return;

    const active = new Set(activeRouteIds);
    activeIdsRef.current = active;

    for (const route of ROUTES) {
      const wasActive = previousIdsRef.current.has(route.id);
      const isActive = active.has(route.id);
      if (isActive && !wasActive) activateRoute(map, route);
      if (!isActive && wasActive) deactivateRoute(map, route);
    }
    previousIdsRef.current = active;

    map.setPaintProperty(LAYER_DIM, "fill-opacity", active.size > 0 ? 0.34 : 0);
    applyDimming(active);
    frameCamera(map, active);
  }, [activeRouteIds, ready]);

  /**
   * Brings a chosen city to the middle of the frame.
   *
   * The centre is nudged down and, when the panel is open, to the right, so the
   * marker lands clear of both the sidebar and the hover card that opens above
   * it — otherwise "centred" would put the card behind the header. The zoom
   * only ever tightens: a reader who has already zoomed in keeps their scale.
   */
  function focusPlace(place: PlaceRecord) {
    const map = mapRef.current;
    if (!map) return;

    map.easeTo({
      center: place.coordinates,
      zoom: Math.max(map.getZoom(), PLACE_FOCUS_ZOOM),
      offset: [sidebarOpenRef.current ? 150 : 0, 70],
      duration: 900,
      easing: (t) => 1 - Math.pow(1 - t, 3),
    });
  }

  /** Fades every city that has nothing to do with the active voyages. */
  function applyDimming(active: Set<string>) {
    const featured = new Set(
      ROUTES.filter((route) => active.has(route.id)).flatMap((route) =>
        route.stops.map((stop) => stop.placeId).filter(Boolean)
      ) as string[]
    );
    for (const [id, element] of cityElementsRef.current) {
      element.classList.toggle(
        "city-marker--dimmed",
        active.size > 0 && !featured.has(id)
      );
    }
  }

  function activateRoute(map: MapLibreMap, route: RouteRecord) {
    const sourceId = `route-${route.id}`;
    const path = getSmoothedPath(route.id, route.path);
    const total = pathLength(path);
    const duration = drawDurationFor(path);

    const running = framesRef.current.get(route.id);
    if (running !== undefined) cancelAnimationFrame(running);

    map.setPaintProperty(`${sourceId}-line`, "line-opacity", 0.95);
    map.setPaintProperty(`${sourceId}-glow`, "line-opacity", 0.3);
    if (route.landPaths?.length) {
      map.setPaintProperty(`${sourceId}-land`, "line-opacity", 0.8);
    }

    addStopMarkers(map, route, path, duration);

    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      // Ease out, so the ship leaves fast and settles into its landfall.
      const eased = 1 - Math.pow(1 - progress, 2.2);
      const source = map.getSource(sourceId) as GeoJSONSource | undefined;
      source?.setData(lineFeature(pointsAlong(path, total * eased)));

      if (progress < 1) {
        framesRef.current.set(route.id, requestAnimationFrame(step));
      } else {
        framesRef.current.delete(route.id);
      }
    };
    framesRef.current.set(route.id, requestAnimationFrame(step));
  }

  function deactivateRoute(map: MapLibreMap, route: RouteRecord) {
    const sourceId = `route-${route.id}`;
    const running = framesRef.current.get(route.id);
    if (running !== undefined) {
      cancelAnimationFrame(running);
      framesRef.current.delete(route.id);
    }

    map.setPaintProperty(`${sourceId}-line`, "line-opacity", 0);
    map.setPaintProperty(`${sourceId}-glow`, "line-opacity", 0);
    if (route.landPaths?.length) {
      map.setPaintProperty(`${sourceId}-land`, "line-opacity", 0);
    }
    removeStopMarkers(route.id);

    window.setTimeout(() => {
      // Skip the reset if the voyage was switched back on during the fade.
      if (activeIdsRef.current.has(route.id)) return;
      const source = mapRef.current?.getSource(sourceId) as
        | GeoJSONSource
        | undefined;
      source?.setData(EMPTY_LINE);
    }, 450);
  }

  /**
   * Labels the mythic landfalls — Ogygia, the isle of the Sirens — that have no
   * city marker of their own. Each one waits for the drawn line to reach it.
   */
  function addStopMarkers(
    map: MapLibreMap,
    route: RouteRecord,
    path: Point[],
    duration: number
  ) {
    removeStopMarkers(route.id);
    const markers: Marker[] = [];

    for (const stop of route.stops) {
      if (stop.placeId) continue;

      const element = document.createElement("div");
      element.className = "stop-marker";
      element.style.animationDelay = `${Math.round(
        fractionAlong(path, stop.coordinates) * duration
      )}ms`;

      const pip = document.createElement("span");
      pip.className = "stop-marker__pip";
      pip.style.background = route.color;

      const label = document.createElement("span");
      label.className = "stop-marker__label";
      label.textContent = stop.name ? localize(stop.name, locale) : stop.id;

      element.append(pip, label);

      markers.push(
        new maplibregl.Marker({ element, anchor: "left", offset: [8, 0] })
          .setLngLat(stop.coordinates)
          .addTo(map)
      );
    }

    stopMarkersRef.current.set(route.id, markers);
  }

  function removeStopMarkers(routeId: string) {
    for (const marker of stopMarkersRef.current.get(routeId) ?? []) {
      marker.remove();
    }
    stopMarkersRef.current.delete(routeId);
  }

  /** Pulls the camera back far enough to hold every active voyage. */
  function frameCamera(map: MapLibreMap, active: Set<string>) {
    if (active.size === 0) {
      map.easeTo({ center: MAP_CENTER, zoom: MAP_ZOOM, duration: 1200 });
      return;
    }

    const points = ROUTES.filter((route) => active.has(route.id)).flatMap(
      (route) => [
        ...getSmoothedPath(route.id, route.path),
        ...getSmoothedLandPaths(route.id, route.landPaths ?? []).flat(),
      ]
    );
    const [west, south, east, north] = pathBounds(points);

    map.fitBounds(
      [
        [west, south],
        [east, north],
      ],
      {
        padding: {
          top: 110,
          bottom: 90,
          left: sidebarOpenRef.current ? 380 : 70,
          right: 70,
        },
        duration: 1500,
        maxZoom: 7,
      }
    );
  }

  /* ── Tooltip ─────────────────────────────────────────────────────────── */
  const selectedPlace = selectedId ? PLACE_BY_ID.get(selectedId) : undefined;
  const anchor =
    selectedPlace && mapRef.current
      ? mapRef.current.project(selectedPlace.coordinates)
      : null;

  return (
    <div className="absolute inset-0">
      <div ref={containerRef} className="h-full w-full" />

      {ready && (
        <MapControls
          showTerrain={showTerrain}
          onToggleTerrain={onToggleTerrain}
          onZoomIn={() => mapRef.current?.zoomIn({ duration: 400 })}
          onZoomOut={() => mapRef.current?.zoomOut({ duration: 400 })}
        />
      )}

      <AnimatePresence>
        {selectedPlace && anchor && (
          <CityTooltip
            key={selectedPlace.id}
            place={selectedPlace}
            point={{ x: anchor.x, y: anchor.y }}
            onClose={() => {
              pinnedIdRef.current = null;
              setSelectedId(null);
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default MythMap;
