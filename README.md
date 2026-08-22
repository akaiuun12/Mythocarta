# 🏛️ Mythocarta

**An interactive, game-like web map exploring Ancient Greek mythology and geography.**

Mythocarta charts the world of the Greek epics on a terrain-optional, borderless
map of the Mediterranean. Hover a legendary city to meet its ruler and the other
names it has carried, then trace a hero's voyage as it draws itself across the
sea, cape by cape.

> 미토카르타는 고대 그리스 신화의 서사와 지리를 시각적으로 탐험할 수 있는 인터랙티브 웹 지도입니다. 영어/한국어를 지원합니다.

---

## ✨ Features

- 🗺️ **Ancient-world map** — a custom "parchment" style with no modern borders,
  roads, or labels. Terrain starts hidden and is one button away, so the first
  paint never waits on elevation tiles.
- 🏺 **City-states & rulers** — hovering a city opens a glass card with its
  ruler, a short account of the place, and its **alternate names**: Sparta is
  also Lacedaemon, Corinth was once Ephyra.
- ⛵ **Hero voyages** — a compass button opens a sidebar of voyages. Toggle one
  and the track draws itself along real coastlines and straits while the rest of
  the world dims; mythic landfalls — Ogygia, the isle of the Sirens — label
  themselves the moment the line reaches them.
- 📚 **A knowledge base, not hardcoded strings** — the mythology lives in a
  typed, sourced, bilingual content store designed to be added to for years.
  See [docs/CONTENT.md](docs/CONTENT.md).
- 🌐 **i18n (EN / KO)** — English by default, automatic Korean detection, and a
  manual toggle in the header.
- 🔍 **SEO & AEO** — localized metadata, OpenGraph, sitemap, and JSON-LD in which
  every place carries its coordinates and every alternate name, and every voyage
  its full itinerary.
- ⚡ **Fast by design** — the map bundle is split out and fetched on the client;
  the shell paints from static HTML while it loads.

## 🧰 Tech Stack

| Layer | Choice |
| --- | --- |
| Framework | [Next.js 15](https://nextjs.org) (App Router) + TypeScript |
| Map | [MapLibre GL JS](https://maplibre.org) — no API key required |
| Map data | [OpenFreeMap](https://openfreemap.org) vector tiles + [Mapzen/AWS Open Data](https://registry.opendata.aws/terrain-tiles/) terrain |
| Styling | [Tailwind CSS 4](https://tailwindcss.com) + custom glassmorphism |
| Animation | [Framer Motion](https://motion.dev) + MapLibre paint transitions |
| Type | Cormorant Garamond · Gowun Batang (한글) · Noto Sans KR |
| i18n | [next-intl](https://next-intl.dev) |
| Analytics | Google Analytics 4 (opt-in) |

All map tiles are free, open data — **no API keys or accounts are needed to run
this project.**

## 🚀 Getting Started

```bash
npm install
cp .env.example .env.local   # optional
npm run dev
```

Open <http://localhost:3000>; you will be redirected to `/en` or `/ko` based on
your browser language.

| Script | Does |
| --- | --- |
| `npm run dev` | Development server |
| `npm run build` | Production build **and** full content validation |
| `npm run typecheck` | Types only, no build |

### Environment variables

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | GA4 measurement ID (`G-…`). Empty disables analytics entirely. |
| `NEXT_PUBLIC_SITE_URL` | Canonical URL used in metadata, sitemap, and JSON-LD. |

## 🗂️ Project Structure

```
src/
├── app/
│   ├── [locale]/          Locale-scoped routes (en / ko)
│   │   ├── layout.tsx     Metadata, fonts, i18n provider, GA4
│   │   └── page.tsx       Map page (server component)
│   ├── globals.css        Tailwind + glassmorphism + marker styles
│   ├── icon.svg           Favicon — the compass rose
│   └── robots.ts / sitemap.ts
├── content/               ← the knowledge base (see docs/CONTENT.md)
│   ├── schema.ts          Types + definePlace / defineFigure / defineRoute
│   ├── validate.ts        Build-time referential integrity
│   ├── index.ts           Registry and lookup maps
│   ├── places/            One file per location
│   ├── figures/           One file per person
│   └── routes/            One file per voyage
├── components/
│   ├── Header.tsx · LanguageToggle.tsx · Logo.tsx · icons.tsx
│   ├── Analytics.tsx · StructuredData.tsx
│   └── map/
│       ├── MapExperience.tsx   Client state + lazy map loading
│       ├── MythMap.tsx         MapLibre map, markers, route animation
│       ├── SidebarLauncher.tsx Compass button
│       ├── RouteSidebar.tsx    Voyage list and toggles
│       ├── MapControls.tsx     Terrain toggle + zoom
│       ├── CityTooltip.tsx     Hover card
│       └── MapSkeleton.tsx     Loading state
├── data/mapStyle.ts       The custom MapLibre style
├── lib/
│   ├── routeGeometry.ts   Spline smoothing + draw animation math
│   └── localize.ts        Reads localized content fields
├── i18n/                  next-intl routing / request config
├── messages/              UI strings only — mythology lives in content/
└── middleware.ts          Locale detection & redirects
```

## 🧭 Adding to the map

Everything mythological is data. Adding a city, a hero, a voyage, or a single
alternate name is an isolated edit to one file under `src/content/`, and the
markers, hover cards, sidebar, and structured data all follow from it.

The full contract — schema, walkthroughs, validation rules, and house style — is
in **[docs/CONTENT.md](docs/CONTENT.md)**.

## 🗺️ How the voyages are drawn

Route waypoints are hand-placed at capes, strait mouths, and channel midpoints,
then smoothed with a **centripetal Catmull-Rom spline**. Centripetal
parameterisation never loops or overshoots its control points, so a hard turn —
the Strait of Messina, rounding Cape Malea — bends tightly instead of bulging
over the land the waypoints were placed to avoid. The curve passes exactly
through every authored point; across all three voyages it strays at most ~8 km
from the drawn corridor, all of it in open water.

## 🤝 Contributing

Issues and pull requests are welcome. Please keep the tone of the project:
minimal, elegant, and faithful to the myths. Route geography follows the
*traditional* mythical identifications, not a nautical record — and says so in
the data when scholars disagree.

## 📜 License & Data Attribution

Code is released under the [MIT License](LICENSE).

Map data © [OpenStreetMap](https://www.openstreetmap.org/copyright) contributors,
vector tiles by [OpenFreeMap](https://openfreemap.org), terrain from the
[Mapzen / AWS Open Data](https://registry.opendata.aws/terrain-tiles/) terrain
tiles. Curated mythological content may be licensed separately from the source
code.
