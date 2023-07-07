/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        myPrimary: "#282444",
        myBg: "#383c4c",
      },
      boxShadow: {
        orange: "-5px 20px 25px -5px rgb(255 100 68 / 0.25);",
      },
    },
  },
  plugins: [],
};
