module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      blaa: "#030BA6",
      roed: "#FF5851",
      white: "#ffffff",
      black: "#000000",
      grey: "#E5E5E5",
    },
    extend: {
      fontFamily: {
        montserrat: "'Montserrat', sans-serif",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("daisyui"),
  ],
};
