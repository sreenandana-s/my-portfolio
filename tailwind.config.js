/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: "#0B1020",
          soft: "#10152A",
          deep: "#070A16",
        },
        ink: {
          DEFAULT: "#E9EBF6",
          muted: "#9098B8",
          faint: "#5C6382",
        },
        accent: {
          indigo: "#6366F1",
          violet: "#8B5CF6",
          glow: "#A5B4FC",
        },
        line: "rgba(255,255,255,0.08)",
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
      },
      borderRadius: {
        "2xl": "1.25rem",
        "3xl": "1.75rem",
      },
      boxShadow: {
        glass: "0 1px 1px rgba(255,255,255,0.06) inset, 0 20px 60px -20px rgba(0,0,0,0.6)",
        glow: "0 0 0 1px rgba(139,92,246,0.25), 0 8px 40px -8px rgba(99,102,241,0.45)",
      },
      backgroundImage: {
        "grad-primary": "linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)",
        "grad-text": "linear-gradient(135deg, #C7D2FE 0%, #A5B4FC 40%, #C4B5FD 100%)",
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [],
};
