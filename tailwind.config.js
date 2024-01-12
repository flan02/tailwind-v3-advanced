/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ff6363",
        secondary: {
          100: "#e2e2d5",
          200: "#888883",
        },
        "sea-blue": "#243cff",
        "sea-blue-light": "#3b5dff",
        "sea-blue-dark": "#0019ca",
      },
      fontFamily: {
        body: ["Nunito"],
      },
      boxShadow: {
        custom: "0px 0px 10px rgba(0, 0, 0, 0.5)",
      },
      spacing: {
        98: "400px",
      },
      width: {
        150: "1000px",
      },
      screens: {
        tablet: "900px",
        "3xl": "1920px",
        "4xl": "2560px",
        "5xl": "3840px",
      },
    },
  },
  plugins: [],
};
