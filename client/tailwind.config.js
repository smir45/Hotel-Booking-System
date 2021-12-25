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
    extend: {
      backgroundImage: (theme) => ({
        'banner-img': `url('https://images.unsplash.com/photo-1508693926297-1d61ee3df82a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80')`,
        'hero-pattern':
          "linear-gradient(to right bottom, rgba(0, 0, 0, 0.7), rgba(255, 255, 255, 0.9)), url('https://images.unsplash.com/photo-1526772662000-3f88f10405ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80')",
      })
    }
  },
  variants: {
  },
  plugins: [],
}
