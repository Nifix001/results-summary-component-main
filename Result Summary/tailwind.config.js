/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/App.jsx",

  ],
  theme: {
    extend: {
      colors: {
        'reaction': "hsl(0, 100%, 67%)",
        'memory' : "hsl(39, 100%, 56%)",
        'verbal': "hsl(166, 100%, 37%)",
        'visual': "hsl(234, 85%, 45%)",
        'primary': "hsl(252, 100%, 67%)",
        'primary1': "hsl(241, 81%, 54%)",
        'circle' : "hsla(256, 72%, 46%, 1)",
        'circle2': " hsla(241, 72%, 46%, 0)",
        'sec': " hsl(224, 30%, 27%)"
      }
    },
  },
  plugins: [],
}