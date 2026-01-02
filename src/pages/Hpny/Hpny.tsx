import { Navigate, useParams } from 'react-router-dom'
import { useEffect, useMemo } from 'react'
import HpnyCard from '../../components/HpnyCard/HpnyCard'
import { HPNY_CONTENT, isHpnyReceiver } from './hpnyContent'

const Hpny = () => {
	const { name } = useParams<{ name: string }>()

	const receiverKey = (name ?? '').toLowerCase()

	if (!isHpnyReceiver(receiverKey)) {
		return <Navigate to="/" replace />
	}

	const content = useMemo(() => HPNY_CONTENT[receiverKey], [receiverKey])

	useEffect(() => {
		document.title = `Happy New Year, ${content.receiverDisplayName}`
	}, [content.receiverDisplayName])

	return (
		<div className="fixed inset-0 z-50 bg-gradient-to-br from-slate-950 via-indigo-950 to-black text-white">
			<div className="h-full w-full flex items-center justify-center p-6">
				<div className="w-full max-w-4xl flex flex-col items-center gap-6">
					<HpnyCard content={content} />

					<p className="text-xs text-white/60 text-center max-w-md">just tap, tap, tap...</p>
				</div>
			</div>
		</div>
	)
}

export default Hpny
