# Changelog — Rentivo Marketing Website

## v1.0.0 — Initial build

Complete, separate marketing website for Rentivo, built per the Rentivo
Final Master Website Prompt. Does not modify, embed, or depend on the
production application in any way.

### Added
- Design system (`css/tokens.css`) — palette derived from the production
  app's own icon gradient, glassmorphism, dark/light mode, full type scale
- Shared header/footer partials + `js/site.js` (dark mode persistence,
  mobile menu, scroll-reveal animation, animated counters, active-nav state)
- 19 pages: Home, Features, Solutions, Pricing, Download, Customers, About,
  Contact, FAQ, Help Center, Blog, Careers, Release Notes, Status, and 5
  legal pages (Privacy, Terms, Cookies, Refund, Data Deletion)
- Full SEO: per-page meta titles/descriptions, Open Graph + Twitter Card
  tags, JSON-LD structured data on the home page, `robots.txt`,
  `sitemap.xml`, `manifest.json`, `favicon.ico`
- Brand assets reused directly from the production app's existing PWA
  icons — no new logo/color palette invented

### Content decisions worth knowing about
- **Trust stats and testimonials use clearly-marked sample content**, not
  fabricated customer names or invented traction numbers — the product
  doesn't have public case studies yet, and presenting invented ones as
  real would be deceptive to visitors, investors, and Play Store
  reviewers. Every such section has an HTML comment marking it as sample
  content to replace. See README.md for the full list.
- **Legal pages are complete, substantive templates** tailored to this
  product's actual data handling (Aadhaar/KYC data, rent tracking,
  tenant-owner data sharing) — not generic filler — but are still
  templates requiring legal review before publishing, per the disclaimer
  on each page.
- **"Coming Soon" is used only where explicitly appropriate**: Google
  Play / App Store badges, the API and Partner Program footer links, and
  video tutorials — matching the brief's own instruction to reserve that
  label for genuinely-not-yet-available items.

### Known placeholders requiring a real value before launch
Domain (`rentivo.example.com`), web app URL, APK download link + file
size/SHA-256/release date, WhatsApp/email/map details on the Contact page.
Full list in `README.md`.

### Not included in this pass
Blog posts and Career listings are structurally ready (per the brief's
"(Ready)" designation) but contain no real content yet — by design, since
none exists. A CMS/backend for the Blog and a real ATS integration for
Careers are not part of this static-site delivery and would be a separate
scope if wanted.
