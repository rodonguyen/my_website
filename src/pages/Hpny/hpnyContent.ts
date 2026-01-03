export type HpnyReceiver = string

export type HpnyCardContent = {
	receiverId: HpnyReceiver
	receiverDisplayName: string
	coverTitle: string
	coverSubtitle?: string
	insideTitle?: string
	insideBody: string
	signature?: string
}
