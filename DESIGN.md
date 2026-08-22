# UHINAS Design System

> Design contract for the Universal Health Institute of Nursing & Allied Sciences website. Light premium healthcare education — trustworthy to parents, modern to students.

## 1. Overview & Brand

**Institute:** Universal Health Institute of Nursing & Allied Sciences (UHINAS), Karachi
**Program:** BS Nursing 4-Year Degree Program, 2nd Batch
**Tone:** Premium healthcare education — spacious, rounded, generous whitespace, prominent CTAs
**Mode:** Light only — no dark mode

**Brand Pillars:**
- **Trust** — parents must feel the institution is credible and professional
- **Growth** — students should see a modern, aspirational learning environment
- **Accessibility** — clear navigation, prominent Apply Now CTAs, WhatsApp contact

## 2. Color Palette & Tokens

### Brand Colors

| Token | Role | OKLCH | Tailwind token |
|---|---|---|---|
| Navy | Primary — trust, professionalism | `oklch(0.25 0.06 250)` | `text-navy`, `bg-navy` |
| Navy Light | Darker navy for hover | `oklch(0.32 0.06 250)` | `text-navy-light` |
| Teal | Secondary — healthcare, growth | `oklch(0.55 0.13 175)` | `text-teal`, `bg-teal` |
| Teal Light | Soft teal for backgrounds | `oklch(0.95 0.03 175)` | `text-teal-light`, `bg-teal-light` |
| Gold | Admission highlights ONLY | `oklch(0.78 0.14 85)` | `text-gold`, `bg-gold` |
| Gold Fg | Text on gold backgrounds | `oklch(0.25 0 0)` | `text-gold-foreground` |
| Surface | White card surfaces | `oklch(0.99 0 0)` | `bg-surface` |

### Semantic Mapping (shadcn)

| Token | Maps to | Usage |
|---|---|---|
| `--primary` | Navy | Buttons, headings, strong elements |
| `--primary-foreground` | White | Text on primary backgrounds |
| `--secondary` | Teal | Secondary buttons, badges |
| `--secondary-foreground` | White | Text on secondary backgrounds |
| `--accent` | Teal Light | Hover states, interactive feedback |
| `--accent-foreground` | Navy | Text on accent backgrounds |
| `--muted` | Very light teal | Subtle backgrounds, disabled states |
| `--muted-foreground` | Navy-muted | Secondary text, descriptions |
| `--destructive` | Red | Urgent badges ONLY — used sparingly |
| `--border` | Navy-border | Borders, dividers |
| `--ring` | Teal | Focus rings, active indicators |

### Gold Usage Rules

Gold is **exclusively** for admission-related highlights:
- "Apply Now" buttons
- "Admissions Open" badge ping dot
- Admission CTA accents
- Download Prospectus hover accent
- Footer links hover

Gold must NOT appear on:
- Navigation hover states (use teal/accent instead)
- Generic interactive elements
- Non-admission CTAs

### Color Fallbacks

All colors defined in `globals.css` as CSS custom properties. Tailwind v4 `@theme inline` maps them to utility classes. For gradients, use CSS custom properties directly: `bg-[linear-gradient(...)]` referencing `var(--uhinas-navy)`, `var(--uhinas-teal)`, etc.

## 3. Typography

**Font Stack:** Geist (sans-serif) + Geist Mono — loaded via `next/font/google` in `app/layout.tsx`

| Element | Size | Weight | Color | Tailwind |
|---|---|---|---|---|
| H1 (Hero) | 3rem/3.75rem (48/60px) | 700 (bold) | Navy | `text-4xl sm:text-5xl lg:text-6xl font-bold text-navy` |
| H2 (Section) | 2.25rem/2.5rem (36/40px) | 700 (bold) | Navy | `text-3xl sm:text-4xl font-bold text-navy` |
| H3 (Card) | 1.125rem (18px) | 600 (semibold) | Navy | `font-semibold text-navy` |
| Body Large | 1.125rem (18px) | 400 (normal) | Muted Foreground | `text-lg text-muted-foreground` |
| Body | 0.875rem (14px) | 400 (normal) | Muted Foreground | `text-sm text-muted-foreground` |
| Caption | 0.75rem (12px) | 500 (medium) | Muted Foreground | `text-xs font-medium text-muted-foreground` |
| Overline | 0.75rem (12px) | 600 (semibold) | Muted Foreground | `text-xs font-semibold uppercase tracking-wider text-muted-foreground` |

**Line Heights:**
- Headings: `leading-tight` (1.25)
- Body: `leading-relaxed` (1.625)
- Compact: `leading-snug` (1.375)

## 4. Spacing & Layout

