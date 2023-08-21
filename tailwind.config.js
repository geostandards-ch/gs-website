/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  // darkMode: ''media, // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        primary: {
          100: "#E5F5EF",
          200: "#AEE0CE",
          300: "#9BD9C3",
          400: "#64C4A2",
          500: "#3C9E7B",
          600: "#2E7A5F",
          700: "#205542",
          800: "#123025",
          900: "#0B1E17",
        },
      },
    },
  },
  plugins: [],
};
