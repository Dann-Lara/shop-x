# DETAILEMX | Amorcito Corazón

> Gift & detail e-commerce site (balloons, flowers, arrangements). Bilingual (EN/ES), cart with WhatsApp checkout, dark/light theme. No build step.

---

## English

### About

**DETAILEMX** (“Amorcito Corazón”) is a single-page site for a gift/detail business. It showcases categories (e.g. balloons, garden, bouquets), product catalog, inspiration, contact, and a **cart** that sends the order via **WhatsApp**.

### Features

- **Hash routing**: `#/` (home), `#/shop`, `#/shop/<category>` (e.g. `#/shop/globos`)
- **Cart**: Slide-out panel, items persisted in `localStorage`, quantity controls, **WhatsApp checkout** link (configurable in `config/env.js`)
- **i18n**: English and Spanish — `locales/en` and `locales/es` (navbar, hero, categories, products, inspiration, social, contact, footer, cart)
- **Theme**: Dark/light with system preference and manual toggle (champagne / crimson palette)
- **Sections**: Hero, Categories grid, Inspiration, Social, Contact; Shop page with category filter
- **Config**: WhatsApp number, Google Maps, email, Instagram/TikTok/Facebook in `config/env.js`

### Tech stack

- HTML5, CSS (Tailwind CDN), JavaScript (ES modules)
- [Tailwind CSS](https://tailwindcss.com), [Anime.js](https://animejs.com), [Font Awesome](https://fontawesome.com)
- Fonts: Montserrat, Playfair Display (Google Fonts)

### Project structure

```
detailemx/
├── index.html
├── main.js                 # Bootstrap, hash routing, render
├── style.css
├── config/
│   └── env.js              # WhatsApp, Maps, email, social handles
├── components/             # navbar, hero, categories, inspiration, social, contact, footer
├── pages/
│   └── products/
│       └── products.js     # Shop page + category filter
├── store/
│   └── cart.js             # Cart state, UI, WhatsApp link
├── data/                   # products (incl. categories), conditions, inspiration, social
├── locales/
│   ├── en/
│   └── es/                 # JSON per section
├── utils/
│   ├── i18n.js
│   └── linkHelpers.js      # WhatsApp URL builder
└── assets/img/
```

### Configuration

Edit `config/env.js` to set:

- `WHATSAPP_NUMBER` — country code + number (no spaces), for cart checkout link
- `GOOGLE_MAPS_LINK`, `EMAIL_CONTACT`, `INSTAGRAM_USER`, `TIKTOK_USER`, `FACEBOOK_USER`

### Run locally

No build step. Use any static server:

```bash
python3 -m http.server 8000
# or
npx serve .
```

Open `http://localhost:8000`. Language and theme are stored in `localStorage`. Cart uses `localStorage` key `cart`.

### License

MIT — see [LICENSE](LICENSE). Changelog: [CHANGELOG.md](CHANGELOG.md).

---

## Español

### Acerca de

**DETAILEMX** (“Amorcito Corazón”) es un sitio de una página para un negocio de regalos y detalles. Muestra categorías (globos, jardín, ramos, etc.), catálogo de productos, inspiración, contacto y un **carrito** que envía el pedido por **WhatsApp**.

### Características

- **Rutas por hash**: `#/` (inicio), `#/shop`, `#/shop/<categoría>` (ej. `#/shop/globos`)
- **Carrito**: Panel deslizable, ítems en `localStorage`, controles de cantidad, enlace de **checkout por WhatsApp** (configurable en `config/env.js`)
- **i18n**: Inglés y español en `locales/en` y `locales/es` (navbar, hero, categories, products, inspiration, social, contact, footer, cart)
- **Tema**: Claro/oscuro con preferencia del sistema y cambio manual (paleta champagne / crimson)
- **Secciones**: Hero, grid de categorías, Inspiración, Social, Contacto; página Tienda con filtro por categoría
- **Config**: Número WhatsApp, Google Maps, email, Instagram/TikTok/Facebook en `config/env.js`

### Stack técnico

- HTML5, CSS (Tailwind CDN), JavaScript (módulos ES)
- [Tailwind CSS](https://tailwindcss.com), [Anime.js](https://animejs.com), [Font Awesome](https://fontawesome.com)
- Fuentes: Montserrat, Playfair Display (Google Fonts)

### Estructura del proyecto

```
detailemx/
├── index.html
├── main.js                 # Arranque, rutas por hash, render
├── style.css
├── config/
│   └── env.js              # WhatsApp, Maps, email, redes sociales
├── components/             # navbar, hero, categories, inspiration, social, contact, footer
├── pages/
│   └── products/
│       └── products.js     # Página tienda + filtro por categoría
├── store/
│   └── cart.js             # Estado del carrito, UI, enlace WhatsApp
├── data/                   # products (incl. categories), conditions, inspiration, social
├── locales/
│   ├── en/
│   └── es/                 # JSON por sección
├── utils/
│   ├── i18n.js
│   └── linkHelpers.js      # Constructor de URL WhatsApp
└── assets/img/
```

### Configuración

Edita `config/env.js` para definir:

- `WHATSAPP_NUMBER` — código de país + número (sin espacios), para el enlace de checkout del carrito
- `GOOGLE_MAPS_LINK`, `EMAIL_CONTACT`, `INSTAGRAM_USER`, `TIKTOK_USER`, `FACEBOOK_USER`

### Ejecutar en local

No hay paso de build. Usa cualquier servidor estático:

```bash
python3 -m http.server 8000
# o
npx serve .
```

Abre `http://localhost:8000`. El idioma y el tema se guardan en `localStorage`. El carrito usa la clave `cart` en `localStorage`.

### Licencia

MIT — ver [LICENSE](LICENSE). Historial de cambios: [CHANGELOG.md](CHANGELOG.md).
