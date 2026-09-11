export type Vec2 = { x: number; y: number }

export type ConstructionLine = {
	ax: number
	ay: number
	bx: number
	by: number
	alpha: number
}

/** Deterministic 0–1 hash. Good enough for a studio field; no simplex. */
export function hashNoise(x: number, y: number): number {
	const n = Math.sin(x * 127.1 + y * 311.7) * 43758.5453123
	return n - Math.floor(n)
}

/**
 * Slow ink current: stacked sines + a little hashed wobble.
 * Time is in seconds; keep drift well below screensaver speed.
 */
export function fieldAngle(x: number, y: number, time: number): number {
	const s = 0.00185
	const t = time * 0.042
	const u = x * s
	const v = y * s
	const a = Math.sin(u * 1.31 + v * 0.47 + t)
	const b = Math.cos(u * 0.62 - v * 1.17 - t * 0.68)
	const c = Math.sin((u + v) * 0.84 + t * 0.33)
	const wobble = (hashNoise(u * 3.1, v * 2.7 + t) - 0.5) * 0.35
	return a * 0.92 + b * 0.52 + c * 0.38 + wobble
}

export function fieldVector(x: number, y: number, time: number, speed: number): Vec2 {
	const ang = fieldAngle(x, y, time)
	return { x: Math.cos(ang) * speed, y: Math.sin(ang) * speed }
}

/** Gentle swirl + slight attract near the cursor so empty gutters feel alive. */
export function cursorWarp(x: number, y: number, cursor: Vec2 | null, radius = 168, strength = 0.38): Vec2 {
	if (!cursor) return { x: 0, y: 0 }
	const dx = x - cursor.x
	const dy = y - cursor.y
	const d2 = dx * dx + dy * dy
	if (d2 > radius * radius || d2 < 1) return { x: 0, y: 0 }
	const d = Math.sqrt(d2)
	const falloff = (1 - d / radius) ** 2 * strength
	return {
		x: (-dy / d) * falloff * 16 - dx * falloff * 0.07,
		y: (dx / d) * falloff * 16 - dy * falloff * 0.07
	}
}

export function advectPoint(x: number, y: number, time: number, speed: number, cursor: Vec2 | null): Vec2 {
	const flow = fieldVector(x, y, time, speed)
	const warp = cursorWarp(x, y, cursor)
	return { x: x + flow.x + warp.x, y: y + flow.y + warp.y }
}

export function filamentCount(width: number): number {
	if (width < 640) return 34
	if (width < 1100) return 58
	return 76
}

/** Prefer the side margins around the 800px column so the bio stays quiet. */
export function gutterSpawnX(width: number, random = Math.random, column = 800): number {
	const gutter = Math.max(0, (width - column) / 2)
	if (gutter < 40) return random() * width
	const roll = random()
	if (roll < 0.4) return random() * gutter
	if (roll < 0.8) return width - random() * gutter
	return gutter + random() * Math.min(column, width)
}

export function layoutConstructionLines(width: number, height: number): ConstructionLine[] {
	const col = Math.min(800, width)
	const left = (width - col) / 2
	const right = left + col
	const tilt = (11 * Math.PI) / 180
	const lines: ConstructionLine[] = [
		{ ax: 20, ay: height * 0.18, bx: width - 20, by: height * 0.18, alpha: 0.055 },
		{
			ax: width * 0.04,
			ay: height * 0.06,
			bx: width * 0.04 + Math.cos(tilt) * width * 0.42,
			by: height * 0.06 + Math.sin(tilt) * height * 0.55,
			alpha: 0.042
		},
		{
			ax: width * 0.97,
			ay: height * 0.12,
			bx: width * 0.62,
			by: height * 0.88,
			alpha: 0.038
		}
	]
	if (width > 880) {
		lines.push(
			{ ax: left, ay: 28, bx: left, by: height - 28, alpha: 0.07 },
			{ ax: right, ay: 28, bx: right, by: height - 28, alpha: 0.07 }
		)
	}
	return lines
}
