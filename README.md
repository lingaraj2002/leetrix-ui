# Leetrix — Next.js 14 + TypeScript + Tailwind CSS

## Project Structure

```
leetrix/
├── app/
│   ├── globals.css       ← Tailwind directives + CSS var for dynamic theme + custom animations
│   ├── layout.tsx        ← Root layout + metadata
│   └── page.tsx          ← Assembles all sections
├── components/
│   ├── Navbar.tsx        ← Sticky nav with mobile slide-out ("use client")
│   ├── Hero.tsx          ← Hero + theme switcher with localStorage ("use client")
│   ├── Games.tsx         ← Game cards grid (Server Component)
│   ├── About.tsx         ← About section (Server Component)
│   ├── Contact.tsx       ← Contact cards (Server Component)
│   └── Footer.tsx        ← Footer (Server Component)
├── public/assets/        ← Place game1.png, game2.png, game3.png here
├── tailwind.config.ts    ← Custom font, colors, keyframes
├── postcss.config.js
├── tsconfig.json
└── package.json
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Adding Game Images

Place your images inside `public/assets/`:
- `public/assets/game1.png`
- `public/assets/game2.png`
- `public/assets/game3.png`

## Tailwind Notes

- **CSS variable `--primary-color`** drives the dynamic theme color (border, text, shadow).
  Tailwind can't JIT arbitrary CSS variables at runtime, so a small set of utility classes
  (`.border-primary`, `.text-primary`, `.shadow-primary`) are defined in `globals.css`.
- Custom **animations** (glitch, popIn, fadeIn) are declared in `globals.css` as keyframes
  and also extended in `tailwind.config.ts` so you can use them as `animate-*` classes.
- The **Press Start 2P** pixel font is loaded via `@import` in `globals.css`.
