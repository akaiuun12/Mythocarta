import type { CSSProperties } from "react";

interface IconProps {
  className?: string;
  style?: CSSProperties;
}

const base = "h-5 w-5";

/** Odysseus — a ship over water that will not let it land. */
export function ShipIcon({ className = base }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 14h16l-2 3.5a2 2 0 0 1-1.7 1H7.7a2 2 0 0 1-1.7-1z" />
      <path d="M12 14V3" />
      <path d="M12 5.5l5.5 5.5H12" />
      <path d="M3 21c1.4-1 2.6-1 4 0s2.6 1 4 0 2.6-1 4 0 2.6 1 4 0" />
    </svg>
  );
}

/** Nestor — the fair wind that carried him home without a loss. */
export function WindIcon({ className = base }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 8h10.5a2.75 2.75 0 1 0-2.75-2.75" />
      <path d="M3 12h14a3 3 0 1 1-3 3" />
      <path d="M3 16h7.5a2.5 2.5 0 1 1-2.5 2.5" />
    </svg>
  );
}

/** Agamemnon — the crown that came home and did not leave the hall. */
export function CrownIcon({ className = base }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 17.5h16" />
      <path d="M4 17.5L3 7l5 3.5L12 4l4 6.5L21 7l-1 10.5" />
      <circle cx="12" cy="20.5" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

/** Telemachus — the chariot wheel that carried him from Pylos to Sparta. */
export function ChariotIcon({ className = base }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="8.5" cy="16" r="4.5" />
      <path d="M8.5 11.5v9M4 16h9" />
      <path d="M13 16v-5.5h5.5L21 16" />
      <path d="M18.5 10.5L21 5" />
    </svg>
  );
}

/** Menelaus — the storm swell that scattered his fleet as far as Egypt. */
export function WaveIcon({ className = base }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M2 9c1.5-2 3.5-2 5 0s3.5 2 5 0 3.5-2 5 0 3.5 2 5 0" />
      <path d="M2 15c1.5-2 3.5-2 5 0s3.5 2 5 0 3.5-2 5 0 3.5 2 5 0" />
      <path d="M2 21c1.5-2 3.5-2 5 0s3.5 2 5 0 3.5-2 5 0 3.5 2 5 0" />
    </svg>
  );
}

const ROUTE_ICONS = {
  odyssey: ShipIcon,
  sail: WindIcon,
  crown: CrownIcon,
  chariot: ChariotIcon,
  wave: WaveIcon,
} as const;

export type RouteIconKey = keyof typeof ROUTE_ICONS;

export function RouteIcon({
  name,
  className,
}: {
  name: RouteIconKey;
  className?: string;
}) {
  const Component = ROUTE_ICONS[name] ?? ShipIcon;
  return <Component className={className} />;
}

/** The launcher: the same compass rose as the site mark, drawn as a line icon. */
export function CompassIcon({ className = base }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M15.5 8.5l-2 5-5 2 2-5z" />
    </svg>
  );
}

export function MountainIcon({ className = base }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M2.5 19h19L14 6l-3.5 6-2-2.5z" />
      <path d="M10.8 12.2l2.4 2.2" />
    </svg>
  );
}

export function CloseIcon({ className = base }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

export function PlusIcon({ className = base }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export function MinusIcon({ className = base }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
    </svg>
  );
}

export function ChevronIcon({ className = base, style }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      style={style}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

/** An open letter, for reaching the developer directly. */
export function MailIcon({ className = base }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="5.5" width="18" height="13" rx="2.2" />
      <path d="M4 7l8 6 8-6" />
    </svg>
  );
}
