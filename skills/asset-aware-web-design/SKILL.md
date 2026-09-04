---
name: asset-aware-web-design
description: Select, source, art-direct, transform, place, integrate, and document the most appropriate visual material for App and SaaS web interfaces. Use when a landing page, marketing site, hero, feature section, or redesign needs intelligent choices among Product UI, photography, stock, iconography, illustration, diagrams, video, motion, 3D, typography, code-rendered visuals, or no asset.
---

# Asset-aware web design

Give the agent three capabilities while it designs:

1. **Asset Awareness** — notice where meaningful assets could improve the interface.
2. **Asset Intelligence** — identify what should be expressed and choose the right semantic type, medium, visual style, placement, and source route.
3. **Asset Orchestration** — inspect, source, generate, curate, art-direct, transform, save, integrate, and document the selected asset.

This skill is not a blanket instruction to use more images. Use the best visual strategy for each communication goal. CSS, SVG, Canvas, WebGL, gradients, and code-rendered visuals remain valid when they are genuinely the strongest medium.

## Design-placeholder premise

For design drafts, prototypes, mockups, and visual exploration, treat externally sourced or generated imagery as **design placeholders by default** unless the user explicitly requests production-ready assets.

Before the first external search or generation, tell the user once, in their language:

> I’ll use sourced or generated images as design placeholders for visual review. They are not cleared for commercial or production use and must be replaced or licensed before launch.

This is a disclosure, not a permission request. Continue unless the user changes the sourcing or generation direction.

In placeholder mode, retain the source URL or provider when practical and mark the asset `production_status: placeholder`; do not spend time performing full commercial-license clearance. When the user explicitly requests shipping, publishing, deployment, or production-ready assets, switch to production mode and apply the full source and license policy.

Placeholder mode does not weaken authenticity rules. Do not present invented Product UI, logos, customers, testimonials, named people, or data as factual.

## Quick start

For each major section, follow this decision chain before committing to a visual treatment:

```text
communication goal
→ asset opportunity
→ authenticity and semantic type
→ best medium and visual style
→ placement and layout role
→ existing assets, source route, and source mode
→ candidate curation
→ image art direction and treatment comparison
→ derivative production or deliberate runtime treatment
→ responsive integration
→ manifest and audit
```

Use the detailed operating steps and linked references below when executing the chain.

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

References may guide style and composition. They may appear only as disclosed placeholders in a design draft unless they are cleared for production use.

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
medium_candidates: []
authenticity: factual | representational | illustrative | decorative
visual_style: <dimensionality, palette, geometry, material, motion>
placement: <primary, evidence, explanatory, supporting, control, background>
treatment_intent: <clean evidence, editorial, tonal, material, collage, overlay, motion, or none>
strongest_no_asset_option: <typography, layout, UI, or whitespace alternative>
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

Keep meaning, medium, style, placement, and source as separate decisions. `Stock` is a source class, `3D` and `SVG` are media, and `iconography` is a compact symbolic visual role. This separation allows valid combinations such as a stock photograph, a 3D icon, a code-rendered SVG diagram, or a typographic `NONE` decision.

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

For every material opportunity, compare plausible media instead of starting from the easiest tool. Read [visual-decision-framework.md](references/visual-decision-framework.md) when choosing among photography, iconography, illustration, 3D, video, code-rendered visuals, and `NONE`, or when deciding visual style and placement.

Read [asset-taxonomy-v1.1.md](references/asset-taxonomy-v1.1.md) for the semantic taxonomy.

### 6. Apply source policy

Default source priority:

```text
existing project
> user asset library
> official first-party source
> public Web or stock in placeholder mode
> production-safe Web or stock in production mode
> AI generation
```

This is overridden by semantic-type rules. For example, a real logo must come from an official or owned source and must never be generated.

Placeholder search may be broad and requires only lightweight origin tracking. Production use must have safe provenance and a usable license.

Read [source-policy.md](references/source-policy.md) before introducing external or generated assets.

Read [source-routing.md](references/source-routing.md) when locating a material asset. Route by semantic need and visual style across owned, official, specialist, stock, archive, open, generated, and code-native sources; do not make one provider the default.

### 7. Actively prepare assets with user review gates

When local inventory has no suitable asset for a `MEDIUM`, `HIGH`, or `REQUIRED` opportunity:

1. compare the opportunity with a strong no-asset treatment;
2. disclose placeholder mode and ask only for missing decisions that materially affect authenticity, paid services, generation, or review expectations;
3. search relevant sources before generating, preferring owned and official material;
4. generate only when the semantic type permits it;
5. curate a small shortlist and compare every finalist with `NONE`;
6. obtain user approval for primary, brand-defining, factual, identity-related, paid, or prominent generated assets before integration;
7. request a second visual review after the selected asset appears in the responsive page.

Read [asset-preparation-and-review.md](references/asset-preparation-and-review.md) whenever search or generation is needed. It defines the question policy, search and generation sequence, review packet, approval boundaries, and safe stop conditions.

### 8. Retrieve or generate multiple candidates

