module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      blaa: "#030BA6",
      roed: "#FF5851",
      white: "#ffffff",
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
