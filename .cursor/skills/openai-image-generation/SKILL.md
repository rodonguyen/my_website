---
name: openai-image-generation
description: >-
  Generate and edit images with the OpenAI Image API (gpt-image-2, gpt-image-1,
  DALL·E). Use when creating marketing assets, hero images, card art, regenerating
  landing visuals, or when the user mentions OpenAI image generation, DALL·E,
  gpt-image, or image gen scripts.
---

# OpenAI Image Generation

Generate production images via the [OpenAI Image API](https://developers.openai.com/api/docs/guides/image-generation).

## Prerequisites

1. **API key**: `OPENAI_API_KEY` in repo root `.env` (never commit).
2. **Org verification**: GPT Image models (`gpt-image-2`, `gpt-image-1.5`, `gpt-image-1`, `gpt-image-1-mini`) may require [API organisation verification](https://platform.openai.com/settings/organization/general).
3. **Dependencies**: `sharp` (optional, for WebP conversion) — already used in `client-app`.

## Choose an approach

| Goal | Approach |
|------|----------|
| Single image from a prompt | Image API `POST /v1/images/generations` |
| Edit / mask / reference images | Image API `POST /v1/images/edits` |
| Multi-turn conversational refinement | Responses API with `tools: [{ type: "image_generation" }]` |
| LPH marketing hero / card art | Reuse patterns in `client-app/scripts/` (see below) |

**Default for this repo**: Image API with `fetch` (no SDK required). Prefer `gpt-image-2` for new work; existing scripts use `gpt-image-1`.

## Quick generate (Node, no SDK)

```javascript
const response = await fetch('https://api.openai.com/v1/images/generations', {
  method: 'POST',
  headers: {
    Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    model: 'gpt-image-2',
    prompt: 'Your prompt here',
    n: 1,
    size: '1536x1024',
    quality: 'high',
  }),
})

if (!response.ok) {
  throw new Error(`OpenAI ${response.status}: ${await response.text()}`)
}

const { data } = await response.json()
const pngBuffer = Buffer.from(data[0].b64_json, 'base64')
```

GPT Image models return **base64 in `b64_json`** by default — do not set `response_format` (DALL·E only).

## CLI script (this skill)

From repo root:

```bash
node .cursor/skills/openai-image-generation/scripts/generate-image.mjs \
  --prompt "Abstract navy and gold editorial photograph" \
  --output client-app/src/assets/generated/my-image.webp \
  --size 1536x1024 \
  --quality high
```

Options: `--model`, `--prompt-file`, `--format png|webp|jpeg`, `--stream`. Reads `OPENAI_API_KEY` from repo root `.env`.

## Model selection

| Model | When to use |
|-------|-------------|
| `gpt-image-2` | **Default for new assets** — flexible sizes, streaming, edits |
| `gpt-image-1.5` | Stable alternative if `gpt-image-2` unavailable |
| `gpt-image-1` | Current LPH scripts (`generate-about-card-images.mjs`, etc.) |
| `gpt-image-1-mini` | Cheaper drafts |
| `dall-e-3` | Legacy; fixed sizes only (`1024x1024`, `1792x1024`, `1024x1792`) |

## Size and quality (`gpt-image-2`)

- **Sizes**: Any resolution where both edges are multiples of 16, max edge ≤ 3840px, aspect ratio ≤ 3:1, total pixels 655,360–8,294,400. Common: `1024x1024`, `1536x1024`, `1024x1536`, `2048x2048`.
- **Quality**: `low` (fast drafts), `medium`, `high` (final assets), or `auto`.
- **Output format**: `output_format`: `png` (default), `jpeg`, `webp`; optional `output_compression` (0–100) for jpeg/webp.
- **No transparent background** on `gpt-image-2`.

## LPH repo conventions

### Existing scripts (copy patterns from these)

- `client-app/scripts/generate-about-card-images.mjs` — batch card images with shared brand style
- `client-app/scripts/generate-landing-market-outlook-image.mjs` — single hero image

Both load env from **repo root** `.env`, call `/v1/images/generations`, decode `b64_json`, convert to WebP with `sharp` at quality 88.

### Output location

Save generated assets to `src/assets/generated/` as `.webp` (fallback `.png` if `sharp` missing).

### Brand prompt template (abstract marketing)

Use for wealth/finance marketing when no people are needed:

```
Editorial fine-art abstract photograph. Deep navy palette (#001737 to #002a54) with restrained warm gold (#ffc638) accents.
Matte film grain, natural imperfections, soft vignette. Shallow depth of field, asymmetric composition.
No text, no logos, no people, no faces, no hands, no currency, no stock charts, no bull/bear icons,
no glossy CGI sheen, no oversaturated neon, no symmetrical AI perfection.
Feels human-crafted — understated luxury annual report cover art.

Subject: [specific metaphor for the section]
```

For **people or cultural representation**, read `.cursor/rules/inclusive-visuals-specialist.mdc` first and apply its constraints.

## Prompt workflow

1. Define subject, composition, palette, and mood.
2. Add explicit **negative constraints** (no text, no logos, no clichéd finance imagery).
3. For LPH marketing: prefer abstract metaphors over literal charts/people.
4. Generate at `quality: low` or `medium` for iteration; `high` for final.
5. Save WebP; verify in UI at target viewport (1440px desktop per design review rules).

## Streaming (optional)

For long-running high-res jobs, set `stream: true` and `partial_images: 1–3` to avoid timeouts. Handle `image_generation.partial_image` events, then the final image in `data[0].b64_json`.

## Edits and references

`POST /v1/images/edits` with `gpt-image-2`:

- Up to 16 reference images (png/webp/jpg, &lt; 50MB each).
- Mask: PNG with alpha channel, same dimensions as source.
- `input_fidelity`: omit for `gpt-image-2` (always high).

## Error handling

| Situation | Action |
|-----------|--------|
| `429`, `5xx` | Retry with backoff |
| `image_generation_user_error` | Fix prompt/inputs; do not blind-retry |
| `moderation_blocked` | Revise prompt; check `error.moderation_details.categories` |
| Missing `b64_json` | Log full response body; verify model and params |

## Responses API (multi-turn)

Use when the user wants iterative refinement in conversation:

```javascript
const response = await openai.responses.create({
  model: 'gpt-5.6',
  input: 'Generate an image of …',
  tools: [{ type: 'image_generation' }],
})
// Extract: output.filter(o => o.type === 'image_generation_call').map(o => o.result)
```

Follow-up with `previous_response_id` or pass prior `image_generation_call` id in `input`.

## Security

- Never commit `.env` or log the API key.
- Do not embed secrets in scripts committed to git.

## Further reference

- API guide: https://developers.openai.com/api/docs/guides/image-generation
- API reference: https://developers.openai.com/api/reference/resources/images/methods/generate/
- Detailed parameters: [reference.md](reference.md)
