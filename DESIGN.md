---
name: jsalinas.dev
description: A signal portal at night; the page is the moment a customer's message lands.
colors:
  ink-0: "oklch(15.5% 0.028 248)"
  ink-1: "oklch(19.5% 0.032 248)"
  ink-2: "oklch(25% 0.036 246)"
  ink-3: "oklch(33% 0.04 244)"
  rule: "oklch(100% 0 0 / 0.11)"
  rule-strong: "oklch(100% 0 0 / 0.22)"
  text: "oklch(96% 0.012 85)"
  text-2: "oklch(80% 0.022 240)"
  text-3: "oklch(68% 0.026 240)"
  accent: "oklch(71% 0.15 252)"
  accent-hot: "oklch(77% 0.125 248)"
  on-accent: "oklch(17% 0.045 258)"
  on-accent-2: "oklch(27% 0.07 258)"
  signal: "oklch(88% 0.165 96)"
  field: "oklch(60% 0.15 256)"
  error: "oklch(70% 0.19 25)"
typography:
  display:
    fontFamily: "'Archivo Variable', 'Archivo', system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 1.4rem + 3.8vw, 4.6rem)"
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "-0.028em"
    fontVariation: "'wdth' 116"
  headline:
    fontFamily: "'Archivo Variable', 'Archivo', system-ui, sans-serif"
    fontSize: "clamp(1.9rem, 1.2rem + 2.6vw, 3.5rem)"
    fontWeight: 780
    lineHeight: 1
    letterSpacing: "-0.022em"
    fontVariation: "'wdth' 118"
  headline-drenched:
    fontFamily: "'Archivo Variable', 'Archivo', system-ui, sans-serif"
    fontSize: "clamp(2.1rem, 1.3rem + 3.2vw, 4.1rem)"
    fontWeight: 820
    lineHeight: 0.96
    letterSpacing: "-0.022em"
    fontVariation: "'wdth' 118"
  lede-accent:
    fontFamily: "'Archivo Variable', 'Archivo', system-ui, sans-serif"
    fontSize: "clamp(1.6rem, 1.1rem + 2.1vw, 2.9rem)"
    fontWeight: 720
    lineHeight: 1.08
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 114"
  title:
    fontFamily: "'Archivo Variable', 'Archivo', system-ui, sans-serif"
    fontSize: "clamp(1.45rem, 1.2rem + 0.9vw, 2rem)"
    fontWeight: 740
    lineHeight: 1.05
    letterSpacing: "-0.022em"
    fontVariation: "'wdth' 118"
  lede:
    fontFamily: "'Archivo Variable', 'Archivo', system-ui, sans-serif"
    fontSize: "clamp(1.075rem, 1rem + 0.35vw, 1.3rem)"
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: "'Archivo Variable', 'Archivo', system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
    fontVariation: "'wdth' 100"
  label:
    fontFamily: "'Archivo Variable', 'Archivo', system-ui, sans-serif"
    fontSize: "0.975rem"
    fontWeight: 560
    lineHeight: 1.4
  control:
    fontFamily: "'Archivo Variable', 'Archivo', system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 680
    lineHeight: 1
    fontVariation: "'wdth' 108"
rounded:
  pill: "999px"
  panel: "1.25rem"
  bubble: "1.35rem"
  bubble-tail: "0.35rem"
  shot: "0.9rem"
  field: "0.75rem"
  focus: "4px"
