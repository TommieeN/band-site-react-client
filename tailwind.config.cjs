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
        "secondary-light": "#e1e1e1",
        "tertiary-light": "#fafafa",
        "silver": "#afafaf",
        "error": "#d22d2d"
      },
      backgroundImage: {
        "hero": "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('./assets/images/hero-bio.jpg')"
      },
      fontFamily: {
        avenir: ["Avenir", "cursive"],
      }
    },
    screens: {
      md: "768px",
      lg: "1280px"
    }
  },
  plugins: [],
}

