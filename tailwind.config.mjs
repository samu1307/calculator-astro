/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				'yellow-light': '#DBDFAC',
				'blue-gray': '#5F758E',
				'violet-blue': '#383961',
				'red-strong': '#DB162F',
				'brown-violet': '#3B1F2B'
			}
		},
	},
	plugins: [],
}
