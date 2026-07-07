import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          50: "#F6F6F7",
          100: "#E9E9EB",
          200: "#D5D5D9",
          300: "#B3B3BA",
          400: "#8A8A94",
          500: "#6D6D77",
          600: "#55555E",
          700: "#3F3F46",
          800: "#26262B",
          900: "#141417",
          950: "#0B0B0D",
        },
        gold: {
          50: "#FBF7EE",
          100: "#F5EBD5",
          200: "#EAD7AB",
          300: "#DDBF7C",
          400: "#D2AC5C",
          500: "#C49A47",
          600: "#A87E3A",
          700: "#8A6530",
          800: "#6E4F28",
          900: "#5A4123",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
      },
      maxWidth: {
        container: "76rem",
      },
      keyframes: {
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
