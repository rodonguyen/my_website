import { useEffect, useRef } from 'react'
import { advectPoint, filamentCount, gutterSpawnX, type Vec2 } from './flowField'

type Filament = {
	pts: Vec2[]
	speed: number
	maxLen: number
	life: number
	maxLife: number
	hold: number
	blue: boolean
	width: number
}

const MAX_DPR = 1.75
const COLUMN = 800

function prefersReducedMotion() {
	return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function spawnFilament(width: number, height: number, time = 0, grown = 0): Filament {
	const fil: Filament = {
		pts: [{ x: gutterSpawnX(width), y: Math.random() * height }],
		speed: 0.4 + Math.random() * 0.26,
		maxLen: 120 + Math.floor(Math.random() * 80),
		life: 0,
		maxLife: 520 + Math.random() * 280,
		hold: grown > 0 ? 0 : 20 + Math.floor(Math.random() * 240),
		blue: Math.random() < 0.18,
		width: 0.45 + Math.random() * 0.75
	}

	let head = fil.pts[0]
	const steps = Math.min(grown, fil.maxLen - 1)
	for (let i = 0; i < steps; i += 1) {
		head = advectPoint(head.x, head.y, time, fil.speed, null)
		fil.pts.push(head)
	}

	return fil
}

function readCssColor(name: string, fallback: string) {
	const value = getComputedStyle(document.documentElement).getPropertyValue(name).trim()
	return value || fallback
}

function drawPolyline(
	ctx: CanvasRenderingContext2D,
	pts: Vec2[],
	color: string,
	width: number,
	alpha: number,
	cap: CanvasLineCap = 'round'
) {
	if (pts.length < 2) return
	ctx.beginPath()
	ctx.moveTo(pts[0].x, pts[0].y)
	for (let i = 1; i < pts.length; i += 1) {
		const prev = pts[i - 1]
		const cur = pts[i]
		const mx = (prev.x + cur.x) / 2
		const my = (prev.y + cur.y) / 2
		ctx.quadraticCurveTo(prev.x, prev.y, mx, my)
	}
	const last = pts[pts.length - 1]
	ctx.lineTo(last.x, last.y)
	ctx.strokeStyle = color
	ctx.globalAlpha = alpha
	ctx.lineWidth = width
	ctx.lineCap = cap
	ctx.lineJoin = 'round'
	ctx.stroke()
	ctx.globalAlpha = 1
}

/** Head stays inked; tail drops off on a steep curve so it does not crawl as a solid worm. */
function drawFadingStroke(ctx: CanvasRenderingContext2D, pts: Vec2[], color: string, width: number, alpha: number) {
	const n = pts.length
	if (n < 2) return
	const pieces = Math.min(7, n - 1)
	for (let s = 0; s < pieces; s += 1) {
		const i0 = Math.floor((s / pieces) * (n - 1))
		const i1 = Math.max(i0 + 1, Math.ceil(((s + 1) / pieces) * (n - 1)))
		const along = (s + 0.9) / pieces
		const fade = along ** 1.45
		if (fade * alpha < 0.012) continue
		const cap: CanvasLineCap = s === 0 || s === pieces - 1 ? 'round' : 'butt'
		drawPolyline(ctx, pts.slice(i0, i1 + 1), color, width * (0.5 + 0.5 * along), alpha * fade, cap)
	}
}

function paintStaticWash(ctx: CanvasRenderingContext2D, width: number, height: number, ink: string) {
	ctx.clearRect(0, 0, width, height)

	const frozen = 7
	for (let i = 0; i < frozen; i += 1) {
		let x = gutterSpawnX(width, () => ((i * 17 + 3) % 97) / 97)
		let y = (((i * 53 + 11) % 89) / 89) * height
		const pts: Vec2[] = [{ x, y }]
		for (let s = 0; s < 42; s += 1) {
			const next = advectPoint(x, y, 8 + i, 1.15, null)
			x = next.x
			y = next.y
			pts.push({ x, y })
		}
		drawFadingStroke(ctx, pts, ink, 0.7, 0.2)
	}
}

const InkFlowAtmosphere = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null)

	useEffect(() => {
		const canvas = canvasRef.current
		if (!canvas) return
		const ctx = canvas.getContext('2d', { alpha: true })
		if (!ctx) return

		let width = 0
		let height = 0
		let dpr = 1
		let raf = 0
		let running = true
		let time = 0
		let last = performance.now()
		let filaments: Filament[] = []
		let cursor: Vec2 | null = null
		const ink = readCssColor('--ink', '#3a342e')
		const reduced = prefersReducedMotion()

		const recycle = (fil: Filament) => {
			const next = spawnFilament(width, height, time, 0)
			fil.pts = next.pts
			fil.speed = next.speed
			fil.maxLen = next.maxLen
			fil.life = 0
			fil.maxLife = next.maxLife
			fil.hold = next.hold
			fil.blue = next.blue
			fil.width = next.width
		}

		const paint = (advance: boolean, now: number) => {
			let stepScale = 1
			if (advance) {
				const dt = Math.min(32, now - last)
				last = now
				time += dt / 1000
				stepScale = dt / 16.67
			}
			ctx.clearRect(0, 0, width, height)

			const colLeft = Math.max(0, (width - COLUMN) / 2)
			const colRight = colLeft + Math.min(COLUMN, width)

			for (const fil of filaments) {
				const head = fil.pts[fil.pts.length - 1]
				if (advance) {
					if (fil.hold > 0) {
						fil.hold -= 1
					} else {
						const next = advectPoint(head.x, head.y, time, fil.speed * stepScale, cursor)
						fil.pts.push(next)
						fil.life += 1
						const aged = fil.life / fil.maxLife
						let drop = Math.max(0, fil.pts.length - fil.maxLen)
						if (aged > 0.58) drop += 1
						if (aged > 0.74) drop += 1
						if (aged > 0.86) drop += 1
						if (drop > 0) fil.pts.splice(0, Math.min(drop, fil.pts.length - 1))
						const off =
							next.x < -40 ||
							next.x > width + 40 ||
							next.y < -40 ||
							next.y > height + 40 ||
							fil.life > fil.maxLife ||
							fil.pts.length < 2
						if (off) recycle(fil)
					}
				}

				const tip = fil.pts[fil.pts.length - 1]
				const faded = fil.life / fil.maxLife
				const growIn = Math.min(1, Math.max(0, fil.pts.length - 1) / Math.max(12, fil.maxLen * 0.4))
				const fadeOut = faded < 0.48 ? 1 : Math.max(0, 1 - (faded - 0.48) / 0.52)
				const inColumn = tip.x > colLeft + 24 && tip.x < colRight - 24
				const alpha = (inColumn ? 0.1 : 0.28) * fadeOut * (0.15 + 0.85 * growIn)
				const color = fil.blue ? 'rgba(70, 96, 118, 1)' : ink
				drawFadingStroke(ctx, fil.pts, color, fil.width, alpha)
			}
		}

		const frame = (now: number) => {
			if (!running) return
			paint(true, now)
			raf = requestAnimationFrame(frame)
		}

		const resize = () => {
			dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR)
			width = window.innerWidth
			height = window.innerHeight
			canvas.width = Math.floor(width * dpr)
			canvas.height = Math.floor(height * dpr)
			canvas.style.width = `${width}px`
			canvas.style.height = `${height}px`
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
			const target = filamentCount(width)
			if (filaments.length > target) filaments.length = target
			while (filaments.length < target) {
				const i = filaments.length
				const alreadyHere = i < Math.floor(target * 0.38)
				const grown = alreadyHere ? 56 + Math.floor(Math.random() * 90) : 0
				filaments.push(spawnFilament(width, height, time, grown))
			}
			if (reduced) paintStaticWash(ctx, width, height, ink)
			else paint(false, performance.now())
		}

		const onPointer = (event: PointerEvent) => {
			cursor = { x: event.clientX, y: event.clientY }
		}

		const onPointerLeave = () => {
			cursor = null
		}

		const onVisibility = () => {
			if (reduced) return
			if (document.hidden) {
				running = false
				cancelAnimationFrame(raf)
				return
			}
			if (!running) {
				running = true
				last = performance.now()
				raf = requestAnimationFrame(frame)
			}
		}

		resize()
		window.addEventListener('resize', resize)
		window.addEventListener('pointermove', onPointer, { passive: true })
		document.addEventListener('pointerleave', onPointerLeave)
		document.addEventListener('visibilitychange', onVisibility)

		if (!reduced) {
			running = true
			raf = requestAnimationFrame(frame)
		}

		return () => {
			running = false
			cancelAnimationFrame(raf)
			window.removeEventListener('resize', resize)
			window.removeEventListener('pointermove', onPointer)
			document.removeEventListener('pointerleave', onPointerLeave)
			document.removeEventListener('visibilitychange', onVisibility)
		}
	}, [])

	return <canvas ref={canvasRef} className="ink-flow-atmosphere" aria-hidden="true" />
}

export default InkFlowAtmosphere
