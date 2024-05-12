/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    colors: {
      colorOne: '#00A8E8',
      colorTwo: '#003459',
      colorThree: '#00171F',
      colorFour: '#007EA7',
      colorFive: '#F9F9F9',
    },

    extend: {
      transitionDuration: {
        '2000': '2000ms',
      }
    },
  },
  plugins: [],
}

