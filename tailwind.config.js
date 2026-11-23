/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./tools/**/*.mjs"],
  theme: {
    extend: {
      colors: {
        misti: "#a84d35",
        "tinta-andina": "#29271f",
        "papel-calido": "#f8f4ec"
      }
    }
  },
  plugins: []
};
