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
        "less-blue": `rgba(76, 110, 142, 0.8)`,
      },
      textColor: {
        "less-blue": `rgba(76, 110, 142, 0.8)`,
      },
    },
  },
  plugins: [require("tailwindcss-no-scrollbar")],
};
