/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        baloo: ['"Baloo 2"', 'cursive'],
        bangers: ['"Bangers"', 'cursive'],
        poppins: ['"Poppins"', 'sans-serif'],
        whitney: [
          'Whitney',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'Helvetica',
          'Arial',
          'sans-serif'
        ],
      },
      backgroundImage: {
        'gradient-text': 'linear-gradient(45deg, #7D27FF, #d9a7c7)',
      },
      clipPath: {
        'circle': 'circle(0% at center center)',
        'full': 'circle(100% at center center)',
      },
      perspective: {
        500: '500px',
      },


    },
    plugins: [],
  },
}