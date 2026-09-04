# Asset-awareness and anti-slop audit

Run this after implementation.

## 1. Opportunity coverage

- [ ] Every major section received an explicit or internal Asset Opportunity assessment.
- [ ] `HIGH` and `REQUIRED` opportunities were addressed or have a recorded reason for omission.
- [ ] Assets were not added to `NONE` sections merely to fill whitespace.

## 2. Meaningful visual priority

- [ ] Material decisions separated semantic type, medium, visual style, placement, and source route.
- [ ] Product evidence uses actual Product UI where available.
- [ ] Named integrations and partners use official brand assets.
- [ ] Explanatory needs use diagrams or product sequences when clearer than decoration.
- [ ] Lifestyle claims use appropriate contextual media when it materially improves the story.
- [ ] Decorative visuals do not dominate evidence or content.

## 3. Default-reflex correction

- [ ] Emoji are not standing in for a more appropriate visual asset.
- [ ] Generic icons are not standing in for official brands, product evidence, or diagrams.
- [ ] Abstract SVGs are not used merely because the section looked empty.
- [ ] Gradients, glows, blobs, grids, and procedural fields have a deliberate supporting or primary role.
- [ ] Fake CSS dashboards are not substituting for existing Product UI.
- [ ] Whitespace remains where it improves clarity.
- [ ] Code-rendered SVG, Canvas, or WebGL was selected for structural, interactive, or generative value rather than as a fallback after weak sourcing.

## 4. Authenticity

- [ ] No fabricated Product UI is presented as real.
- [ ] No generated or stock person is presented as an actual named customer, employee, or founder.
- [ ] No fake testimonial, customer logo, certification, press mark, or metric is present.
- [ ] No real logo was generated, traced, or approximated.
- [ ] Demo/mock data and generated placeholder video are clearly classified.

## 5. Source and production safety

- [ ] The source mode is explicit: `design_placeholder` or `production`.
- [ ] Placeholder mode was disclosed to the user before external search or generation.
- [ ] When the chosen route required an external asset, relevant source classes were searched before AI generation; code-native visuals were not forced through irrelevant image search.
- [ ] Material candidates were compared with a credible no-asset treatment.
- [ ] Required user review recorded the chosen candidate, source mode, risks, and permitted transformations.
- [ ] Every integrated placeholder is marked `production_status: placeholder` and is not represented as production-cleared.
- [ ] Every external production asset has an origin and usable license status.
- [ ] Reference-only assets did not leak into production.
- [ ] Attribution requirements are implemented.
- [ ] Restricted font/model/media files are not committed without rights.
- [ ] Arbitrary remote hotlinks are not used as a production shortcut.

## 6. Curation and consistency

- [ ] Material assets were visually inspected rather than selected only from metadata/rank.
- [ ] Subject placement and negative space support the composition.
- [ ] Desktop and mobile crops retain meaning.
- [ ] Photography belongs to one coherent camera, light, and color world.
- [ ] Illustration, 3D, frame, and motion languages are coherent.
- [ ] Iconography uses one coherent family per role; 2D, 3D, monochrome, color, and animated styles are not mixed accidentally.
- [ ] No section introduces an unrelated asset style without a narrative reason.

## 7. Asset-layout co-design

- [ ] Layout was allowed to change when a selected asset implied a stronger composition.
- [ ] Assets were not forced into arbitrary aspect-ratio containers that destroy their value.
- [ ] Primary assets have sufficient visual scale.
- [ ] Text does not cover critical subjects or UI details.

## 8. Image art direction and treatment

- [ ] Every integrated photograph has an explicit treatment strategy, including deliberately `clean_evidence` imagery.
- [ ] Primary images were compared in page context across meaningfully different treatments when the strongest direction was not obvious.
- [ ] Crop, scale, tonal hierarchy, edge behavior, material, depth, and text relationship were considered together.
- [ ] The page does not rely on `object-fit`, a border radius, a shadow, or one generic filter as the entire treatment of prominent images.
- [ ] A multi-image set shares a coherent treatment system without collapsing into identical rectangles.
- [ ] Desktop and mobile use intentional focal points, crops, scale, and alternate derivatives when needed.
- [ ] Image-specific grading, masks, cutouts, composites, or baked textures exist as real derivatives when runtime styling cannot reproduce them reliably.
- [ ] Source originals remain distinguishable from treated derivatives when derivatives were created.
- [ ] Factual content, UI, people, logos, and data were not altered or obscured to improve aesthetics.
- [ ] The finished composition would not remain effectively unchanged if each image were replaced by arbitrary same-ratio stock.

## 9. Implementation

- [ ] Approved material assets were reviewed again in representative desktop and mobile layouts.
- [ ] The UI references actual local files or intended runtime assets.
- [ ] Raster assets have dimensions and appropriate formats.
- [ ] Video has poster, preload, playback, and reduced-motion decisions.
- [ ] 3D/procedural assets justify their performance cost and have fallbacks.
- [ ] Prominent assets came from a source class suited to their meaning; no provider became the unexamined default.
- [ ] Alt text or accessible equivalents communicate relevant meaning.
- [ ] `asset-manifest.json` is current and validates.

## 10. Final questions

1. Which sections became materially stronger because the agent used an asset rather than generic decoration?
2. Which sections correctly remained typographic or code-rendered?
3. Did the agent use the product's actual visual material whenever it existed?
4. Does the finished page look specific to this product rather than to a generic AI-generated SaaS template?
5. Which visible crop, grade, edge, material, depth, or responsive decisions make each primary image belong to this page?
