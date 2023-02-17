/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: "Manrope",
    },
    colors: {
      // ### Primary
      "primary-1": "hsl(193, 38%, 86%)",
      "primary-2": "hsl(150, 100%, 66%)",

      // ### Neutral

      "neutral-1": "hsl(217, 19%, 38%)",
      "neutral-2": "hsl(217, 19%, 24%)",
      "neutral-3": "hsl(218, 23%, 16%)",
    },
  },
  plugins: [],
};
