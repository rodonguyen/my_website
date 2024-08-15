import { FaMoon, FaSun } from "react-icons/fa"
import { useDarkMode } from "./utils"

const ThemeIcon = () => {
	const [darkThemeEnabled, changeTheme] = useDarkMode()
	const handleThemeButton = () => {
		changeTheme(!darkThemeEnabled)
	}

	return (
		<span onClick={handleThemeButton} className="theme-icon">
			{darkThemeEnabled ? <FaMoon size="24" /> : <FaSun size="24" />}
		</span>
	)
}

export default ThemeIcon
