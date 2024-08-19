/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
       
      },
      colors:{
        primary: '#0F3443 ',
        secondary: '#34E89E',
        accent: '#FFC107',
        dark: '#333',
        light: '#fff',

      }
    },
  },
 
  plugins: [],
}