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

      },
      fontSize: {
        'heading-1': '2.5rem', // Custom size for h1
        'heading-2': '2rem',   // Custom size for h2
        'heading-3': '1.75rem', // Custom size for h3
        'heading-4': '1.5rem',  // Custom size for h4
        'heading-5': '1.25rem', // Custom size for h5
        'heading-6': '1rem',    // Custom size for h6
      },
    },
  },
 
  plugins: [],
}