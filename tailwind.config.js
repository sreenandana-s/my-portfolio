/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#F9F6F0",
        "canvas-subtle": "#F3EFE7",
        "canvas-surface": "#FAF7F2",
        sage: "#8FA385",
        "sage-light": "#E5EBE1",
        "sage-subtle": "#EDF3EB",
        "sage-muted": "#DDE6DA",
        "sage-dark": "#55674D",
        terracotta: "#D05A3F",
        "terracotta-dark": "#B84A31",
        "terracotta-light": "#F8EAE5",
        charcoal: "#23211E",
        "charcoal-muted": "#66615B",
        "neutral-400": "#969087",
        "neutral-300": "#D9D2C6",
        "neutral-200": "#E6E0D6",
        "neutral-100": "#F0EBE2",
      },
      fontFamily: {
        serif: [
          '"Playfair Display"',
          '"Cormorant Garamond"',
          "Georgia",
          "serif",
        ],
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
      },
      maxWidth: {
        content: "76rem",
      },
      borderWidth: {
        DEFAULT: "1px",
      },
    },
  },
  plugins: [],
};
