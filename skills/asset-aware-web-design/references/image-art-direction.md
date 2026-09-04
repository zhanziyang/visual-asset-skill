# Image art direction and treatment

Use this reference after selecting photography or raster illustration and before treating the source file as implementation-ready. The goal is not to stylize every image. The goal is to make a deliberate decision about how the image should read, belong to the interface, and adapt across viewports.

## 1. Failure to prevent

Do not stop at:

```text
download source image
→ place it in a rectangle
→ add object-fit: cover
→ apply one generic filter
→ call the section finished
```

Those operations may be implementation details, but they are not sufficient art direction for a material image unless `clean_evidence` is explicitly the strongest treatment.

An image is art-directed when its crop, scale, tonal hierarchy, edge behavior, material treatment, text relationship, responsive behavior, and role in the reading sequence have been chosen together.

## 2. When treatment work is required

Create an explicit treatment plan for:

- hero, background, storytelling, emotional-context, evidence, or other prominent photography;
- a repeated photographic or raster-illustration set that establishes the page's visual world;
- an image whose source composition does not already fit its rendered role;
- an image that must coexist with overlaid copy, diagrams, controls, or motion;
- an image that needs materially different desktop and mobile compositions.

Small utility thumbnails may inherit a documented set-level recipe. Product UI, logos, identities, and factual evidence still need crop and presentation decisions, but their pixels must not be aesthetically rewritten in ways that change facts.

## 3. Select a treatment direction

Choose the smallest treatment system that achieves the communication goal. Valid directions include:

### `clean_evidence`

Preserve factual clarity. Use deliberate crop, scale, technical normalization, neutral framing, and responsive focal control. This is a real treatment decision, not a default escape hatch.

### `editorial_reframe`

Use assertive crop, bleed, scale contrast, asymmetric framing, caption relationships, and overlap to control reading order.

### `tonal_grade`

Shape luminance, contrast, temperature, saturation, duotone, or local emphasis so the image belongs to the page and supports legibility.

### `materialized_print`

Treat the image as a physical artifact such as a contact print, scan, halftone, paper image, film frame, or ink impression. Texture must support the concept rather than disguise weak content.

### `cutout_collage`

Isolate or mask a subject, create layered depth, or combine fragments. Use only when edges are credible, the treatment fits the brand, and factual content is not misrepresented.

### `environmental_blend`

Use fades, vignettes, atmosphere, light, spatial gradients, or background integration to make an image part of a larger visual field.

### `diagrammatic_overlay`

Combine an image with labels, guides, measurements, routes, annotations, or interaction states. Demo overlays must not imply real coordinates, metrics, or product behavior.

### `motion_reveal`

Use masked reveals, controlled pan/zoom, parallax, or state transitions when time materially improves attention or explanation. Provide a reduced-motion composition that remains complete.

These are direction families, not a requirement to use preset aesthetics. A project-specific recipe such as `archival_darkroom` or `clinical_product_evidence` should state which operations it uses and why.

## 4. Write an image-treatment brief

For each primary image, or once for a coherent supporting set, define:

```yaml
treatment_strategy: <clean_evidence | project-specific recipe>
communication_role: <what the treated image must do>
reading_order: <where attention should enter and leave>
protected_content: <subjects, UI, text, marks, or evidence that cannot be obscured>
desktop_crop: <ratio, focal point, safe region, scale>
mobile_crop: <ratio, focal point, safe region, scale, alternate asset if needed>
tonal_target: <contrast, temperature, saturation, highlight/shadow behavior>
edge_and_frame: <full bleed, hard crop, mask, cutout, border, fade, none>
depth_and_overlap: <relationship to copy, controls, diagrams, and adjacent sections>
material_language: <clean, paper, grain, emulsion, halftone, glass, etc.>
implementation: runtime | derived_asset | mixed
truth_constraints: <what may not be changed or implied>
performance_target: <format, size, loading priority>
```

Do not copy one recipe mechanically across unrelated source images. A coherent set may share a grade and material language while using different crops, scales, and edge behavior according to role.

## 5. Compare treatments, not only source candidates

Selecting the source image is only the first curation decision.

For a primary or brand-defining image:

