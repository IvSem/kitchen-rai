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
			primary: {
				100: '#FFEBCC',
				200: '#FFD699',
				300: '#FFC266',
				400: '#FFAD33',
				500: '#FF9900',
				600: '#CC7A00',
				700: '#995C00',
			},
			'tone-day': {
				100: '#FFFFFF',
				200: '#F0F0F0',
				300: '#E3E3E3',
				400: '#B8B8B8',
				500: '#7D7D7D',
				600: '#595959',
				700: '#3D3D3D',
				800: '#3D3D3D',
				900: '#050505',
				bg: '#FFFFFF',
			},
			'tone-night': {
				100: '#000000',
				200: '#2D2D2D',
				300: '#343434',
				400: '#575757',
				500: '#818181',
				600: '#9C9C9C',
				700: '#3D3D3D',
				800: '#E0E0E0',
				900: '#FFFFFF',
				bg: '#232323',
			},
			black: colors.black,
			white: colors.white,
			gray: colors.gray,
			emerald: colors.emerald,
			indigo: colors.indigo,
			yellow: colors.yellow,
			red: colors.red,
			blue: colors.blue,
			zinc: colors.zinc,
			neutral: colors.neutral,
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
