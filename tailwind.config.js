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
            },
            minHeight: {
                '3/4': '65vh'
            }
        }
    },
    plugins: []
}
