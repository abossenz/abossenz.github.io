/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./dist/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    debugScreens: {
      position: ['bottom', 'left'],
    },
    screens: {
      // Mobile first!!!
      // Wir verwenden tailwindcss OHNE Präfix, um Mobilgeräte anzsprechen
      // und überschreiben diese an grösseren Breakpoints.
      // tablets:
      'sm': '640px',
      //'sm': {'min': '640px', 'max': '767.98px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }
      'md': '768px',
      // => @media (min-width: 768px and max-width: 1023px) { ... }
      // Laptop:
      'lg': '1024px',
      // => @media (min-width: 1024px and max-width: 1279px) { ... }
      // Desktop
      'xl': '1366px',
      // => @media (min-width: 1280px and max-width: 1535px) { ... }
      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: { 
      fontFamily: {
        ueberschrift: ['Lato'],
      },
      spacing: {
        '18': '5rem',
      },
      colors: {
        popup: '#2D2C34'
      },
      inset: {
        '13': '3.25rem',
        '15': '3.75rem',
        '17': '4.25rem',
        '19': '4.75rem',
      },
    },
  },
  plugins: [
    require('tailwindcss-debug-screens'),
    require('tw-elements/dist/plugin'),
  ],
}
