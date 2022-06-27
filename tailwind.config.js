module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          lg: '4rem',
          xl: '6rem',
          '2xl': '8rem',
          '3xl': '8rem',
        },
      },
      screens: {
        '3xl': '2000px',
        '4xl': '2560px',
      },
      maxWidth: {
        xs: '18rem',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
