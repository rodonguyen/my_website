import { useEffect, useRef } from 'react'
import {
	advectPoint,
	filamentCount,
	gutterSpawnX,
	type Vec2
} from './flowField'

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
		speed: 0.28 + Math.random() * 0.18,
		maxLen: 120 + Math.floor(Math.random() * 55),
		life: 0,
		maxLife: 860 + Math.random() * 720,
		hold: grown > 0 ? 0 : 20 + Math.floor(Math.random() * 240),
		blue: Math.random() < 0.18,
		width: 0.75 + Math.random() * 1.25
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

function drawPolyline(ctx: CanvasRenderingContext2D, pts: Vec2[], color: string, width: number, alpha: number) {
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
	ctx.lineCap = 'round'
	ctx.lineJoin = 'round'
	ctx.stroke()
	ctx.globalAlpha = 1
}

function paintStaticWash(
	ctx: CanvasRenderingContext2D,
	width: number,
	height: number,
	ink: string,
	sky: string
) {
	ctx.clearRect(0, 0, width, height)
	const wash = ctx.createRadialGradient(width * 0.18, height * 0.08, 20, width * 0.3, height * 0.2, width * 0.7)
	wash.addColorStop(0, sky)
	wash.addColorStop(1, 'rgba(0,0,0,0)')
	ctx.globalAlpha = 0.22
	ctx.fillStyle = wash
	ctx.fillRect(0, 0, width, height)
	ctx.globalAlpha = 1

	const frozen = 7
	for (let i = 0; i < frozen; i += 1) {
		let x = gutterSpawnX(width, () => (i * 17 + 3) % 97 / 97)
		let y = ((i * 53 + 11) % 89 / 89) * height
		const pts: Vec2[] = [{ x, y }]
		for (let s = 0; s < 28; s += 1) {
			const next = advectPoint(x, y, 8 + i, 1.15, null)
			x = next.x
			y = next.y
			pts.push({ x, y })
		}
		drawPolyline(ctx, pts, ink, 1.15, 0.2)
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
		const sky = readCssColor('--sky-tint', '#d4e8f4')
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

			const skyWash = ctx.createRadialGradient(width * 0.12, 0, 10, width * 0.2, height * 0.15, width * 0.55)
			skyWash.addColorStop(0, sky)
			skyWash.addColorStop(1, 'rgba(0,0,0,0)')
			ctx.globalAlpha = 0.18
			ctx.fillStyle = skyWash
			ctx.fillRect(0, 0, width, height)
			ctx.globalAlpha = 1

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
						if (fil.pts.length > fil.maxLen) fil.pts.shift()
						fil.life += 1
						const off =
							next.x < -40 || next.x > width + 40 || next.y < -40 || next.y > height + 40 || fil.life > fil.maxLife
						if (off) recycle(fil)
					}
				}

				const tip = fil.pts[fil.pts.length - 1]
				const faded = fil.life / fil.maxLife
				const growIn = Math.min(1, Math.max(0, fil.pts.length - 1) / 48)
				const fadeOut = faded < 0.64 ? 1 : Math.max(0, 1 - (faded - 0.64) / 0.36)
				const inColumn = tip.x > colLeft + 24 && tip.x < colRight - 24
				const alpha = (inColumn ? 0.1 : 0.28) * fadeOut * (0.15 + 0.85 * growIn)
				const color = fil.blue ? 'rgba(70, 96, 118, 1)' : ink
				drawPolyline(ctx, fil.pts, color, fil.width, alpha)
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
				const grown = alreadyHere ? 36 + Math.floor(Math.random() * 70) : 0
				filaments.push(spawnFilament(width, height, time, grown))
			}
			if (reduced) paintStaticWash(ctx, width, height, ink, sky)
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

	return (
		<canvas
			ref={canvasRef}
			className="ink-flow-atmosphere"
			aria-hidden="true"
		/>
	)
}

export default InkFlowAtmosphere
