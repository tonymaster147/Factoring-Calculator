# Factoring Calculator — Assignments4U

A React (Vite) factoring calculator for [assignments4u.com](https://www.assignments4u.com/).
It factors whole numbers into primes (with all divisors and factor pairs) and
factors algebraic expressions over the rationals, with step-by-step working.

## Develop

```bash
npm install
npm run dev      # start the dev server (hot reload)
```

## Build for production

```bash
npm run build    # outputs static files to ./dist
npm run preview  # preview the production build locally
```

## Deploy to assignments4u.com

`npm run build` produces a self-contained `dist/` folder (HTML, JS, CSS and the
logo). The build uses a **relative base path**, so you can upload the contents of
`dist/` to any folder on your server — e.g. `…/tools/factoring-calculator/` — and
open `index.html`. To embed it inside an existing page, drop it in an `<iframe>`.

## Project structure

```
src/
  main.jsx              app entry
  App.jsx               page layout + calculator state
  lib/
    factoring.js        pure math engine (no UI) — number + polynomial factoring
    styles.js           shared inline-style constants
  components/           Header, Hero, InputCard, ResultCard, Steps,
                        HowToUse, WhatIsFactoring, Faq, Footer
public/uploads/         Assignments4U logo
```

The math engine in `src/lib/factoring.js` is framework-agnostic and unit-testable.
