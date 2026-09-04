# Asset manifest specification

## 1. File

Use `asset-manifest.json` at the project root unless the project already has a compatible asset registry.

Recommended top-level structure:

```json
{
  "version": "1.0",
  "project": "product-name",
  "generated_at": "2026-09-04T00:00:00Z",
  "assets": []
}
```

## 2. Required asset fields

Each integrated production asset or design placeholder should include:

```json
{
  "id": "hero-product-demo",
  "semantic_type": "product_ui",
  "medium": "video",
  "role": ["primary_visual", "product_demo"],
  "file": "public/assets/hero-product-demo.webm",
  "source": {
    "type": "existing_project",
    "original": "marketing/demo/final.webm"
  },
  "authenticity": "factual",
  "license": {
    "status": "owned"
  },
  "production_status": "production",
  "selection_reason": [
    "Demonstrates the actual core interaction",
    "More informative than a static screenshot"
  ]
}
```

Required fields:

- `id` — unique kebab-case identifier;
- `semantic_type`;
- `medium`;
- `role` — non-empty array;
- `file` — project-relative path or runtime module path;
- `source.type`;
- `authenticity`;
- `license.status`;
- `production_status`;
- `selection_reason` — non-empty array.

### Required treatment record for integrated raster imagery

Every integrated `photography` or `illustration` asset with `medium: raster_image` whose `production_status` is not `reference_only` must record:

```json
{
  "treatment": {
    "strategy": "editorial_reframe",
    "implementation": "mixed",
    "operations": [
      "desktop and mobile focal crops",
      "image-specific tonal separation",
      "runtime edge fade"
    ],
    "source_file": "assets/source/hero-original.jpg",
    "truth_constraints": [
      "Do not remove or alter factual subjects"
    ]
  }
}
```

- `strategy` — a non-empty treatment name such as `clean_evidence`, `editorial_reframe`, or a project-specific recipe;
- `implementation` — `runtime`, `derived_asset`, or `mixed`;
- `operations` — a non-empty array of actual operations, including deliberate preservation operations for `clean_evidence`;
- `source_file` — required for `derived_asset` and `mixed`, and should point to the preserved source original;
- `truth_constraints` — required when factual photography uses cutout, collage, compositing, generative fill, diagrammatic overlay, or another transformation that could change meaning.

The integrated `file` should point to the delivered derivative when one exists. A treatment record is not proof by itself: the derivative or runtime implementation must exist in the UI.

For a design placeholder whose license was intentionally not reviewed, use:

```json
{
  "source": {
    "type": "web",
    "provider": "source-site",
    "url": "https://source.example/item"
  },
  "license": {
    "status": "unknown"
  },
  "production_status": "placeholder"
}
```

This records the design premise without implying commercial clearance. Before launch, replace the asset or update the entry after production-mode review.

## 3. Recommended fields

```json
{
  "source": {
    "type": "stock",
    "provider": "provider-name",
    "url": "https://source.example/item",
    "creator": "Creator Name",
    "retrieved_at": "2026-09-04"
  },
  "license": {
    "status": "permitted_commercial_use",
    "name": "Provider license",
    "url": "https://source.example/license",
    "attribution_required": false
  },
  "treatment": {
    "strategy": "editorial_reframe",
    "implementation": "derived_asset",
    "operations": ["crop", "tonal normalization", "web encode"],
    "source_file": "assets/source/commuting-context.jpg",
    "original_ratio": "3:2",
    "desktop_crop": "16:9",
    "mobile_crop": "4:5",
    "focal_point": "70% 40%",
    "converted_from": "jpg"
  },
  "responsive": {
    "desktop": "public/assets/name-1600.avif",
    "mobile": "public/assets/name-mobile.avif"
  },
  "generation": {
    "tool": "image-generator",
    "brief": "Original generation brief"
  },
  "visual_style": {
    "dimensionality": "layered_2d",
    "palette": "restrained",
    "geometry": "rounded",
    "material": "paper",
    "motion": "none"
  },
  "placement": {
    "section": "hero",
    "role": "primary_stage",
    "focal_point": "70% 40%",
    "text_safe_region": "left third"
  },
  "alternatives_considered": [
    {
      "semantic_type": "illustration",
      "medium": "vector_image",
      "outcome": "rejected",
      "reason": "Real-world context was more persuasive"
    }
  ],
  "notes": []
}
```

## 4. Controlled values

### Semantic types

```text
product_ui
product_object
person_identity
brand_asset
iconography
photography
illustration
video
motion_graphic
diagram
data_visualization
device_mockup
spatial_3d
decorative_texture
procedural_visual
typography
audio
```

### Media

```text
raster_image
vector_image
screenshot
video
motion_asset
code_rendered
procedural
3d
font
audio
```

### Source types

```text
existing_project
user_library
official
web
stock
ai_generation
code_generated
```

### Authenticity

```text
factual
representational
illustrative
decorative
```

### Production status

```text
production
placeholder
reference_only
```

### License status

```text
owned
official_permitted
permitted_commercial_use
public_domain
open_source
attribution_required
unknown
not_applicable
```

### Treatment implementation

```text
runtime
derived_asset
mixed
```

An asset with `unknown` license must not have `production_status: production`.

## 5. Validation

Run:

```bash
node scripts/validate-manifest.mjs asset-manifest.json --project-root .
```

The validator checks structural requirements, unique IDs, file existence, production licensing, and major authenticity violations.
