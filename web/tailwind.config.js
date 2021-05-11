module.exports = {
  purge: {
    content: ['./components/**/*.js', './pages/**/*.js', './utils/sanity.js'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        pink: {
          DEFAULT: '#FCCEE0',
          light: '#FAECF1',
          lightest: '#FDF2FF',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
