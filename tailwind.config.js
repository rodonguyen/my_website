/** @type {import('tailwindcss').Config} */

// https://www.realtimecolors.com/?colors=e8f3f3-030307-0670c1-329bec-294ef5&fonts=Poppins-Poppins
module.exports = {
	content: ["./src/**/*.{js,jsx}", "./public/index.html"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
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
				accent: "#294EF5",
			},
			textColor: {
				"custom-black": "#0F0F0F",
				"custom-white": "#F0F0F0"
			}
		}
	},
	plugins: []
}
