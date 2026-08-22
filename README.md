# UHINAS College of Nursing — Official Website

Static marketing site for UHINAS College of Nursing, Karachi. Built with Next.js (static export), Tailwind CSS v4, shadcn/ui, and Framer Motion.

## Development

```bash
npm install
npm run dev        # http://localhost:3000
```

## Production build

```bash
NEXT_PUBLIC_BASE_PATH=/college-of-nursing npm run build   # outputs to out/
```

## Deploy (GitHub Pages)

Branch-based deploy — builds the static export and force-pushes it to the `gh-pages` branch:

```bash
npm run deploy
```

First time only, enable Pages once via API (or Settings → Pages → branch `gh-pages`, path `/`).

## Structure

- `app/` — routes (`/`, `/admissions/`, `/apply/`, `/contact/`)
- `components/home/` — homepage sections
- `components/layout/` — navbar, footer, announcement bar
- `DESIGN.md` — design system contract (tokens, typography, motion)

> Note: contact details and imagery are placeholders pending real content.
