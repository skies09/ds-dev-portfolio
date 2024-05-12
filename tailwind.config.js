/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],

	theme: {
		colors: {
			colorOne: "#00A8E8",
			colorTwo: "#003459",
			colorThree: "#00171F",
			colorFour: "#007EA7",
			colorFive: "#F9F9F9",
		},
		fontFamily: {
			sans: ["Open Sans", "sans-serif"],
			serif: ["PT Sans", "sans-serif"],
			mono: ["Roboto", "sans-serif"],
			display: ["Montserrat", "sans-serif"],
			monoTwo: ["Roboto Mono", "monospace"],
		},
		extend: {
			transitionDuration: {
				2000: "2000ms",
			},
		},
	},
	plugins: [],
};
