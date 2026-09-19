import { FaInstagram, FaLinkedin, FaXTwitter } from 'react-icons/fa6'
import { Hyperlink } from '../../utils/utils'
import type { MediaPlatform, MediaPost } from '../../data/types'
import posthog from '../../posthog'
import FeaturedBadge from './FeaturedBadge'

type MediaPinProps = {
	post: MediaPost
	label: string
	cta: string
}

const platformIcons: Record<MediaPlatform, typeof FaLinkedin> = {
	linkedin: FaLinkedin,
	x: FaXTwitter,
	instagram: FaInstagram,
	photo: FaInstagram
}

const MediaPin = ({ post, label, cta }: MediaPinProps) => (
	<Hyperlink
		href={post.href}
		className="featured-card featured-card--pin"
		aria-label={`${label}: ${post.excerpt}`}
		onClick={() => posthog.capture('featured_media_opened', { media: post.analyticsId, platform: post.platform })}
	>
		<div className="featured-card__media">
			<img
				src={post.image}
				alt={post.imageAlt}
				className="featured-card__image"
				loading="lazy"
				style={post.objectPosition ? { objectPosition: post.objectPosition } : undefined}
			/>
			<FeaturedBadge icon={platformIcons[post.platform]} platform={post.platform}>
				{label}
			</FeaturedBadge>
		</div>
		<p className="featured-card__excerpt">{post.excerpt}</p>
		<div className="featured-card__meta featured-card__meta--end">
			<span className="featured-card__cta">{cta}</span>
		</div>
	</Hyperlink>
)

export default MediaPin
