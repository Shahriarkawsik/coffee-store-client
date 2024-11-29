/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        color1: "rgb(227, 181, 119)",
        color2: "rgb(36, 34, 34)",
        color3: "rgb(27, 26, 26)",
        color4: "rgb(51, 26, 21)",
        color5: "rgb(236, 234, 227)",
      },
      fontFamily: {
        Rancho: "Rancho",
        Raleway: "Raleway",
      },
      fontSize: {
        35: "35px",
        55: "55px",
      },
      lineHeight: {
        30: "30px",
        43: "43px",
        68: "68px",
        75: "75px",
      },
    },
  },
  plugins: [],
};
