/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "primary-dark": "#323232",
        "primary-darkblack": "#000000",
        "primary-light": "#ffffff",
        "secondary-light": "#E1E1E1",
        "tertiary-light": "#fafafa",
        "silver": "#AFAFAF",
        "error": "#d22d2d"
      },
      backgroundImage: {
        "hero": "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('./assets/images/hero-bio.jpg')",
        "hero-shows": "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.25)), url('./assets/images/hero-shows.jpg')",
      },
      fontFamily: {
        avenir: ["AvenirNext LT Pro", "cursive"],
      }
    },
    screens: {
      md: "768px",
      lg: "1280px"
    }
  },
  plugins: [],
}

