/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#14b8a6',
        dark: '#0f172a',
      },
      screens: {
        '2xl': '1320px',
      },
      width: {
        'custom-3': '354px',
      },
      height: {
        'custom-3': '472px',
      },
    },
  },
  plugins: [],
};
