import { useEffect, useRef, useState } from 'react'
import MapLoading from './MapLoading'

const MAP_SCRIPT_ID = 'mapmyvisitors'
const MAP_WIDGET_ID = 'mapmyvisitors-widget'
const MAP_WIDTH = 630
const MAP_SRC =
	`https://mapmyvisitors.com/map.js?cl=ffffff&w=${MAP_WIDTH}&t=tt&d=YJfmk2e1sVdI8BFKOiVS8BHhxCU8V8wXL9lbcL2DYTY&cmo=ff7777&co=006fbe`

const widgetReady = (host: HTMLElement) =>
	Boolean(document.getElementById(MAP_WIDGET_ID) || host.querySelector('iframe, canvas'))

const MapMyVisitors = () => {
	const hostRef = useRef<HTMLDivElement>(null)
	const [ready, setReady] = useState(false)

	useEffect(() => {
		const host = hostRef.current
		if (!host) return

		let cancelled = false
		const reveal = () => {
			if (!cancelled) setReady(true)
		}

		let script = document.getElementById(MAP_SCRIPT_ID) as HTMLScriptElement | null
		if (!script) {
			script = document.createElement('script')
			script.id = MAP_SCRIPT_ID
			script.src = MAP_SRC
			script.onerror = reveal
			host.appendChild(script)
		}

		const tick = window.setInterval(() => {
			if (widgetReady(host)) {
				window.clearInterval(tick)
				reveal()
			}
		}, 100)

		const timeout = window.setTimeout(() => {
			window.clearInterval(tick)
			reveal()
		}, 12000)

		return () => {
			cancelled = true
			window.clearInterval(tick)
			window.clearTimeout(timeout)
			document.getElementById(MAP_WIDGET_ID)?.remove()
			script?.remove()
		}
	}, [])

	return (
		<div className="visitors-map mx-auto" aria-busy={!ready}>
			<div ref={hostRef} className="visitors-map__host" />
			{!ready ? <MapLoading /> : null}
		</div>
	)
}

export default MapMyVisitors