spacing:
  gutter: "clamp(1.25rem, 4.5vw, 4rem)"
  section: "clamp(5.5rem, 12vw, 10rem)"
  section-contact: "clamp(6rem, 13vw, 11rem)"
  block: "clamp(3.5rem, 7vw, 5.5rem)"
  measure: "68ch"
  container: "88rem"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    typography: "{typography.control}"
    rounded: "{rounded.pill}"
    padding: "0 1.6rem"
    height: "3.25rem"
  button-primary-hover:
    backgroundColor: "{colors.accent-hot}"
    textColor: "{colors.on-accent}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.text}"
    typography: "{typography.control}"
    rounded: "{rounded.pill}"
    padding: "0 1.6rem"
    height: "3.25rem"
  nav-cta:
    backgroundColor: "transparent"
    textColor: "{colors.accent}"
    rounded: "{rounded.pill}"
    padding: "0 1.15rem"
    height: "2.6rem"
  nav-cta-hover:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
  input-field:
    backgroundColor: "{colors.ink-0}"
    textColor: "{colors.text}"
    typography: "{typography.body}"
    rounded: "{rounded.field}"
    padding: "0.85rem 1rem"
  input-field-focus:
    backgroundColor: "{colors.ink-1}"
    textColor: "{colors.text}"
  form-panel:
    backgroundColor: "{colors.ink-1}"
    textColor: "{colors.text}"
    rounded: "{rounded.panel}"
    padding: "clamp(1.5rem, 3vw, 2.5rem)"
  message-bubble:
    backgroundColor: "{colors.ink-1}"
    textColor: "{colors.text}"
    rounded: "{rounded.bubble}"
    padding: "1rem 1.15rem 1.15rem"
    width: "min(100%, 23rem)"
  offer-field:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    padding: "clamp(5.5rem, 12vw, 10rem) 0"
  demo-slot:
    backgroundColor: "{colors.ink-2}"
    rounded: "{rounded.shot}"
  demo-slot-empty:
    backgroundColor: "{colors.ink-1}"
    rounded: "{rounded.shot}"
---

# Design System: jsalinas.dev

## Overview

**Creative North Star: "The Signal Portal"**

The site is one night scene with two working colors. A slow WebGL field of blue topographic waves sits under the hero, the "why" section and the contact section, and safety-yellow ripples pulse outward from a point the way a message arrives. Everything else is a blue-black ground, warm-white text and a single cobalt accent that either marks the one thing to act on or takes over a whole region outright: the offer is a drenched cobalt field set in dark ink.

The palette comes from the trades: tool blue and hi-vis yellow. That origin is what keeps a blue-on-dark site away from the AI-startup look, and flat fills are the guard that holds it there: no gradients on UI, no glass, no glow. Yellow is never a color the interface speaks in; it is only the signal, the moment something lands.

Type carries the voice. Archivo's width axis does the hierarchy work: headings are expanded and heavy, body text sits at normal width, controls sit in between. Density is low and the rhythm is long; sections breathe on large clamped padding and separate with hairline rules rather than cards. Depth comes from the field behind the content, and exactly two objects (the example message bubble and the contact form panel) lift off it. The world refuses the freelancer-portfolio default (photo, headline, three cards) and the dark AI-startup cliché (neon purple, glow, thin tracked type). It is built for a trades owner on a mid-range phone who came from a sales message, so the field's performance budget is part of the system, not an optimisation.

**Key Characteristics:**
- Blue-black night ground, one cobalt accent, one safety-yellow signal used only for ripples and rings.
- A trades palette (tool blue, hi-vis yellow) held off the AI-startup look by flat fills.
- Archivo variable: expanded heavy display, normal-width text; width is hierarchy.
- Flat fills: no UI gradients, no glass, no glow halos.
- Pill buttons, a message bubble with a tail, concentric ripple rings as the recurring mark.
- A performance-budgeted WebGL signal field in three sections only.
- Arrival motion: rise plus unblur on an exponential ease-out, staggered per section.

## Colors

A night palette from the job site: cool blue-black inks, warm-white text, one cobalt tool blue and one hi-vis signal yellow.

