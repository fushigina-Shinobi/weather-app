/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primaryColor: '#F8C8DC',
        secondaryColor: '#A7C7E7',
        tertiaryColor: '#FAF8F6',
        bgBlue: '#94dbf9',
        darkPink: '#ff4f99',
        darkerPink: '#ff2480',
      },
    },
  },
  plugins: [],
};
