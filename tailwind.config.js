/** @type {import('tailwindcss').Config} **/
module.exports = {
  content: [
    "./**/*.html",
    "./index.html"
  ],
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
        'blue': {DEFAULT: '#0063E2'}, 
        'red': {DEFAULT: '#F6331C'}, 
        'pink': {DEFAULT: '#EE93B5'}, 
        'lime': {DEFAULT: '#D7FB03'}, 
        'black': {DEFAULT: '#000'}, 
        'white': {DEFAULT: '#FFF'},

        // grayscale
        'gray-dark':  {DEFAULT: '#707070'},
        'gray': {DEFAULT: '#A4A4A4'},
        'gray-light': {DEFAULT: '#F1F1F1'},
        
        //functional
        'green': {DEFAULT: '#0063E2'}, 
        'blue-active': {DEFAULT: '#0A6DEC'}, 
      },
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
