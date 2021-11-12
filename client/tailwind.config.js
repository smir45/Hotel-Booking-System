const { blue } = require('tailwindcss/colors')
const colors = require('tailwindcss/colors')
const ColorPalatte = require('./components/componentDatas/colors')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      gray: colors.coolGray,
      blue: colors.lightBlue,
      red: colors.rose,
      pink: colors.fuchsia,
      pmry: ColorPalatte.primary,
      scndry: ColorPalatte.whte,
    },
    textColor: {
      white: "#FFF",
      primary: ColorPalatte.primary,
      blue: colors.lightBlue,
    },
  },
  variants: {
  },
  plugins: [],
}
