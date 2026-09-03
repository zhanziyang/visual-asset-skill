---
name: asset-aware-web-design
description: Use when designing, redesigning, or implementing an App or SaaS landing page, marketing website, hero, feature section, or other visually important web interface that should intelligently use product screenshots, photography, video, illustration, brand assets, diagrams, motion, 3D, typography, or other assets instead of reflexively filling the page with generic SVGs, emoji, gradients, glows, and CSS decoration.
---

# Asset-aware web design

Give the agent three capabilities while it designs:

1. **Asset Awareness** — notice where meaningful assets could improve the interface.
2. **Asset Intelligence** — identify what should be expressed and choose the right semantic asset type and medium.
3. **Asset Orchestration** — inspect, source, generate, curate, process, save, integrate, and document the selected asset.

This skill is not a blanket instruction to use more images. Use the best visual medium for each communication goal. CSS, SVG, Canvas, WebGL, gradients, and code-rendered visuals remain valid when they are genuinely the strongest medium.

## Core behavioral correction

Do not treat code-generated decoration as the default answer to visual thinness.

Before adding an emoji, decorative icon, abstract SVG, gradient, glow, blob, grid, fake dashboard, or generic CSS shape, ask:

1. What must this section communicate?
2. Is there an opportunity for a meaningful asset?
3. Would an asset improve evidence, comprehension, emotion, identity, narrative, or interaction?
4. Which semantic asset and medium would do that best?
5. Does a suitable existing or user-owned asset already exist?

Whitespace is not a defect. Do not fill it without a communication or design reason.

## Applicability

Use this skill for:

- App and SaaS landing pages;
- product marketing websites;
- visually important heroes and feature sections;
- launch pages;
- existing marketing-site redesigns;
- implementation from a brief, screenshot, design reference, or reference website.

Do not activate it for a purely technical bug fix, backend work, or a UI change with no material visual-asset decision.

## Required operating mode

### 1. Read before designing

Read the brief, existing UI, references, product context, audience, brand constraints, and implementation stack.

Extract a compact visual direction:

```text
page kind + audience + brand character + authenticity needs + motion level
```

References may guide style and composition, but are not automatically production-safe assets.

### 2. Inventory existing assets first

Inspect the repository and any user-configured asset library before searching or generating anything.

Use the helper when appropriate:

```bash
node scripts/inventory-assets.mjs <project-root>
```

Look for:

- logos, wordmarks, badges, and official marks;
- app screenshots and recordings;
- photography and portraits;
- illustrations and graphic systems;
- product/object renders;
- videos, Lottie, Rive, and animated assets;
- diagrams, chart exports, and data sources;
- device frames and mockups;
- 3D files;
- fonts;
- textures, patterns, and audio.

Do not ignore high-quality existing assets in favor of easier generated decoration.

### 3. Perform a section-level Asset Opportunity Scan

For every major section, determine:

```yaml
section: <name>
communication_goal: <what must be understood or felt>
asset_opportunity:
  level: NONE | LOW | MEDIUM | HIGH | REQUIRED
  reason: <why an asset would or would not help>
preferred_semantic_types: []
preferred_media: []
authenticity: factual | representational | illustrative | decorative
code_generated_visuals:
  allowed_as_primary: true | false
  allowed_as_support: true | false
```

Use the levels consistently:

- `NONE`: an asset adds no material value; preserve whitespace and typography.
- `LOW`: optional support only.
- `MEDIUM`: likely useful, but not necessary for understanding.
- `HIGH`: substantially improves persuasion, comprehension, or emotional context.
- `REQUIRED`: omitting or substituting the asset would make the section misleading or materially weaker.

Read [medium-decision-matrix.md](references/medium-decision-matrix.md) for section archetypes and medium selection.

### 4. Distinguish meaningful visuals from treatment

A **meaningful visual** carries evidence, information, identity, emotion, narrative, or interaction.

A **supporting treatment** improves atmosphere or framing but does not carry the main message.

Default priority:

```text
communication goal
→ meaningful visual, when valuable
→ typography and composition
→ supporting visual treatment
→ pure decoration
```

A gradient can frame a product video. It should not replace the product video.
An icon can label an integration. It should not replace the official integration logo.
A browser frame can contain a screenshot. It should not invent the screenshot.

### 5. Choose semantic asset type before medium

First decide what the visual means. Then decide how it should be rendered.

Examples:

```text
Product capability
→ Product UI
→ real screenshot or screen recording
```

```text
Integration support
→ Brand Asset
→ official SVG/PNG logos
```

