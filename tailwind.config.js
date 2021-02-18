module.exports = {
  purge: ['./public/**/*.html', './src/**./*.vue'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#966213',
      'primary-600': '#855400',
    }),
    // textColor: theme => theme('colors'),
    textColor: theme => ({
      ...theme('colors'),
      'primary': '#966213'
    })
  },
  variants: {
    extend: {},
    
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
