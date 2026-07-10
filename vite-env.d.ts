/// <reference types="vite/client" />

declare module 'virtual:substack-posts' {
	import type { PostPreview } from './src/data/types'
	const posts: PostPreview[]
	export default posts
}
