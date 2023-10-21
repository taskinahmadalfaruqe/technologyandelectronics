/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '10px',
        sm: '10px',
        lg: '1rem',
        xl: '2rem',
        '2xl': '5rem',
      },
    },
    fontFamily: {
      'Rancho': ['Rancho', 'cursive'],    
      'Raleway': ['Raleway', 'sans-serif'],    
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}

