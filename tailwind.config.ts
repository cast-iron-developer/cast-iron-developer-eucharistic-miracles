import aspectRatio from '@tailwindcss/aspect-ratio';
import containerQueries from '@tailwindcss/container-queries';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	plugins: [require('daisyui'), typography, containerQueries, aspectRatio],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				sm: '2rem',
				lg: '4rem',
				xl: '5rem',
				'2xl': '6rem'
			}
		},
		fontFamily: {
			montserrat: ['Montserrat', 'sans-serif']
		},
		extend: {
			screens: {
				// additional media queries because I like flexibility
				'only-sm': { min: '640px', max: '767px' },
				// => @media (min-width: 640px and max-width: 767px) { ... }

				'only-md': { min: '768px', max: '1023px' },
				// => @media (min-width: 768px and max-width: 1023px) { ... }

				'only-lg': { min: '1024px', max: '1279px' },
				// => @media (min-width: 1024px and max-width: 1279px) { ... }

				'only-xl': { min: '1280px', max: '1535px' },
				// => @media (min-width: 1280px and max-width: 1535px) { ... }

				// additional media queries because I like flexibility
				'to-sm': { max: '639px' },
				// => @media (max-width: 639px) { ... }

				'to-md': { max: '767px' },
				// => @media (max-width: 767px) { ... }

				'to-lg': { max: '1023px' },
				// => @media (max-width: 1023px) { ... }

				'to-xl': { max: '1279px' },
				// => @media (max-width: 1279px) { ... }

				'to-2xl': { max: '1535px' },
				// => @media (max-width: 1535px) { ... }

				// Starting the inverse of the standard tailwind media queries bc i hate them.
				'from-sm': { min: '640px' },
				// => @media (max-width: 640px) { ... }

				'from-md': { min: '768px' },
				// => @media (max-width: 768px) { ... }

				'from-lg': { min: '1024px' },
				// => @media (max-width: 1024px) { ... }

				'from-xl': { min: '1280px' },
				// => @media (max-width: 1280px) { ... }

				'from-2xl': { min: '1536px' }
				// => @media (max-width: 1536px) { ... }
			},
			dropShadow: {
				light: '0 0 .75rem rgba(255, 255, 255, .7)',
				dark: '0 0 .75rem rgba(0, 0, 0, .7)'
			},
			textShadowWhite: {
				sm: '0 1px 2px #eee',
				DEFAULT: '1px 2px #eee',
				lg: '0 8px 16px #eee'
			},
			colors: {
				primary: {
					DEFAULT: '#0a0f0d',
					100: '#020303',
					200: '#040605',
					300: '#060908',
					400: '#080c0b',
					500: '#0a0f0d',
					600: '#314940',
					700: '#588472',
					800: '#8bb1a2',
					900: '#c5d8d0'
				},
				secondary: {
					DEFAULT: '#c5283d',
					100: '#27080c',
					200: '#4e1018',
					300: '#751824',
					400: '#9c2030',
					500: '#c5283d',
					600: '#da485c',
					700: '#e37684',
					800: '#eca4ad',
					900: '#f6d1d6'
				},
				tert: {
					DEFAULT: '#399e5a',
					100: '#0b1f12',
					200: '#173f24',
					300: '#225e36',
					400: '#2d7e48',
					500: '#399e5a',
					600: '#51c076',
					700: '#7dd098',
					800: '#a8e0bb',
					900: '#d4efdd'
				},
				quart: {
					DEFAULT: '#ffd700',
					100: '#332b00',
					200: '#665700',
					300: '#998200',
					400: '#ccad00',
					500: '#ffd700',
					600: '#ffe033',
					700: '#ffe866',
					800: '#fff099',
					900: '#fff7cc'
				},
				white: {
					DEFAULT: '#eee'
				},
				black: {
					DEFAULT: '#333'
				}
			},
			keyframes: {
				wiggle: {
					'0%, 100%': { transform: 'rotate(-3deg)' },
					'50%': { transform: 'rotate(3deg)' }
				}
			},
			animation: {
				wiggle: 'wiggle 200ms ease-in-out'
			}
		}
	}
} satisfies Config;
