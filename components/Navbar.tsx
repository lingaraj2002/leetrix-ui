"use client";

import { useRef } from "react";

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);

  const toggleMenu = (value: string) => {
    const nav = navRef.current;
    if (!nav) return;
    const isMobile = window.innerWidth <= 767;

    if (value === "0") {
      nav.style.display = "flex";
      setTimeout(() => { if (isMobile) nav.style.right = value; }, 10);
    } else {
      nav.style.right = value;
      setTimeout(() => { if (isMobile) nav.style.display = "none"; }, 400);
    }
  };

  const closeMenu = () => toggleMenu("-100%");

  return (
    <header className="w-full bg-dark-900 border-b-4 border-primary sticky top-0 z-[99]">
      <div className="max-w-[1366px] mx-auto flex items-center justify-between px-6 md:px-8 py-5">

        {/* Logo */}
        <div className="text-primary font-pixel text-sm md:text-base">Leetrix</div>

        {/* Desktop Nav */}
        <nav
          ref={navRef}
          id="navMenu"
          className="hidden md:flex items-center gap-5"
        >
          {/* Close btn (mobile only — hidden on desktop via CSS) */}
          <button
            type="button"
            className="md:hidden absolute top-6 right-6 bg-transparent text-white border-0 text-2xl"
            onClick={closeMenu}
          >
            &times;
          </button>

          {["home", "games", "about", "contact"].map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={closeMenu}
              className="text-white no-underline hover:text-primary transition-colors duration-200 uppercase"
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </nav>

        {/* Hamburger (mobile) */}
        <div
          className="text-2xl cursor-pointer text-white md:hidden"
          onClick={() => toggleMenu("0")}
        >
          ☰
        </div>
      </div>
    </header>
  );
}
