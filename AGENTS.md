# Repository guidance

This repository contains one portable Agent Skill: `asset-aware-web-design`.

## Intent

Preserve the distinction between:

- **Asset Awareness**: finding opportunities for meaningful assets while designing.
- **Asset Intelligence**: choosing the semantic type and best rendering medium.
- **Asset Orchestration**: obtaining, processing, integrating, and documenting assets.

Do not reduce the skill to a list of asset categories, an image-search prompt, or a blanket ban on CSS/SVG/gradients.

## Editing rules

- Keep `skills/asset-aware-web-design/SKILL.md` under 500 lines.
- Put detailed policies in the directly linked `references/` files.
- Keep helper scripts dependency-free unless a dependency creates substantial value.
- Scripts must emit machine-readable JSON on stdout and status/error messages on stderr.
- Any new semantic asset type must define authenticity, source, production-safety, and preferred-medium rules.
- Any new source connector must distinguish reference use from production use.
- Never weaken prohibitions against fake product UI, fake testimonials, fake customer logos, or fabricated real data.

## Validation

Run:

```bash
npm test
```
