import { Hyperlink } from '../../utils/utils'
import type { PostPreview } from '../../data/types'

type PostCardProps = {
	post: PostPreview
}

const PostCard = ({ post }: PostCardProps) => {
	return (
		<Hyperlink
			href={post.url}
			className="block rounded-lg  bg-red-200/20 px-4 py-3 transition-all duration-100 hover:bg-red-200/30"
		>
			<div className="flex items-start justify-between gap-3">
				<h3 className="font-semibold text-base-content/90 leading-snug">{post.title}</h3>
				<time className="shrink-0 text-xs text-base-content/45">{post.date}</time>
			</div>
			{post.excerpt ? <p className="mt-2 text-sm text-base-content/65 leading-relaxed">{post.excerpt}</p> : null}
		</Hyperlink>
	)
}

export default PostCard
