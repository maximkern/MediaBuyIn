/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#1B365D",
        teal: "#008B8B",
        gray: "#7F7F7F",
        coral: "#FF7F6B",
      },
    },
  },
  plugins: [],
};
