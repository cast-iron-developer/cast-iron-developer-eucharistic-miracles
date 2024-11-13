import daisyui from 'daisyui';
const plugin = require('tailwindcss/plugin')
import aspectRatio from '@tailwindcss/aspect-ratio';
import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  plugins: [
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          'text-shadow-white': (value) => ({
            textShadow: value
          })
        },
        { values: theme('textShadowWhite') }
      );
    }),
    require('daisyui'),
    typography, forms, containerQueries, aspectRatio,
  ],
  theme: {
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

        'only-2xl': { min: '1536px' },

        // additional media queries because I like flexibility
        'to-sm': { max: '767px' },
        // => @media (max-width: 767px) { ... }

        'to-md': { max: '1023px' },
        // => @media (max-width: 1023px) { ... }

        'to-lg': { max: '1279px' },
        // => @media (max-width: 1279px) { ... }

        'to-xl': { max: '1535px' },
        // => @media (max-width: 1535px) { ... }

        'to-2xl': { min: '1536px' },

        // Starting the inverse of the standard tailwind media queries bc i hate them.
        'max-xs': { max: '639px' },

        'max-sm': { max: '767px' },
        // => @media (max-width: 767px) { ... }

        'max-md': { max: '1023px' },
        // => @media (max-width: 1023px) { ... }

        'max-lg': { max: '1279px' },
        // => @media (max-width: 1279px) { ... }

        'max-xl': { max: '1535px' },
        // => @media (max-width: 1535px) { ... }
        'max-2xl': { min: '1536px' }
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
        primary: {},
        secondary: {},
        tertiary: {},
        querternary: {},
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

}