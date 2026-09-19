import { useCallback, useEffect, useRef, type PointerEvent } from 'react'

let hoverQuery: MediaQueryList | undefined
let motionQuery: MediaQueryList | undefined

const canSpotlight = () => {
	hoverQuery ??= window.matchMedia('(hover: hover) and (pointer: fine)')
	motionQuery ??= window.matchMedia('(prefers-reduced-motion: reduce)')
	return hoverQuery.matches && !motionQuery.matches
}

export const usePointerSpotlight = () => {
	const frame = useRef(0)

	useEffect(
		() => () => {
			if (frame.current) cancelAnimationFrame(frame.current)
		},
		[]
	)

	const onPointerMove = useCallback((event: PointerEvent<HTMLElement>) => {
		if (!canSpotlight()) return

		const card = (event.target as HTMLElement | null)?.closest('.featured-card')
		if (!(card instanceof HTMLElement)) return

		const { clientX, clientY } = event
		if (frame.current) cancelAnimationFrame(frame.current)

		frame.current = requestAnimationFrame(() => {
			frame.current = 0
			const rect = card.getBoundingClientRect()
			card.style.setProperty('--spot-x', `${clientX - rect.left}px`)
			card.style.setProperty('--spot-y', `${clientY - rect.top}px`)
		})
	}, [])

	return { onPointerMove }
}
