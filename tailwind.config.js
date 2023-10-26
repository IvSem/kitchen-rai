/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

export default {
	//content: [
	//    "./resources/**/*.blade.php",
	//    "./resources/**/*.js",
	//    "./resources/**/*.vue",
	//],
	content: ['./resources/**/*.{blade.php,js,vue}'],
	darkMode: 'class',
	theme: {
		container: {
			center: true,
			padding: '1rem',
		},
		screens: {
			xs: '475px',
			...defaultTheme.screens,
		},
		colors: {
			inherit: 'inherit',
			current: 'currentColor',
			transparent: 'transparent',
			primary: '#1f1f1f',
			black: colors.black,
			white: colors.white,
			gray: colors.gray,
			emerald: colors.emerald,
			indigo: colors.indigo,
			yellow: colors.yellow,
			red: colors.red,
			blue: colors.blue,
		},
		fontFamily: {
			sans: ['Montserrat', 'sans-serif'],
		},
		extend: {
			animation: {
				'spin-slow': 'spin 10s linear infinite',
				wiggle: 'wiggle 2s ease-in infinite',
				blob: 'blob 6s linear infinite',
				breath: 'breath 6s ease-in-out infinite',
			},
			keyframes: {
				spin: {
					to: { transform: 'rotate(360deg)' },
				},
				wiggle: {
					'0%': { transform: 'skewX(10deg)' },
					'10%': { transform: 'skewX(-9deg)' },
					'20%': { transform: 'skewX(8deg)' },
					'30%': { transform: 'skewX(-7deg)' },
					'40%': { transform: 'skewX(6deg)' },
					'50%': { transform: 'skewX(-5deg)' },
					'60%': { transform: 'skewX(4deg)' },
					'70%': { transform: 'skewX(-3deg)' },
					'80%': { transform: 'skewX(2deg)' },
					'90%': { transform: 'skewX(1deg)' },
					'100%': { transform: 'skewX(1deg)' },
				},
				blob: {
					'0%': { transform: 'translate(0px, 0px) scale(1)' },
					'33%': { transform: 'translate(30px, -50px) scale(1.1)' },
					'66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
					'100%': { transform: 'translate(0px, 0px) scale(1)' },
				},
				breath: {
					'0%': { transform: 'translate(0px, 0px) scale(1)' },
					'50%': { transform: 'translate(0px, -20px) scale(1.1)' },
					'100%': { transform: 'translate(0px, 0px) scale(1)' },
				},
			},
		},
	},
	plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};
