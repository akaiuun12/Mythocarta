export type Point = [number, number];

function distance(a: Point, b: Point): number {
  return Math.hypot(b[0] - a[0], b[1] - a[1]);
}

function blend(a: Point, b: Point, wa: number, wb: number): Point {
  return [a[0] * wa + b[0] * wb, a[1] * wa + b[1] * wb];
}

/** Reflects a point across its neighbour, to give the spline phantom endpoints. */
function reflect(inner: Point, outer: Point): Point {
  return [2 * outer[0] - inner[0], 2 * outer[1] - inner[1]];
}

const EPSILON = 1e-9;

/**
 * Centripetal Catmull-Rom interpolation (alpha = 0.5) of one span, using the
 * Barry-Goldman pyramidal formulation.
 *
 * Centripetal parameterisation is the reason routes can hug a coastline: unlike
 * the uniform variant it provably never loops or overshoots the control points,
 * so a hard turn — the Strait of Messina, rounding Cape Malea — bends tightly
 * instead of bulging out over the land the waypoints were placed to avoid.
 */
function interpolateSpan(
  p0: Point,
  p1: Point,
  p2: Point,
  p3: Point,
  samples: number
): Point[] {
  const alpha = 0.5;
  const t0 = 0;
  const t1 = t0 + Math.pow(distance(p0, p1), alpha);
  const t2 = t1 + Math.pow(distance(p1, p2), alpha);
  const t3 = t2 + Math.pow(distance(p2, p3), alpha);

  // Coincident control points collapse the knot spacing; fall back to a
  // straight span rather than dividing by zero.
  if (t1 - t0 < EPSILON || t2 - t1 < EPSILON || t3 - t2 < EPSILON) {
    return Array.from({ length: samples }, (_, i) => {
      const t = i / samples;
      return blend(p1, p2, 1 - t, t);
    });
  }

  const out: Point[] = [];
  for (let i = 0; i < samples; i++) {
    const t = t1 + ((t2 - t1) * i) / samples;

    const a1 = blend(p0, p1, (t1 - t) / (t1 - t0), (t - t0) / (t1 - t0));
    const a2 = blend(p1, p2, (t2 - t) / (t2 - t1), (t - t1) / (t2 - t1));
    const a3 = blend(p2, p3, (t3 - t) / (t3 - t2), (t - t2) / (t3 - t2));

    const b1 = blend(a1, a2, (t2 - t) / (t2 - t0), (t - t0) / (t2 - t0));
    const b2 = blend(a2, a3, (t3 - t) / (t3 - t1), (t - t1) / (t3 - t1));

    out.push(blend(b1, b2, (t2 - t) / (t2 - t1), (t - t1) / (t2 - t1)));
  }
  return out;
}

/** Longer spans get more samples, so curvature stays even along the whole track. */
function samplesFor(a: Point, b: Point): number {
  return Math.min(24, Math.max(4, Math.round(distance(a, b) * 18)));
}

/**
 * Turns hand-placed waypoints into a sailed-looking curve.
 * The returned polyline passes exactly through every original control point.
 */
export function smoothPath(control: Point[]): Point[] {
  if (control.length < 3) return [...control];

  const first = reflect(control[1], control[0]);
  const last = reflect(
    control[control.length - 2],
    control[control.length - 1]
  );
  const padded: Point[] = [first, ...control, last];

  const result: Point[] = [];
  for (let i = 1; i < padded.length - 2; i++) {
    result.push(
      ...interpolateSpan(
        padded[i - 1],
        padded[i],
        padded[i + 1],
        padded[i + 2],
        samplesFor(padded[i], padded[i + 1])
      )
    );
  }
  result.push(control[control.length - 1]);
  return result;
}

// Smoothing a route is deterministic and not free, so each one is computed
// once and reused across every toggle for the life of the page.
const smoothedCache = new Map<string, Point[]>();

export function getSmoothedPath(routeId: string, control: Point[]): Point[] {
  const cached = smoothedCache.get(routeId);
  if (cached) return cached;
  const smoothed = smoothPath(control);
  smoothedCache.set(routeId, smoothed);
  return smoothed;
}

/** Total length of a polyline in degree-space, used only to pace the animation. */
export function pathLength(path: Point[]): number {
  let total = 0;
  for (let i = 1; i < path.length; i++) total += distance(path[i - 1], path[i]);
  return total;
}

/**
 * The polyline truncated at `travelled` distance from its start, with the final
 * point interpolated along the current segment — the basis of the
 * "line draws itself" animation. Always returns a valid two-point LineString.
 */
export function pointsAlong(path: Point[], travelled: number): Point[] {
  if (travelled <= 0) return [path[0], path[0]];

  const result: Point[] = [path[0]];
  let covered = 0;

  for (let i = 1; i < path.length; i++) {
    const from = path[i - 1];
    const to = path[i];
    const span = distance(from, to);

    if (covered + span >= travelled) {
      const t = span === 0 ? 0 : (travelled - covered) / span;
      result.push([
        from[0] + (to[0] - from[0]) * t,
        from[1] + (to[1] - from[1]) * t,
      ]);
      return result;
    }

    covered += span;
    result.push(to);
  }

  return result;
}

/** Position of the leading edge of the drawing animation, for the ship marker. */
export function pointAt(path: Point[], travelled: number): Point {
  const drawn = pointsAlong(path, travelled);
  return drawn[drawn.length - 1];
}

/**
 * How far along the track a landfall sits, as 0-1.
 *
 * Stop markers use this to time their entrance to the moment the drawn line
 * actually reaches them, so the labels appear in the order the voyage happened
 * rather than all at once.
 */
export function fractionAlong(path: Point[], target: Point): number {
  const total = pathLength(path);
  if (total === 0) return 0;

  let nearestIndex = 0;
  let nearestDistance = Infinity;
  for (let i = 0; i < path.length; i++) {
    const d = distance(path[i], target);
    if (d < nearestDistance) {
      nearestDistance = d;
      nearestIndex = i;
    }
  }

  let covered = 0;
  for (let i = 1; i <= nearestIndex; i++) covered += distance(path[i - 1], path[i]);
  return covered / total;
}

/** Bounding box of a polyline as [west, south, east, north]. */
export function pathBounds(path: Point[]): [number, number, number, number] {
  let west = Infinity;
  let south = Infinity;
  let east = -Infinity;
  let north = -Infinity;
  for (const [lng, lat] of path) {
    if (lng < west) west = lng;
    if (lng > east) east = lng;
    if (lat < south) south = lat;
    if (lat > north) north = lat;
  }
  return [west, south, east, north];
}
