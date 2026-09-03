# Source and production-safety policy

## 1. Default source order

```text
existing project assets
> user asset library
> official first-party sources
> copyright-safe Web sources
> preset stock libraries
> AI generation
```

This order is a default, not a universal override. Type-specific authenticity rules always win.

## 2. Reference mode vs production mode

### Reference mode

Broad Web material may be inspected to understand:

- composition;
- art direction;
- subject matter;
- crop and text-safe zones;
- motion or framing concepts;
- visual vocabulary.

Reference access does not grant production rights.

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
- create a code/procedural visual;
- use an owned asset;
- omit the asset and preserve whitespace.

## 3. Type-specific rules

### Product UI

Use owned/actual product material. Do not scrape another product's UI and do not generate a fake version of the user's product.

### Brand assets

Use first-party press kits, official brand portals, official package assets, or user-provided files. Never redraw or generate a real logo.

“Available on the Web” is not the same as “approved for arbitrary marketing use.” Record the official source and follow its usage guidance.

### People and identity

Use provided real portraits for named people. Generic stock or generated people must not be presented as actual customers, employees, founders, or endorsers.

### Photography and illustration

Use owned, explicitly licensed, public-domain, or stock material whose terms permit the intended use. Record attribution when required.

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

Do not ship arbitrary remote image URLs as a substitute for asset acquisition. Download or otherwise obtain the asset through permitted means, store it in the intended delivery system, and record the origin.

Official hosted badges or embeds may be used when their official documentation requires or recommends it.
