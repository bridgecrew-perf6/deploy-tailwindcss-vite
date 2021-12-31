module.exports = {
  content: ["./**/index.html"],
  theme: {
    screens: {
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        primary: '#2D5996',
        secondary: '#6C8AB5',
      },
      fontFamily: {
        handwritten: ['"Dancing Script"', 'cursive'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
