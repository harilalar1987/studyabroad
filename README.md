# Altius Study Abroad — Educational Consultancy Website

A modern, premium, responsive website for **Altius Study Abroad** — an educational consultancy specializing in helping students pursue international education.

**Live site:** [altiusstudyabroad.com](https://altiusstudyabroad.com)  
**GitHub Pages:** [altiusprofessionals.github.io/studyabroad](https://altiusprofessionals.github.io/studyabroad)

---

## Tech Stack

- **React 18** + **Vite 5**
- **TypeScript**
- **TailwindCSS v3**
- **Framer Motion** (animations)
- **React Router v6** (HashRouter for GitHub Pages)
- Fully static — no backend, no database

---

## Project Structure

```
studyabroad/
├── public/
│   ├── countries/           # Country data (add new countries here)
│   │   ├── canada/          # {flag.svg, data.json, brochures/}
│   │   ├── uk/
│   │   └── manifest.json    # AUTO-GENERATED — do not edit
│   ├── assets/universities/ # Partner university logos for carousel
│   └── 404.html             # SPA redirect for GitHub Pages
├── scripts/
│   └── generate-manifest.js # Build-time country indexer
├── src/
│   ├── components/
│   │   ├── layout/          # Navbar, Footer, Layout, ErrorBoundary
│   │   ├── home/            # Hero, Highlights, WhyChooseUs, Carousels, etc.
│   │   ├── countries/       # CountryCard, CountryGrid, BrochureList
│   │   ├── ui/              # Button, SectionHeading, Card, Carousel
│   │   └── seo/             # SEOHead
│   ├── pages/               # HomePage, AboutPage, CountriesPage, CountryDetailPage
│   ├── hooks/               # useCountries, useScrollAnimation
│   ├── utils/               # countryLoader, constants
│   └── types/               # TypeScript interfaces
└── dist/                    # Build output (generated)
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Install

```bash
npm install
```

### Development

```bash
npm run dev
```

Opens at `http://localhost:5173/studyabroad/`

### Build

```bash
npm run build
```

Output in `dist/`.

### Preview Production Build

```bash
npm run preview
```

---

## Adding a New Country

**Zero code changes required.** Follow these steps:

1. Create a new folder under `public/countries/`:

```
public/countries/australia/
```

2. Add a `flag.svg` file:

```
public/countries/australia/flag.svg
```

3. Add a `data.json` file:

```json
{
  "name": "Australia",
  "slug": "australia",
  "description": "Study in Australia — world-class education...",
  "universities": [
    {
      "name": "University of Melbourne",
      "course": "Computer Science (MSc)",
      "description": "Top-ranked program in the Asia-Pacific region.",
      "pdfFile": "melbourne-cs.pdf"
    }
  ]
}
```

4. Add brochures:

```
public/countries/australia/brochures/melbourne-cs.pdf
```

5. Build or run dev — the manifest regenerates automatically.

---

## Adding Partner University Logos

Place logo images in `public/assets/universities/`. They will display in the partner carousel on the home page. Recommended: 200x60px PNG with transparent background.

---

## Deployment

### GitHub Pages

```bash
npm run deploy
```

This runs `predeploy` (manifest + build) then pushes the `dist/` folder to the `gh-pages` branch.

### First-Time Setup

1. Go to your GitHub repo → Settings → Pages
2. Source: **Deploy from a branch**
3. Branch: `gh-pages` → `/ (root)`
4. Click Save

### Custom Domain (GoDaddy)

1. In GitHub repo → Settings → Pages, enter: `altiusstudyabroad.com`
2. Check "Enforce HTTPS"
3. In GoDaddy DNS settings, add these records:

| Type  | Name | Value              |
|-------|------|--------------------|
| A     | @    | 185.199.108.153    |
| A     | @    | 185.199.109.153    |
| A     | @    | 185.199.110.153    |
| A     | @    | 185.199.111.153    |
| CNAME | www  | altiusprofessionals.github.io |

4. Wait up to 24 hours for DNS propagation.

5. After domain is connected, update `vite.config.ts` → `base: '/'` and rebuild.

---

## Contact Configuration

Email and WhatsApp are configured in `src/utils/constants.ts`:

```typescript
export const CONTACT_EMAIL = 'altiusprofessionals@gmail.com'
export const CONTACT_WHATSAPP = '+918138970654'
```

---

## Future Enhancements

The architecture supports adding:
- **Inquiry forms** — integrate Formspree or a backend API
- **Blog section** — add a `/blog` route and Markdown-based posts
- **Search/filter** — add to CountriesPage using the existing manifest data
- **Student login** — add auth routes and protected pages
- **CRM integration** — hook contact CTAs to a CRM webhook
- **Analytics** — add Google Analytics 4 script to `index.html`
- **i18n** — add multi-language support
- **PWA** — add service worker and manifest for offline support
