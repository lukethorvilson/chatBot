/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      'body': ['Handjet', 'sans-serif']
    },
    extend: {},
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
