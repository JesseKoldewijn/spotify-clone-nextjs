import tailwinClamp from "@tailwindcss/line-clamp";
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
				fadeIn: "fadeIn 100ms ease-in",
				fadeOut: "fadeOut 100ms ease-in-out",
			},
		},
	},
	plugins: [tailwinClamp],
};
export default config;
