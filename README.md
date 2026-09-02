# The Chefs

Marketing website for **The Chefs** — a software development studio. Built with Next.js, TypeScript, and Tailwind CSS.

## Prerequisites

- [Node.js](https://nodejs.org/) v18+
- npm (comes with Node)

## Setup

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server with hot reload |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Project Structure

```
src/
  config/
    menu.ts          # All site content: services, pricing, copy
  components/
    Navbar.tsx        # Sticky nav with mobile hamburger
    Hero.tsx          # Landing hero section
    MenuSection.tsx   # Services displayed as restaurant menu
    About.tsx         # Team / capabilities
    Contact.tsx       # CTA section
    Footer.tsx
  app/
    globals.css       # Theme variables (colors, shadows, spacing)
    layout.tsx        # Root layout with fonts and metadata
    page.tsx          # Home page composition
```

## Theming

All brand colors are CSS custom properties in `src/app/globals.css`. To retheme the site, update these variables:

```css
--brand-primary: #e85d26;      /* Buttons, accents */
--brand-secondary: #1a1a2e;    /* Dark backgrounds, logo text */
--brand-accent: #f0c040;       /* Highlights, labels */
```

## Editing Content

All menu items, pricing, and site copy live in `src/config/menu.ts`. Update that file to change what appears on the site — no need to touch components.

## Deployment

Build and deploy anywhere that supports Node.js, or export as static:

```bash
npm run build
npm run start     # serves on port 3000
```

Works out of the box on Vercel, Netlify, or any static host.
