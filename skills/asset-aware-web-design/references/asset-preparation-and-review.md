# Active asset preparation and user review

Use this strategy when the visual decision selects a sourced or generated asset for a `MEDIUM`, `HIGH`, or `REQUIRED` opportunity and local inventory does not contain a suitable candidate. Design drafts use sourced or generated imagery as disclosed placeholders by default; production-ready sourcing is a separate mode. The strategy prevents an empty asset folder from becoming an excuse for generic stock, decorative SVG, CSS, or fake UI.

## 1. Start with a no-asset comparison

Before searching or generating, describe the strongest version of the section that uses typography, layout, existing UI, and whitespace only.

Prepare an asset only when a plausible candidate could materially improve at least one of:

- understanding;
- credibility;
- emotional context;
- product or brand specificity;
- narrative;
- interaction;
- conversion.

The expected gain must justify preparation time, implementation complexity, performance cost, and responsive variants. In production mode, it must also justify acquisition and licensing work. If it does not, select `NONE` and continue designing.

CSS, SVG, Canvas, WebGL, and procedural code are rendering media, not proof that useful asset preparation occurred. Do not create a custom visual in code merely because no file was found.

## 2. Write a compact preparation brief

Define the need before choosing a source or tool:

```yaml
section: <where the asset will appear>
communication_goal: <what it must communicate>
role: primary | supporting
source_mode: design_placeholder | production
semantic_type: <product UI, brand asset, photography, illustration, diagram, etc.>
authenticity: factual | representational | illustrative | decorative
required_content: []
prohibited_content: []
brand_direction: <visual character and constraints>
composition: <subject placement, negative space, aspect ratio>
treatment_hypotheses: <clean evidence, editorial reframe, tonal grade, material, collage, overlay, motion>
responsive_needs: <desktop/mobile crops or variants>
source_constraints: <owned, official, licensed stock, generated, etc.>
delivery_constraints: <placeholder status or production license, performance, accessibility>
```

Search and generation prompts must derive from this brief. Do not start with a preferred stock site, image model, or file format.

## 3. Ask the user only for decisions that matter

First infer answers already present in the brief, repository, brand guide, or conversation. Ask the remaining material questions together instead of interrupting once per asset.

Useful questions include:

1. Are there private or off-repository screenshots, recordings, photos, brand files, or customer-approved materials that should be used?
2. Is AI-generated imagery acceptable for the roles where authenticity is not factual?
3. Are paid libraries, purchases, or generation credits acceptable?
4. Are there subjects, styles, providers, competitors, people, locations, or cultural representations to include or avoid?
5. Which assets should the user approve before integration: every asset, only primary/material assets, or only the final page?

Use **material-asset review** as the default when the user does not choose a review mode: ask for approval of primary, brand-defining, factual, identity-related, paid, or prominent generated assets; handle routine low-risk supporting assets autonomously and disclose them in the final review.

In design-placeholder mode, send the placeholder disclosure once and proceed with read-only public search without asking about copyright or commercial clearance. Spending money, consuming paid credits, uploading private user material to an external service, accepting restrictive terms, publishing, or representing an asset as production-approved still requires explicit authorization.

If missing information would materially change authenticity or source choice, pause before preparing candidates. Otherwise state the working assumption and continue.

## 4. Search before AI generation when sourcing is appropriate

Follow the source order in [source-policy.md](source-policy.md):

```text
user-owned or private material
→ official first-party sources
→ public Web, image-search, gallery, or stock sources
→ AI generation when the semantic type permits it
→ NONE or a request for user-supplied material
```

Do not perform irrelevant image search before a code-rendered diagram, chart, map, or procedural visual that already won the medium comparison. For Web or library search:

1. build queries from the preparation brief, including subject, intended role, composition, aspect ratio, art direction, and authenticity;
2. search more than one credible source or query formulation when the decision is material;
3. distinguish design placeholders from candidates cleared for production;
4. in placeholder mode, retain the source URL/provider and placeholder status when practical;
5. in production mode, additionally verify owner, license, commercial use, attribution, and modification terms.

