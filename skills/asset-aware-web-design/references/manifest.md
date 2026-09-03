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

Each production asset should include:

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

An asset with `unknown` license must not have `production_status: production`.

## 5. Validation

Run:

```bash
node scripts/validate-manifest.mjs asset-manifest.json --project-root .
```

The validator checks structural requirements, unique IDs, file existence, production licensing, and major authenticity violations.
