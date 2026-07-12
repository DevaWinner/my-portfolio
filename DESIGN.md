---
name: Aniekan Winner — The Systems Review Room
description: A rigorous, inventive, and dependable portfolio system built around technical evidence.
colors:
  canvas-white: "oklch(1 0 0)"
  review-surface: "oklch(0.965 0.008 160)"
  carbon-ink: "oklch(0.18 0.025 160)"
  measured-muted: "oklch(0.43 0.022 160)"
  structural-line: "oklch(0.86 0.012 160)"
  mineral-green: "oklch(0.42 0.12 160)"
  mineral-green-deep: "oklch(0.35 0.105 160)"
  mineral-green-soft: "oklch(0.92 0.04 160)"
  calibration-amber: "oklch(0.88 0.13 75)"
  inverse-canvas: "oklch(0.11 0.015 160)"
  inverse-surface: "oklch(0.16 0.018 160)"
  inverse-ink: "oklch(0.96 0.008 160)"
  inverse-muted: "oklch(0.72 0.018 160)"
  inverse-line: "oklch(0.30 0.018 160)"
typography:
  display:
    fontFamily: "Mona Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(3.25rem, 7vw, 5.75rem)"
    fontWeight: 760
    lineHeight: 0.96
    letterSpacing: "-0.035em"
    fontVariation: "'wdth' 112.5, 'opsz' 72"
  headline:
    fontFamily: "Mona Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 4.5vw, 4rem)"
    fontWeight: 720
    lineHeight: 1.03
    letterSpacing: "-0.025em"
    fontVariation: "'wdth' 106, 'opsz' 48"
  title:
    fontFamily: "Mona Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.25rem, 2vw, 1.625rem)"
    fontWeight: 650
    lineHeight: 1.18
    letterSpacing: "-0.012em"
  body:
    fontFamily: "Mona Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1rem, 0.35vw + 0.92rem, 1.125rem)"
    fontWeight: 450
    lineHeight: 1.65
    letterSpacing: "normal"
  label:
    fontFamily: "Mona Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 650
    lineHeight: 1.25
    letterSpacing: "0.01em"
rounded:
  sm: "4px"
  md: "8px"
  lg: "12px"
  pill: "999px"
spacing:
  2xs: "4px"
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
  3xl: "72px"
  4xl: "112px"
components:
  button-primary:
    backgroundColor: "{colors.mineral-green}"
    textColor: "{colors.canvas-white}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "12px 18px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.mineral-green-deep}"
    textColor: "{colors.canvas-white}"
  button-secondary:
    backgroundColor: "{colors.canvas-white}"
    textColor: "{colors.carbon-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "12px 18px"
    height: "48px"
  evidence-chip:
    backgroundColor: "{colors.mineral-green-soft}"
    textColor: "{colors.mineral-green-deep}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "7px 11px"
  case-study-panel:
    backgroundColor: "{colors.review-surface}"
    textColor: "{colors.carbon-ink}"
    rounded: "{rounded.lg}"
    padding: "32px"
---

# Design System: Aniekan Winner — The Systems Review Room

## 1. Overview

**Creative North Star: "The Systems Review Room"**

Imagine an engineering review in a bright room: architecture is pinned to the wall, decisions are legible, and one green status light signals that the system is sound. The interface should feel mineral, exact, and assured. It presents technical depth as something a visitor can inspect rather than something the copy merely claims.

The system uses a committed field of mineral green, crisp neutral surfaces, expanded sans-serif display type, and asymmetric evidence-led layouts. Density is deliberate: summaries establish the argument, while outcome bands, architecture notes, and case-study details provide proof. Motion is responsive rather than theatrical—one restrained first-load sequence may establish hierarchy, while component feedback remains immediate and quiet.

This is not a generic developer template, flashy startup marketing, a corporate résumé site, or an overly experimental art piece. It is a professional identity with enough character to be memorable and enough restraint to keep the work authoritative.

