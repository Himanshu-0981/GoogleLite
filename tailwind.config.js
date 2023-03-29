/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{html,jsx,js}",
    "./src/**/*.{html,jsx,js}",
    "./components/**/*.{html,jsx,js}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
