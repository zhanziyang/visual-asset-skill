# Visual Asset Taxonomy Spec v1.1

## 1. Purpose

This specification defines the design and production taxonomy for an agent that must be good at using assets while designing App and SaaS marketing websites.

The taxonomy is subordinate to the central capability: **Asset Awareness**. The agent must actively identify where meaningful assets can improve a section rather than waiting until a completed layout looks empty.

The system must:

- infer what each section must communicate;
- detect asset opportunities during design;
- distinguish meaningful visuals from supporting treatment and pure decoration;
- select a semantic asset type before selecting a rendering medium;
- choose a coherent visual style and placement role independently from medium;
- prefer authentic evidence where factuality matters;
- obtain or generate assets appropriate to the active source mode;
- curate candidates visually;
- let selected assets influence layout;
- save and integrate the actual assets;
- maintain responsive and cross-section consistency;
- record origin, source mode, transformations, and use; record full license details for production assets.

## 2. Core capability model

### 2.1 Asset Awareness

The ability to notice where an asset could materially improve:

- evidence;
- comprehension;
- emotion;
- brand identity;
- narrative;
- social proof;
- interaction;
- visual hierarchy.

Asset Awareness occurs before layout is finalized.

### 2.2 Asset Intelligence

The ability to determine:

- what the location must express;
- whether authenticity is factual, representational, illustrative, or decorative;
- which semantic asset type fits;
- which medium communicates it best;
- which visual style and placement make it belong to the interface;
- which source policy applies;
- whether the asset should be primary, supporting, or omitted.

### 2.3 Asset Orchestration

The ability to:

- inventory existing assets;
- query external and user-owned sources;
- generate candidates when permitted;
- inspect candidates visually;
- verify production rights when production-ready assets are requested;
- process and optimize selected assets;
- place them into the project;
- implement them responsively;
- maintain a manifest and audit trail.

## 3. Core model

Every asset decision should be modeled across independent dimensions:

```text
Communication goal
× Asset opportunity
× Semantic asset type
× Visual medium
× Visual style
× Art direction and treatment
× Placement and scale
× Source policy
× Authenticity
× Role
× Responsive behavior
× Source mode, origin, and production license when applicable
```

Do not assume `asset = image file`.

An asset may be raster, vector, video, motion, a font, a 3D model, a diagram, a live chart, a shader, a Canvas process, or audio.

## 4. Asset Opportunity Detection

For every major section, assign one level:

| Level | Meaning |
|---|---|
| `NONE` | An asset adds no material value. Preserve whitespace and typography. |
| `LOW` | Optional visual support; omission is acceptable. |
| `MEDIUM` | Likely improves scanability, character, or context. |
| `HIGH` | Substantially improves comprehension, persuasion, emotion, or specificity. |
| `REQUIRED` | Authentic or explanatory visual evidence is central; substitution or omission would materially weaken or mislead. |

Opportunity is not determined by empty space. It is determined by communication value.

### 4.1 Meaningful visual roles

An asset opportunity is usually justified by at least one role:

- `primary_visual`;
- `evidence`;
- `product_demo`;
- `social_proof`;
- `brand_identity`;
- `trust_signal`;
- `emotional_context`;
- `explanatory`;
- `comparison`;
- `storytelling`;
- `interaction_feedback`;
- `conversion_support`;
- `background`;
- `decorative`.

### 4.2 Priority hierarchy

```text
communication goal
→ meaningful visual, when valuable
→ typography and composition
→ supporting visual treatment
→ pure decoration
```

Code-generated visuals are not disfavored. Generic code-generated decoration used as a substitute for a more meaningful asset is disfavored.

## 5. Global source priority

Unless a type-specific policy overrides it:

```text
1. Existing project assets
2. User asset library
3. Official / first-party source
4. Copyright-safe Web source
5. Preset stock library
6. AI generation
```

The priority exists because owned, product-specific, and official assets usually carry more authenticity and brand specificity than generic generated material.

## 6. Global principles

### 6.1 Best visual medium first

Choose the medium that best balances:

- communication strength;
- authenticity;
- information fidelity;
- emotional impact;
- brand specificity;
- responsiveness;
- interactivity;
- editability;
- performance;
- accessibility;
- source-mode and licensing risk;
- generation or retrieval cost.

Examples:

```text
subtle ambient background → CSS or shader may be best
actual product capability → screenshot or recording may be best
responsive process explanation → HTML/SVG diagram may be best
brand story metaphor → illustration may be best
```

### 6.2 Assets and layout are co-dependent

The selected asset may invalidate the original layout. The agent is authorized to restructure a section when the asset creates a stronger composition.

### 6.3 Authenticity before decoration

Never silently substitute illustration for evidence.

- Real Product UI is evidence.
- Official logos are evidence.
- Attributed portraits are identity evidence.
- Real metrics are data evidence.
- Generated concepts are illustrative unless proven otherwise.

### 6.4 Reference breadth, placeholder disclosure, production strictness

Broad Web material may be inspected as reference. It may enter a design draft as a disclosed placeholder with lightweight origin tracking. Only production-safe assets may be represented or shipped as production-ready.

### 6.5 Whitespace is valid

A visually quiet section may be complete. Do not introduce an asset solely to fill space.

## 7. Authenticity classes

### `factual`

Must correspond to a real entity, interface, claim, identity, logo, or dataset. Generated substitutes are generally prohibited.

### `representational`

Represents a category or scenario rather than a named real entity. Licensed stock or generated assets may be acceptable.

### `illustrative`

Explicitly metaphorical, conceptual, or fictional. Generation is broadly acceptable.

### `decorative`

Carries no factual implication. Procedural and generated media are broadly acceptable.

## 8. Semantic asset types

### 8.1 Product UI

**Definition:** Actual software interface material, including mobile, web, or desktop screenshots, feature crops, flows, recordings, and interactive previews.

**Purpose:** Product evidence, capability demonstration, credibility, differentiation.

**Preferred media:** Screenshot, screen recording, video, animated image, interactive embedded UI.

**Source priority:** Existing project → user library → actual product capture/export.

**Hard rules:**

- Never invent fake UI and present it as the real product.
- Never replace available actual UI with a prettier generated dashboard.
- Concept UI must be labeled as concept, mock, demo, or placeholder.
- Processing may crop or frame UI but must not alter factual controls, states, text, or metrics.

### 8.2 Product / Object

**Definition:** A physical or conceptual object such as a device, hardware product, packaging, book, card, wearable, product shell, or software represented as a spatial object.

**Purpose:** Tangibility, ownership, product context, premium presentation.

**Possible media:** Photography, 3D render, illustration, vector, mockup, generated raster.

**Rules:** Distinguish the semantic object from its rendering medium. Preserve factual product form where the object is real.

### 8.3 Person / Identity

**Definition:** Founder, team, customer, creator, community, profile, avatar, or testimonial identity assets.

**Purpose:** Trust, authorship, social proof, human context, community.

**Source priority:** Real provided assets → user library → licensed generic photography → AI generation only for clearly fictional or decorative people.

**Hard rules:**

- Never fabricate a named or attributed person.
- Never pair a generated face with a factual testimonial.
- Do not imply a generic stock person is a real customer or employee.

### 8.4 Brand Asset

**Definition:** Official logo, wordmark, symbol, app icon, partner/customer logo, certification badge, store badge, payment mark, social-platform mark, press logo, or platform/device logo.

**Purpose:** Identity, compatibility, trust, partnership, distribution, validation.

**Source priority:** Official source → existing project → user library → approved brand repository.

**Hard rules:**

- Never AI-generate, trace, redraw, or approximate a real brand mark.
- Never fabricate customer, partner, press, or certification marks.
- Preserve official geometry, proportions, and clear-space guidance.
- Prefer official vector formats where available.

### 8.5 Iconography

**Definition:** Compact symbolic visuals used for actions, navigation, status, repeated categories, feature labels, or lightweight conceptual recognition. Iconography may be 2D, 3D, monochrome, colorful, static, or animated.

**Purpose:** Reduce reading effort, clarify interaction, and create a consistent symbolic language at small or repeated scales.

**Preferred media:** SVG or icon component for interface use; raster only when the style requires texture; Lottie/Rive/animated SVG for meaningful state motion; optimized 3D or pre-rendered 3D for sparse large-format brand moments.

**Source priority:** Existing design system → official platform symbols where applicable → coherent licensed icon family → small compatible custom extension → commissioned or generated non-factual icon set.