**Key Characteristics:**

- Committed mineral green balanced by pure white and carbon ink
- Expanded, confident display typography without serif or monospace costume
- Evidence-led composition with asymmetric rhythm and clear reading paths
- Flat, structural surfaces with depth reserved for true overlays
- Responsive motion that always preserves reduced-motion access

## 2. Colors

The palette combines bright review-room clarity with a deep mineral anchor and a small calibration signal.

### Primary

- **Mineral Green** (`{colors.mineral-green}`): carries 30–40% of high-impact pages through hero fields, decisive calls to action, selected navigation, and section transitions.
- **Mineral Green Deep** (`{colors.mineral-green-deep}`): reserved for primary-button hover states and denser green surfaces requiring additional depth.
- **Mineral Green Soft** (`{colors.mineral-green-soft}`): supports proof chips, selected filters, and low-emphasis annotations without becoming a decorative tint.

### Secondary

- **Calibration Amber** (`{colors.calibration-amber}`): a rare signal for verified outcomes, current status, or a single focal annotation. It never becomes a second dominant brand field.

### Neutral

- **Canvas White** (`{colors.canvas-white}`): the default light canvas and the source of visual clarity.
- **Review Surface** (`{colors.review-surface}`): separates case-study details and evidence bands from the canvas without relying on shadows.
- **Carbon Ink** (`{colors.carbon-ink}`): default text and icon color; body copy reaches enhanced contrast against the main light surfaces.
- **Measured Muted** (`{colors.measured-muted}`): secondary text, metadata, and captions; never use it below body-text contrast requirements.
- **Structural Line** (`{colors.structural-line}`): dividers, table rules, and quiet component boundaries.
- **Inverse Canvas / Surface / Ink / Muted / Line**: the complete dark-surface vocabulary. Dark mode remains neutral and mineral rather than blue-purple.

### Named Rules

**The Committed Field Rule.** Mineral green must occupy 30–40% of the home-page experience through a few decisive surfaces, not dozens of small accents.

**The Calibration Rule.** Calibration amber appears only where it communicates verification, status, or one deliberate focal point; decorative amber is prohibited.

**The Contrast Rule.** Carbon ink on canvas white, measured muted on canvas white, white on mineral green, and carbon ink on calibration amber are the canonical accessible pairs. Never improvise low-contrast text colors.

## 3. Typography

**Display Font:** Mona Sans (with `ui-sans-serif`, `system-ui`, `sans-serif` fallback)
**Body Font:** Mona Sans (with `ui-sans-serif`, `system-ui`, `sans-serif` fallback)

**Character:** Mona Sans is used as a variable instrument rather than a generic default. Expanded optical display settings communicate confidence and invention; neutral-width body settings preserve dependable long-form reading. Monospace is not part of the brand voice.

### Hierarchy

- **Display** (`{typography.display}`): one dominant statement per page. Balance the text and keep the maximum below 96px; never force long technical words into narrow columns.
- **Headline** (`{typography.headline}`): major section arguments and case-study openings. Use sentence case and balanced wrapping.
- **Title** (`{typography.title}`): project names, roles, and substantial content groups.
- **Body** (`{typography.body}`): narrative and evidence copy, capped at 68ch. Use `text-wrap: pretty` for long prose.
- **Label** (`{typography.label}`): compact metadata, controls, and status. Default to sentence case; uppercase is allowed only for brief machine-like status values.

### Named Rules

**The One Instrument Rule.** Use Mona Sans width, optical size, weight, and scale to create contrast; do not introduce a decorative serif or routine monospace companion.

**The Evidence Reads First Rule.** Typography must make the claim, evidence, and outcome distinguishable at a glance without relying on tiny uppercase eyebrows.

## 4. Elevation

The system is flat by default. Depth comes from tonal surfaces, structural lines, overlap, and spacing. Shadows appear only when an element genuinely leaves the document plane, such as an open mobile navigation panel or dialog; cards and buttons remain shadow-free at rest.

