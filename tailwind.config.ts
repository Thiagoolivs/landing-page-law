import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Grafite frio (levemente azulado) — base neutra
        ink: {
          50: "#F4F5F7",
          100: "#E7E9ED",
          200: "#D1D5DE",
          300: "#AEB4C1",
          400: "#848B9C",
          500: "#666D7E",
          600: "#4D5361",
          700: "#393E49",
          800: "#22252D",
          900: "#13151B",
          950: "#0C0D12",
        },
        // Off-white morno, para suavizar o modo claro (sem branco puro)
        bone: {
          DEFAULT: "#F4F3F0",
          100: "#FBFAF8",
          200: "#F4F3F0",
          300: "#EAE8E3",
        },
        // Acento azul-meia-noite → azul-luar (escala para os dois temas)
        navy: {
          50: "#EEF1F6",
          100: "#DAE1EC",
          200: "#B5C4DA",
          300: "#90A3C1", // "luar": acento no modo escuro
          400: "#6A80A4",
          500: "#4B6288",
          600: "#374E6E",
          700: "#273954",
          800: "#1E2A44", // meia-noite: acento no modo claro
          900: "#151D30",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
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
