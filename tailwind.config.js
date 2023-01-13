
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      primary: '#00923F',
      secondary: '#A6FFA1',
      textColor: '#909590',
      btnColor: '#F06543',
      btnWarning: '#FFB140',
      white: '#FFFFFF',
      black: '#000000'
    },
    extend: {
      // fontFamily: {
      //   sans: ["Plus Jakarta Sans", ...defaultTheme.fontFamily.serif],
      //   jarkata: ["Plus Jakarta Sans"],
      // },
      // width: {
      //   128: "33rem",
      //   130: "36rem",
      //   120: "29rem",
      // },
    },
  },
  plugins: [],
};

