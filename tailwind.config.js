/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-bg': 'hsla(195, 100%, 15%, 1)',
        'orange-bg': 'hsla(25, 85%, 49%, 1)',
        'orange-bg2': '#E96D13'
      }
    }
  },
  plugins: []
}
