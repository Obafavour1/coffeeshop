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
        banner:"url('/coffeeheaderbg.svg')",
        product:"url('/productbg.svg')",
        order:"url('/orderbg.svg')",
        about:"url('/aboutbg.svg')",
        footer:"url('/footer.svg')"
      }
    },
  },
  plugins: [],
}

