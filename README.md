# Rentivo Marketing Website

The official marketing/company website for **Rentivo** — a PG & property
management platform. This is a **separate project** from the production
application; it does not embed, modify, or depend on it in any way. It
exists to build trust, generate leads, offer APK downloads, and send
visitors to the real web app.

## Stack

Deliberately dependency-free: plain HTML, CSS, and vanilla JavaScript.
No build step, no framework, no bundler — a marketing site this size
doesn't need one, and it keeps the whole thing trivially deployable to
any static host (Vercel, Netlify, Cloudflare Pages, GitHub Pages, S3 +
CloudFront, or a plain Nginx box).

- `css/tokens.css` — the entire design system (colors, type, components)
- `js/site.js` — header/footer injection, dark mode, mobile menu, scroll
  reveal, animated counters
- `partials/header.html`, `partials/footer.html` — shared nav/footer,
  fetched and injected by `site.js` so they only need editing once
- One `.html` file per page (19 total), each self-contained with its own
  `<head>` SEO metadata

## Structure

```
rentivo-website/
├── index.html                  Home
├── features.html
├── solutions.html
├── pricing.html
├── download.html
├── customers.html
├── about.html
├── contact.html
├── faq.html
├── help-center.html
├── blog.html
├── careers.html
├── release-notes.html
├── status.html
├── legal/
│   ├── privacy.html
│   ├── terms.html
│   ├── cookies.html
│   ├── refund.html
│   └── data-deletion.html
├── partials/
│   ├── header.html
│   └── footer.html
├── css/tokens.css
├── js/site.js
├── assets/icons/               App icon reused from the production app
├── manifest.json
├── robots.txt
├── sitemap.xml
└── favicon.ico
```

## Local preview

Because `site.js` fetches the header/footer partials, this must be served
over HTTP — opening the HTML files directly via `file://` will not load
the nav/footer (browser CORS restrictions on `fetch()` for local files).

```bash
# any static server works, e.g.:
npx serve .
# or
python3 -m http.server 8080
```

Then open `http://localhost:8080` (or whatever port your server picked).

## Before going live — replace these placeholders

Search the project for anything that needs a real value before launch:

1. **Domain** — every page uses `https://www.rentivo.example.com` in
   canonical URLs, Open Graph tags, `robots.txt`, and `sitemap.xml`.
   Find-and-replace this with your real domain.
2. **"Open Web App" links** — currently point at
   `https://app.rentivo.example.com`; update to your real production app
   URL (same one you'd configure in the Android APK's `capacitor.config.ts`).
3. **Download page** — the APK download button, file size, release date,
   and SHA-256 hash are placeholders. Wire the button to your actual
   hosted APK and fill in the real values once you have a signed release
   build (see `SIGNING_GUIDE.md` / `ANDROID_BUILD_GUIDE.md` in the app
   project for how to generate that hash).
4. **Contact details** — the WhatsApp number, email address, and Google
   Maps placeholder on `contact.html` are samples.
5. **Trust/stats/testimonials** (Home, Customers pages) — these use
   clearly-marked sample content (see the HTML comments above each
   section) rather than fabricated customer names or invented traction
   numbers, since the product doesn't have public case studies yet.
   Replace with real figures and real, permission-given testimonials as
   they become available — don't just remove the marker comments and
   ship the sample content as if it were real.
6. **Legal pages** — all five (`legal/*.html`) are complete, genuinely
   substantive templates tailored to this product (mentions of Aadhaar/KYC
   data, rent tracking, etc.), not generic filler — but they are templates.
   Have them reviewed by qualified legal counsel for your jurisdiction
   before publishing, and fill in the `[Insert date at launch]` markers.
7. **Google Fonts** — pages load Space Grotesk / Inter / IBM Plex Mono
   from `fonts.googleapis.com` at runtime. If you need to avoid a
   third-party font request (e.g. for a stricter CSP or GDPR reasons),
   self-host the font files instead.

## Design notes

Colors are derived directly from the production app's existing icon
gradient (`#2563EB` → `#7C3AED`) — this wasn't picked freely, it's meant
to visually match the product. The hero's floating glass card stack
(Owner Dashboard / Tenant Portal / QR Payment) is a deliberate reference
to the product's actual three-sided architecture, not decoration.
