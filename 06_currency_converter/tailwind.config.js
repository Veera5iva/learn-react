/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGray: "#3B3B3B",
        customGray2: "#5B5B5B"
      },
    },
  },
  plugins: [],
}