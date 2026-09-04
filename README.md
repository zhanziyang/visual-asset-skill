# Visual Asset Skill

**Give coding agents asset awareness.**

Visual Asset Skill is an Agent Skill for designing and implementing asset-aware App and SaaS marketing websites. It teaches an agent to notice where meaningful visual assets would improve a page, choose the right semantic type, medium, visual style, placement, and source route, curate candidates visually, art-direct and transform selected imagery, place it into the project, and adapt the layout around the selected assets.

## Design-placeholder premise

For design drafts, prototypes, and visual exploration, externally sourced or generated images are **design placeholders by default**. The agent tells the user before searching:

> I’ll use sourced or generated images as design placeholders for visual review. They are not cleared for commercial or production use and must be replaced or licensed before launch.

Placeholder mode does not require full commercial-license research. The agent keeps lightweight source information and marks the asset as a placeholder. Full provenance and license verification apply only when the user explicitly asks for production-ready or launch-ready assets.

The core behavior change is:

```text
Typical coding-agent reflex

section feels visually thin
→ add an icon
→ add an SVG
→ add a gradient
→ add a glow
→ add abstract CSS decoration
```

```text
Asset-aware design

understand the section's communication goal
→ detect an asset opportunity
→ decide whether a meaningful asset would help
→ choose semantic asset type and medium
→ inspect existing assets first
→ source or generate candidates
→ curate the source and compare image-treatment directions
→ create treated derivatives or deliberate runtime treatment
→ compose the interface around it
→ use CSS/SVG/gradients only where they are the best medium
```

This is not an “add more images” skill. It is a **best visual medium first** skill.

## Core capabilities

1. **Asset Awareness** — detect where an asset could materially improve evidence, comprehension, emotion, identity, narrative, or interaction.
2. **Asset Intelligence** — determine what the location needs to communicate and which semantic asset type and medium are most appropriate.
3. **Asset Orchestration** — inspect, retrieve, generate, visually curate, art-direct, transform, save, integrate, and document design placeholders or production-ready assets as requested.

## Scope

Version 0.1 focuses on App and SaaS landing pages, product marketing sites, and related redesigns. It supports:

- product UI and screenshots;
- product and object renders;
- people and identity assets;
- official brand assets;
- photography and illustration;
- existing, stock, and generated placeholder video;
- motion graphics;
- diagrams and data visualization;
- device and browser mockups;
- 3D and spatial assets;
- textures and decorative graphics;
- procedural and generative visuals;
- typography assets;
- optional audio planning.

It does not automatically record real products in v1. Generated video may be used as mood material or an explicit placeholder, but never as a fake real-product demonstration.

## Installation

After the repository is published:

```bash
npx skills add https://github.com/zhanziyang/visual-asset-skill --skill asset-aware-web-design
```

Manual installation:

```bash
cp -R skills/asset-aware-web-design ~/.claude/skills/
```

The repository follows the Agent Skills structure: `SKILL.md` is the on-demand entry point, while detailed guidance is progressively disclosed through `references/` and helper automation lives in `scripts/`.

## Example request

```text
Design and implement the landing page for this product. Follow the
asset-aware-web-design skill. Inspect existing assets before coding,
identify asset opportunities section by section, acquire or generate the
right design-placeholder assets, place them in the project, and write an
asset manifest.
```

## How to use the skill

Mention `asset-aware-web-design` in the agent prompt and provide the product, audience, page goal, major sections, implementation stack, existing asset locations, brand constraints, references, and requested scope (plan, implementation, or audit).

Ask the agent to inspect existing assets before coding and to follow this sequence:

```text
communication goal
→ asset opportunity
→ authenticity and semantic type
→ best medium
→ source mode and origin
→ candidate curation
→ image art direction and treatment comparison
→ derivative or runtime treatment
→ responsive integration
→ manifest and audit
```

The skill does not mean “add more images.” A section may correctly remain typographic or use whitespace, CSS, SVG, Canvas, or WebGL when those are the strongest medium. It must not use generic decoration as a substitute for real Product UI, official logos, factual data, or attributable people.

For design work, expect actual local/runtime placeholder files, responsive and reduced-motion behavior, lightweight source records, an `asset-manifest.json`, and a concise final audit. If suitable local assets are unavailable, the agent should actively search broadly, generate only semantically appropriate non-factual material, and present important candidates for user review. Production licensing is checked only when production-ready assets are explicitly requested. Search or generation failure should end in a clearly explained `NONE` decision or a request for authentic material—not fabricated product evidence or decorative SVG/CSS filler.

Minimal prompt:

```text
Use the asset-aware-web-design skill to design and implement this page.
First inventory the existing assets and produce a section-level asset scan.
Then choose the semantic asset type and best medium for each section, use
external or generated imagery as disclosed design placeholders, art-direct the
selected images in context, integrate the actual treated assets, and finish the
manifest and audit. Do not fabricate product UI, logos, testimonials, people,
or data.
```

## Required outputs

A successful run should leave behind:

- the implemented UI;
- actual local asset files referenced by the UI;
- treated derivatives or implemented runtime treatment for material imagery;
- responsive variants where needed;
- source and placeholder/production status records;
- an `asset-manifest.json`;
- a concise asset-awareness and visual-consistency audit.

## Repository structure

```text
skills/asset-aware-web-design/
├── SKILL.md
├── examples/
│   └── asset-manifest.example.json
├── references/
│   ├── asset-taxonomy-v1.1.md
│   ├── asset-preparation-and-review.md
│   ├── audit.md
│   ├── curation-and-consistency.md
│   ├── image-art-direction.md
│   ├── manifest.md
│   ├── medium-decision-matrix.md
│   ├── source-policy.md
│   ├── source-routing.md
│   └── visual-decision-framework.md
└── scripts/
    ├── inventory-assets.mjs
    └── validate-manifest.mjs
```

## Helper scripts

Inventory assets already present in a project:

```bash
node skills/asset-aware-web-design/scripts/inventory-assets.mjs /path/to/project
```

Validate an implementation manifest:

```bash
node skills/asset-aware-web-design/scripts/validate-manifest.mjs \
  /path/to/project/asset-manifest.json \
  --project-root /path/to/project
```

Both scripts write machine-readable JSON to stdout and operational messages to stderr.

## Design position

Visual Asset Skill is independent. It may be combined with a layout or taste-oriented skill, but it does not require one.

A useful distinction is:

```text
A taste skill asks: What should this look and feel like?
Visual Asset Skill asks: What visual material should exist here, how should it be art-directed, and how do we actually use it?
```

## Status

`v0.1.0` — initial experimental specification and executable skill scaffold.

Released under the [MIT License](LICENSE).
