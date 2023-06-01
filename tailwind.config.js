const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        base: colors.neutral,
        primary: {
          50: '#edf9ff',
          100: '#d6f0ff',
          200: '#b5e7ff',
          300: '#83d9ff',
          400: '#48c3ff',
          500: '#1ea2ff',
          600: '#0682ff',
          700: '#006af5',
          800: '#0755c6',
          900: '#0b3e81',
          950: '#0e2e5d',
        },
      },
    },
  },
  plugins: [],
};
