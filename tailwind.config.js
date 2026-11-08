/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],

	theme: {
		extend: {
			colors: {
				colorOne: "#3DD6F5",
				colorTwo: "#0C1F33",
				colorThree: "#06101C",
				colorFour: "#1387A8",
				colorFive: "#E6F4FA",
				colorAccent: "#9AE7F5",
			},
			fontFamily: {
				sans: ["Plus Jakarta Sans", "system-ui", "sans-serif"],
				display: ["Plus Jakarta Sans", "system-ui", "sans-serif"],
				brand: ["Space Grotesk", "Plus Jakarta Sans", "system-ui", "sans-serif"],
				mono: ["JetBrains Mono", "ui-monospace", "monospace"],
				monoTwo: ["JetBrains Mono", "ui-monospace", "monospace"],
			},
			transitionDuration: {
				2000: "2000ms",
			},
			boxShadow: {
				"shadow-colorOne":
					"0 0 5px #3DD6F5, 0 0 12px rgba(61, 214, 245, 0.45), 0 0 24px rgba(61, 214, 245, 0.25)",
				"shadow-colorTwo":
					"0 0 5px #0C1F33, 0 0 10px #0C1F33, 0 0 20px #0C1F33",
				"neo-outset":
					"8px 8px 16px rgba(6, 16, 28, 0.85), -8px -8px 16px rgba(61, 214, 245, 0.1)",
				"neo-inset":
					"inset 8px 8px 16px rgba(6, 16, 28, 0.85), inset -8px -8px 16px rgba(61, 214, 245, 0.1)",
				"hero-image":
					"0 25px 60px rgba(61, 214, 245, 0.15), 0 10px 30px rgba(0, 0, 0, 0.45)",
				"tab-active":
					"0 4px 15px rgba(12, 31, 51, 0.5), 0 2px 8px rgba(61, 214, 245, 0.22), inset 0 1px 0 rgba(230, 244, 250, 0.1)",
			},
		},
	},
	plugins: [],
};
