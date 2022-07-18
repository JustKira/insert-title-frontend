/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            dropShadow: {
                blueglow: '0px 10px 8px #1088CC'
            },
            fontFamily: {
                Pop: ['Poppins', 'sans-serif']
            },      minHeight:{
                '3/4':'65vh',
            },
            width: {
                
                '80%': '99%',
                '70%': '70%',
                '50%':'50%',
                '900px':'900px'
                
                
            } ,  
           
            height: {
                
                '88%': '88%',
                
                
            }   ,
            maxWidth:{
                '1500px':'1500px'
            }  

              
        }
    },
    plugins: []
}
