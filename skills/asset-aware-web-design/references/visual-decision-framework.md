# Visual decision framework

Use this reference before searching, generating, or drawing a material visual. Its purpose is to prevent a section from defaulting to whichever medium or provider is easiest to access.

## 1. Keep the decision axes separate

Make these decisions in order:

```text
communication function
→ semantic asset type
→ rendering medium
→ visual style
→ placement and scale
→ source and acquisition method
```

Do not collapse the axes:

- `stock` is a source class, not a visual meaning;
- `3D` is a medium and dimensional treatment, not automatically the semantic type;
- `SVG` is a format or rendering medium, not a reason to draw something;
- `icon` is a compact symbolic visual, not a substitute for product evidence;
- `AI-generated` describes acquisition, not whether the output should be photography, illustration, texture, or 3D;
- `NONE` is a valid outcome when typography, UI, or whitespace communicates better.

Examples:

```text
feature category
→ iconography
→ vector SVG
→ monochrome rounded outline
→ small repeated label
→ one coherent open-source icon family
```

```text
physical product form
→ product_object
→ interactive 3D model
→ precise studio material render
→ large hero stage
→ manufacturer GLB or commissioned model
```

```text
system relationship
→ diagram
→ code-rendered SVG/HTML
→ restrained monochrome schematic
→ full-width explanatory section
→ project data and code, with no external asset search
```

## 2. Run a medium tournament

For each `MEDIUM`, `HIGH`, or `REQUIRED` opportunity, compare the strongest plausible candidates rather than choosing one reflexively. Include `NONE` and code-rendered media whenever they are credible.

Evaluate each candidate against:

- truthfulness and information fidelity;
- emotional or narrative strength;
- product and brand specificity;
- fit with the intended visual language;
- responsive composition;
- interaction and editability needs;
- accessibility;
- performance and implementation cost;
- source availability and production safety;
- consistency with the full page.

Eliminate a candidate immediately when it cannot satisfy a hard requirement. Then choose the option with the strongest communication gain, not the largest asset count or most novel technology.

## 3. Match communication need to visual family

| Communication need | Strong candidates | Weak default |
|---|---|---|
| Prove an existing software capability | Actual screenshot, recording, interactive Product UI | Generic feature icon or invented dashboard |
| Show physical form, material, or spatial behavior | Accurate photography, 3D model, product render, turntable video | Abstract gradient or approximate generated object |
| Establish real-world atmosphere | Owned, commissioned, editorial, archival, or stock photography/video | Arbitrary icon grid |
| Explain sequence, topology, comparison, or data | HTML/SVG/Canvas diagram, chart, map, annotated screenshot sequence | Decorative illustration with no readable structure |
| Express a metaphor or fictional brand world | Bespoke illustration, 3D illustration, collage, procedural visual | Forced lifestyle stock photo |
| Label repeated categories or actions | One coherent icon family | One-off illustrations or mixed icon packs |
| Establish trust in a real person, partner, or product | Real portrait, official logo, actual Product UI | Generated identity or generic glyph |
| Add subtle materiality or ambient depth | Texture, restrained motion, CSS, shader | Heavy hero media with no semantic gain |
| Carry editorial narrative | Photography, archival material, typography, illustration, maps | Equal cards with unrelated thumbnails |
| Support a dense form, pricing, FAQ, or legal section | Typography, spacing, utility icons only where functional, or `NONE` | Prominent decorative assets |

## 4. Photography and stock imagery

Prefer photography when realism, place, human context, documentation, or emotional atmosphere is the message.

Use stock photography only after defining:

- subject and action;
- documentary, editorial, lifestyle, studio, still-life, or archival genre;
- camera distance and lens character;
- light direction, contrast, palette, and grain;
- required negative space and focal position;
- desktop and mobile crops;
- what would make the image feel generic or staged.

Do not choose a stock image merely because it is polished. Reject visual cliches such as staged pointing, generic laptops, fake collaboration, anonymous glowing screens, or aspirational scenery unrelated to the product.

Prefer a commissioned, owned, official, archival, or specialist-stock image when specificity matters. Use broad free stock primarily for placeholder exploration or when its visual language genuinely fits.

## 5. Iconography decisions

Use iconography for compact recognition, navigation, controls, repeated categories, status, or low-complexity concepts. An icon should reduce reading effort; it should not carry a claim that needs evidence or explanation.

Choose one icon system by role:

| Style | Best fit | Avoid when |
|---|---|---|
| Monochrome outline | Dense interfaces, utilities, navigation, technical products | The icon must carry rich category identity |
| Monochrome filled/glyph | Small sizes, high contrast, status, platform-native UI | The page is airy and line-led |
| Duotone | Friendly product marketing, moderate emphasis, clear categories | The palette is restrained or the set lacks all required concepts |
| Full-color 2D | Large categories, onboarding, expressive consumer products | Icons are small, numerous, or compete with content |
| Hand-drawn/editorial | Human, cultural, playful, or crafted brands | Precision, enterprise trust, or dense UI is primary |
| 3D icon | Sparse, large, tactile brand moments or a deliberately spatial system | Used as tiny controls, mixed with flat utility icons, or performance is unjustified |
| Animated icon | State change, progress, interaction feedback, or a few focal moments | Motion is decorative, repeated everywhere, or lacks reduced-motion behavior |

Rules:

