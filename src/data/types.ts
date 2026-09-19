export type PostPreview = {
	title: string
	url: string
	date: string
	excerpt: string
	coverImage: string
}

export type MediaPlatform = 'linkedin' | 'x' | 'instagram' | 'photo'

export type MediaPost = {
	id: string
	platform: MediaPlatform
	href: string
	image: string
	imageAlt: string
	excerpt: string
	analyticsId: string
	objectPosition?: string
}
