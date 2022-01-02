module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors:{
      white:{
          main:'#fff',
      },
      pink: {
        dark:'#F05A97',
        light:'#F5DEB3'
      },
     black: {
       dark:'#000000',
       light:'#1F1F21'
     },
     blue:{
       dark: '#5E86EE',
       light: '#02E5D8'
     },
     green:{
       light:'#61E897'
     }
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
