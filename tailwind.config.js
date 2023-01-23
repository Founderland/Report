/** @type {import('tailwindcss').Config} **/
module.exports = {
  content: ['./**/*.html', './index.html'],
  // more info https://tailwindcss.com/docs/theme
  theme: {
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      // colors: https://tailwindcss.com/docs/customizing-colors
      colors: {
        // brand
        blue: {
          DEFAULT: '#0063E2',
          400: '#3885E8',
          300: '#80B1F1',
          200: '#B3D0F6',
          100: '#D9E8FB',
        },
        red: { DEFAULT: '#F6331C' },
        pink: { DEFAULT: '#EE93B5' },
        lime: { DEFAULT: '#D7FB03' },
        black: { DEFAULT: '#000' },
        white: { DEFAULT: '#FFF' },

        // R/GA COLORS DIFFER FROM FDL PLAYBOOK
        // blue: {
        //   DEFAULT: '#2565DA',
        //   400: '#3885E8',
        //   300: '#80B1F1',
        //   200: '#B3D0F6',
        //   100: '#D9E8FB',
        // },
        // red: { DEFAULT: '#E24630' },
        // pink: { DEFAULT: '#E197B3' },
        // lime: { DEFAULT: '#DFF851' },
        // black: { DEFAULT: '#000' },
        // white: { DEFAULT: '#FFF' },

        // grayscale
        'gray-dark': { DEFAULT: '#707070' },
        gray: { DEFAULT: '#A4A4A4' },
        'gray-light': { DEFAULT: '#F1F1F1' },

        //functional
        green: { DEFAULT: '#0063E2' },
        'blue-active': { DEFAULT: '#0A6DEC' },
      },
      spacing: {
        //'8xl': '96rem',
        //'9xl': '128rem',
      },
      fontSize: {
        xxs: ['0.50rem', '0.75rem'],
        '2.5xl': ['32px', '40px'],
      },
    },
  },
  plugins: [],
}
