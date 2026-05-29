// Aykon Ventures monogram seal — AV intertwined in a circle.
// Used in nav, load overlay, footer. Strokes follow currentColor.
export function Seal({ size = 40, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
    >
      <circle cx="50" cy="50" r="48" />
      <circle cx="50" cy="50" r="38" strokeDasharray="1 3" opacity="0.45" />
      {/* A */}
      <path d="M30 70 L45 30 L60 70 M36 58 L54 58" strokeWidth="1.3" />
      {/* V overlay */}
      <path d="M40 30 L55 70 L70 30" strokeWidth="1.3" opacity="0.7" />
      {/* hairline ticks */}
      <path d="M50 4 L50 10 M50 90 L50 96 M4 50 L10 50 M90 50 L96 50" opacity="0.5" />
    </svg>
  );
}