- Use official brand marks, not generic icons, for named integrations or platforms.
- Choose a family that covers the complete required set before integration.
- Keep stroke, corner geometry, optical size, fill logic, perspective, palette, material, and lighting consistent.
- Do not mix 2D outline, colorful illustration, emoji, and 3D icons without a deliberate hierarchy.
- Prefer the project's existing icon dependency when it fits; adding a second family requires a clear role distinction.
- Customize size, stroke, and color within the library's design rules; do not distort individual glyphs into a pseudo-custom set.

## 6. 3D and spatial decisions

Choose 3D when depth, material, rotation, assembly, scale, or spatial interaction carries meaning, or when a coherent 3D language is central to the brand.

Choose an interactive model when users benefit from changing view, configuration, or state. Choose pre-rendered raster/video when the camera is fixed and interactivity would add cost without value. Choose 2D illustration when spatial accuracy is unnecessary and art direction matters more than physical form.

Before committing to 3D, record:

- semantic subject and required accuracy;
- interactive versus fixed camera need;
- model, texture, material, HDRI, and animation sources;
- polygon, texture, and download budgets;
- WebGL/device support;
- loading state, poster, and reduced-motion fallback;
- mobile framing and touch behavior;
- whether a high-quality 2D render communicates equally well.

Do not use a generic floating 3D object merely to make a page look expensive. A mediocre 3D asset lowers perceived quality more than a strong typographic or photographic solution.

## 7. Illustration, collage, and code-drawn SVG

Prefer illustration when the communication is metaphorical, conceptual, fictional, emotionally authored, or impossible to photograph truthfully. Define the illustration system before selecting individual pieces: geometry, line, texture, perspective, palette, realism, character treatment, and density.

Prefer code-rendered HTML/SVG/Canvas when the visual is structural, data-driven, interactive, responsive, themeable, or frequently updated. Typical examples include diagrams, timelines, maps, charts, comparison states, icon primitives, and simple brand geometry.

Do not code-draw an elaborate illustration simply because sourcing failed. Before custom SVG illustration, compare:

- a sourced or commissioned illustration;
- a generated illustrative candidate when permitted;
- a simpler diagram or typographic solution;
- `NONE`.

Code rendering wins when its editability, responsiveness, accessibility, interaction, or data fidelity is materially valuable—not because code is available.

## 8. Video, motion, and procedural media

Use video when time, human movement, transformation, or environmental motion is the message. Use screen recording for real product behavior. Use motion graphics when a scalable stateful sequence communicates better than encoded video. Use procedural media when live variation, user input, or generative behavior is meaningful.

Do not use a background loop when a still frame carries the same value. Always define poster, reduced-motion, bandwidth, autoplay, caption, and mobile behavior.

## 9. Build a visual grammar before sourcing a set

Translate brand direction into concrete selection constraints:

```yaml
visual_grammar:
  realism: documentary | polished | illustrative | abstract
  dimensionality: flat | layered_2d | isometric | spatial_3d
  palette: monochrome | restrained | duotone | full_color
  geometry: sharp | rounded | organic | technical
  line: none | fine | regular | bold | hand_drawn
  material: paper | ink | glass | metal | clay | fabric | digital
  lighting: natural | studio | cinematic | ambient | none
  texture: clean | grain | halftone | tactile | photographic
  motion: none | functional | restrained | expressive | immersive
  framing: full_bleed | contained | cutout | collage | diagrammatic
```

These are constraints, not a style-name generator. Derive them from the product, audience, content density, brand character, and existing UI.

Perceived quality comes primarily from specificity, restraint, composition, craft, and set-level coherence—not from the price of a library, the number of assets, or the use of 3D and motion. A simpler medium executed consistently is more premium than a technically ambitious but generic or mismatched one.

Aim for:

- one primary expressive visual language;
- one utility icon family;
- one supporting treatment language;
- explicit exceptions only when narrative meaning requires contrast.

## 10. Give the visual a deliberate position

Classify placement before implementation:

- `primary_stage` — dominant hero or section-defining visual;
- `evidence` — close to the claim it proves;
- `explanatory` — sized for reading relationships, not decoration;
- `narrative_sequence` — ordered to create progression;
- `supporting` — secondary atmosphere or context;
- `control` — icon or feedback attached to interaction;
- `background` — subordinate and contrast-safe;
- `decorative` — expendable without loss of meaning.

Let focal point, subject direction, eye line, motion direction, negative space, and crop resilience determine layout. Do not force every asset into equal cards or arbitrary aspect ratios. Scale should reflect semantic importance.

Distribute assets across the page as a system. A page may use one strong hero, one explanatory diagram, and a restrained icon family while leaving other sections typographic. More placements do not demonstrate better asset intelligence.

## 11. Record the decision

For each material opportunity, leave a compact decision record:

```yaml
section: <name>
communication_goal: <goal>
opportunity: NONE | LOW | MEDIUM | HIGH | REQUIRED
authenticity: factual | representational | illustrative | decorative
semantic_type: <chosen meaning>
medium: <chosen rendering medium>
visual_style: <relevant visual-grammar constraints>
placement: <role, scale, focal point, responsive behavior>
source_route: <owned, official, specialist library, stock, generated, code, none>
alternatives_considered:
  - <candidate medium and rejection reason>
selection_reason: <why this combination is strongest>
```

This record may be internal for routine decisions. Include it in a review packet or manifest notes when the choice is material, surprising, paid, or brand-defining.
