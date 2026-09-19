import { useTranslation } from 'react-i18next'
import substackPosts from 'virtual:substack-posts'
import { mediaPosts } from '../../data/mediaPosts'
import type { PostPreview } from '../../data/types'
import { usePointerSpotlight } from '../../hooks/usePointerSpotlight'
import MasonryColumns from './MasonryColumns'
import MediaPin from './MediaPin'
import VideoCard from './VideoCard'
import WritingCard from './WritingCard'

const FeaturedMedia = () => {
	const { t, i18n } = useTranslation()
	const spotlight = usePointerSpotlight()
	const latestPost = (substackPosts as PostPreview[])[0]

	return (
		<section className="media-band" aria-label={t('homeFeatured.label')} {...spotlight}>
			<MasonryColumns className="media-band__grid">
				{mediaPosts.map((post) => (
					<MediaPin
						key={post.id}
						post={post}
						label={t(`homeMedia.${post.platform}`)}
						cta={t(`homeMedia.${post.platform}Cta`)}
					/>
				))}
				{latestPost ? (
					<WritingCard
						post={latestPost}
						label={t('homeMedia.substack')}
						cta={t('homeMedia.substackCta')}
						locale={i18n.language}
					/>
				) : (
					<div className="featured-card featured-card--writing">
						<p className="featured-card__label">{t('homeMedia.substack')}</p>
						<p className="featured-card__excerpt">{t('homeLatestPosts.empty')}</p>
					</div>
				)}
				<VideoCard
					label={t('homeMedia.youtube')}
					title={t('homePodcast.title')}
					intro={t('homePodcast.intro1')}
					cta={t('homeMedia.youtubeCta')}
				/>
			</MasonryColumns>
		</section>
	)
}

export default FeaturedMedia
