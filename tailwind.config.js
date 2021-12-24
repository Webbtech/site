const colors = require('tailwindcss/colors') // eslint-disable-line

module.exports = {
  // purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'], // when using a postcss config, this will cause issues
  purge: false,
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        teal: colors.teal,
        cyan: colors.cyan,
        'blue-accent': '#2BA9B4',
      },
      // that is animation class
      animation: {
        'fade-in': 'fade-in 0.5s ease-out',
        'fade-out': 'fade-out 0.5s ease-out',
      },

      // that is actual animation
      keyframes: () => ({
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0px)' },
        },
        'fade-out': {
          from: { opacity: '1', transform: 'translateY(0px)' },
          to: { opacity: '0', transform: 'translateY(-30px)' },
        },
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms'), require('@tailwindcss/aspect-ratio')],
}
