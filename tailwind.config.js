/** @type {import('tailwindcss').Config} **/
module.exports = {
  content: [
    "./**/*.{html}",
    "./index.html"
  ],
  // more info https://tailwindcss.com/docs/theme
  theme: {
    // colors: https://tailwindcss.com/docs/customizing-colors
    colors: {
      'blue': '#1fb6ff',
      'tahiti': {
        DEFAULT: '#06b6d4',
      },
      //'purple': '#7e5bef',
      'pink': '#ff49db',
      //'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  plugins: [],
}
