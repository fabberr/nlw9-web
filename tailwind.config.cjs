/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx', /** Every .tsx file located in any subdirectory of `./src/`. */
    './index.html',   /** Root HTML file. */
  ],
  theme: {
    extend: {
      backgroundImage: {
        'nlw-baseimg': "url(/img/background.png)",
        'nlw-gradient': 'linear-gradient(90deg, #9572FC, #43E7AD, #E1D55D)',
        'nlw-game-card-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%)'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}
