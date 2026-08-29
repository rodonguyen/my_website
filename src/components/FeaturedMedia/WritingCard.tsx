import { BsSubstack } from 'react-icons/bs'
import { Hyperlink } from '../../utils/utils'
import type { PostPreview } from '../../data/types'

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

const WritingCard = ({ post, label, cta, locale }: WritingCardProps) => {
	return (
		<Hyperlink href={post.url} className="featured-card featured-card--writing group">
			<p className="featured-card__label">
				<BsSubstack className="text-base" />
				{label}
			</p>
			{post.coverImage ? (
				<div className="featured-card__media">
					<img src={post.coverImage} alt="" className="featured-card__image" loading="lazy" />
				</div>
			) : null}
			<h3 className="featured-card__title">{post.title}</h3>
			{post.excerpt ? <p className="featured-card__excerpt">{post.excerpt}</p> : null}
			<div className="featured-card__meta">
				<time dateTime={post.date}>{formatPostDate(post.date, locale)}</time>
				<span className="featured-card__cta">{cta}</span>
			</div>
		</Hyperlink>
	)
}

export default WritingCard