1. place the clean source in the intended layout;
2. create or simulate at least two meaningfully different treatment directions when the strongest direction is not obvious;
3. compare them at the actual rendered size with real copy and controls;
4. inspect representative desktop and mobile states;
5. choose the treatment that most improves hierarchy, belonging, and communication without harming authenticity.

The comparison may be implemented with quick crops, masks, grade tests, or low-cost composites. Do not spend production effort on every branch. If the clean-evidence version wins, record why and keep it deliberately clean.

When a user review gate applies to a prominent asset, show the source choice and proposed treatment direction together. Approval of a source image does not imply approval of every crop, color grade, cutout, composite, or motion treatment.

## 6. Give every operation a purpose

Evaluate the following dimensions independently:

| Dimension | Questions |
|---|---|
| Crop and scale | Is the reason for choosing the image still visible? Does scale establish the intended hierarchy? |
| Tonal hierarchy | Are subject, text-safe space, and CTA separated by luminance and contrast? |
| Color relationship | Does the image join the page palette without becoming a generic tint? |
| Edge behavior | Should the image bleed, fade, mask, cut out, overlap, or remain a clean rectangle? |
| Material | Does grain, paper, halftone, glass, or another texture support the concept? |
| Depth | Is the image background, surface, object, evidence, or foreground? |
| Text relationship | Does copy sit beside, inside, across, under, or outside the image for a reason? |
| Sequence | Does each image create a distinct beat rather than repeat the same card? |
| Motion | Does motion explain or focus, or merely decorate? |
| Accessibility | Does treatment preserve meaningful content, contrast, alt text, and reduced-motion behavior? |

`object-fit`, a border radius, a shadow, or one page-wide CSS filter may support a treatment, but none proves that these questions were answered.

## 7. Produce real derivatives when the look depends on them

Preserve the source original when practical. Create purpose-named derivatives such as:

```text
hero-source.jpg
hero-editorial-desktop.webp
hero-editorial-mobile.webp
story-contact-print-02.webp
```

Use a derived asset when the result depends on:

- image-specific tonal work;
- local masks or selective contrast;
- background removal or edge cleanup;
- compositing or collage;
- baked material texture;
- a materially different mobile crop;
- pre-rendered effects needed for performance or consistency.

Runtime CSS/SVG/Canvas treatment is appropriate for responsive crop, overlays, reversible gradients, interactive masks, state, and light effects that benefit from live layout. If the intended art direction depends on both, use `mixed` implementation and record both parts.

Do not claim to have treated an image when the implementation still references only the untouched source plus a generic container style.

## 8. Art-direct the set, not identical rectangles

For multi-image pages, define a set-level system:

- shared tonal range or color relationship;
- shared material and edge language;
- deliberate differences in crop, scale, density, and placement role;
- a sequence with visual tension and rest;
- consistent caption and provenance treatment;
- responsive rules that preserve the sequence rather than collapse it into repeated cards by default.

Consistency does not mean identical treatment. A hero, evidence crop, portrait, and background can belong to one system while behaving differently.

## 9. Authenticity and transformation limits

Never use aesthetic treatment to change factual meaning.

- Do not add, remove, or alter product controls, labels, metrics, people, logos, certificates, or physical product features.
- Do not composite unrelated factual scenes and present them as one event.
- Do not make a generic or generated person appear to be a named real person.
- Do not use grading, blur, crop, or overlays to hide evidence that contradicts a claim.
- Label illustrative, concept, demo, and composite treatments when they could otherwise be mistaken for factual evidence.

Cropping, normalization, framing, and non-misleading annotation are generally safe. Cutout, collage, relighting, cleanup, and generative fill require stricter factual review.

## 10. Contextual review and stopping condition

Review the treated image inside the complete interface at representative desktop and mobile sizes.

The treatment is incomplete when any of these remain true:

- the image looks like a source file dropped into a generic container;
- the same filter or frame was applied without regard to each image's role;
- the layout would be unchanged if the image were replaced with any same-ratio stock file;
- the crop removes the selected subject or destroys the original negative space;
- text and controls merely cover the image instead of composing with it;
- the mobile result is an accidental center crop of the desktop version;
- the intended material, depth, or editorial relationship exists only in the written plan;
- the asset set has no shared treatment logic.

Stop when the image communicates its role, belongs to the page, survives responsive states, preserves authenticity, and the implementation contains the actual treatment or derivative files.
