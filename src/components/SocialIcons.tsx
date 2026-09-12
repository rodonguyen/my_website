import React from 'react'
import { FaLinkedin, FaInstagram, FaEnvelope, FaYoutube, FaXTwitter, FaGithub } from 'react-icons/fa6'
import { BsSubstack } from 'react-icons/bs'
import posthog from '../posthog'

export const INSTAGRAM_HREF = 'https://instagram.com/rodo.rodeo'
export const YOUTUBE_HREF = 'https://youtube.com/@rodo.podcast'
export const X_HREF = 'https://x.com/rodonguyen'
export const SUBSTACK_HREF = 'https://rodonguyen.substack.com/'
export const GITHUB_HREF = 'https://github.com/rodonguyen/'
export const LINKEDIN_HREF = 'https://www.linkedin.com/in/rodonguyen/'
export const EMAIL_HREF = 'mailto:rodonguyendd@gmail.com'
export const EMAIL_ADDRESS = 'rodonguyendd@gmail.com'

export type SocialLink = {
	href: string
	label: string
	Icon: React.ComponentType<{ 'aria-hidden'?: boolean }>
	external?: boolean
}

export const socialLinks: SocialLink[] = [
	{ href: X_HREF, label: 'X', Icon: FaXTwitter },
	{ href: SUBSTACK_HREF, label: 'Substack', Icon: BsSubstack },
	{ href: INSTAGRAM_HREF, label: 'Instagram', Icon: FaInstagram },
	{ href: GITHUB_HREF, label: 'GitHub', Icon: FaGithub },
	{ href: LINKEDIN_HREF, label: 'LinkedIn', Icon: FaLinkedin },
	{ href: YOUTUBE_HREF, label: 'YouTube', Icon: FaYoutube },
	{ href: EMAIL_HREF, label: 'Email', Icon: FaEnvelope, external: false }
]

const defaultIconClass =
	'text-2xl hover:text-rose-500 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current'

const SocialIcons: React.FC<{ className?: string }> = ({ className }) => {
	const socialIconClass = className ?? defaultIconClass
	return (
		<>
			{socialLinks.map(({ href, label, Icon, external = true }) => (
				<a
					key={label}
					href={href}
					aria-label={label}
					className={socialIconClass}
					onClick={() => posthog.capture('social_link_opened', { platform: label.toLowerCase() })}
					{...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
				>
					<Icon aria-hidden />
				</a>
			))}
			{/* TikTok paused
			<a href="https://www.tiktok.com/@rodo.podcast" target="_blank" rel="noopener noreferrer" className={socialIconClass}>
				<FaTiktok />
			</a>
			*/}
			{/* Threads paused
			<a href="https://threads.net/rodo.nguyen" target="_blank" rel="noopener noreferrer" className={socialIconClass}>
				<FaThreads />
			</a>
			*/}
		</>
	)
}

export default SocialIcons
