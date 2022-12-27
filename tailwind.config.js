/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: '#00923F',
      secondary: '#A6FFA1',
      textColor: '#909590',
      btnColor: '#F06543',
      btnWarning: '#FFB140',
      white: '#FFFFFF',
      black: '#000000'
    },
    extend: {},
  },
  plugins: [],
}
