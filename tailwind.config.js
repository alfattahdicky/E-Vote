module.exports = {
  purge: ['./src/**/*.html',],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#4681CA",
        medium: "#789ECD",
        secondary: "#9FC0DF",
        primarydark: "#2B507D",
        dark: "#4681CA",
        indicator: '#E84444',
      },
      fontFamily:{
        body: "Montserrat, sans-serif"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
