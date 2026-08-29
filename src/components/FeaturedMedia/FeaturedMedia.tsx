import { useTranslation } from 'react-i18next'
import substackPosts from 'virtual:substack-posts'
import type { PostPreview } from '../../data/types'
import VideoCard from './VideoCard'
import WritingCard from './WritingCard'

const FeaturedMedia = () => {
	const { t, i18n } = useTranslation()
	const latestPost = (substackPosts as PostPreview[])[0]

	return (
		<section className="featured-media" aria-label={t('homeFeatured.label')}>
			<div className="featured-media__grid">
				{latestPost ? (
					<WritingCard
						post={latestPost}
						label={t('homeLatestPosts.writingTitle')}
						cta={t('homeLatestPosts.readCta')}
						locale={i18n.language}
					/>
				) : (
					<div className="featured-card featured-card--writing">
						<p className="featured-card__label">{t('homeLatestPosts.writingTitle')}</p>
						<p className="featured-card__excerpt">{t('homeLatestPosts.empty')}</p>
					</div>
				)}
				<VideoCard
					label={t('homePodcast.watchLabel')}
					title={t('homePodcast.title')}
					intro1={t('homePodcast.intro1')}
					intro2={t('homePodcast.intro2')}
					playLabel={t('homePodcast.playLabel')}
				/>
			</div>
		</section>
	)
}

export default FeaturedMedia
