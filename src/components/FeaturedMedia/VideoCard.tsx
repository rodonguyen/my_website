import { useState } from 'react'
import { FaYoutube } from 'react-icons/fa6'
import { Hyperlink } from '../../utils/utils'

const YOUTUBE_WATCH_HREF = 'https://www.youtube.com/watch?v=x8ZmhqwKTFY'
const YOUTUBE_ID = 'x8ZmhqwKTFY'
const YOUTUBE_THUMB = `https://i.ytimg.com/vi/${YOUTUBE_ID}/hqdefault.jpg`

type VideoCardProps = {
	label: string
	title: string
	intro1: string
	intro2: string
	playLabel: string
}

const VideoCard = ({ label, title, intro1, intro2, playLabel }: VideoCardProps) => {
	const [playing, setPlaying] = useState(false)

	return (
		<article className="featured-card featured-card--video">
			<p className="featured-card__label">
				<FaYoutube className="text-base" />
				{label}
			</p>
			<div className="featured-card__media">
				{playing ? (
					<iframe
						src={`https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1`}
						title={playLabel}
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
						className="h-full w-full"
					/>
				) : (
					<button
						type="button"
						onClick={() => setPlaying(true)}
						className="featured-card__play"
						aria-label={playLabel}
					>
						<img src={YOUTUBE_THUMB} alt="" className="featured-card__image" loading="lazy" />
						<span className="featured-card__play-icon" aria-hidden="true">
							<FaYoutube />
						</span>
					</button>
				)}
			</div>
			<h3 className="featured-card__title">{title}</h3>
			<div className="featured-card__body">
				<p>{intro1}</p>
				<p>{intro2}</p>
			</div>
			<Hyperlink href={YOUTUBE_WATCH_HREF} className="featured-card__cta mt-auto pt-1">
				{playLabel} →
			</Hyperlink>
		</article>
	)
}

export default VideoCard
