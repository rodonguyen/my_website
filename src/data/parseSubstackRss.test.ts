import { describe, expect, it } from 'vitest'
import { parseSubstackRss } from './parseSubstackRss'

const SAMPLE_FEED = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <item>
      <title><![CDATA[What happens if you try your BEST?]]></title>
      <description><![CDATA[my rather chaotic June. come, take a sit]]></description>
      <link>https://rodonguyen.substack.com/p/what-happens-if-you-try-your-best</link>
      <pubDate>Mon, 29 Jun 2026 14:16:35 GMT</pubDate>
      <enclosure url="https://substackcdn.com/image/cover.png" length="0" type="image/jpeg"/>
    </item>
    <item>
      <title>Second post</title>
      <description>Just a short note</description>
      <link>https://example.com/second</link>
      <pubDate>Sun, 17 Nov 2024 12:02:37 GMT</pubDate>
    </item>
  </channel>
</rss>`

describe('parseSubstackRss', () => {
	it('reads title, teaser, link, date, and cover from a Substack item', () => {
		const [latest] = parseSubstackRss(SAMPLE_FEED, 1)

		expect(latest).toEqual({
			title: 'What happens if you try your BEST?',
			url: 'https://rodonguyen.substack.com/p/what-happens-if-you-try-your-best',
			date: '2026-06-29',
			excerpt: 'my rather chaotic June. come, take a sit',
			coverImage: 'https://substackcdn.com/image/cover.png'
		})
	})

	it('omits coverImage when the item has no enclosure', () => {
		const posts = parseSubstackRss(SAMPLE_FEED, 2)

		expect(posts).toHaveLength(2)
		expect(posts[1].coverImage).toBe('')
		expect(posts[1].title).toBe('Second post')
	})
})