**Container:** `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
**Section padding:** `py-16 sm:py-20` (64px/80px)
**Card padding:** shadcn `--card-spacing` (16px default, 12px for `size="sm"`)
**Gap between cards:** `gap-4` (16px)
**Gap between sections:** Implicit from section padding

### Responsive Grid

| Breakpoint | Grid | Usage |
|---|---|---|
| Mobile (<640px) | 1 column | Stacked layout |
| sm (640px) | 2 columns | Cards, two-column layouts |
| lg (1024px) | 4 columns | Stats, features, footer |

### Border Radius

Defined via shadcn `--radius: 0.625rem` (10px):
- `--radius-sm`: 6px (small elements)
- `--radius-md`: 8px (buttons)
- `--radius-lg`: 10px (cards, inputs)
- `--radius-xl`: 14px (dialog, sheet)
- `--radius-2xl`: 18px (hero image container)
- `--radius-3xl`: 22px (large containers)
- `--radius-4xl`: 26px (pill shapes)

## 5. Component Primitives

### Available (shadcn/ui)

- **Button** — `default` (navy bg), `outline`, `secondary`, `ghost`, `destructive`, `link`. Sizes: `default` (h-8), `xs`, `sm`, `lg`, `icon`, `icon-sm`, `icon-lg`. Gold accent via className override: `className="bg-gold text-gold-foreground hover:bg-gold/90"`
- **Card** — `Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter`. Uses `ring-1 ring-foreground/10` border.
- **Badge** — `default`, `secondary`, `destructive`, `outline`, `ghost`, `link`
- **Sheet** — Mobile nav overlay. `side="left"` for nav menu.
- **Dialog** — Admission requirements modal
- **Separator** — Horizontal dividers
- **Accordion** — Available for FAQ sections (deferred to v2)
- **Input/Textarea/Select/Label** — Form components (for Apply page)

### Custom Components

| Component | Path | Notes |
|---|---|---|
| AnnouncementBar | `components/layout/announcement-bar.tsx` | Top bar, static |
| Navbar | `components/layout/navbar.tsx` | Sticky, client component (Sheet state) |
| Footer | `components/layout/footer.tsx` | Server component, inline social SVGs |
| Hero | `components/home/hero.tsx` | Client component (framer-motion) |
| TrustStats | `components/home/trust-stats.tsx` | Client component (stagger) |
| WhyChooseUs | `components/home/why-choose-us.tsx` | Client component (stagger) |
| FeaturedProgram | `components/home/featured-program.tsx` | Client component (dialog + section reveal) |
| CampusLife | `components/home/campus-life.tsx` | Client component (stagger grid) |
| AdmissionCTA | `components/home/admission-cta.tsx` | Client component (section reveal) |
| AnimationProvider | `components/shared/motion.tsx` | MotionConfig + SectionReveal + StaggerGroup |

### Icon System

**Library:** Lucide React — no emojis anywhere
**Brand icons:** Lucide doesn't ship brand icons. Social icons (Facebook, Instagram, LinkedIn, YouTube) are inline SVGs in `footer.tsx`.

## 6. Motion & Animation

**Library:** framer-motion v13
**Provider:** `<MotionConfig reducedMotion="user">` wraps entire app in `AnimationProvider`

### Animation Principles

1. **GPU-composited only** — `transform`, `opacity`, `filter`. Never animate layout properties (width, height, margin, padding).
2. **Motion serves meaning** — hero entrance (content arrival), scroll-reveal (section discovery), card hover lift (interactive feedback). No decorative slop.
3. **Respects prefers-reduced-motion** — `reducedMotion="user"` in `MotionConfig` disables all animations for users who prefer reduced motion.

### Defined Animations

| Name | Trigger | Properties | Duration |
|---|---|---|---|
| Hero text entrance | Page load | `opacity: 0→1, y: 32→0` | 0.7s |
| Hero image entrance | Page load (delay 0.2s) | `opacity: 0→1, scale: 0.92→1, x: 40→0` | 0.8s |
| Floating badge | Page load (delay 0.6s) | `opacity: 0→1, y: 16→0, scale: 0.9→1` | 0.5s |
| Section reveal | Scroll into view (once) | `opacity: 0→1, y: 32→0` | 0.6s |
| Stagger container | Scroll into view (once) | Orchestrates child stagger | — |
| Stagger item | Scroll into view (parent) | `opacity: 0→1, y: 24→0` | 0.5s (0.1s stagger) |
| Card hover | Pointer hover | `translateY(-4px)` | CSS transition |

**Easing:** `[0.25, 0.1, 0.25, 1]` — smooth cubic-bezier for all motion
**Viewport detection:** `whileInView` with `viewport={{ once: true, amount: 0.15 }}` — triggers when 15% visible, only fires once

### Reduced Motion Behavior

When `prefers-reduced-motion: reduce` is active:
- All `motion` component animations are disabled (elements appear in their final state)
- CSS `animate-ping` on the badge dot is still active (purely decorative, non-essential)
- CSS transitions on cards remain (subtle hover feedback, not jarring)

## 7. Accessibility & Constraints

### Mandatory

- **Semantic HTML:** `<header>`, `<nav>`, `<main>`, `<footer>`, `<section>`, `<ul>`, `<li>`
- **ARIA:** `aria-hidden="true"` on decorative icons, `sr-only` text for icon-only buttons
- **Focus visible:** `focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50` (from shadcn)
- **Color contrast:** Navy on white = 13.4:1, Teal on white = 4.8:1, Gold on navy = 5.2:1 — all exceed WCAG AA
- **Trailing slashes:** All internal links use trailing slashes (`/about/`, `/apply/`) per `trailingSlash: true` config

### Content Constraints

- **No invented statistics** — Stats section uses descriptive labels (Program, Training, Learning, Support) not numerical claims
- **No real phone numbers** — All phones are `+92 XXX XXXXXXX` placeholders
- **No accreditation claims** — "Accreditation claims... must be confirmed by the college"
- **No fees or deadlines** — "Only publish numerical statistics after confirmation"
- **No external images** — All visuals are CSS-gradient/SVG placeholders; swappable when college sends real photos

### Static Export Constraints

- `output: 'export'` — no API routes, no server features, no ISR
- `images.unoptimized: true` — use `<img>` or unoptimized `next/image`
- No middleware, no server components with dynamic data fetching
- All data is static/placeholder
