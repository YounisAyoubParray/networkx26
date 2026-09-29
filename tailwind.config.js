/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      // Shared team colour palette — keep these names consistent across the project.
      colors: {
        primary: "#1D4ED8",
        dark: "#0B1B3F",
        accent: "#38BDF8",
        light: "#E0F2FE",
        text: "#0F172A",
      },
    },
  },

  plugins: [],
};