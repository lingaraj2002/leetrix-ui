import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pixel: ["var(--font-pixel)", "cursive"],
      },
      colors: {
        dark: {
          900: "#020617",
          800: "#0b1020",
          700: "#0f172a",
          600: "#0f1b3d",
        },
      },
      keyframes: {
        glitch: {
          "0%": { textShadow: "2px 2px var(--primary-color)" },
          "50%": { textShadow: "-2px -2px var(--primary-color)" },
          "100%": { textShadow: "2px 2px var(--primary-color)" },
        },
        popIn: {
          from: { transform: "scale(0.8)", opacity: "0" },
          to: { transform: "scale(1)", opacity: "1" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      animation: {
        glitch: "glitch 1.5s infinite",
        popIn: "popIn 0.8s ease",
        fadeIn: "fadeIn 1.2s ease",
      },
    },
  },
  plugins: [],
};

export default config;
