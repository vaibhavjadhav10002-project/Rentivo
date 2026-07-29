# Rentivo — Brand Guidelines (v2)

## Brand foundation
Rentivo is infrastructure for running a PG or rental property, not a
real-estate brokerage brand — the identity should read the way Stripe or
Linear reads: precise, calm, capable, never a cartoon, never a brochure.

## The mark
A single monogram — the letter **R** — built with clean geometric strokes
of consistent width. The property meaning is not decoration on the
letterform; it's a house-shaped negative-space counter inside the bowl of
the R, discovered on a second look. See `BRAND_ASSET_REPORT.md` for the
full reasoning and the two alternate variations considered.

## Logo rules
- **Minimum size:** 24px for the icon mark alone; 140px wide for the full
  horizontal lockup with wordmark.
- **Clear space:** on all sides, equal to the width of the R's stem.
- **Never:** recolor outside approved variants, stretch/skew/rotate, add
  drop shadows or outer glow, place the light variant on a light
  background (or dark-on-dark).

## Logo variations
Horizontal (primary), Vertical, Dark (white mark, for dark backgrounds),
Light (color mark, for light backgrounds — this is the default/primary
use), Monochrome (single flat color — `#111827` — for constrained
single-color contexts).

## Color system
| Role | Hex | Usage |
|---|---|---|
| Primary | `#2563EB` (gradient start) | Icon/hero gradient start, primary links |
| Secondary | `#7C3AED` (gradient end) | Icon/hero gradient end |
| Accent (gradient midpoint) | `#6D5BEF` | Smooths the primary→secondary transition — avoids a harsh two-stop gradient |
| Dark / Ink | `#111827` | Text, dark backgrounds, monochrome mark |
| Light / White | `#FFFFFF` | Backgrounds, dark-mode mark |
| Neutral 1 | `#9CA3AF` | Secondary text, borders |
| Neutral 2 | `#6B7280` | Body copy on light backgrounds |
| Success (accessible) | `#059669` | Confirmations, positive states |
| Error (accessible) | `#DC2626` | Errors, destructive actions |

**Gradient:** 135–170°, `#2563EB → #6D5BEF → #7C3AED` (three stops, not
two — the midpoint keeps the transition smooth rather than banding
through a muddy blue-purple at the halfway point). Reserved for the icon,
splash, hero moments, and primary buttons — never for large body/content
surfaces.

**Accessibility:** `#111827` on `#FFFFFF` and `#FFFFFF` on `#111827` both
exceed WCAG AAA contrast. `#2563EB`/`#7C3AED` on white pass AA for large
text/UI components; don't set small body text directly in the gradient
colors — use `#111827`/`#374151` for body copy instead.

## Typography
- **Logo wordmark:** Poppins SemiBold/Bold.
- **Headings:** Space Grotesk (specified) — **not installed in the
  environment that rendered these mockups**; substitute Poppins Bold
  until Space Grotesk is added to the actual product build. See
  `BRAND_ASSET_REPORT.md` §4.
- **Body:** Inter (specified) — same caveat; mockups use Liberation Sans
  as a neutral stand-in.
- Tighten letter-spacing ~2% on large display type; default spacing in
  UI/body text.

## Icon system
- **App icon:** rounded square, three-stop gradient, white mark centered,
  soft inner top-light + subtle bottom shading for depth — no drop shadow
  outside the icon, no busy detail, no text.
- **Adaptive icon (Android):** separate foreground (mark only,
  transparent) and background (solid gradient) layers, mark scaled inside
  the OS safe zone so it survives circle/squircle/rounded-square masking.
- **Material You / Android 13+ themed icon:** single-color (white)
  foreground layer, same safe-zone scaling, so the OS can retint it to
  match the user's wallpaper.
- **Favicon:** derived from the rounded-square app icon at 16/32px — the
  house-counter hole was specifically checked for legibility at this size
  (see the small-size comparison in the asset report).

## Print, embroidery & engraving usage
- **Print (business cards, letterhead, signage):** use the full-color
  gradient version on white/light stock; use monochrome on colored or
  textured stock where the gradient wouldn't reproduce cleanly.
- **Embroidery:** use the monochrome version only — thread can't
  reproduce a smooth gradient, and the mark's single-weight strokes and
  one solid counter-hole (no thin lines) make it embroidery-safe at
  typical polo/cap sizes (~30–40mm).
- **Laser engraving:** monochrome version, solid fill — avoid the
  gradient version entirely (engraving is inherently single "color," i.e.
  single depth/burn). The mark's lack of fine internal linework is exactly
  what makes it engrave cleanly at small sizes (e.g. a keychain or plaque).

## Do / Don't
**Do:** use the exact specified gradient; use monochrome on busy or
textured backgrounds; keep the minimum clear space; use the icon alone
below 140px width.
**Don't:** recolor outside approved variations; stretch, skew, or rotate;
add shadows/bevels/glows; mismatch light/dark variant to background.

## Applications
Full rendered set in `BRAND_ASSET_REPORT.md`'s file manifest: website
hero/navbar, login, dashboard, Play Store, App Store, laptop/tablet/phone
device mockups, business card, letterhead, envelope, t-shirt, signage,
glass door, social profile/cover, email signature.
