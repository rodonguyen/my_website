import { advectPoint, cursorWarp, fieldAngle, filamentCount, gutterSpawnX } from './flowField'

describe('flowField', () => {
	it('keeps field angles finite and slowly changing', () => {
		const a = fieldAngle(120, 80, 0)
		const b = fieldAngle(120, 80, 0.5)
		expect(Number.isFinite(a)).toBe(true)
		expect(Math.abs(a - b)).toBeLessThan(0.4)
		expect(Math.abs(a)).toBeLessThan(4)
	})

	it('advects a point along the field without teleporting', () => {
		const start = { x: 200, y: 140 }
		const next = advectPoint(start.x, start.y, 1, 0.2, null)
		const dist = Math.hypot(next.x - start.x, next.y - start.y)
		expect(dist).toBeGreaterThan(0.05)
		expect(dist).toBeLessThan(0.35)
	})

	it('warps only near the cursor', () => {
		const near = cursorWarp(10, 10, { x: 12, y: 12 })
		const far = cursorWarp(800, 600, { x: 12, y: 12 })
		expect(Math.hypot(near.x, near.y)).toBeGreaterThan(0.05)
		expect(far).toEqual({ x: 0, y: 0 })
	})

	it('biases spawn positions into gutters on wide viewports', () => {
		const seq = [0.2, 0.1, 0.7, 0.2, 0.9, 0.5]
		let i = 0
		const random = () => seq[i++ % seq.length]
		const samples = Array.from({ length: 6 }, () => gutterSpawnX(1400, random, 800))
		const gutterHits = samples.filter((x) => x < 300 || x > 1100).length
		expect(gutterHits).toBeGreaterThanOrEqual(4)
	})

	it('scales filament count on larger viewports', () => {
		expect(filamentCount(390)).toBeLessThan(filamentCount(1280))
		expect(filamentCount(1440)).toBeLessThanOrEqual(90)
	})
})
