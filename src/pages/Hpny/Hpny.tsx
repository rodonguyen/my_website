import { Navigate, useParams } from 'react-router-dom'
import { useEffect, useMemo, useState } from 'react'
import HpnyCard from '../../components/HpnyCard/HpnyCard'
import HpnyCardMobile from '../../components/HpnyCard/HpnyCardMobile'
import type { HpnyCardContent } from './hpnyContent'

// Encoded HPNY_CONTENT (base64)
const ENCODED_CONTENT =
	''

// Decode and parse the content
const decodeContent = (): Record<string, HpnyCardContent> => {
	try {
		const base64Decoded = atob(ENCODED_CONTENT)
		// Convert binary string to Uint8Array for proper UTF-8 decoding
		const bytes = new Uint8Array(base64Decoded.length)
		for (let i = 0; i < base64Decoded.length; i++) {
			bytes[i] = base64Decoded.charCodeAt(i)
		}
		// Decode UTF-8 properly to handle emojis
		const decoded = new TextDecoder('utf-8').decode(bytes)
		// Validate the decoded string doesn't contain unescaped control characters
		const parsed = JSON.parse(decoded) as Record<string, HpnyCardContent>
		return parsed
	} catch (error) {
		console.error('Failed to decode HPNY_CONTENT:', error)
		if (error instanceof SyntaxError) {
			console.error('This is likely due to unescaped control characters in the JSON.')
			console.error('Please regenerate the encoded content using: node encode-content.cjs')
		}
		return {}
	}
}

const HPNY_CONTENT = decodeContent()

const isHpnyReceiver = (value: string): value is string => {
	return Object.prototype.hasOwnProperty.call(HPNY_CONTENT, value)
}

const Hpny = () => {
	const { name } = useParams<{ name: string }>()
	const [isMobile, setIsMobile] = useState<boolean>(false)

	const receiverKey = name ?? ''

	if (!isHpnyReceiver(receiverKey)) {
		return <Navigate to="/" replace />
	}

	const content = useMemo(() => HPNY_CONTENT[receiverKey], [receiverKey])

	useEffect(() => {
		document.title = `Happy New Year, ${content.receiverDisplayName}`
	}, [content.receiverDisplayName])

	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth < 640)
		}

		checkMobile()
		window.addEventListener('resize', checkMobile)
		return () => window.removeEventListener('resize', checkMobile)
	}, [])

	return (
		<div className="fixed inset-0 z-50 bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white">
			<div className="h-full w-full flex items-center justify-center p-6">
				<div className="w-full max-w-4xl flex flex-col items-center gap-6">
					{isMobile ? <HpnyCardMobile content={content} /> : <HpnyCard content={content} />}

					<p className="text-xs text-white/60 text-center max-w-md">just tap, tap, tap...</p>
				</div>
			</div>
		</div>
	)
}

export default Hpny
