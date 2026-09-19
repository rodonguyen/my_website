import { BsSubstack } from 'react-icons/bs'
import { Hyperlink } from '../../utils/utils'
import type { PostPreview } from '../../data/types'
import posthog from '../../posthog'
import FeaturedBadge, { brandIconClass } from './FeaturedBadge'

type WritingCardProps = {
	post: PostPreview
	label: string
	cta: string
	locale: string
}

const formatPostDate = (isoDate: string, locale: string) => {
	const parsed = new Date(`${isoDate}T00:00:00`)
	if (Number.isNaN(parsed.getTime())) return isoDate
	return parsed.toLocaleDateString(locale, { month: 'short', day: 'numeric' })
}

const WritingCard = ({ post, label, cta, locale }: WritingCardProps) => (
	<Hyperlink
		href={post.url}
		className="featured-card featured-card--writing"
		onClick={() => posthog.capture('featured_writing_opened')}
	>
		{post.coverImage ? (
			<div className="featured-card__media">
				<img src={post.coverImage} alt="" className="featured-card__image" loading="lazy" />
				<FeaturedBadge icon={BsSubstack} platform="substack">
					{label}
				</FeaturedBadge>
			</div>
		) : (
			<p className="featured-card__label">
				<BsSubstack className={brandIconClass('substack')} aria-hidden />
				{label}
			</p>
		)}
		<h3 className="featured-card__title">{post.title}</h3>
		{post.excerpt ? <p className="featured-card__excerpt">{post.excerpt}</p> : null}
		<div className="featured-card__meta pt-4">
			<time dateTime={post.date}>{formatPostDate(post.date, locale)}</time>
			<span className="featured-card__cta">{cta}</span>
		</div>
	</Hyperlink>
)

export default WritingCard
