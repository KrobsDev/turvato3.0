/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-blue': 'hsla(195, 100%, 15%, 1)',
        'orange-bg': 'hsla(25, 85%, 49%, 100%)',
        'light-blue': 'hsla(195, 100%, 41%, 0.04)'
      }
    }
  },
  plugins: []
}
