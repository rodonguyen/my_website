export type HpnyReceiver = '4hm4d' | 'ba44y' | 'opusmaximus'

export type HpnyCardContent = {
	receiverId: HpnyReceiver
	receiverDisplayName: string
	coverTitle: string
	coverSubtitle?: string
	insideLeftTitle: string
	insideLeftBody: string
	insideRightTitle?: string
	insideRightBody: string
	signature?: string
}

export const HPNY_CONTENT: Record<HpnyReceiver, HpnyCardContent> = {
	'4hm4d': {
		receiverId: '4hm4d',
		receiverDisplayName: 'Ahmad',
		coverTitle: 'Happy New Year!',
		coverSubtitle: 'A small card just for you',
		insideLeftTitle: 'Dear 4hm4d,',
		insideLeftBody:
			'TODO: Write your personal message here.\n\nWishing you a year full of health, wins, and good surprises.',
		insideRightTitle: '2026',
		insideRightBody:
			'TODO: Add a memorable line, a joke, or a shared reference.\n\nMay your goals feel lighter and your days feel brighter.',
		signature: '— Rodo'
	},
	ba44y: {
		receiverId: 'ba44y',
		receiverDisplayName: 'ba44y',
		coverTitle: 'Happy New Year!',
		coverSubtitle: 'Open me',
		insideLeftTitle: 'Dear ba44y,',
		insideLeftBody:
			'TODO: Write your personal message here.\n\nThanks for being part of my year — let’s make the next one even better.',
		insideRightTitle: 'Cheers',
		insideRightBody:
			'TODO: Add a short wish that fits your friendship.\n\nMore laughter, more growth, and more good moments.',
		signature: '— Rodo'
	},
	opusmaximus: {
		receiverId: 'opusmaximus',
		receiverDisplayName: 'opusmaximus',
		coverTitle: 'Happy New Year!',
		coverSubtitle: 'From me to you',
		insideLeftTitle: 'Dear opusmaximus,',
		insideLeftBody:
			'TODO: Write your personal message here.\n\nWishing you momentum, clarity, and a year that feels like a big step forward.',
		insideRightTitle: 'Let’s go',
		insideRightBody:
			'TODO: Add something specific you appreciate about them.\n\nMay 2026 bring you bold ideas and calm execution.',
		signature: '— Rodo'
	}
}

export const isHpnyReceiver = (value: string): value is HpnyReceiver => {
	return Object.prototype.hasOwnProperty.call(HPNY_CONTENT, value)
}