### Shadow Vocabulary

- **Overlay Lift** (`box-shadow: 0 4px 8px oklch(0.11 0.015 160 / 0.16)`): dialogs, popovers, and the open mobile navigation only.

### Named Rules

**The Flat Evidence Rule.** Case studies, proof bands, and buttons stay flat. If a bordered surface also has a wide soft shadow, the design has failed.

## 5. Components

Components feel tactile and confident: clear geometry, compact state changes, and no decorative chrome.

### Buttons

- **Shape:** gently squared corners (`{rounded.md}`), 48px minimum height, and compact horizontal padding.
- **Primary:** mineral green with canvas-white text. Hover deepens the fill and translates upward by 1px; active returns to the document plane.
- **Hover / Focus:** state transitions use the standard exponential ease. Focus uses a 2px carbon or white ring with a 3px offset, chosen for the surrounding surface.
- **Secondary:** canvas white with carbon ink and a structural-line border; hover uses review surface without adding a shadow.
- **Ghost:** text-and-icon treatment for tertiary actions. It receives a visible tonal hover target, never an underline alone.

### Chips

- **Style:** evidence chips use mineral-green soft with mineral-green-deep text. Status chips may use calibration amber only when the status is meaningful.
- **State:** chips communicate technology, proof, or status; they are not a decorative substitute for hierarchy.

### Cards / Containers

- **Corner Style:** restrained rounding (`{rounded.lg}` maximum).
- **Background:** canvas white or review surface, chosen by information hierarchy.
- **Shadow Strategy:** none at rest; use the elevation vocabulary only for true overlays.
- **Border:** use structural lines when grouping needs a boundary, never pair the border with a decorative wide shadow.
- **Internal Padding:** 24px on compact groups and 32px on case-study panels, reducing to 20px on narrow screens.

### Navigation

- **Style:** a compact wordmark, sentence-case links, and one clear contact action. Active state uses mineral green plus a shape or weight change so color is not the only signal.
- **Desktop:** navigation stays visually light against the current page surface; the header may become solid after scrolling but must not use decorative glassmorphism.
- **Mobile:** the menu becomes a full-width structured panel with 48px targets, a visible close action, focus management, and the Overlay Lift shadow only while open.

### Evidence Band

The signature component pairs one outcome with the constraint and decision that produced it. It uses asymmetric columns, a structural top rule, and decisive numerical typography without becoming a hero-metric card. Each band must tell a causal story, not display an isolated number.

## 6. Do's and Don'ts

### Do:

- **Do** let mineral green carry 30–40% of key pages through a few large, purposeful fields.
- **Do** connect every important capability to a shipped artifact, measurable outcome, or architectural decision.
- **Do** use asymmetric evidence bands and varied section spacing to create rhythm while preserving a clear reading order.
- **Do** keep body copy within 68ch and maintain WCAG 2.2 AA contrast, focus, keyboard, and reduced-motion behavior.
- **Do** use calibration amber only for verified outcomes, active status, or one deliberate point of emphasis.
- **Do** verify long project names and technical terms at every responsive breakpoint before shipping.

### Don't:

- **Don't** make this look like a generic developer template.
- **Don't** use flashy startup marketing, fake urgency, inflated claims, or decorative growth graphics.
- **Don't** reduce the experience to a corporate résumé site made of stacked employment cards.
- **Don't** turn the portfolio into an overly experimental art piece that obstructs evidence or navigation.
- **Don't** use tiny uppercase tracked eyebrows above every section, gradient text, decorative grid backgrounds, glassmorphism, or colored side-stripe borders.
- **Don't** use identical card grids when a narrative list, evidence band, timeline, or full-width case study communicates the work more clearly.
- **Don't** exceed 12px corner radii on containers or pair a 1px border with a decorative shadow wider than 8px.
- **Don't** use monospace as shorthand for technical credibility; code samples are the only exception.
