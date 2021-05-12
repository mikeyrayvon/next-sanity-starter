module.exports = {
  purge: {
    content: ['./components/**/*.js', './pages/**/*.js', './utils/sanity.js'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
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
