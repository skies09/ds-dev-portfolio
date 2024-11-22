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
			fugaz: ["Fugaz One", "sans-serif"],
			farsan: ["Farsan", "cursive"],
			racing: ["Racing Sans One", "sans-serif"],
		},
		extend: {
			transitionDuration: {
				2000: "2000ms",
			},
			boxShadow: {
				"shadow-colorOne":
					"0 0 5px #00A8E8, 0 0 10px #00A8E8, 0 0 20px #00A8E8, 0 0 40px #00A8E8",
				"shadow-colorTwo":
					"0 0 5px #003459, 0 0 10px #003459, 0 0 20px #003459, 0 0 40px #003459",
			},
		},
	},
	plugins: [],
};
