# Source modes and production-safety policy

## 1. Default source order

```text
existing project assets
> user asset library
> official first-party sources
> public Web or stock sources in design-placeholder mode
> production-safe Web or stock sources in production mode
> AI generation
```

This order is a default, not a universal override. Type-specific authenticity rules always win.

This order applies only after the visual decision has selected a sourced or generated asset. It does not outrank a stronger code-rendered, typographic, or `NONE` decision. A structural diagram may go directly to HTML/SVG, while a factual product claim may require owned Product UI regardless of easier stock alternatives.

## 2. Reference, design-placeholder, and production modes

### Reference mode

Broad Web material may be inspected to understand:

- composition;
- art direction;
- subject matter;
- crop and text-safe zones;
- motion or framing concepts;
- visual vocabulary.

Reference access does not grant production rights.

### Design-placeholder mode

Use this mode by default for design drafts, prototypes, mockups, and visual exploration when the user has not requested production-ready assets.

Before searching or generating, tell the user once, in their language:

> I’ll use sourced or generated images as design placeholders for visual review. They are not cleared for commercial or production use and must be replaced or licensed before launch.

This notice is informational and should not block the work. Broad Web, image-search, gallery, stock-preview, and generated imagery may be used to evaluate composition and art direction in the design. Full commercial-use and license verification is not required in this mode.

For each integrated placeholder, retain only lightweight provenance when practical:

- provider or source site;
- original URL;
- retrieval date;
- `production_status: placeholder`;
- `license.status: unknown` when it was not checked.

Do not describe, publish, ship, or hand off a placeholder as production-cleared. Before launch, replace it with an owned or licensed asset or run the production-mode review.

The placeholder premise does not authorize fabricated factual evidence. Type-specific authenticity rules still apply.

### Production mode

Before an external asset enters the project, record:

- provider or owner;
- source URL;
- retrieval date;
- license/terms status;
- commercial-use status;
- attribution requirement;
- any modification restriction.

When rights are uncertain, do not use the asset in production.

Use one of these alternatives:

- locate an official or licensed version;
- select a stock alternative;
- generate a genuinely original asset when the semantic type permits it;
- create a code/procedural visual only when the communication need is inherently structural, interactive, or generative and the result clearly beats a no-asset treatment;
- use an owned asset;
- omit the asset and preserve whitespace.

Do not use a custom SVG, CSS illustration, procedural scene, or fake interface as the automatic fallback for an unsuccessful asset search. Follow [asset-preparation-and-review.md](asset-preparation-and-review.md) for active search, generation, user review, and safe stopping.

## 3. Type-specific rules

### Product UI

Use owned/actual product material. Do not scrape another product's UI and do not generate a fake version of the user's product.

### Brand assets

Use first-party press kits, official brand portals, official package assets, or user-provided files. Never redraw or generate a real logo.

“Available on the Web” is not the same as “approved for arbitrary marketing use.” Record the official source and follow its usage guidance.

### Iconography

Use the project's existing icon system when it fits. Otherwise choose one coherent family whose dimensionality, stroke/fill logic, geometry, palette, and concept coverage match the interface. Utility icons may come from an appropriately licensed library; named integrations and platforms must use official brand assets instead. A 3D or animated icon also requires compatible model, texture, motion, runtime, and fallback rights.

Do not combine unrelated icon packs merely to fill gaps. Verify the selected library's current license, attribution, redistribution, and modification terms before production use.

### People and identity

Use provided real portraits for named people. Generic stock or generated people must not be presented as actual customers, employees, founders, or endorsers.

### Photography and illustration

In design-placeholder mode, broad sourced imagery may be used after the placeholder disclosure and lightweight origin tracking. In production mode, use owned, explicitly licensed, public-domain, or stock material whose terms permit the intended use and record attribution when required.

### Video and audio

Verify both media rights and any embedded music/voice rights. Generated placeholder video must be marked as placeholder and must not simulate authentic product evidence.

### Fonts

Record foundry/source, license class, allowed Web use, allowed weights/axes, and distribution restrictions. Do not commit restricted font files merely because they are locally installed.

### 3D

Verify model, texture, HDRI, and embedded material licenses separately when applicable.

## 4. AI generation policy

AI generation is not the default source for factual evidence.

Usually permitted:

- conceptual illustration;
- decorative graphics;
- representational lifestyle scenes;
- fictional/decorative people;
- mood footage or explicit video placeholder;
- textures;
- 3D-like decorative objects;
- procedural concepts.

Usually prohibited:

- real logos and brand marks;
- real customer/partner/press evidence;
- attributed people or testimonials;
- actual Product UI;
- real certifications;
- real metrics or data;
- accurate physical products when generation could misrepresent form.

Record model/tool and generation prompt or brief when practical.

## 5. Hotlinking

Temporary remote imagery may be used in a design tool when needed for placeholder evaluation, but retain its origin and expect it to break or change. Do not ship arbitrary remote image URLs as a substitute for production asset acquisition. Obtain the production asset through permitted means and store it in the intended delivery system.

Official hosted badges or embeds may be used when their official documentation requires or recommends it.
