/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        raspberry: "#5B3DF5",
        "pale-sky": "#E8DEFF",
        canvas: "#F4EFFC",
        "canvas-muted": "#EDE6F8",
        charcoal: "#1F1F1F",
        "charcoal-muted": "#4A4A4A",
        "neutral-600": "#5A5A5A",
        "neutral-400": "#8E8E93",
        "neutral-300": "#D8D0E3",
        "neutral-200": "#E6DFEE",
        "neutral-100": "#F1EBF7",
        "off-white": "#FAF8FD",
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
