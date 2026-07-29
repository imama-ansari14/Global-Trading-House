# Global Trading House — Website

A production-ready Next.js website built for Global Trading House (bulk wholesale pallet
sourcing). Static export, no backend, no database — deploys anywhere as static files.

**Tech stack:** Next.js 14 (static export) · Tailwind CSS · Framer Motion (light use only) ·
Formspree · wa.me · Vercel-ready

---

## 1. Getting Started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## 2. Build for Production

```bash
npm run build
```

This generates a fully static site in the `/out` folder (plus `sitemap.xml` and `robots.txt`
via the `postbuild` script). You can deploy `/out` to **any** static host — Vercel, Netlify,
Cloudflare Pages, S3, cPanel, etc.

**Deploying to Vercel (recommended, easiest):**
1. Push this project to a GitHub repo.
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. Vercel auto-detects Next.js — just click Deploy.
4. Once the client buys the domain, add it under Project → Settings → Domains.

---

## 3. ⚠️ Things You MUST Update Before Launch

### a) Formspree (contact form)
The contact form currently points to a placeholder endpoint. To make it live:
1. Create a free account at [formspree.io](https://formspree.io).
2. Create a new form, copy the form ID (looks like `xkgjqwer`).
3. Open `data/siteConfig.js` and replace:
   ```js
   formspreeEndpoint: "https://formspree.io/f/YOUR_FORM_ID",
   ```
   with your real endpoint. That's it — the form on `/contact` will start emailing submissions
   to whatever email you registered with Formspree.

### b) Business email
`data/siteConfig.js` → update `email` to the real business email (currently a placeholder:
`info@globaltradinghouseusa.com`).

### c) Domain
- `data/siteConfig.js` → update `domain` to the real live domain.
- `next-sitemap.config.js` → update `siteUrl` to match (or set a `SITE_URL` env var at build
  time — the config already reads from it).

### d) Real product photos
All product/hero images currently use placeholder graphics (`placehold.co`) in the brand
colors, clearly not real photos. Replace image URLs in `data/products.js` and inside
`app/page.js` / `app/about/page.js` with real photography once available. Recommended: drop
real images into `/public/images/` and reference them as `/images/yourfile.jpg`.

### e) Testimonials
`data/testimonials.js` contains placeholder/sample reviews. Replace with real client feedback
once you have it.

### f) Stats on the Home page
The "30+ Countries", "5+ Categories", etc. counters on the Home page (`app/page.js`, "Why
Choose Us" section) are placeholder figures — confirm actual numbers with the client before
launch.

---

## 4. Already Set & Working

- **WhatsApp:** `+1 (202) 676-6624` — floating button on every page + used throughout CTAs.
  Update in `data/siteConfig.js` (`phoneRaw`, `phoneDisplay`) if it ever changes.
- **Phone / Address / Hours:** set in `data/siteConfig.js`.
- **SEO:** per-page metadata (title/description/Open Graph) already written for Home, About,
  Products, each product page, and Contact. Sitemap + robots.txt auto-generate on every build.
- **Brand colors:** extracted directly from the logo — Navy `#0A1930`, Red `#DC0000`, White.
  Defined in `tailwind.config.js` under `brand` / `navy`.

---

## 5. Adding a New Product (scaling 5 → 10)

Open `data/products.js` and copy one product object, then edit the fields:

```js
{
  slug: "new-product-slug",       // becomes the URL: /products/new-product-slug
  name: "New Product Pallets",
  shortDesc: "...",
  img: "...",                     // card image
  gallery: ["...", "...", "..."], // detail page gallery
  description: "...",
  grading: [{ grade: "...", note: "..." }],
  faqs: [{ q: "...", a: "..." }],
}
```

Save the file, rebuild — a full detail page is generated automatically at
`/products/new-product-slug`. No new component or route file needed.

---

## 6. Project Structure

```
app/
  layout.js          → global metadata, wraps every page with Navbar/Footer/WhatsApp button
  page.js             → Home
  about/page.js        → About
  products/page.js      → Products grid
  products/[slug]/page.js → Product detail template (auto-generates a page per product)
  contact/page.js       → Contact (form, map, info)
components/           → Navbar, Footer, HeroSlider, ProductCard, ContactForm, etc.
data/
  siteConfig.js        → business info — edit this first
  products.js          → product catalog
  testimonials.js       → reviews
```

---

## 7. Notes on Scope (per the agreed Package 2 document)

- No CMS / admin panel — content edits (text, images, new products) are made by editing the
  files above, not through a login-based dashboard. Adding a product is a data-file edit, not
  a redesign, but it still needs a developer to do it.
- No e-commerce cart/checkout — all product pages funnel to the single Contact form / WhatsApp,
  matching how bulk/wholesale inquiries actually convert.
- No backend/database — the site is fully static; the only "live" functionality is the
  Formspree-powered contact form.
