/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      red: colors.red,
      yellow: colors.yellow,
      green: colors.green,
      gray: colors.gray,
      "blue-primary": "#3252DF",
      "blue-dark": "#152C5B",
      "pink-primary": "#FF498B",
      "gray-light": "#B0B0B0",
      "gray-white": "#E5E5E5",
    },
  },
  plugins: [],
};
