/**
 * Generate an image via OpenAI Image API.
 * Usage (from repo root):
 *   node .cursor/skills/openai-image-generation/scripts/generate-image.mjs \
 *     --prompt "..." --output path/to/image.webp
 *
 * Reads OPENAI_API_KEY from repo root .env
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const repoRoot = resolve(__dirname, '../../../..')

function loadEnv() {
  const envPath = join(repoRoot, '.env')
  const raw = readFileSync(envPath, 'utf8')
  const vars = {}
  for (const line of raw.split('\n')) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#')) continue
    const eq = trimmed.indexOf('=')
    if (eq === -1) continue
    vars[trimmed.slice(0, eq).trim()] = trimmed.slice(eq + 1).trim()
  }
  return vars
}

function parseArgs(argv) {
  const opts = {
    model: 'gpt-image-2',
    prompt: null,
    promptFile: null,
    output: null,
    size: '1536x1024',
    quality: 'high',
    format: 'webp',
    stream: false,
    n: 1,
  }

  for (let i = 2; i < argv.length; i++) {
    const arg = argv[i]
    if (arg === '--stream') {
      opts.stream = true
      continue
    }
    const next = argv[i + 1]
    if (arg === '--model' && next) {
      opts.model = next
      i++
    } else if (arg === '--prompt' && next) {
      opts.prompt = next
      i++
    } else if (arg === '--prompt-file' && next) {
      opts.promptFile = next
      i++
    } else if (arg === '--output' && next) {
      opts.output = next
      i++
    } else if (arg === '--size' && next) {
      opts.size = next
      i++
    } else if (arg === '--quality' && next) {
      opts.quality = next
      i++
    } else if (arg === '--format' && next) {
      opts.format = next
      i++
    } else if (arg === '--n' && next) {
      opts.n = Number(next)
      i++
    }
  }

  return opts
}

async function generateImage(apiKey, opts, prompt) {
  const body = {
    model: opts.model,
    prompt,
    n: opts.n,
    size: opts.size,
    quality: opts.quality,
  }

  if (opts.stream) {
    body.stream = true
    body.partial_images = 2
  }

  const response = await fetch('https://api.openai.com/v1/images/generations', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })

  if (!response.ok) {
    const errorBody = await response.text()
    throw new Error(`OpenAI API error ${response.status}: ${errorBody}`)
  }

  if (opts.stream) {
    const reader = response.body.getReader()
    const decoder = new TextDecoder()
    let buffer = ''
    let finalB64 = null

    while (true) {
      const { done, value } = await reader.read()
      if (done) break
      buffer += decoder.decode(value, { stream: true })
      const lines = buffer.split('\n')
      buffer = lines.pop() ?? ''

      for (const line of lines) {
        if (!line.startsWith('data: ')) continue
        const payload = line.slice(6).trim()
        if (payload === '[DONE]') continue
        try {
          const event = JSON.parse(payload)
          if (event.type === 'image_generation.partial_image' && event.b64_json) {
            console.log(`Partial image ${event.partial_image_index ?? '?'} received`)
          }
          if (event.b64_json && event.type !== 'image_generation.partial_image') {
            finalB64 = event.b64_json
          }
          if (event.data?.[0]?.b64_json) {
            finalB64 = event.data[0].b64_json
          }
        } catch {
          // skip malformed SSE chunks
        }
      }
    }

    if (!finalB64) {
      throw new Error('Stream ended without final image data')
    }
    return Buffer.from(finalB64, 'base64')
  }

  const data = await response.json()
  const item = data.data?.[0]
  if (!item?.b64_json) {
    throw new Error('No image data returned from OpenAI')
  }
  return Buffer.from(item.b64_json, 'base64')
}

async function saveImage(buffer, outputPath, format) {
  mkdirSync(dirname(outputPath), { recursive: true })

  if (format === 'png') {
    writeFileSync(outputPath, buffer)
    return outputPath
  }

  try {
    const sharp = (await import('sharp')).default
    if (format === 'webp') {
      writeFileSync(outputPath, await sharp(buffer).webp({ quality: 88 }).toBuffer())
    } else if (format === 'jpeg') {
      writeFileSync(outputPath, await sharp(buffer).jpeg({ quality: 88 }).toBuffer())
    } else {
      throw new Error(`Unknown format: ${format}`)
    }
    return outputPath
  } catch (err) {
    const pngPath = outputPath.replace(/\.(webp|jpeg|jpg)$/, '.png')
    writeFileSync(pngPath, buffer)
    console.warn(`sharp unavailable (${err.message}) — saved ${pngPath}`)
    return pngPath
  }
}

async function main() {
  const opts = parseArgs(process.argv)

  if (!opts.output) {
    throw new Error('--output is required')
  }

  let prompt = opts.prompt
  if (opts.promptFile) {
    prompt = readFileSync(resolve(opts.promptFile), 'utf8').trim()
  }
  if (!prompt) {
    throw new Error('Provide --prompt or --prompt-file')
  }

  const { OPENAI_API_KEY } = loadEnv()
  if (!OPENAI_API_KEY) {
    throw new Error('OPENAI_API_KEY not found in repo root .env')
  }

  console.log(`Generating with ${opts.model} (${opts.size}, ${opts.quality})...`)
  const imageBuffer = await generateImage(OPENAI_API_KEY, opts, prompt)
  const savedPath = await saveImage(imageBuffer, resolve(opts.output), opts.format)
  console.log(`Saved ${savedPath}`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
