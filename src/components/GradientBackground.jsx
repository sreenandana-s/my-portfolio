// Pure CSS/SVG animated gradient backdrop — no canvas, no particles.
// Two slow-drifting radial blooms plus a fine grid give the hero depth
// without competing with the type.

export default function GradientBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.07]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="grid"
            width="56"
            height="56"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 56 0 L 0 0 0 56"
              fill="none"
              stroke="#8FA0FF"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      <div className="bg-bloom bg-bloom--one" />
      <div className="bg-bloom bg-bloom--two" />

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 50% 0%, transparent 0%, #0B1020 78%)",
        }}
      />

      <style>{`
        .bg-bloom {
          position: absolute;
          width: 60vw;
          height: 60vw;
          max-width: 780px;
          max-height: 780px;
          border-radius: 9999px;
          filter: blur(110px);
          opacity: 0.55;
          will-change: transform;
        }
        .bg-bloom--one {
          top: -18%;
          left: -12%;
          background: radial-gradient(circle, #6366F1 0%, transparent 70%);
          animation: drift-one 22s ease-in-out infinite;
        }
        .bg-bloom--two {
          top: -8%;
          right: -16%;
          background: radial-gradient(circle, #8B5CF6 0%, transparent 70%);
          animation: drift-two 26s ease-in-out infinite;
        }
        @keyframes drift-one {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(6%, 8%) scale(1.08); }
        }
        @keyframes drift-two {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-8%, 6%) scale(1.05); }
        }
        @media (prefers-reduced-motion: reduce) {
          .bg-bloom--one, .bg-bloom--two { animation: none; }
        }
      `}</style>
    </div>
  );
}
