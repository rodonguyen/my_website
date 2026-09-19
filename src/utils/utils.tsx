import { type AnchorHTMLAttributes } from 'react'

export const Hyperlink = ({
	target = '_blank',
	rel = 'noopener noreferrer',
	...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) => <a target={target} rel={rel} {...props} />

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
