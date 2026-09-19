import { Children, type ReactNode } from 'react'

type MasonryColumnsProps = {
	children: ReactNode
	className?: string
}

const MasonryColumns = ({ children, className }: MasonryColumnsProps) => {
	const items = Children.toArray(children).map((child, index) => (
		<div key={index} className="media-band__item" style={{ order: index }}>
			{child}
		</div>
	))

	return (
		<div className={className}>
			<div className="media-band__col">{items.filter((_, index) => index % 2 === 0)}</div>
			<div className="media-band__col">{items.filter((_, index) => index % 2 === 1)}</div>
		</div>
	)
}

export default MasonryColumns
