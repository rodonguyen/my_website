type ThoughtBubbleProps = {
	text: string
}

const ThoughtBubble = ({ text }: ThoughtBubbleProps) => {
	return (
		<p className="thought-bubble">
			{text}
			<span className="thought-bubble__dot thought-bubble__dot--lg" aria-hidden="true" />
			<span className="thought-bubble__dot thought-bubble__dot--sm" aria-hidden="true" />
		</p>
	)
}

export default ThoughtBubble
