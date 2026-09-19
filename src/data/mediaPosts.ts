import claudeBrisbaneMeetup from '../assets/media/claude-brisbane-meetup.jpg'
import ickg2026PaperAcceptance from '../assets/media/ickg-2026-paper-acceptance.jpg'
import type { MediaPost } from './types'

export const mediaPosts: MediaPost[] = [
	{
		id: 'claude-brisbane-meetup',
		platform: 'linkedin',
		href: 'https://www.linkedin.com/posts/rodonguyen_last-night-was-a-blast-brisbane-claude-ugcPost-7506163078246592515-_tOY/',
		image: claudeBrisbaneMeetup,
		imageAlt: 'Rodo standing beside the Claude Brisbane banner at the Claude Code meetup',
		excerpt:
			'Last night was a blast! Brisbane Claude Code meetup is packed with builders I can call “my people” — people who tap into latest tech, explore AI, and have fun along the way.',
		analyticsId: 'linkedin_claude_brisbane_meetup',
		objectPosition: 'center 18%'
	},
	{
		id: 'ickg-2026-paper-acceptance',
		platform: 'linkedin',
		href: 'https://www.linkedin.com/posts/rodonguyen_my-very-first-paper-has-just-been-accepted-share-7505112088290308098-9r76/',
		image: ickg2026PaperAcceptance,
		imageAlt: 'Email notifying that the paper Survey: Graph-Based Personalized Memory for LLM Agents was accepted at ICKG 2026',
		excerpt: "It's a bird! It's a plane! No, it's Nguyen et al.",
		analyticsId: 'linkedin_ickg_2026_paper_acceptance',
		objectPosition: 'center top'
	}
]
