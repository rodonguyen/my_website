/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx}", "./public/index.html"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				primary: "#3358AF",
				secondary: "#137DCE",
				accent: "#274cf5",
				'primary-dark': '#5176cd',
				'secondary-light': '#329bec',
			},
			textColor: {
				"custom-black": "#0C1717",
				"custom-white": "#e8f3f3"
			},
			backgroundColor: {
				"custom-white": "#f9f9fd",
				"custom-black": "#030308"
			}
		}
	},
	plugins: []
}
