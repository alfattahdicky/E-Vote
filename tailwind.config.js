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
      fontFamily: {
        body: "Montserrat, sans-serif"
      },
      backgroundImage: {
        linearOne: 'linear-gradient(212.87deg, rgba(255, 255, 255, 0.8) 7.83%, rgba(255, 255, 255, 0.1) 100.54%)',
        linearTwo: 'linear-gradient(180deg, #9FC0DF 0%, rgba(159, 192, 223, 0) 100%)',
        linearThree: 'linear-gradient(180deg, rgba(159, 192, 223, 0) 0%, #9FC0DF 100%)',
      },
      maxWidth: {
        '1/4': '25vw',
        '1/2': '50vw',
        '3/4': '75vw',
      },
      maxHeight: {
        '1/4': '25vh',
        '1/2': '50vh',
        '3/4': '75vh',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
