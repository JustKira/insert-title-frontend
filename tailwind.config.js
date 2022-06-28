/** @type {import('tailwindcss').Config} */
const plugin=require("tailwindcss/plugin")
const Myclass=plugin(function({addUtilities}){
  addUtilities({
    ".my-rotate-animation":{
      transform:"rotateY(180deg)",
    }
  })
})
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      minHeight:{
        '3/4':'65vh',
      }
    },
  },
  plugins: [Myclass],
}