### Primary
- **Cobalt** (`accent`): the only accent the interface speaks in. Primary buttons, the highlighted half of every split headline, the wordmark's ".dev", links, the bubble's "new message" status, FAQ icons and hover, the nav underline and language marker, Why path nodes, focus rings, selection, caret and `accent-color`. As a ground it owns the entire Offer section.
- **Cobalt Hot** (`accent-hot`): hover state of the primary button; the text color of inline code chips on the Offer field.
- **Cobalt Ink** (`on-accent`): dark blue ink on cobalt. Text on primary buttons and the nav CTA hover, all Offer text and its rules, the selection text color.
- **Cobalt Ink Soft** (`on-accent-2`): secondary copy on the Offer field (plan descriptions, the "not included" line).

### Secondary
- **Hi-Vis Signal** (`signal`): the signal and nothing else. The shader ripples, the inner rings behind the portrait and in empty demo slots, and the hero status dot with its ping. Never text, never a button, never a ground.
- **Field Blue** (`field`): the outer ring behind the portrait and in empty demo slots, and at 0.25 alpha the form's success-message wash. The shader draws its waves in the matching field blue.

### Neutral
- **Night Ink** (`ink-0`): page ground, fixed nav once scrolled, footer, input wells, the ghost mail button's fill over the field.
- **Raised Ink** (`ink-1`): the two lifted objects (message bubble, form panel), focused inputs, empty demo slots.
- **Well Ink** (`ink-2`): ground behind demo screenshots; inline code chips on dark.
- **Scroll Ink** (`ink-3`): scrollbar thumb.
- **Hairline** (`rule`): section dividers, nav bottom edge when solid, panel, bubble and slot borders.
- **Strong Hairline** (`rule-strong`): ghost button stroke, FAQ rules, the Why path line, input strokes, the "Example" tag.
- **Warm White** (`text`): headings and primary copy; faintly warm (hue 85) against the cool ground.
- **Mist** (`text-2`): subheads, body paragraphs, nav links at rest, the status line.
- **Fog** (`text-3`): meta text: footer items, placeholders, "coming soon" labels.
- **Alarm** (`error`): invalid input stroke; its tinted pair (`oklch(62% 0.19 25 / 0.2)` ground, `oklch(90% 0.06 25)` text) is the form error message. Functional only.

### Named Rules
**The One Accent Rule.** Cobalt is the only color the interface speaks in. It either marks the single thing to read or act on, or it owns a whole region. It is never spread thin as a decorative tint across cards.

**The Drenched Field Rule.** When a section goes cobalt it goes all the way: cobalt ground, Cobalt Ink text, rules drawn in ink (3px under the headline, 1.5px between items), inline code inverted to ink chips with Cobalt Hot text, selection and focus outline switched to ink. No cards, no dark panels floating on the blue.

**The Signal Is Only Signal Rule.** Hi-vis yellow marks arrival: ripples, rings, the status dot. It is never text, never a button, never a ground, and never a second accent for emphasis.

## Typography

**Display Font:** Archivo Variable (with Archivo, system-ui, sans-serif)
**Body Font:** Archivo Variable, same family
**Label/Mono Font:** none distinct; inline code uses the body family at weight 650, width 112%.

**Character:** One grotesque stretched two ways. Expanded, heavy and tightly tracked for display, it reads like lettering on a work van; at normal width and 1.6 leading it is plain and easy for a phone reader.

### Hierarchy
- **Display** (800, `display` clamp, 0.98): the hero h1 only, left-aligned, capped near two-thirds of the row. Width drops from 116% to 104% at 480px and below so the Spanish headline fits a 350px column.
- **Headline** (780, `headline` clamp, 1.0): every section h2. Offer and Contact use the larger drenched variant (820, up to 4.1rem and 3.75rem, 0.96 to 0.98).
- **Lede Accent** (720, `lede-accent` clamp, 1.08, cobalt): a headline's second voice, used once, under the Why headline.
- **Title** (740, 1.45rem to 2rem, 1.05): h3 for path steps, plan names (up to 3.1rem at 820), demo slots (1.45rem), extras (up to 1.75rem at 760).
- **Lede** (400, `lede` clamp, 1.55, Mist): hero subhead, About lead paragraph, Contact and Work intros; capped at 38rem to 44ch.
- **Body** (400, 1.0625rem, 1.6): paragraphs, capped at `measure` (68ch) or 60ch in columns.
- **Label** (560 to 620, 0.9 to 0.975rem): nav links, form labels, tags, status line, footer.
- **Control** (680, 1.0625rem, width 108%): buttons and link-actions. Prices use 680 to 720 with tabular numerals.

