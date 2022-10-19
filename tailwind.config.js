/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Open Sans"', "sans-serif"],
      },
      colors: {
        green: "#7BBD5B",
        darkGreen:"#527D3C",
        yellow: "#D99923",
        orange: "#D97218",
        orangeSmooth: "#FA996C",
        red: "#BF4D0B",
        bordeaux: "#8C2E26",
      },
    },
  },
  plugins: [],
};
