/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'alex': ['"Alex Brush"', 'cursive'],
        'quick': ['"Quicksand"', 'sans-serif']
      },
      colors: {
        'custom-teal': '#15B9B9',
        'custom-purple': '#3C1DFF',
      },
    },
  },
  plugins: [],
}