Unknown license status does not block design-placeholder use after disclosure. It does block production use. In every mode, reject candidates with ambiguous factual identity, misleading embedded branding, or prohibited content.

## 5. Generate only when generation fits the meaning

Generation is appropriate for original illustrative, representational, atmospheric, or decorative material when factual authenticity is not required and the user has not prohibited it.

Do not generate Product UI, real logos, partners, customers, testimonials, certifications, named people, real metrics, or other factual evidence. Request authentic material or use `NONE` instead.

When generating:

- derive the prompt from the preparation brief;
- specify composition and usable negative space, not only style adjectives;
- include factual and brand prohibitions;
- create enough variation to make curation meaningful;
- inspect actual outputs for artifacts, accidental text/logos, misleading details, and mobile crop failure;
- record the tool/model and generation brief when practical.

Do not treat a hand-authored SVG, a pile of CSS shapes, or a fake dashboard as the default “generated candidate.” A diagram or procedural visual is justified only when the communication need is inherently structural, interactive, or generative and it passes the same no-asset and complexity comparison.

## 6. Curate before asking the user

Do not make the user sort through raw search results or every generated output. Visually inspect candidates and reduce them to a small, meaningfully different shortlist.

Evaluate each finalist against:

- semantic relevance and clarity;
- authenticity and factual safety;
- product or brand specificity;
- composition and text-safe space;
- desktop and mobile viability;
- visual quality and consistency;
- origin and source-mode status;
- accessibility and performance;
- implementation and maintenance complexity;
- improvement over the no-asset version.

Reject candidates that are merely attractive but generic. If no finalist clearly beats the no-asset version, recommend `NONE` rather than presenting a forced choice.

## 7. Present an actionable review packet

For each material asset, show the actual candidates whenever the environment supports visual previews. Do not ask for approval based only on filenames or prose.

Use a compact packet:

```text
Asset need: <section and communication goal>
No-asset option: <what the section would do without it>

Option A — <short label>
- preview
- source and placeholder/production status
- authenticity class
- desktop/mobile fit
- proposed treatment direction and permitted transformations
- main advantage and risk

Option B — <short label>
- same fields

Recommendation: <option or NONE, with reason>
Decision requested: approve one / search again / generate alternatives / use NONE
```

User approval applies to the identified candidate, source mode, and stated treatment boundaries. Approving a placeholder means “use this in the design,” not “this is commercially cleared” or “apply any aesthetic transformation.” It does not by itself authorize a purchase, paid generation, external upload, license acceptance, publication, factual alteration, or unrelated creative changes.

Record the decision. If the user rejects every option, use the rejection reason to revise the preparation brief before searching or generating again.

## 8. Integrate, then request contextual review

After candidate approval when required:

1. save or reference the selected asset and preserve mode-appropriate origin information;
2. read [image-art-direction.md](image-art-direction.md) and compare treatment directions for primary or brand-defining imagery in the real layout;
3. produce the necessary treated derivatives, crops, encodes, posters, or runtime treatment, preserving the source original when practical;
4. update `asset-manifest.json`, using `production_status: placeholder` and `license.status: unknown` when clearance was not performed;
5. integrate the treated asset accessibly in the real layout;
6. verify representative desktop and mobile states;
7. show the user the asset in context, not only as a standalone file.

The contextual review should make it easy to choose among:

- approve;
- adjust crop, scale, placement, treatment, or motion;
- replace with another prepared candidate;
- search or generate again with revised direction;
- remove the asset and use the no-asset design.

An approved source image can still fail in the page. Final design acceptance depends on the rendered composition, responsive behavior, and factual presentation. Production safety is reviewed separately when production-ready assets are requested.

## 9. Stop safely when preparation fails

After reasonable search or generation attempts, report:

- which source classes were checked;
- why candidates failed;
- whether user-owned material is required;
- whether a changed brief could unlock safe alternatives;
- what the `NONE` design will do instead.

Do not conceal failure with generic decoration, an invented product screen, a complex custom SVG, or a placeholder mislabeled as production-ready.
