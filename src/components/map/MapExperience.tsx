"use client";

import dynamic from "next/dynamic";
import { useCallback, useState } from "react";
import { useTranslations } from "next-intl";
import { MapSkeleton } from "./MapSkeleton";
import { RouteSidebar } from "./RouteSidebar";
import { SidebarLauncher } from "./SidebarLauncher";

/**
 * MapLibre and the map logic are a large bundle, so they are split out and
 * fetched on the client only. The shell — header, launcher, skeleton — paints
 * from static HTML while that chunk is still in flight.
 */
const MythMap = dynamic(() => import("./MythMap").then((mod) => mod.MythMap), {
  ssr: false,
  loading: () => <MapSkeleton />,
});

export function MapExperience() {
  const t = useTranslations("map");
  const [activeRouteIds, setActiveRouteIds] = useState<string[]>([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showTerrain, setShowTerrain] = useState(false);

  const toggleRoute = useCallback((routeId: string) => {
    setActiveRouteIds((current) =>
      current.includes(routeId)
        ? current.filter((id) => id !== routeId)
        : [...current, routeId]
    );
  }, []);

  const clearRoutes = useCallback(() => setActiveRouteIds([]), []);
  const closeSidebar = useCallback(() => setSidebarOpen(false), []);
  const openSidebar = useCallback(() => setSidebarOpen(true), []);
  const toggleTerrain = useCallback(
    () => setShowTerrain((current) => !current),
    []
  );

  return (
    <div className="absolute inset-0">
      <MythMap
        activeRouteIds={activeRouteIds}
        showTerrain={showTerrain}
        onToggleTerrain={toggleTerrain}
        sidebarOpen={sidebarOpen}
      />

      <SidebarLauncher
        open={sidebarOpen}
        activeCount={activeRouteIds.length}
        onOpen={openSidebar}
      />

      <RouteSidebar
        open={sidebarOpen}
        activeRouteIds={activeRouteIds}
        onToggleRoute={toggleRoute}
        onClearAll={clearRoutes}
        onClose={closeSidebar}
      />

      {!sidebarOpen && (
        <p
          className="glass-panel pointer-events-none absolute bottom-5 left-1/2 z-10 hidden -translate-x-1/2 rounded-full px-4 py-1.5 text-[11px] sm:block"
          style={{ color: "var(--ink-soft)" }}
        >
          {t("hint")}
        </p>
      )}
    </div>
  );
}
