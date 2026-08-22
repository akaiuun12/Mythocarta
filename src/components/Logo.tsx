/**
 * The Mythocarta mark: a compass rose on a deep-sea medallion.
 * `carta` is the map, and the rose is the oldest thing drawn on one.
 */
export function Logo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="mc-sea" x1="0.15" y1="0" x2="0.85" y2="1">
          <stop offset="0" stopColor="#14485c" />
          <stop offset="0.55" stopColor="#0d5a6b" />
          <stop offset="1" stopColor="#07303c" />
        </linearGradient>
        <linearGradient id="mc-gold" x1="0.2" y1="0" x2="0.8" y2="1">
          <stop offset="0" stopColor="#f8e9c2" />
          <stop offset="0.5" stopColor="#e6c67f" />
          <stop offset="1" stopColor="#c69a45" />
        </linearGradient>
      </defs>
      <circle cx="32" cy="32" r="32" fill="url(#mc-sea)" />
      <circle
        cx="32"
        cy="32"
        r="27"
        fill="none"
        stroke="url(#mc-gold)"
        strokeWidth="0.9"
        opacity="0.4"
      />
      <path
        d="M32 8 L34.10 26.92 L42.25 21.75 L37.08 29.90 L56 32 L37.08 34.10 L42.25 42.25 L34.10 37.08 L32 56 L29.90 37.08 L21.75 42.25 L26.92 34.10 L8 32 L26.92 29.90 L21.75 21.75 L29.90 26.92 Z"
        fill="url(#mc-gold)"
      />
      <circle cx="32" cy="32" r="3.6" fill="#07303c" />
      <circle cx="32" cy="32" r="1.6" fill="url(#mc-gold)" />
    </svg>
  );
}
