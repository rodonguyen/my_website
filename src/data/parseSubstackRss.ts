import type { PostPreview } from './types'

const DEFAULT_LIMIT = 4
const EXCERPT_LENGTH = 160

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

function extractEnclosure(block: string): string {
	const match = block.match(/<enclosure[^>]*\burl="([^"]+)"/i)
	return match?.[1] ?? ''
}

export function parseSubstackRss(xml: string, limit = DEFAULT_LIMIT): PostPreview[] {
	const items = xml.match(/<item>[\s\S]*?<\/item>/g) ?? []

	return items.slice(0, limit).map((item) => {
		const title = decodeHtml(extractTag(item, 'title'))
		const url = extractTag(item, 'link')
		const date = formatDate(extractTag(item, 'pubDate'))
		const excerpt = truncate(decodeHtml(extractTag(item, 'description')), EXCERPT_LENGTH)
		const coverImage = extractEnclosure(item)

		return { title, url, date, excerpt, coverImage }
	})
}