**Authenticity:** Normally `illustrative` or `decorative`; a named platform, integration, certification, or company mark is a `brand_asset` and must be factual.

**Production safety:** Verify the family license, attribution, redistribution, modification, font/SVG embedding, model/texture, and animation-runtime terms. Do not treat aggregator availability as permission to use a trademark.

**Rules:**

- Use icons for compact recognition, not as a substitute for Product UI, evidence, diagrams, or explanatory content.
- Choose one coherent family per role and confirm that it covers the full required concept set.
- Keep dimensionality, stroke/fill logic, optical size, geometry, palette, perspective, material, lighting, and motion consistent.
- Do not mix 2D utility icons, 3D icons, emoji, and official brand marks as if they were one family.
- Use 3D icons only when their display size and brand role justify the asset and performance cost.

### 8.6 Photography

**Definition:** Photographic imagery whose primary value is realism, environment, mood, lifestyle, documentation, or human context.

**Purpose:** Emotion, atmosphere, context, aspiration, real-world specificity.

**Source priority:** Existing → user library → copyright-safe Web → stock → AI generation.

**Selection criteria:** Subject placement, negative space, lighting, color temperature, brand fit, crop tolerance, responsive adaptability, authenticity, and set consistency.

**Anti-slop rule:** Do not replace meaningful real-world context with a generic gradient, glowing orb, abstract SVG, or generated blob when photography communicates more strongly.

### 8.7 Illustration

**Definition:** Non-photographic visual storytelling, including editorial illustration, mascots, characters, branded artwork, conceptual metaphors, and abstract illustration.

**Purpose:** Abstract explanation, personality, narrative, emotion, brand distinction.

**Source priority:** Existing brand illustration → user library → licensed stock/library → AI generation.

**Rules:** Illustration must not silently replace actual Product UI, official brands, real people, customer evidence, or real data.

### 8.8 Video

**Definition:** Encoded time-based raster media, including product demos, lifestyle footage, background footage, launch clips, cinematic hero footage, and visual loops.

**MVP source priority:** Existing project → user library → stock → AI-generated placeholder.

**Rules:**

- v1 does not automatically record a real product.
- Generated video may be mood material or an explicit placeholder.
- Generated video must not impersonate authentic product footage.
- Provide poster, reduced-motion, and bandwidth-aware behavior when appropriate.

### 8.9 Motion Graphic / Interactive Motion

**Definition:** Time-based visual assets that are not conventional video, such as Lottie, Rive, animated SVG, animated WebP, GIF, animated icons, motion loops, or shader-driven motion.

**Purpose:** Process, state, attention, delight, feedback, interactive explanation.

**Possible media:** Lottie, Rive, SVG, CSS animation, Canvas, WebGL, animated raster.

**Rules:** Prefer scalable and interactive runtime formats over video when they provide material advantages.

### 8.10 Diagram / Explanatory Visual

**Definition:** A visual whose primary purpose is to explain structure, sequence, dependency, causality, comparison, or relationships.

**Examples:** Workflow, architecture, ecosystem, integration map, before/after, process, system topology.

**Preferred media:** HTML, SVG, Canvas, interactive diagram, or existing image.

**Source priority:** Existing → code-generated → AI-assisted structured generation → static generated visual.

**Rules:** Prefer code rendering when responsiveness, selectable text, accessibility, updateability, or animation matters. Do not substitute decorative illustration when clarity is the objective.

### 8.11 Data Visualization

**Definition:** Visual representation of quantitative, geographic, temporal, statistical, network, or metric data.

**Preferred media:** SVG, Canvas, HTML, WebGL, chart or map libraries. Static raster is secondary.

**Hard rules:**

- Do not change real data for appearance.
- Do not fabricate data presented as real.
- Explicitly classify demonstration or marketing data as mock/demo.
- Prefer runtime rendering for responsive and interactive charts.

### 8.12 Device / Frame / Mockup

**Definition:** A presentation shell used to contextualize or contain another asset, such as an iPhone, laptop, browser chrome, desktop window, app window, or device stage.

**Purpose:** Context and presentation, not evidence by itself.

**Possible media:** SVG, CSS, HTML, raster mockup, 3D.

**Hard rule:** Preserve the distinction between the frame and its content. A frame must not become an excuse to invent fake Product UI.

