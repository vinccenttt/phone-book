/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        'dark-blue' : '#00254E',
        'off-white': '#f9f9f9',
        'dark-gray' : '#292926'
      },
    },
  },
  plugins: [],
}

