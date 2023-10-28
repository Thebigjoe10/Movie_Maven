/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "less-blue": "#4C6E8E",
      },
      borderColor: {
        "less-blue": "#4C6E8E",
      },
    },
  },
  plugins: [
    require('tailwindcss-no-scrollbar')
  ],
};
