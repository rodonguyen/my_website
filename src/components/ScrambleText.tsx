import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'

const CHARSET = '!<>-_\\/[]{}—=+*^?#________'

type ScrambleTextProps = {
	text: string
	className?: string
	duration?: number
	scrambleOnHover?: boolean
}

const randomChar = () => CHARSET[Math.floor(Math.random() * CHARSET.length)]
const displayChar = (char: string) => (char === ' ' ? '\u00A0' : char)

const scrambleString = (text: string, revealed: number) =>
	[...text]
		.map((char, i) => (char === ' ' || i < revealed ? char : randomChar()))
		.join('')

const ScrambleText = ({
	text,
	className,
	duration = 2000,
	scrambleOnHover = true,
}: ScrambleTextProps) => {
	const chars = [...text]
	const [displayText, setDisplayText] = useState(() => scrambleString(text, 0))
	const [charWidths, setCharWidths] = useState<number[]>([])
	const measureRef = useRef<HTMLSpanElement>(null)
	const frameRef = useRef<number>()
	const reducedMotion = useRef(
		typeof window !== 'undefined' &&
			window.matchMedia('(prefers-reduced-motion: reduce)').matches,
	)

	useLayoutEffect(() => {
		const container = measureRef.current
		if (!container) return

		setCharWidths(
			Array.from(container.children).map((child) => child.getBoundingClientRect().width),
		)
	}, [text])

	const scramble = useCallback(() => {
		if (reducedMotion.current) {
			setDisplayText(text)
			return
		}

		cancelAnimationFrame(frameRef.current ?? 0)
		const start = performance.now()

		const tick = (now: number) => {
			const progress = Math.min((now - start) / duration, 1)
			setDisplayText(scrambleString(text, Math.floor(progress * text.length)))
			if (progress < 1) frameRef.current = requestAnimationFrame(tick)
		}

		frameRef.current = requestAnimationFrame(tick)
	}, [duration, text])

	useEffect(() => {
		scramble()
		return () => cancelAnimationFrame(frameRef.current ?? 0)
	}, [scramble])

	const displayChars = [...displayText]
	const isMeasured = charWidths.length === chars.length

	return (
		<span
			className={['relative inline-block whitespace-nowrap', className].filter(Boolean).join(' ')}
			onMouseEnter={scrambleOnHover ? scramble : undefined}
			aria-label={text}
		>
			<span
				ref={measureRef}
				className="pointer-events-none invisible absolute left-0 top-0 whitespace-nowrap"
				aria-hidden="true"
			>
				{chars.map((char, i) => (
					<span key={i}>{displayChar(char)}</span>
				))}
			</span>

			<span className={isMeasured ? undefined : 'invisible'}>
				{chars.map((char, i) => (
					<span
						key={i}
						className="inline-block overflow-hidden text-center"
						style={{ width: charWidths[i] }}
					>
						{displayChar(displayChars[i] ?? char)}
					</span>
				))}
			</span>
		</span>
	)
}

export default ScrambleText
