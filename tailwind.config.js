/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "sm": { "min": "401px", "max": "500px" },
        "mm": { "max": "400px" },
        "md": { "min": "502px", "max": "600px" },
        "lg": { "max": "1230px" },
        "z": { "max": "760px" },
        "s": { "min": "401px", "max": "550px" },
        "w": { "min": "401px", "max": "700px" },
        "m": { "max": "900px" },
        "ml": { "min": "721px", "max": "900px" },
        "mv": { "max": "720px" },
        "y": { "max": "469px" },
        "e": { "min": "470px", "max": "559px" },
        "d": { "min": "560px", "max": "780px" },
        "a": { "max": "490px" },
        "g": {"min": "501px", "max": "677px"},
        "f": { "max": "800px" },
        "b": { "min": "401px", "max": "600px" },
        "l": { "min": "601px", "max": "1000px" },
        "j": {"min": "901px", "max": "1170px"},
        "i": { "min": "1100px", "max": "1229px" }
      }
    },
  },
  plugins: [],
}