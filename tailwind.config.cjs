const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['src/app.html', 'src/**/*.svelte'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.coolGray,
      amber: colors.amber,
      primary: colors.amber,
      secondary: colors.emerald
    },
    container: {
      padding: '2rem',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
