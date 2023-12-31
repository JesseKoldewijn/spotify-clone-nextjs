import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			animation: {
				fadeIn: "fadeIn 75ms ease-in",
				fadeOut: "fadeOut 75ms ease-in-out",
			},
		},
	},
	plugins: [],
};
export default config;
