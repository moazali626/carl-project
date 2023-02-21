/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  extend: {
    colors: {
      primary: {
        500: "#FF6363;",
        800: "#FF1313;",
      },
    },
    fontFamily: {
      sf: ["SF", "cursive"],
    },
  },
};
