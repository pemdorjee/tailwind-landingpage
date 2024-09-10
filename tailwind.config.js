/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors:{
        'primary': '#3238f2'
      },
      fontFamily:{
      
         "dawa-font": ['Handjet'] ,
         "pem-font": ['Pacifico'],
         "pema-font": ['Inter'],
         "chimi-font" : ['Protest Guerrilla']

      }
    },
  },
  plugins: [],
}

