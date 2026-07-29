# Deployment Guide — Rentivo Website

This is a static site (no build step, no server-side code) — it can be
deployed to any static host in a few minutes.

## Option A — Vercel (recommended, matches the app's own hosting)

1. Push this folder to its own GitHub repo (keep it separate from the
   application repo — they should deploy independently).
2. In Vercel: **New Project → Import** the repo.
3. Framework preset: **Other** (no build command needed — it's static).
4. Output directory: `.` (project root).
5. Deploy. Vercel serves static files correctly out of the box, including
   the `fetch()` calls `site.js` makes for the header/footer partials.
6. Add your custom domain (e.g. `rentivo.com` / `www.rentivo.com`) under
   **Project Settings → Domains**.

## Option B — Netlify

1. **New site from Git**, point at the repo.
2. Build command: leave empty. Publish directory: `.`.
3. Deploy.

## Option C — Cloudflare Pages

1. **Create a project → Connect to Git**.
2. Build command: none. Build output directory: `/`.
3. Deploy.

## Option D — Any static file server (Nginx, S3+CloudFront, GitHub Pages)

Just upload the contents of this folder as-is. The only requirement is
that it's served over real HTTP(S) — not opened via `file://` — so the
header/footer `fetch()` calls work (see README's Local Preview section).

## Before you deploy — the required replacements

See **README.md → "Before going live — replace these placeholders"** for
the full list (domain, web app URL, download page details, contact info,
sample stats/testimonials, legal page dates). Skipping this list is the
most common way a static site launch goes wrong — nothing will error, it
will just quietly show placeholder content in production.

## Post-deploy checklist

- [ ] Visit every page and confirm the header/footer render (confirms
      partials are loading correctly on the real host)
- [ ] Test dark mode toggle persists across page navigation
- [ ] Test the mobile menu on an actual phone, not just a resized browser
- [ ] Submit `sitemap.xml` to Google Search Console
- [ ] Run Lighthouse (Performance / SEO / Accessibility / Best Practices)
      against the deployed URL, not a local preview — real network
      conditions and font loading affect the score
- [ ] Confirm `robots.txt` and `sitemap.xml` are reachable at the domain
      root once DNS is live
- [ ] Update the "Open Web App" links to the real app URL if it changed
      since this was built
