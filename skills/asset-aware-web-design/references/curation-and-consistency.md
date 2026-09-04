# Candidate curation and visual consistency

## 1. Retrieve a candidate set

For material decisions, retrieve or generate more than one credible candidate. Candidate count should reflect the decision's importance, not an arbitrary quota.

The search/generation brief should include:

- semantic subject;
- intended role;
- art direction;
- authenticity class;
- composition need;
- desktop and mobile ratios;
- preferred subject position and text-safe zone;
- color/lighting constraints;
- source-mode constraints and, for production, license constraints.

## 2. Inspect visually

Do not rank from metadata alone. When vision is available, inspect each candidate for:

- semantic correctness;
- factual risk;
- subject clarity;
- negative space and focal point;
- crop resilience;
- resolution and artifacts;
- lighting, temperature, and contrast;
- camera/perspective language;
- illustration stroke, geometry, and texture;
- icon stroke/fill logic, optical size, dimensionality, and family coverage;
- 3D material and lighting language;
- motion pacing and loop quality;
- accessible readability when text is embedded;
- brand fit;
- consistency with already selected assets;
- production and performance cost.

## 3. Rank in page context

The objectively “prettiest” candidate may be the wrong candidate.

Evaluate it inside the intended composition:

- Does copy fit in actual negative space?
- Does the focal point survive the intended crop?
- Does it compete with the CTA?
- Does it introduce a new color world?
- Is the asset too detailed for its rendered size?
- Does it remain legible or meaningful on mobile?
- Does it create a stronger layout than existing alternatives?

## 4. Curate the treatment after the source

The strongest source file can still produce a weak page when it is integrated without art direction.

For primary photography or raster illustration, compare the clean source treatment with meaningfully different art-direction options when the answer is not obvious. Review each option with real copy, controls, and target viewport dimensions.

Evaluate:

- crop and scale as hierarchy, not only fit;
- subject, negative space, and protected factual content;
- global and local tonal separation;
- whether color treatment joins the page palette without becoming a generic tint;
- edge behavior: bleed, hard frame, mask, cutout, fade, overlap, or clean evidence;
- material and depth relationship to the interface;
- text, caption, diagram, and control placement;
- whether the treatment needs a derived file, runtime implementation, or both;
- whether desktop and mobile need different crops or derivatives;
- whether the treatment preserves authenticity.

`object-fit`, a border radius, a shadow, or one identical filter across the set is not a treatment comparison. Read [image-art-direction.md](image-art-direction.md) for the full workflow and stopping condition.

## 5. Set-level consistency

After selecting multiple assets, audit the complete set across:

- realism level;
- photographic genre;
- lighting softness and direction;
- color temperature and grade;
- contrast and saturation;
- grain and texture;
- perspective and camera distance;
- subject treatment;
- crop rhythm;
- illustration geometry and stroke;
- 3D material language;
- motion timing, easing, and intensity;
- frame/radius/shadow treatment.

Do not combine unrelated high-quality assets merely because each is attractive individually.

## 6. Responsive variants

For primary raster/video assets, record:

- source dimensions;
- desktop crop;
- tablet crop;
- mobile crop;
- focal point;
- text-safe region;
- alternate asset requirement;
- poster/reduced-motion fallback;
- loading priority.

Generate a separate mobile asset when cropping would destroy meaning or composition.

## 7. Rejection reasons

Record material rejection reasons when useful:

- license unclear for production use;
- low resolution;
- weak mobile crop;
- subject conflicts with text;
- inconsistent color temperature;
- overly generic stock aesthetic;
- obvious generation artifacts;
- factual ambiguity;
- repetitive with another section;
- treatment remains indistinguishable from dry source-file placement;
- treatment is attractive but unrelated to the image's communication role;
- performance cost not justified.
