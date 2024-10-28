import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			orangeMedium: '#F36C17',
  			orangeLight: '#F68E41',
  			creamBg: '#F7C8AA',
  			whiteBg: '#F9F9F9',
  			lightBlueBg: '#BDEDEB'
  		},
  	}
  },
  plugins: [],
};
export default config;
