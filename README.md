# Oscar Roofing Website

A production-ready marketing website for Oscar Roofing, a roofing contractor serving the
Greater Toronto Area. Built with [Astro](https://astro.build) (static output) and Tailwind CSS.

Requirements for this project are defined in `docs/master-prompt.md`,
`docs/website-specification.md`, and `docs/client-information.md`, with source-of-truth
priority defined in `CLAUDE.md`.

## Tech Stack

- **Astro** (static site generation) — zero client-side JS by default, ships plain HTML/CSS
  with small vanilla-JS islands only where interactivity is needed (mobile menu, gallery
  filter/lightbox, form validation, scroll-reveal).
- **Tailwind CSS v4** (compiled at build time, not the CDN build) — custom design tokens for
  the Oscar Roofing brand palette live in `src/styles/global.css`.
- **@fontsource-variable** — Manrope (headings) and Inter (body) are self-hosted, no external
  font requests.
- **@astrojs/sitemap** — sitemap generated automatically at build time.
- **Web3Forms** — handles the quote form submission → email with no backend of our own.

## Getting Started

```bash
npm install
cp .env.example .env   # then add your Web3Forms access key (see below)
npm run dev            # http://localhost:4321
```

Other commands:

```bash
npm run build     # production build → dist/
npm run preview   # preview the production build locally
npx astro check    # type-check .astro files
```

## Required Setup Before Launch

### 1. Web3Forms access key (quote form)

The quote form on `/contact` posts directly to Web3Forms — there is no backend of our own, and
no secret is exposed (Web3Forms access keys are meant to be public/client-side).

1. Go to [web3forms.com](https://web3forms.com) and create a free access key using
   `oscarroofing520@gmail.com`.
2. Copy `.env.example` to `.env` and set:
   ```
   PUBLIC_WEB3FORMS_ACCESS_KEY=your-key-here
   ```
3. Rebuild the site. Until this is set, the form shows an inline message telling the visitor
   (and you) that it isn't connected yet, instead of silently failing.
4. On Cloudflare Pages, set the same variable under **Settings → Environment variables** (as a
   build-time variable, since it must be baked into the static output) and trigger a redeploy.

Spam protection: the form includes a hidden honeypot field. No CAPTCHA is enabled by default —
add one later only if spam becomes a real problem.

### 2. Deployment — Cloudflare Pages

The domain `oscarroofingcanada.ca` is already registered on Cloudflare, so this is the simplest
path — Cloudflare Pages builds directly from the git repo for free:

1. Push this repo to GitHub/GitLab.
2. In the Cloudflare dashboard: **Workers & Pages → Create → Pages → connect to Git**.
3. Build settings:
   - Build command: `npm run build`
   - Build output directory: `dist`
4. Add the `PUBLIC_WEB3FORMS_ACCESS_KEY` environment variable (see above).
5. Attach the `oscarroofingcanada.ca` custom domain under the Pages project's **Custom domains**
   tab — since the domain is already on Cloudflare, DNS records are added automatically.

No server, function, or database is required — the entire site is static output.

## Replacing Placeholder Content

### Images

All image references are centralized in **`src/data/media.ts`** — nothing is hardcoded in
components or pages. To swap a placeholder for a real photo:

1. Add the new file under `src/assets/images/` (services) or `src/assets/gallery/` (projects).
2. Update the corresponding import/path in `src/data/media.ts`.
3. Every place that image is used (service cards, service detail sections, gallery grid, home
   page preview) updates automatically.

**Every photo currently in the site is royalty-free stock (Unsplash License), used as a
placeholder** — per `docs/client-information.md`, no real Oscar Roofing project photography,
video, or team photos exist yet. Because there are 13 services and a limited pool of relevant
stock photos, a few images are intentionally reused across *non-adjacent* sections (e.g. the
same flat-roof photo appears for both "Flat Roofing" and "Commercial Roofing") — adjacent
services never share an image. Replace these first once real project photography is available.

### Logo

`src/assets/brand/logo-source.jpg` is the source logo from `brand_assets/logo.png`. It's a
150×150px raster image, which is fine for the current circular header/favicon usage but will
look soft if used much larger. Favicons (`public/favicon-16.png`, `favicon-32.png`,
`apple-touch-icon.png`, `icon-512.png`) were generated from it — if a higher-resolution or
vector (SVG) logo becomes available, regenerate these and swap `logo-source.jpg`.

### Business content

The following are explicitly marked as placeholders per `docs/client-information.md` and must
not be filled in without verified information from the client:

- Business **address** (currently omitted from the site and from JSON-LD structured data —
  do not add a placeholder address, only a real one)
- Real project **photos/video**
- Customer **testimonials** / **Google reviews**
- **Certifications**, **awards**, **warranty** information
- **Years in business** / **company history**
- **Social media** accounts / **Google Business Profile**

Components for testimonials, reviews, certifications, etc. were intentionally **not built** —
adding them now would mean either fabricating content or shipping a visibly empty placeholder
section. Add these as real components once the client supplies the content.

`src/pages/privacy-policy.astro` and `src/pages/terms.astro` contain **generic boilerplate**
(explicitly labeled as such on the pages) — have these reviewed by a lawyer before relying on
them.

## SEO

- Per-page `<title>`, meta description, canonical URL, and Open Graph/Twitter tags are set via
  the `title` / `description` / `path` props on `BaseLayout` (see any file in `src/pages/`).
- JSON-LD (`RoofingContractor` schema) is emitted on every page from `src/data/site.ts` —
  intentionally limited to verified fields (name, phone, email, service area, hours). No
  address, geo-coordinates, ratings, or reviews are included until the client provides them.
- `sitemap-index.xml` is generated automatically at build time by `@astrojs/sitemap`.
- `public/robots.txt` points to the sitemap.
- `public/og-default.jpg` is the fallback social-preview image (cropped from the hero photo) —
  replace with a designed OG image once branding is finalized.

## Accessibility

- Semantic landmarks, skip-to-content link, one `<h1>` per page.
- Visible focus rings (`:focus-visible`) site-wide.
- Mobile menu and gallery lightbox are keyboard-operable (Tab, Escape, arrow keys) with focus
  management.
- Scroll-reveal animations (`data-reveal`) are a **progressive enhancement**: content is fully
  visible by default and only animates in if JavaScript successfully runs — a script failure
  never leaves content permanently hidden.
- `prefers-reduced-motion: reduce` disables all animation.
- One color from the brief's palette was adjusted for accessibility: the "Bright Blue" accent
  was specified as `#2F80ED`, which is only 3.87:1 against white — below the 4.5:1 WCAG AA
  minimum for text and button labels. It's been darkened to `#1A5FCC` (5.91:1) in
  `src/styles/global.css`, since every primary "Get a Quote" button and link uses this color.

## QA Checklist

- [x] All navigation links, CTA buttons, phone (`tel:`) and email (`mailto:`) links work
- [x] Quote form validates required fields, shows success/error states, includes honeypot
- [x] No fake reviews, certifications, awards, statistics, or lorem ipsum anywhere
- [x] No horizontal scrolling at mobile/tablet/desktop widths
- [x] Keyboard navigation and visible focus states verified
- [x] All images have descriptive alt text
- [x] `npx astro check` passes with 0 errors/warnings
- [x] `npm run build` completes cleanly; sitemap and robots.txt generated
- [ ] Web3Forms access key added and a real test submission confirmed end-to-end
- [ ] Lighthouse audit run against the deployed (not local) site
