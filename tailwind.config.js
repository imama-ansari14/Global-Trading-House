/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./data/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0A1930",
          50: "#EEF1F6",
          100: "#D4DBE7",
          200: "#A9B7CF",
          300: "#7E93B7",
          400: "#536F9F",
          500: "#2F5187",
          600: "#1E3A66",
          700: "#132A4D",
          800: "#0C1F3B",
          900: "#0A1930",
          950: "#060F1E",
        },
        brand: {
          red: "#DC0000",
          "red-dark": "#A80000",
          navy: "#0A1930",
          "navy-light": "#132A4D",
        },
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      boxShadow: {
        card: "0 4px 24px -4px rgba(10,25,48,0.12)",
        "card-hover": "0 12px 32px -8px rgba(10,25,48,0.22)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
