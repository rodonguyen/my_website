import { useEffect, useRef } from 'react'

const MAP_SCRIPT_ID = 'mapmyvisitors'
const MAP_WIDGET_ID = 'mapmyvisitors-widget'
const MAP_SRC =
	'https://mapmyvisitors.com/map.js?cl=ffffff&w=a&t=tt&d=YJfmk2e1sVdI8BFKOiVS8BHhxCU8V8wXL9lbcL2DYTY&co=5aaee9&cmo=3acc3a&cmn=ffb85b&ct=ffffff'

const MapMyVisitors = () => {
	const hostRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const host = hostRef.current
		if (!host || document.getElementById(MAP_SCRIPT_ID)) {
			return
		}

		const script = document.createElement('script')
		script.id = MAP_SCRIPT_ID
		script.type = 'text/javascript'
		script.src = MAP_SRC
		host.appendChild(script)

		return () => {
			document.getElementById(MAP_WIDGET_ID)?.remove()
			script.remove()
		}
	}, [])

	return <div ref={hostRef} className="visitors-map mx-auto" />
}

export default MapMyVisitors
