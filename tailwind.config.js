/** @type {import('tailwindcss').Config} */

// https://www.realtimecolors.com/?colors=e8f3f3-030307-0670c1-329bec-294ef5&fonts=Poppins-Poppins
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			screens: {
				'2xs': '390px'
			}
		}
	},
	plugins: [require('daisyui')],
	// Add daisyUI configuration
	daisyui: {
		logs: true // Keep logs enabled for now (optional)
	}
}