### Named Rules
**The Width Is Hierarchy Rule.** Headings expand (114% to 118%), controls widen slightly (108% to 112%), text stays at 100%. Do not create hierarchy with tracked-out uppercase or thin weights.

**The Split Headline Rule.** Hero, About and Contact headlines split into a Warm White prefix and a cobalt highlight in the same weight and size. One highlight per headline.

**The Headline Is the Heading Rule.** Each section's visible h2 is its approved Annex A headline. Section names (Sobre mí, Oferta, Por qué una página, Contacto) appear only in the nav. No kickers or eyebrows above any heading.

## Layout

A single centred container (`container` 88rem) with fluid side gutters (`gutter`). Sections stack full-bleed on the long vertical rhythm of `section` padding (Contact gets the slightly taller `section-contact`), and major blocks inside a section are separated by `block`. Adjacent dark sections divide with one Hairline at the top edge; the field sections and the cobalt Offer need no divider because their ground changes.

The hero is a full-viewport (`100svh`) field with a two-column grid (1.55fr copy, 1fr bubble), content vertically centred on desktop and dropped to the bottom on phones. Inner sections use asymmetric two-column splits: About 0.85/1.15 (portrait, copy), FAQ 0.7/1.3 with a sticky title, Contact 1.05/0.95 (copy, form), Offer two equal columns, Work a header split over three equal demo slots. The Why section is a three-station path on one line that becomes a vertical line with left-hung nodes on phones.

Responsive steps are content-driven, not a fixed scale: 900px (hero and contact stack), 860px (nav collapses; About, FAQ, Why and Work stack), 760px (offer stacks), 480px (hero buttons go full width, display narrows). The fixed nav is 4.5rem tall and `scroll-padding-top` is 5rem.

**The Phone First Screen Rule.** On a phone the first screen must show the headline, the price-bearing subhead and the "Escríbeme" button without scrolling; the bubble follows below the actions.

## Elevation & Depth

Flat by default. Depth comes from the signal field sitting behind content in three sections, and from tonal steps between Night Ink and Raised Ink. One soft two-layer shadow exists and only two objects wear it.

### Shadow Vocabulary
- **Lift** (`box-shadow: 0 1px 2px oklch(5% 0.02 248 / 0.35), 0 10px 30px -8px oklch(5% 0.02 248 / 0.55)`): the hero message bubble and the contact form panel, so they read as objects resting on the field.

### Named Rules
**The Two Lifts Rule.** Only objects that sit on the signal field and carry a message (the bubble, the form) are lifted. Everything else is flat and separated by hairlines.

**The Flat Fill Rule.** No gradients on UI, no glass or backdrop blur, no glow halos. The one exemption is the field's own CSS ground (a soft radial wash of deep blue and a faint signal-yellow wash over Night Ink), which stands in for the shader while it loads or when WebGL is missing.

## Shapes

Two families that never mix on one object. Controls and small marks are fully round: pill buttons, the nav CTA, the menu toggle, the "Example" tag and the skip link (`pill`), dots and rings (50%). Containers are softly rounded: the form panel and the portrait (`panel`), demo slots (`shot`), inputs and status messages (`field`). The message bubble is the signature silhouette: `bubble` on three corners, a tight `bubble-tail` on the bottom-left, plus a small clipped triangle tail with matching hairline border.

Strokes are 1px for hairlines on dark containers and 1.5px for anything interactive or drawn as a mark (buttons, inputs, rings, rules on the Offer field, the Why path). The Offer headline rule is the only 3px line.

