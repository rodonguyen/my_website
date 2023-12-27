/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx}", "./public/index.html"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				primary: "#3fa8f9",
				primary: {
					DEFAULT: "#3fa8f9",
					dark: "#0670C1",
					10: "#3FA8F91A",
					90: "#3FA8F9E6"
				},
				secondary: {
					DEFAULT: "#137DCE",
					dark: "#329bec"
				},
				accent: "#274cf5",
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
