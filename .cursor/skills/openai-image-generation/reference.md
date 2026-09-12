# OpenAI Image API — reference

Condensed from [OpenAI Image generation guide](https://developers.openai.com/api/docs/guides/image-generation) (July 2026).

## Endpoints

| Endpoint | Purpose |
|----------|---------|
| `POST /v1/images/generations` | Text → image |
| `POST /v1/images/edits` | Edit, inpaint, or reference-guided generation |
| `POST /v1/images/variations` | DALL·E 2 variations only |

## Generation parameters

| Parameter | GPT Image | DALL·E 3 | Notes |
|-----------|-----------|----------|-------|
| `model` | `gpt-image-2`, `gpt-image-1.5`, `gpt-image-1`, `gpt-image-1-mini` | `dall-e-3` | Default `dall-e-2` if unspecified |
| `prompt` | up to 32,000 chars | up to 4,000 chars | Be specific; include negatives |
| `n` | 1–10 | 1 only | |
| `size` | flexible (see constraints) | `1024x1024`, `1792x1024`, `1024x1792` | `auto` supported on GPT Image |
| `quality` | `low`, `medium`, `high`, `auto` | `standard`, `hd` | |
| `output_format` | `png`, `jpeg`, `webp` | — | GPT Image only |
| `output_compression` | 0–100 | — | jpeg/webp only |
| `background` | `opaque`, `transparent`, `auto` | — | `transparent` not on `gpt-image-2` |
| `moderation` | `auto`, `low` | — | |
| `stream` | `true`/`false` | — | Use with `partial_images` |
| `partial_images` | 0–3 | — | 0 = final only |

## gpt-image-2 size constraints

- Max edge: 3840px
- Both edges: multiples of 16
- Aspect ratio: long/short ≤ 3:1
- Total pixels: 655,360 – 8,294,400

Popular sizes: `1024x1024`, `1536x1024`, `1024x1536`, `2048x2048`, `2048x1152`, `3840x2160`.

## Response shape (generations)

```json
{
  "created": 1234567890,
  "data": [{ "b64_json": "<base64>" }],
  "usage": {
    "input_tokens": 0,
    "output_tokens": 0,
    "total_tokens": 0
  }
}
```

DALL·E may return `url` instead when `response_format: "url"` is set (expires).

## Edit parameters (additional)

| Parameter | Notes |
|-----------|-------|
| `image` | Single file or array (up to 16 for GPT Image) |
| `mask` | PNG with alpha; transparent = edit region |
| `input_fidelity` | `high`/`low` on gpt-image-1.x; omit on gpt-image-2 |

## SDK equivalents

```javascript
import OpenAI from 'openai'
const openai = new OpenAI()

// Generate
const result = await openai.images.generate({
  model: 'gpt-image-2',
  prompt: '…',
  size: '1536x1024',
  quality: 'high',
})

// Stream
const stream = await openai.images.generate({
  model: 'gpt-image-2',
  prompt: '…',
  stream: true,
  partial_images: 2,
})
for await (const event of stream) {
  if (event.type === 'image_generation.partial_image') {
    // event.b64_json, event.partial_image_index
  }
}

// Edit
const edited = await openai.images.edit({
  model: 'gpt-image-2',
  image: fs.createReadStream('source.png'),
  prompt: '…',
})
```

## Latency and limits

- Complex prompts: up to ~2 minutes
- Rate limits vary by tier (see model pages on platform.openai.com)
- Text in images: improved but still unreliable — avoid relying on rendered text

## When to use Responses API instead

- Multi-turn editing with natural language follow-ups
- Image generation inside a larger agent workflow
- File IDs for reference images via `openai.files.create({ purpose: 'vision' })`
