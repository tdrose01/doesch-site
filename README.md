# DOESH — Doésh Fallanti Luxury Handbags

Modern luxury handbag website built with **React + Vite**, **Tailwind CSS**, and **Framer Motion**.

## Brand Direction
- **Visual identity:** black/charcoal foundation, gold typography accents, subtle amethyst glow
- **Tone:** minimalist, editorial, high-fashion luxury
- **Typography:** Cormorant Garamond (display), Manrope (body)

## Tech Stack
- React 19 + Vite 8
- Tailwind CSS 4 (`@tailwindcss/vite` plugin)
- Framer Motion (elegant transitions and reveals)
- React Router DOM (page routing)

## Pages Included (MVP)
1. **Home/Hero** (`/`) — full viewport cinematic hero, featured product CTA
2. **Collections** (`/collections`) — editorial collection cards
3. **Product Detail** (`/product/f-01-imperiale`) — imagery, specs, craftsmanship notes, CTA
4. **About/Story** (`/about`) — house narrative and values
5. **Contact** (`/contact`) — boutique appointment form

## Run Locally
```bash
cd doesch-site
npm install
npm run dev
```

Open: `http://localhost:5173`

## Build for Production
```bash
npm run build
npm run preview
```

Production files output to `dist/`.

## Project Structure
```text
doesch-site/
├── src/
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   └── PageShell.jsx
│   ├── data/
│   │   └── products.js
│   ├── pages/
│   │   ├── AboutPage.jsx
│   │   ├── CollectionsPage.jsx
│   │   ├── ContactPage.jsx
│   │   ├── HomePage.jsx
│   │   └── ProductDetailPage.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## Notes
- Uses high-resolution Unsplash placeholder imagery suitable for editorial mockups.
- Styling is mobile-first and scales up for tablet/desktop.
- Motion is intentionally subtle to keep luxury feel restrained and polished.
