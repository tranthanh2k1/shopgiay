module.exports = {
  purge: [
    './public/index.html',
    './src/*.js',
    './src/**/*.js',
  ],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class',
  prefix: 'tw-',
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
