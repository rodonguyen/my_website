import React, { useState } from 'react'

export const Hyperlink = ({
	href,
	className,
	children
}: {
	href: string
	className?: string
	children: React.ReactNode
}) => {
	return (
		<a className={className} target="_blank" rel="noopener noreferrer" href={href}>
			{children}
		</a>
	)
}

export const changeWindowTitle = (path: string) => {
	if (path === '/') {
		document.title = 'Rodo'
	} else if (path === '/apps') {
		document.title = "Rodo's Apps"
	} else if (path === '/list-100') {
		document.title = 'List 100'
	} else if (path === '/apps/timeihaveleft') {
		document.title = 'Time I Have Left'
	} else {
		document.title = 'Rodo'
	}
}
