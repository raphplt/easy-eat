/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/*.tsx",
    "./src/components/*.tsx",
    "./assets/svg/*.tsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
