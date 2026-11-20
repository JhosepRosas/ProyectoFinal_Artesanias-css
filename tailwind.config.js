/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./tools/**/*.mjs"],
  theme: {
    extend: {
      colors: {
        misti: "#a84d35",
        "andes-ink": "#29271f",
        "warm-paper": "#f8f4ec"
      }
    }
  },
  plugins: []
};
