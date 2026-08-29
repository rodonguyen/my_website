import type { Plugin } from 'vite'
import { parseSubstackRss } from '../src/data/parseSubstackRss'
import type { PostPreview } from '../src/data/types'

const VIRTUAL_MODULE_ID = 'virtual:substack-posts'
const RESOLVED_VIRTUAL_MODULE_ID = '\0' + VIRTUAL_MODULE_ID
const FEED_URL = 'https://rodonguyen.substack.com/feed'

let cachedPosts: PostPreview[] = []

async function fetchLatestPosts(): Promise<PostPreview[]> {
	const response = await fetch(FEED_URL)
	if (!response.ok) {
		throw new Error(`HTTP ${response.status}`)
	}

	const xml = await response.text()
	const posts = parseSubstackRss(xml)

	if (posts.length === 0) {
		throw new Error('No posts found in feed')
	}

	console.log(`[substack-rss] Fetched ${posts.length} post(s)`)
	return posts
}

export function substackRssPlugin(): Plugin {
	return {
		name: 'substack-rss',
		async buildStart() {
			try {
				cachedPosts = await fetchLatestPosts()
			} catch (error) {
				console.warn('[substack-rss] Fetch failed, showing no posts:', error)
				cachedPosts = []
			}
		},
		resolveId(id) {
			if (id === VIRTUAL_MODULE_ID) {
				return RESOLVED_VIRTUAL_MODULE_ID
			}
		},
		load(id) {
			if (id === RESOLVED_VIRTUAL_MODULE_ID) {
				return `export default ${JSON.stringify(cachedPosts)}`
			}
		}
	}
}
