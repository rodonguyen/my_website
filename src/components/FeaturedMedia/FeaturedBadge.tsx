import type { ComponentType, ReactNode } from 'react'

export const brandIconClass = (platform: string) =>
	`featured-card__brand-icon featured-card__brand-icon--${platform}`

type FeaturedBadgeProps = {
	icon: ComponentType<{ className?: string; 'aria-hidden'?: boolean }>
	platform: string
	children: ReactNode
}

const FeaturedBadge = ({ icon: Icon, platform, children }: FeaturedBadgeProps) => (
	<span className="featured-card__badge">
		<Icon className={brandIconClass(platform)} aria-hidden />
		{children}
	</span>
)

export default FeaturedBadge
