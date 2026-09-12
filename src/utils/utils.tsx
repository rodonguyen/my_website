import React, { useState } from 'react'

export const Hyperlink = ({
	href,
	className,
	title,
	children,
	onClick
}: {
	href: string
	className?: string
	title?: string
	children?: React.ReactNode
	onClick?: React.MouseEventHandler<HTMLAnchorElement>
}) => {
	return (
		<a className={className} target="_blank" rel="noopener noreferrer" href={href} title={title} onClick={onClick}>
			{children}
		</a>
	)
}

export const changeWindowTitle = (path: string) => {
	if (path === '/') {
		document.title = 'Rodo'
	} else if (path === '/apps') {
		document.title = 'Side Projects'
	} else if (path === '/list100') {
		document.title = 'List 100'
	} else if (path === '/apps/timeihaveleft') {
		document.title = 'Time I Have Left'
	} else if (path === '/visitors') {
		document.title = 'MapMyVisitors'
	} else {
		document.title = 'Rodo'
	}
}
