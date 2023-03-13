/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        palete: {
          red: "#d1473f",
          blue: "#1b2e43",
          yellow: "#d6984d",
          green: "#7a9989",
          orange: "#dd561f",
          pink: "#eaafa1",
        },
      },
    },
  },
  plugins: [],
};
