# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.0.0] - 2026-02-03

### Added

- **DETAILEMX | Amorcito Corazón** — single-page gift/detail e-commerce site
- **Hash-based routing**: home (`#/`), shop by category (`#/shop`, `#/shop/<categoryId>`)
- **Home**: Hero, Categories grid, Inspiration, Social, Contact
- **Shop**: Product listing with category filter, product cards with add-to-cart
- **Cart**: Slide-out panel, items in `localStorage`, quantity controls, WhatsApp checkout link
- **i18n**: English and Spanish via `locales/en` and `locales/es` (navbar, hero, categories, products, inspiration, social, contact, footer, cart)
- **Theme**: Dark/light mode with `prefers-color-scheme` and manual toggle (champagne/crimson palette)
- **Config**: `config/env.js` — WhatsApp number, Google Maps link, email, Instagram/TikTok/Facebook handles
- **Data**: `data/products.js` (products + categories), `data/conditions.js`, `data/inspiration.js`, `data/social.js`
- **Store**: `store/cart.js` — cart state, persistence, UI component
- **UI**: Tailwind CSS, Montserrat + Playfair Display, Font Awesome, Anime.js
- **Static**: Vanilla JS (ES modules), no build step; `.nojekyll` for GitHub Pages

### Technical

- Entry: `index.html` → `main.js`; `hashchange` triggers re-render
- Components: `navbar`, `hero`, `categories`, `inspiration`, `social`, `contact`, `footer`; page: `pages/products/products.js`
- Utils: `utils/i18n.js`, `utils/linkHelpers.js` (WhatsApp URL builder)
- Assets: `assets/img/` (category and product images)

[Unreleased]: https://github.com/detailemx/detailemx/compare/v1.0.0...HEAD
[1.0.0]: https://github.com/detailemx/detailemx/releases/tag/v1.0.0
