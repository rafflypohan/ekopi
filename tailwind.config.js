module.exports = {
  purge: ['./public/**/*.html', './src/**./*.vue'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    backgroundColor: (theme) => ({
      ...theme('colors'),
      'brown-300': '#C17D18',
      'brown-400': '#AC6F15',
      'brown-500': '#966213',
      'brown-600': '#805310',
    }),
    // textColor: theme => theme('colors'),
    textColor: (theme) => ({
      ...theme('colors'),
      'brown-300': '#C17D18',
      'brown-400': '#AC6F15',
      'brown-500': '#966213',
      'brown-600': '#805310',
    }),
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      backgroundColor: ['active']
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
