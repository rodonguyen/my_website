import { useEffect, useState } from "react"

export const Hyperlink = ({ href, children }) => {
	return (
		<a target="_blank" rel="noopener noreferrer" href={href}>
			{children}
		</a>
	)
}

export const useDarkMode = () => {
	// Utilise cache/local storage to store themeMode, keep it consistent throughout the session
	let darkThemeEnabledOnStorage = localStorage.getItem("darkThemeEnabled")
	darkThemeEnabledOnStorage = darkThemeEnabledOnStorage
		? JSON.parse(darkThemeEnabledOnStorage)
		: false
	const [darkThemeEnabled, changeTheme] = useState(darkThemeEnabledOnStorage)

	useEffect(() => {
		const root = document.documentElement // Get the <html> element
		if (darkThemeEnabled === true) {
			// document.body.classList.add(\"dark\") // Remove this line
			root.setAttribute("data-theme", "dark") // Use DaisyUI dark theme
			localStorage.setItem("darkThemeEnabled", "true")
		} else if (darkThemeEnabled === false) {
			// document.body.classList.remove(\"dark\") // Remove this line
			root.setAttribute("data-theme", "light") // Use DaisyUI light theme
			localStorage.setItem("darkThemeEnabled", "false")
		}
	}, [darkThemeEnabled])

	return [darkThemeEnabled, changeTheme]
}

export const changeWindowTitle = (path) => {
	if (path === "/") {
		document.title = "Rodo"
	} else if (path === "/resume") {
		document.title = "Resume"
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
