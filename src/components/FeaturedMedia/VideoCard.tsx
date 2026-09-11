import { FaYoutube } from 'react-icons/fa6'
import { Hyperlink } from '../../utils/utils'

const YOUTUBE_ID = 'x8ZmhqwKTFY'

type VideoCardProps = {
	label: string
	title: string
	intro: string
	playLabel: string
}

const VideoCard = ({ label, title, intro, playLabel }: VideoCardProps) => {
	return (
		<Hyperlink
			href={`https://www.youtube.com/watch?v=${YOUTUBE_ID}`}
			className="featured-card featured-card--video"
		>
			<p className="featured-card__label">
				<FaYoutube className="featured-card__brand-icon featured-card__brand-icon--youtube" />
				{label}
			</p>
			<div className="featured-card__media">
				<img
					src={`https://i.ytimg.com/vi/${YOUTUBE_ID}/hqdefault.jpg`}
					alt=""
					className="featured-card__image"
					loading="lazy"
				/>
			</div>
			<h3 className="featured-card__title">{title}</h3>
			<p className="featured-card__excerpt">{intro}</p>
			<div className="featured-card__meta justify-end">
				<span className="featured-card__cta">{playLabel} →</span>
			</div>
		</Hyperlink>
	)
}

export default VideoCard
