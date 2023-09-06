/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ['Quicksand', 'sans-serif'],
      },
      colors: {
        'black': "#1D1D1D",
        "grey": "#464646",
        "primary": "#377DFF"
      }
    },
  },
  plugins: [],
}