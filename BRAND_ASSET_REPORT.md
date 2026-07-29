# BRAND_ASSET_REPORT.md — Rentivo Identity Refinement

## 1. What changed from v1

The original mark used a literal building silhouette (window grid + arched
door) as the R's stem. Per this refinement brief's explicit direction —
"R recognizable first, property meaning discovered second," "avoid
unnecessary windows," "use negative space intelligently" — the mark was
rebuilt from scratch around a different mechanism: **the property meaning
now lives entirely in the negative-space counter of the R's bowl**, not in
surface decoration on the stem. Look at it once, you see a bold, clean R.
Look again, the hole inside the bowl is a house silhouette. That's the
"discovered second" moment the brief asked for.

## 2. Three variations produced and evaluated

All three share the identical R skeleton (stem, bowl proportions, stroke
weight, corner radii) so they're unmistakably one family — they differ
only in how the secondary "property" meaning is carried.

| | Variation A — Minimal Premium | Variation B — Architectural Modern | Variation C — Technology + Property |
|---|---|---|---|
| Secondary element | House-shaped negative-space counter | Same house counter + a small second rooftop peeking behind the stem | House counter replaced with a location-pin-shaped counter (ring + dot) |
| Small-size risk | Low — one solid pentagon hole survives 16px cleanly | Medium — the thin peeking-roof sliver is the kind of fine detail that degrades first at 16–24px | Medium-high — a ring-with-a-dot is a thinner, more intricate shape than a solid pentagon, more prone to closing up or looking like a smudge at 16px |
| Distinctiveness | High — a house silhouette is specific to property/PG, not used by every map/tech app | Medium — same strength as A, slightly undercut by the extra element reading as clutter | Medium — a location pin is an extremely common, slightly generic tech/map trope |
| Matches "avoid busy details" | Yes | Partially — the extra rooftop is a second thing to parse | Yes, but the ring-in-pin is intricate for what it delivers |

**Score (1–10) against the brief's own criteria, Variation A:**

| Criterion | Score | Note |
|---|---|---|
| Memorability | 9 | Single clean gesture (bold R, one discoverable hole) |
| Simplicity | 9 | No decoration beyond the one counter shape |
| Timelessness | 8 | Geometric monogram + negative-space device is a durable technique (not tied to a visual trend) |
| Premium feel | 8 | Consistent stroke weight, clean curves, restrained gradient |
| Scalability | 9 | Verified render at 16/24/32/48px — one solid shape, no thin strokes to break up |
| App icon clarity | 9 | Reads instantly on a home screen grid at real size |
| Website branding | 8 | Works equally well as a small navbar mark and a large hero mark |
| Print quality | 8 | Solid shapes reproduce cleanly in single-color print/engraving (no fine linework to lose) |
| Play Store / App Store visibility | 8 | High-contrast silhouette holds up at store thumbnail sizes |
| Property relevance | 9 | House silhouette is unambiguous once seen |
| PG relevance | 7 | Reads as "residential property" generally; nothing PG-specific beyond that (a PG is a sub-category of residential rental, and no single silhouette specifically signals "PG" vs. any other rental — this is an honest ceiling on this criterion, not a flaw of execution) |
| Owner/Tenant relevance | 7 | Neutral to both audiences by design — the mark represents the property/building itself, not a specific role, which is the correct choice for a two-sided platform |
| Distinctiveness | 8 | Not aware of a directly comparable "R + house-counter" mark in the property-SaaS space (not a legal trademark clearance — see note below) |

**Overall: strong pass.** Variations B and C are viable alternates but each
trades a small amount of small-size robustness or distinctiveness for a
marginal gain in "more visibly architectural" — not a good trade given the
brief's own "avoid busy details" and "recognizable at 16px" requirements.

## 3. Final selection: Variation A

**Recommended as the official Rentivo identity.** Reasoning for the next
10+ years: the mark's durability doesn't depend on the house shape staying
fashionable — geometric monogram + hidden negative-space symbol is the same
underlying technique behind marks that have already lasted decades (FedEx's
arrow, for instance). If Rentivo's product surface changes completely, this
mark doesn't date the way a literal illustration of a building facade
would have. It's also the only one of the three variations with zero fine
detail below the stroke weight of the letterform itself — nothing in it
can degrade before the R itself would.

## 4. Honest limitations of this pass

**Typography substitution:** the brief asks for Space Grotesk (headings)
and Inter (body), with Poppins SemiBold for the logo. This sandbox has no
internet access and only Poppins installed locally (confirmed via `fc-list`
— neither Inter, Space Grotesk, Manrope, nor any other requested/alternate
font exists here). Every mockup in this deliverable uses **Poppins**
(matches the logo spec exactly) for the logo and headings, and
**Liberation Sans** as a neutral stand-in for body copy — not Inter itself.
**Before production use:** install Inter and Space Grotesk (both free,
standard Google Fonts) and swap them in; nothing else about the layouts
needs to change, since they were built with generic `body-font`/`heading-font`
CSS classes for exactly this swap.

**Trademark clearance:** "distinctiveness" scores above reflect this
design's originality relative to what I'm aware of, not a legal trademark
search — a proper clearance search (USPTO/India Trademark Registry/EUIPO as
relevant) is still recommended before committing to this mark commercially.

**Photorealistic physical mockups:** business card, letterhead, envelope,
t-shirt, signage, and glass door are delivered as clean flat/vector
mockups (accurate proportions, real layout decisions), not photographic
composites on an actual printed card, woven fabric, or photographed
storefront — this environment has no 3D rendering or photo-compositing
tool. They're accurate enough to approve a design direction; a print/
production vendor's own photographic mockup is still worth doing before
final sign-off on physical items.

## 5. Full file manifest

See `BRAND_GUIDELINES.md` / `.pdf` for the presented system. Raw files:

**Logo:** `mark-final-color.svg`, `mark-final-white.svg`, `mark-final-mono.svg`,
`v2-logo-horizontal-light.png`, `v2-logo-horizontal-dark.png`,
`v2-logo-vertical-light.png`, `v2-logo-monochrome.png`

**Icons:** `v2-app-icon-square/rounded/circle-1024.png`,
`v2-adaptive-icon-foreground/background-1024.png`,
`v2-materialyou-icon-1024.png`, `v2-favicon.ico` (+ 16/32px PNGs)

**Splash:** `v2-splash-android.png`, `v2-splash-ios.png`

**Digital mockups:** `v2-website-hero.png` (includes navbar), `v2-login.png`,
`v2-dashboard.png`, `v2-playstore.png`, `v2-appstore.png`, `v2-devices.png`
(laptop/tablet/phone composite)

**Stationery/physical:** `v2-bizcard.png`, `v2-letterhead.png`,
`v2-envelope.png`, `v2-tshirt.png`, `v2-signage.png`, `v2-glassdoor.png`

**Social:** `v2-social-profile.png`, `v2-social-cover.png`,
`v2-email-signature.png`

**Superseded (kept for reference only, not for use):** all `mark-v1`/`mark-v2`/
non-`v2-` prefixed logo and mockup files from the first identity pass.
