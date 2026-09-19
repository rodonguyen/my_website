import { FaYoutube } from 'react-icons/fa6'
import { Hyperlink } from '../../utils/utils'
import posthog from '../../posthog'
import FeaturedBadge from './FeaturedBadge'

const YOUTUBE_ID = 'x8ZmhqwKTFY'

type VideoCardProps = {
	label: string
	title: string
	intro: string
	cta: string
}

const VideoCard = ({ label, title, intro, cta }: VideoCardProps) => (
	<Hyperlink
		href={`https://www.youtube.com/watch?v=${YOUTUBE_ID}`}
		className="featured-card featured-card--video"
		onClick={() => posthog.capture('featured_video_opened')}
	>
		<div className="featured-card__media">
			<img
				src={`https://i.ytimg.com/vi/${YOUTUBE_ID}/maxresdefault.jpg`}
				alt=""
				className="featured-card__image"
				loading="lazy"
			/>
			<FeaturedBadge icon={FaYoutube} platform="youtube">
				{label}
			</FeaturedBadge>
		</div>
		<h3 className="featured-card__title">{title}</h3>
		<p className="featured-card__excerpt">{intro}</p>
		<div className="featured-card__meta featured-card__meta--end">
			<span className="featured-card__cta">{cta}</span>
		</div>
	</Hyperlink>
)

export default VideoCard
