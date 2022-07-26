/** @type {import('tailwindcss').Config} */
/*const plugin = require('tailwindcss/plugin')
 plugin(function({ addBase, theme }) {
  addBase({
    'button': { width: theme('width.') },
  })
}) */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}',
            './src/*.{html,js}',
          './public/index.html'],
  theme: {
    extend: {},
    fontFamily: {
      'Lato': 'Lato,sans-serif',
      'Roboto':'Roboto, sans-serif',
    },
    colors: {
      'verde':'#00471b',
      'azul':'#002ead',
      'morado':'#5a01a7',
    },
  },
  plugins: [],
}
