import { useTranslation } from 'react-i18next'
import { BsSubstack } from 'react-icons/bs'
import substackPosts from 'virtual:substack-posts'
import type { PostPreview } from '../../data/types'
import PostCard from './PostCard'

const LatestPosts = () => {
	const { t } = useTranslation()
	const writingPosts = substackPosts as PostPreview[]

	return (
		<div className="custom-card bg-red-100/20 hover:bg-red-100/30 w-full">
			<div className="card-body text-left text-base-content/80 md:text-md text-sm">
				<h2 className="card-title flex items-center gap-2">
					<BsSubstack className="text-lg" />
					{t('homeLatestPosts.writingTitle')}
				</h2>
				<div className="mt-3 space-y-3">
					{writingPosts.map((post) => (
						<PostCard key={post.url} post={post} />
					))}
				</div>
			</div>
		</div>
	)
}

export default LatestPosts