```text
System workflow
→ Diagram
→ responsive HTML/SVG
```

```text
Ambient technological motion
→ Procedural Visual
→ Canvas/WebGL/shader
```

Read [asset-taxonomy-v1.1.md](references/asset-taxonomy-v1.1.md) for the semantic taxonomy.

### 6. Apply source policy

Default source priority:

```text
existing project
> user asset library
> official first-party source
> copyright-safe Web
> preset stock library
> AI generation
```

This is overridden by semantic-type rules. For example, a real logo must come from an official or owned source and must never be generated.

Reference search may be broad. Production use must have safe provenance and a usable license.

Read [source-policy.md](references/source-policy.md) before introducing external or generated assets.

### 7. Retrieve or generate multiple candidates

Do not use the first result merely because it is available.

For a material visual decision:

1. construct a query from semantic need, art direction, composition, aspect ratio, and responsive constraints;
2. retrieve or generate multiple credible candidates;
3. visually inspect them;
4. reject candidates with unclear licensing, poor composition, weak resolution, or style mismatch;
5. rank the remaining candidates;
6. select the strongest production-safe option.

Use AI generation as governed by the asset type, not as an automatic shortcut.

### 8. Curate with vision

When visual inspection is available, selection must not rely only on filename, alt text, metadata, popularity, or search rank.

Evaluate:

- semantic relevance;
- subject placement and usable negative space;
- crop tolerance across desktop and mobile;
- lighting, palette, contrast, and color temperature;
- authenticity and visual quality;
- brand fit and consistency with the full asset set;
- motion character where relevant;
- performance cost;
- licensing and provenance.

Read [curation-and-consistency.md](references/curation-and-consistency.md).

### 9. Give assets layout authority

Assets and layout are co-dependent.

Do not preserve a weaker layout merely because it was designed first. When a selected asset clearly implies a stronger composition, restructure the section around it.

Examples:

- replace a generic split hero with centered copy plus a full-width product demo;
- use text in a photo's genuine negative-space region rather than forcing a fixed grid;
- change a three-card “How it works” block into a responsive explanatory diagram;
- use a sequence of real screenshots instead of abstract feature icons.

Do not crop away the reason the asset was selected merely to preserve an arbitrary container.

### 10. Process and save production assets

Where appropriate:

- crop and reframe;
- create desktop and mobile variants;
- resize and compress;
- convert to suitable Web formats;
- remove a background without altering factual content;
- create video posters and reduced-motion fallbacks;
- preserve source originals outside generated output when possible;
- save assets under a coherent project path.

Never alter factual product UI, logos, identities, or data to make them more decorative.

### 11. Implement actual references

The completed UI must reference the real local files or runtime assets selected by the process. Do not leave “add image here” comments, remote hotlinks, or placeholder gradients where the chosen production asset should be.

Use responsive image/video delivery and accessible alternatives. Respect reduced motion, autoplay, bandwidth, and interaction constraints.

### 12. Write or update `asset-manifest.json`

Every external, generated, or materially transformed asset must be traceable.

Read [manifest.md](references/manifest.md) and use the example in `examples/asset-manifest.example.json`.

Validate when appropriate:

```bash
node scripts/validate-manifest.mjs <manifest-path> --project-root <project-root>
```

### 13. Run the final audit

Before completion, verify:

- high-opportunity sections received meaningful consideration;
- real product, identity, brand, and data assets were not replaced by fabrications;
- existing assets were not ignored without reason;
- generic SVGs, emoji, gradients, glows, and CSS shapes are not acting as substitutes for meaningful assets;
- whitespace was preserved where an asset adds no value;
- all selected assets form one coherent visual world;
- responsive crops and fallbacks work;
- licensing and provenance are recorded;
- the implementation references actual local or runtime assets;
- the manifest validates.

Use [audit.md](references/audit.md) for the complete checklist.

## Non-negotiable authenticity rules

- Never invent a real product interface when the actual interface exists.
- Never fabricate customer logos, certification badges, press marks, testimonials, named people, or attributed portraits.
- Never AI-redraw a real brand logo.
- Never present generated video as authentic product footage.
- Never fabricate real data. Clearly mark demonstration data.
- Never place an asset into production when its right to use is unknown.

## Output discipline

Do not stop at an asset plan. Execute the plan with the tools available in the environment:

```text
find or generate
→ inspect
→ select
→ process
→ save
→ integrate
→ document
→ audit
```

When a required tool or production-safe source is genuinely unavailable, use the safest viable fallback and record the limitation. Do not silently substitute generic decoration.
