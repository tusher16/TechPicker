module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  
    theme: {
    'mytheme': { // custom theme
      'primary' : '#ea5234',
      'primary-focus' : '#d43616',
      'primary-content' : '#ffffff',
      'nav-color': '#2B2B2B',
      // other colors
    },

    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#3490dc',
      'secondary': '#ffed4a',
      'danger': '#e3342f',
      'catcolor': '#0ACF83',
     }),

    extend: {
      backgroundColor: ['active'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}
