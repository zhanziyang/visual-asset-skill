# Visual Asset Skill

**Give coding agents asset awareness.**

Visual Asset Skill is an Agent Skill for designing and implementing asset-aware App and SaaS marketing websites. It teaches an agent to notice where meaningful visual assets would improve a page, choose the right semantic asset and medium, acquire or generate production-safe candidates, curate them visually, place them into the project, and adapt the layout around the selected assets.

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
→ curate, process, and save the selected asset
→ compose the interface around it
→ use CSS/SVG/gradients only where they are the best medium
```

This is not an “add more images” skill. It is a **best visual medium first** skill.

## Core capabilities

1. **Asset Awareness** — detect where an asset could materially improve evidence, comprehension, emotion, identity, narrative, or interaction.
2. **Asset Intelligence** — determine what the location needs to communicate and which semantic asset type and medium are most appropriate.
3. **Asset Orchestration** — inspect, retrieve, generate, visually curate, license-check, process, save, integrate, and document the selected assets.

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
right production-safe assets, place them in the project, and write an
asset manifest.
```

## Required outputs

A successful run should leave behind:

- the implemented UI;
- actual local asset files referenced by the UI;
- responsive variants where needed;
- source and licensing records;
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
│   ├── audit.md
│   ├── curation-and-consistency.md
│   ├── manifest.md
│   ├── medium-decision-matrix.md
│   └── source-policy.md
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
Visual Asset Skill asks: What visual material should exist here, and how do we actually use it?
```

## Status

`v0.1.0` — initial experimental specification and executable skill scaffold.

No open-source license has been selected yet.