### 8.13 3D / Spatial Asset

**Definition:** 3D object, product render, icon, illustration, environment, GLB/GLTF model, Spline scene, WebGL object, or spatial interactive scene.

**Purpose:** Physicality, depth, materiality, spatial explanation, novelty.

**Source priority:** Existing → user library → official/manufacturer source → stock 3D → AI generation.

**Rules:** Use only when semantic or aesthetic value justifies implementation and performance cost. Do not add 3D merely because a page feels empty.

### 8.14 Decorative Graphic / Texture

**Definition:** Grain, paper, noise, pattern, collage fragment, ornament, border motif, printed texture, or background graphic.

**Purpose:** Materiality, rhythm, atmosphere, framing.

**Possible media:** Raster, SVG, CSS, procedural.

**Rule:** Keep subordinate to meaningful content. Sophisticated texture does not compensate for missing product evidence.

### 8.15 Procedural / Generative Visual

**Definition:** Runtime-generated visual such as a shader, particle field, mesh gradient, generative lines, noise field, fluid effect, aurora, Voronoi field, dot matrix, interactive Canvas, or WebGL background.

**Purpose:** Atmosphere, dynamism, technological character, interaction, ambient identity.

**Possible media:** CSS, SVG, Canvas, WebGL, shader, JavaScript.

**Core principle:** Procedural assets are valid assets. The failure is not that they are code-generated; the failure is using them as generic filler where a more meaningful asset would communicate better.

### 8.16 Typography Asset

**Definition:** Brand, display, body, mono, variable, multilingual, custom-lettering, or numeral font resources.

**Purpose:** Brand identity, hierarchy, tone, editorial character, product personality.

**Source priority:** Existing brand font → official licensed source → approved open source → preset font library.

**Requirements:** Track license, origin, available weights/axes, Web format, fallback, and language coverage. Treat typography as an early asset decision, not a late CSS afterthought.

### 8.17 Audio

**Definition:** UI sound, SFX, voiceover, background audio, demo audio, and ambient audio.

**MVP status:** Optional and low priority.

**Future relevance:** Interactive launch pages, media products, product demos, and immersive experiences.

## 9. Visual medium taxonomy

### Raster image

PNG, JPEG, WebP, AVIF. Best for photography, textured imagery, and raster illustration.

### Vector image

SVG and related vectors. Best for official logos, diagrams, icons, and scalable flat graphics.

### Screenshot

A raster medium with a special authenticity requirement: it represents actual UI or an explicitly labeled concept.

### Video

MP4, WebM, MOV source. Best for product demonstrations, real-world motion, and cinematic sequences.

### Motion asset

Lottie, Rive, animated SVG, animated WebP, GIF. Best for scalable loops, state animation, and interactive graphics.

### Code-rendered visual

HTML, CSS, SVG, Canvas. Best for responsive diagrams, charts, frames, simple graphics, and design systems.

### Procedural visual

Shader, WebGL, Canvas process, or generative CSS. Best for dynamic fields, particles, and ambient effects.

### 3D

GLB, GLTF, Spline, Three.js or equivalent scene. Best for product render and spatial visuals.

### Font

WOFF2, variable-font files, or equivalent Web font resources.

### Audio

MP3, AAC, WAV, OGG, or related formats.

## 10. Source policy matrix

| Semantic type | Preferred sources | AI generation | Special restriction |
|---|---|---|---|
| Product UI | Existing, user library, actual product | Normally no | Never fake real product |
| Product/Object | Existing, official, stock | Yes | Preserve factual product form |
| Person/Identity | Real assets, licensed generic photo | Limited | Never invent factual identity/testimonial |
| Brand Asset | Official, existing | No | Never redraw or fabricate |
| Iconography | Existing system, coherent icon library, official platform symbols | Yes, for non-factual sets | Do not use in place of evidence or mix unrelated families |
| Photography | Existing, library, safe Web, stock | Yes | Production rights required |
| Illustration | Existing, library, stock | Yes | Do not substitute for evidence |
| Video | Existing, library, stock | Placeholder/mood only | Do not impersonate real footage |
| Motion Graphic | Existing, library, generated | Yes | Prefer scalable/interactive format when useful |
| Diagram | Existing, code-generated | AI-assisted | Clarity before decoration |
| Data Visualization | Real data + code | Mock/demo only | Never fabricate claimed real data |
| Device/Mockup | Official, existing, stock, code | Yes | Keep frame/content separation |
| 3D/Spatial | Existing, official, stock 3D | Yes | Justify performance cost |
| Texture/Graphic | Existing, stock | Yes | Secondary role |
| Procedural | Runtime/code | Yes | Avoid generic filler |
| Typography | Existing, official, open source | No synthetic substitute | License and language coverage required |
| Audio | Existing, licensed | Yes | Autoplay and accessibility constraints |

