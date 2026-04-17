"use client";

import { useEffect, useState } from "react";

const themes: Record<string, string> = {
  blue:   "#38bdf8",
  green:  "#22c55e",
  red:    "#ef4444",
  yellow: "#facc15",
  orange: "#fb923c",
  purple: "#a855f7",
  pink:   "#ec4899",
};

const DEFAULT_THEME = "blue";

const themeBg: Record<string, string> = {
  blue:   "bg-sky-400",
  green:  "bg-green-500",
  red:    "bg-red-500",
  yellow: "bg-yellow-400",
  orange: "bg-orange-400",
  purple: "bg-purple-500",
  pink:   "bg-pink-500",
};

export default function Hero() {
  const [activeTheme, setActiveTheme] = useState(DEFAULT_THEME);

  useEffect(() => {
    const saved = localStorage.getItem("themeColor") || DEFAULT_THEME;
    applyTheme(saved);
    setActiveTheme(saved);
  }, []);

  const applyTheme = (theme: string) => {
    const color = themes[theme] || themes.blue;
    document.documentElement.style.setProperty("--primary-color", color);
    localStorage.setItem("themeColor", theme);
  };

  const handleThemeChange = (theme: string) => {
    applyTheme(theme);
    setActiveTheme(theme);
  };

  return (
    <section
      id="home"
      className="animate-fadeIn bg-gradient-to-b from-dark-800 via-dark-600 to-dark-900
                 min-h-[90vh] flex flex-col items-center justify-center text-center px-6"
    >
      <h1 className="animate-glitch leading-relaxed text-2xl md:text-4xl lg:text-5xl font-pixel text-white">
        CRAFTING PIXEL WORLDS
      </h1>

      <p className="mt-8 mb-8 text-slate-400 leading-relaxed text-sm md:text-base font-pixel">
        Indie Pixel Games • Retro Vibes • Modern Fun
      </p>

      <button
        className="font-pixel px-4 py-4 border-4 border-primary text-primary bg-transparent cursor-pointer
                   hover:bg-primary hover:text-black transition-all duration-200"
      >
        VIEW GAMES
      </button>

      {/* Theme Switcher */}
      <div className="flex gap-4 items-center justify-center mt-8">
        {Object.keys(themes).map((theme) => (
          <button
            key={theme}
            data-theme={theme}
            onClick={() => handleThemeChange(theme)}
            aria-label={`Switch to ${theme} theme`}
            className={`
              w-4 h-4 md:w-6 md:h-6 rounded-full border-0 cursor-pointer
              transition-transform duration-150 hover:scale-110 active:scale-95
              ${themeBg[theme]}
              ${activeTheme === theme ? "outline outline-2 outline-white outline-offset-2" : ""}
            `}
          />
        ))}
      </div>
    </section>
  );
}
