/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-blue': 'hsla(195, 100%, 15%, 1)',
        'orange-bg': 'hsla(25, 85%, 49%, 100%)',
        'light-blue': 'hsla(195, 100%, 41%, 0.04)',
        'green-bg': 'hsla(181, 100%, 20%, 1)',
        'grey-bg': 'hsla(0, 0%, 85%, 0.35)',
        'light-green': 'hsla(137, 66%, 84%, 0.35)',
        'light-yellow': 'hsla(61, 82%, 76%, 0.35)'
      }
    }
  },
  plugins: []
}