Do not use the first result merely because it is available.

For a material visual decision:

1. construct a query from semantic need, art direction, composition, aspect ratio, and responsive constraints;
2. retrieve or generate multiple credible candidates, using more than one source class when the choice is material and no single source is authoritative;
3. visually inspect them;
4. reject candidates with poor composition, weak resolution, factual ambiguity, or style mismatch; in production mode, also reject unclear licensing;
5. rank the remaining candidates;
6. select the strongest option permitted by the current source mode.

Use AI generation as governed by the asset type, not as an automatic shortcut.

### 9. Curate with vision

When visual inspection is available, selection must not rely only on filename, alt text, metadata, popularity, or search rank.

Evaluate:

- semantic relevance;
- subject placement and usable negative space;
- crop tolerance across desktop and mobile;
- lighting, palette, contrast, and color temperature;
- dimensionality, geometry, stroke, material, texture, perspective, and motion language as applicable;
- authenticity and visual quality;
- brand fit and consistency with the full asset set;
- motion character where relevant;
- performance cost;
- origin and mode-appropriate source status.

Read [curation-and-consistency.md](references/curation-and-consistency.md).

### 10. Give assets layout authority

Assets and layout are co-dependent.

Do not preserve a weaker layout merely because it was designed first. When a selected asset clearly implies a stronger composition, restructure the section around it.

Examples:

- replace a generic split hero with centered copy plus a full-width product demo;
- use text in a photo's genuine negative-space region rather than forcing a fixed grid;
- change a three-card “How it works” block into a responsive explanatory diagram;
- use a sequence of real screenshots instead of abstract feature icons.

Do not crop away the reason the asset was selected merely to preserve an arbitrary container.

### 11. Art-direct selected image assets in context

Selecting a source image is not the end of the visual decision. For every integrated photograph or material raster illustration, choose how it should read in this interface.

Do not treat `object-fit: cover`, a border radius, a shadow, or one generic page-wide filter as sufficient art direction for a prominent image. Define crop, scale, tonal hierarchy, edge behavior, material, depth, text relationship, responsive behavior, and truth constraints together. A deliberately clean evidence treatment is valid when it wins the comparison.

For primary or brand-defining imagery, compare meaningfully different treatment directions in the real layout before finalizing. Create actual derivative files when the result depends on image-specific grading, masks, cutouts, composites, baked texture, or a distinct mobile crop. Use runtime CSS/SVG/Canvas when the treatment benefits from responsive or interactive behavior. Preserve source originals when practical.

Read [image-art-direction.md](references/image-art-direction.md) whenever photography or raster illustration is selected. It defines treatment directions, comparison rules, derivative production, authenticity limits, set-level choreography, responsive art direction, and the stopping condition that prevents dry source-file placement.

### 12. Process and save selected assets

Where appropriate:

- crop and reframe;
- create desktop and mobile variants;
- apply the selected image-specific tonal, edge, material, or composite treatment;
- produce purpose-named derivatives rather than overwriting the only source file;
- resize and compress;
- convert to suitable Web formats;
- remove a background without altering factual content;
- create video posters and reduced-motion fallbacks;
- preserve source originals outside generated output when possible;
- save assets under a coherent project path.

Never alter factual product UI, logos, identities, or data to make them more decorative.

### 13. Implement actual references

The completed UI must reference the real local files or runtime assets selected by the process. Do not leave “add image here” comments, unstable remote hotlinks, or placeholder gradients where the chosen asset should be.

Use responsive image/video delivery and accessible alternatives. Respect reduced motion, autoplay, bandwidth, and interaction constraints.

### 14. Write or update `asset-manifest.json`

Every external, generated, or materially transformed asset must be traceable.

Read [manifest.md](references/manifest.md) and use the example in `examples/asset-manifest.example.json`.

Validate when appropriate:

```bash
node scripts/validate-manifest.mjs <manifest-path> --project-root <project-root>
```

### 15. Run the final audit

Before completion, verify:

- high-opportunity sections received meaningful consideration;
- real product, identity, brand, and data assets were not replaced by fabrications;
- existing assets were not ignored without reason;
- generic SVGs, emoji, gradients, glows, and CSS shapes are not acting as substitutes for meaningful assets;
- whitespace was preserved where an asset adds no value;
- all selected assets form one coherent visual world;
- icon, illustration, 3D, photography, and motion styles are not mixed without a deliberate system;
- prominent images have an explicit art-direction strategy rather than only generic container styling;
- treatment comparisons, image-specific operations, and responsive crops exist in the implementation rather than only in prose;
- source originals and treated derivatives remain distinguishable when derivatives were required;
- prominent assets use a source class suited to their meaning rather than the most convenient provider;
- responsive crops and fallbacks work;
- placeholders are disclosed and production assets have recorded licensing and provenance;
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
→ art-direct in context
→ derive or implement treatment
→ save
→ integrate
→ document
→ audit
```

When a required tool or suitable source is genuinely unavailable, use the safest viable fallback and record the limitation. Do not silently substitute generic decoration or mislabel a placeholder as production-ready.
