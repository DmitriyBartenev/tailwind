/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        neverUsedColor:'#777777',
        testFontColor:'#323232'
      }
    },
  },
  plugins: [],
}