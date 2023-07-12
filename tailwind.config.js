/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        myPrimary: "#282444",
        myBg: "#383c4c",
        errorBg: "#ffe8e6",
        error: "#dc928d",
        errorBorder: "#d69a98",
        errorMessage: "#dd847b",
      },
      boxShadow: {
        orange: "-5px 20px 25px -5px rgb(255 100 68 / 0.25);",
      },
    },
  },
  plugins: [],
};