**The Ripple Mark Rule.** Concentric circles in 1.5px strokes with decaying alpha are the system's recurring mark: an inner signal ring and an outer field-blue ring behind the portrait and inside each empty demo slot; the status dot's ping; the ringed cobalt nodes of the Why path. New marks come from this vocabulary, not from icons or illustrations.

## Components

### Buttons
One pill family, 3.25rem tall, Control type, with an optional trailing 1.15em stroke icon.
- **Shape:** fully round (`pill`), 1.5px border.
- **Primary:** Cobalt fill and border, Cobalt Ink text, padding 0 1.6rem. One primary per view region ("Escríbeme", form submit, 404 home link).
- **Hover / Focus:** fill and border move to Cobalt Hot; the trailing arrow slides 3px right on the ease-out; active scales to 0.98. Focus is the global 2px cobalt outline at 3px offset.
- **Ghost:** transparent with a Strong Hairline stroke and Warm White text; hover turns the stroke Warm White and adds a 6% white fill. Over the field (the mail button) it takes a Night Ink fill so the waves never run through the label.
- **Disabled:** 0.6 opacity, not-allowed cursor; the label reports sending state.
- **Mobile:** at 480px hero buttons go full width; the form submit goes full width at 900px.

### Inputs / Fields
- **Style:** Night Ink well inside the Raised Ink panel, 1.5px Strong Hairline stroke, `field` radius, padding 0.85rem 1rem, body size. Labels sit above in Label type at 620. Placeholders in Fog.
- **Focus:** stroke turns Cobalt and the well rises to Raised Ink; no outline, no glow.
- **Error:** `:user-invalid` turns the stroke Alarm. Form-level success and error messages are `field`-rounded tinted blocks (field-blue wash, alarm wash).

### Cards / Containers
There are no card grids. Content is laid on the ground and divided by rules.
- **Form panel:** Raised Ink, 1px Hairline border, `panel` radius, Lift, clamped padding.
- **Portrait:** 4:5, `panel` radius, full grayscale with slight contrast, warming to 20% grayscale on hover, ringed by the Ripple Mark.

### Demo Slots (Work)
Three slots for the sample pages built on the trades template. Each is a phone-shaped frame (9:13, 16:10 at 860px and below), `shot` radius, 1px Hairline border, a Title label and a link-action below.
- **Filled:** Well Ink ground, screenshot anchored top; the whole slot is the link. Hover scales the image 1.035 over 0.9s and underlines the cobalt "view the example" action.
- **Empty:** Raised Ink ground holding the Ripple Mark (signal ring at 38%, field ring at 72%) where the example will land, with a Fog "coming soon" label. A slot fills only when it has both a URL and an image.

### Navigation
- **Bar:** fixed, 4.5rem, transparent over the hero field; after 24px of scroll it fills Night Ink with a Hairline bottom edge. Wordmark left ("jsalinas" in Warm White, ".dev" in cobalt, 800, width 118%).
- **Links:** Mist, Label type; hover to Warm White with a 2px cobalt underline that grows from the left.
- **Language switch:** ES / EN, current one Warm White with a 2px cobalt underline.
- **CTA:** outline pill in cobalt (2.6rem), filling cobalt with Cobalt Ink text on hover.
- **Mobile (860px and below):** links, switch and CTA collapse into a round 2.75rem toggle; the menu opens full width on Night Ink with large 760-weight links (1.6rem, width 116%) separated by hairlines, the other language offered by name at the bottom. Escape closes and returns focus.

