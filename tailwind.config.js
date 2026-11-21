/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],

	theme: {
		extend: {
			colors: {
				colorOne: "#2EE6FF",
				colorTwo: "#121A2B",
				colorThree: "#070B14",
				colorFour: "#0B4F6C",
				colorFive: "#F1F5F9",
				colorAccent: "#7DF0FF",
			},
			fontFamily: {
				sans: ["Figtree", "system-ui", "sans-serif"],
				display: ["Outfit", "Figtree", "system-ui", "sans-serif"],
				brand: ["Outfit", "Figtree", "system-ui", "sans-serif"],
				mono: ["JetBrains Mono", "ui-monospace", "monospace"],
			},
			fontSize: {
				hero: ["3.75rem", { lineHeight: "0.98", letterSpacing: "-0.04em" }],
				"hero-lg": ["5rem", { lineHeight: "0.95", letterSpacing: "-0.045em" }],
			},
			boxShadow: {
				"shadow-colorOne":
					"0 0 8px rgba(46, 230, 255, 0.35), 0 0 20px rgba(46, 230, 255, 0.15)",
				"tab-active":
					"0 4px 16px rgba(7, 11, 20, 0.5), 0 0 0 1px rgba(46, 230, 255, 0.2)",
			},
		},
	},
	plugins: [],
};
