import type { Plugin } from 'vite'
import type { PostPreview } from '../src/data/types'

const VIRTUAL_MODULE_ID = 'virtual:substack-posts'
const RESOLVED_VIRTUAL_MODULE_ID = '\0' + VIRTUAL_MODULE_ID
const FEED_URL = 'https://rodonguyen.substack.com/feed'
const MAX_POSTS = 4
const EXCERPT_LENGTH = 160

let cachedPosts: PostPreview[] = []

function extractTag(block: string, tag: string): string {
	const cdataMatch = block.match(new RegExp(`<${tag}><!\\[CDATA\\[([\\s\\S]*?)\\]\\]></${tag}>`))
	if (cdataMatch) return cdataMatch[1].trim()

	const plainMatch = block.match(new RegExp(`<${tag}>([\\s\\S]*?)</${tag}>`))
	return plainMatch ? plainMatch[1].trim() : ''
}

function decodeHtml(text: string): string {
	return text
		.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
		.replace(/<[^>]+>/g, '')
		.replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
		.replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCharCode(parseInt(code, 16)))
		.replace(/&amp;/g, '&')
		.replace(/&lt;/g, '<')
		.replace(/&gt;/g, '>')
		.replace(/&quot;/g, '"')
		.replace(/&#8217;/g, "'")
		.replace(/&#8211;/g, '–')
		.replace(/&#8212;/g, '—')
		.replace(/\s+/g, ' ')
		.trim()
}

function formatDate(pubDate: string): string {
	const parsed = new Date(pubDate)
	if (Number.isNaN(parsed.getTime())) return pubDate
	return parsed.toISOString().slice(0, 10)
}

function truncate(text: string, maxLength: number): string {
	if (text.length <= maxLength) return text
	return `${text.slice(0, maxLength - 1).trimEnd()}…`
}

export function parseSubstackRss(xml: string, limit = MAX_POSTS): PostPreview[] {
	const items = xml.match(/<item>[\s\S]*?<\/item>/g) ?? []

	return items.slice(0, limit).map((item) => {
		const title = decodeHtml(extractTag(item, 'title'))
		const url = extractTag(item, 'link')
		const date = formatDate(extractTag(item, 'pubDate'))
		const excerpt = truncate(decodeHtml(extractTag(item, 'description')), EXCERPT_LENGTH)

		return { title, url, date, excerpt }
	})
}

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
