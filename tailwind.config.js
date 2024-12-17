/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        white:{
          100:'#F5F5F5',
          200:'#B9B9B9'
        },
        browns:{
          100:'#E9BD8C',
          200:'#933C24'
        }
      },
      backgroundImage:{
        banner:"url('./src/assets/coffeeheaderbg.svg')",
        product:"url('./src/assets/productbg.svg')",
        order:"url('./src/assets/orderbg.svg')",
        about:"url('./src/assets/aboutbg.svg')"
      }
    },
  },
  plugins: [],
}