### Message Stack (signature)
The stack lives inside a phone: a 23rem device with a 2.6rem Well Ink bezel, Strong Hairline edge and Lift; a Raised Ink top bar with a round cobalt avatar (tool icon), the "Tu negocio" / "Your business" title and the pill "Example" tag; a Night Ink chat screen with a faint 14px dot pattern; and a decorative composer (empty pill field, round cobalt send button). Our palette, never WhatsApp green or its logo. Bubbles inside are Well Ink, 90% max width, no lift of their own. The phone sits right on desktop and centred under the actions from 900px down; its screen is 25rem tall (24rem on phones) and older messages fade out under the top bar. The hero's right column is a stack of example incoming messages (`Hero.example_messages`, ten per locale, one trade and one Lower Mainland city each). Each bubble: Raised Ink, Hairline border, bubble silhouette with a bottom-left tail, Lift, max 24rem, body size (0.975rem on phones). The newest carries a cobalt "Nuevo mensaje" line and a cobalt-tinted border; a single pill "Example" tag in Fog heads the stack so it is never read as real testimonials. With motion, the stack starts empty and a message arrives every 2.6s (rise 18px, scale from 0.94, unblur 6px over 0.62s) until five are showing; from then on the oldest swipes out to the left (0.42s, ease-in) before the next arrives, the survivors slide up with a FLIP, and the ten messages loop. Every arrival asks the signal field for a ripple from the new bubble. The list is a fixed-height window (27rem, 27.5rem on phones) with a 1.5rem top fade. It pauses off-screen and in hidden tabs. Without motion or JavaScript it shows the first five messages, static.

### Status Line
The brief-pinned Annex A availability line ("Disponible para nuevos proyectos" / "Available for new projects") sits under the hero actions as a plain Label-type line in Mist with a 0.55rem signal-yellow dot whose ring pings three times (2.4s each) and then stops. It is never a pill or eyebrow above the headline.

### Offer Field
The drenched section: plans in two columns under a 3px ink rule, each with a large Title name, a tabular price line and Cobalt Ink Soft description; extras in a second two-column row under a 1.5px rule; the exclusions line last under its own rule. The demo links line appears only once all three demos have a URL. Stacks to one column at 760px with 1.5px rules between items.

### Why Path
Three stations on one 1.5px Strong Hairline: each node is a 1.4rem ring with a cobalt stroke and a cobalt core, followed by a Title h3 and Mist copy capped at 34ch. Vertical with left-hung nodes on phones.

### FAQ
Native disclosure rows between 1.5px Strong Hairlines; question in 680 weight at width 108%, a cobalt plus icon that rotates 45 degrees when open; hover turns the question cobalt; the answer eases in from 6px above over 0.55s.

### Icons
A small inline SVG set on a 24px grid, 1.75 stroke, round caps and joins, `currentColor` (arrow, mail, lock, plus, menu, close, external). Always decorative (`aria-hidden`), always next to a text label.