## 11. Candidate curation

A material asset decision should normally follow:

```text
retrieve or generate multiple candidates
→ inspect visually
→ reject unsafe or unsuitable candidates
→ compare in the context of the page and current asset set
→ select
```

Do not select solely from filename, metadata, popularity, search rank, or alt text.

Evaluate:

- semantic relevance;
- composition and subject placement;
- usable negative space;
- resolution and visual quality;
- desktop/mobile crop flexibility;
- palette, lighting, contrast, and temperature;
- perspective and camera language;
- illustration or 3D style;
- motion character;
- placement role, scale, focal behavior, and relationship to nearby content;
- brand fit;
- set consistency;
- authenticity;
- performance;
- source-mode status, plus license and attribution requirements for production use.

## 12. Visual-set consistency

Evaluate the entire selected set, not only individual files.

Consistency dimensions:

- color temperature;
- contrast and lighting;
- grain and realism;
- camera and perspective language;
- crop strategy;
- illustration stroke and shape language;
- 3D materials;
- motion pacing and easing;
- frame/radius treatment;
- density and background treatment.

Individually attractive assets can still form an incoherent system.

## 13. Image art direction and asset processing

Selecting an image does not make the source file implementation-ready. Prominent photography and raster illustration require an explicit treatment decision in page context.

Choose among deliberate clean evidence, editorial reframe, tonal grade, materialized print, cutout/collage, environmental blend, diagrammatic overlay, motion treatment, or a project-specific recipe. Compare materially different treatments for primary imagery when the strongest direction is not obvious.

`object-fit`, a frame, a shadow, or one generic filter is not sufficient evidence of art direction. The implemented crop, scale, tonal hierarchy, edge behavior, material, depth, text relationship, and responsive behavior must serve the asset's communication role. Read [image-art-direction.md](image-art-direction.md) for the operating rules.

Permitted transformations include:

- crop and reframe;
- resize and compression;
- Web format conversion;
- responsive variant generation;
- background removal;
- color treatment that does not falsify content;
- poster and thumbnail generation;
- masking and alpha optimization;
- metadata cleanup.

Preserve the source original when practical and create purpose-named derivatives when the result depends on image-specific grading, masks, cutouts, composites, baked texture, or materially different responsive crops. Runtime treatment is valid when responsive or interactive behavior is the reason for it.

Do not alter factual UI, identities, logos, certification marks, or data.

## 14. Responsive behavior

Evaluate every primary asset for:

- desktop, tablet, and mobile crop;
- focal point;
- safe text region;
- aspect ratio;
- resolution;
- loading and decoding cost;
- reduced-motion fallback;
- alternate asset need.

A slightly weaker desktop candidate may be superior if it remains effective on mobile.

## 15. Manifest requirement

Every external, generated, or materially transformed asset should record:

- stable id;
- semantic type and medium;
- role;
- local file or runtime module;
- source type and origin;
- authenticity;
- placeholder/production status and origin;
- license status and attribution when production-ready;
- production status;
- transformations;
- responsive behavior;
- selection reason.

## 16. Definition of success

A successful design does not merely contain more assets. It demonstrates that:

- the agent noticed material asset opportunities;
- meaningful assets were chosen for clear reasons;
- real evidence was preferred where factuality mattered;
- code-generated visuals were used when they were the best medium, not as reflexive filler;
- layout responded to asset composition;
- selected images were art-directed in context rather than dropped into generic containers;
- image-specific treatment or derivative work exists in the implementation when the visual direction depends on it;
- production rights were safe and traceable;
- the asset set formed one coherent visual world;
- visual style and placement were chosen deliberately rather than inherited from a provider preview;
- the implementation used actual project files or runtime visuals;
- responsive behavior was intentional;
- generic decoration did not dominate meaningful content.
