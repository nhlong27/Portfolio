/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			minHeight: {
        'dynamic-screen': ['100vh /* fallback for Opera, IE and etc. */', '100dvh'],
      },
			screens: {
        '4k': '2560px',
        xs: '500px',
      },
			colors: {
        "primary": "#15803d",
        "secondary": "#22c55e",
        "tertiary": "#bef264",
        "warning": "#ef4444",
        "danger": "#dc2626",
			},
		},
	},
	plugins: [],
}
