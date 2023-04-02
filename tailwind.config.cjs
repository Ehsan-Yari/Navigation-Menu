/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#222327',
      },
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
