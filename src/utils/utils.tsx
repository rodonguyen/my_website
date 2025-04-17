import React, { useState } from "react"

export const Hyperlink = ({ href, children }: { href: string; children: React.ReactNode }) => {
	return (
		<a className="text-blue-500" target="_blank" rel="noopener noreferrer" href={href}>
			{children}
		</a>
	)
}

export const changeWindowTitle = (path: string) => {
	if (path === "/") {
		document.title = "Rodo"
	} else if (path === "/apps") {
		document.title = "Rodo's Apps"
	} else if (path === "/list-100") {
		document.title = "List 100"
	} else if (path === "/contactme") {
		document.title = "Contact me"
	} else if (path === "/dateme") {
		document.title = "❤️❤️"
	} else {
		document.title = path
	}
}