### Signal Field (signature)
One fixed, viewport-sized canvas sits behind the whole home page (`SignalBackdrop`). Sections marked `data-field` (Hero, Why, Contact) are transparent and show it; every other section and the footer paint their own ground over it, and the page content sits above it at z-index 1. The shader draws slow topographic waves in field blue over the night ground that drift with the page at half the scroll speed, plus signal-yellow ripples anchored to page positions: one per arriving hero message, one from the mail button in Contact and a fixed point in Why roughly every 4.6s (`data-field-ping`, `data-field-origin`, `data-field-x/y`), and one from any tap or click on a field section. On mouse devices the waves lean gently toward the pointer. The text-side `shade` comes from the field section nearest the viewport centre (`data-field-shade`). The shader takes its colors as hex constants in `signal.ts` (ground #0b111b, field #3a72e8, ripple #ffd23f), matched by hand to Night Ink, Field Blue and Hi-Vis Signal; change them together. It is fixed, not per section, because a canvas that scrolls with its section fell out of sync on Chrome/Windows/Intel and left smeared or unpainted areas.

Its performance rules are part of the system:
- Raw WebGL, no library.
- Rendered at reduced resolution (0.6 of CSS size on desktop, 0.5 below 768px, device pixel ratio capped at 2) and capped at 50 fps on desktop, 30 fps on phones.
- Draws only while a field section is on screen and the tab is visible; paused otherwise.
- Weak devices (4 or fewer cores and 4 GB or less memory), data saver and reduced motion get frozen ripples, redrawn once per scroll frame, no loop.
- No WebGL: the CSS ground underneath stays as the fallback.
- The canvas is never opaque (`alpha: true`): Chrome on Windows promotes an opaque WebGL canvas to a hardware overlay, which can desync while scrolling and leave smeared copies of the page (seen on Intel graphics).
- The drawing buffer is preserved (`preserveDrawingBuffer: true`), and a frame is drawn on every resize and every time the canvas re-enters the viewport, so a paused canvas keeps its last frame. The canvas fades in (1.2s) only after its first frame is drawn. This prevents smeared stale-GPU-memory artifacts seen while scrolling on real GPUs.

### Motion
Arrival is the only entrance: elements rise 18px and unblur from 6px over 0.9s on the exponential ease-out (`cubic-bezier(0.16, 1, 0.3, 1)`), staggered 90ms per index within a section, once, when 12% visible. Content is visible by default; the motion class is added only when reduced motion is not requested and IntersectionObserver exists. State transitions run 0.2s to 0.35s on the same curve. Reduced motion collapses every transition and animation and turns off smooth scrolling.

### Imagery and raster provenance
Real material only: the portrait and, once they exist, screenshots of the three trade-template demos. No generated imagery, stock photos or illustrations. The rasters the site references are pre-existing assets supplied by Jesús Salinas: the portrait (`jesus-bw.webp`) and the favicon (`jsalinas-favicon.png`). None was generated. The favicon carries an embedded origin note; the WebP carries none because sidecar files would be published from `public/`, so this document is its provenance record. The earlier client screenshots are no longer referenced or published as WebP.

## Do's and Don'ts

### Do:
- **Do** keep cobalt to one job per view: the action, the highlight, or the whole ground (The One Accent Rule).
- **Do** drench a region completely when it goes cobalt: ink text, ink rules, ink focus, no floating dark cards.
- **Do** keep yellow for the signal only: ripples, rings, the status dot.
- **Do** build hierarchy with Archivo's width axis and weight: 114% to 118% for headings, 100% for text.
- **Do** make each section's h2 its Annex A headline and keep section names in the nav only.
- **Do** keep the availability status line under the hero actions, plain text with the signal dot.
- **Do** separate content with 1px or 1.5px hairlines instead of cards.
- **Do** reuse the ripple ring vocabulary (1.5px strokes, decaying alpha) for any new mark.
- **Do** keep the signal field inside its budget: reduced resolution, 30 fps on phones, paused off-screen, still frame on weak devices, data saver or reduced motion, CSS ground without WebGL, preserved buffer redrawn on resize and re-entry.
- **Do** change the shader's hex constants together with the matching tokens.
- **Do** keep content visible without JavaScript; arrival motion is an enhancement.
- **Do** label the hero bubble as an example.

### Don't:
- **Don't** add kickers or eyebrows above headings, including the availability line.
- **Don't** use yellow for text, buttons, grounds or emphasis.
- **Don't** use gradients on UI, glass, backdrop blur or glow halos; the field's CSS fallback ground is the only gradient.
- **Don't** introduce purple, neon or a third hue; blue and hi-vis yellow are the whole palette.
- **Don't** use WhatsApp green or the WhatsApp logo.
- **Don't** lift anything other than the message bubble and the form panel.
- **Don't** mix pill and panel radii on one object, or add sharp-cornered buttons.
- **Don't** use thin weights or tracked-out uppercase labels for hierarchy.
- **Don't** place the signal field outside Hero, Why and Contact, or run it without its performance rules.
- **Don't** ship generated imagery, stock photos, invented testimonials or logos.

Copy note, not a design decision: the privacy page's protection text no longer offers to show, correct or delete a visitor's data; the owner removed that promise.
