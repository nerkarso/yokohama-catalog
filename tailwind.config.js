const siteConfig = require('./src/config/site.config.mjs');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        base: siteConfig.colors.base,
        primary: siteConfig.colors.primary,
        secondary: siteConfig.colors.secondary,
      },
      screens: {
        xs: '480px',
      },
    },
  },
  plugins: [],
};
