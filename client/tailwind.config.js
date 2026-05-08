// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#588157",
        secondary: "#A3B18A",
        tertiary: "#DAD7CD",
        neutral: "#767873",
        danger: "#DC2626",
      },

      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
};