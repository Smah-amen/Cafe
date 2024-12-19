/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "Arial", "sans-serif"],
        cursive:["Fleur De Leah" ]
    
      },
      colors: {
        primary: "#854d3d",
        secondary: "#6e4d4a",
        brandDark:"#e4d5c9",
        chocolate: "#391e09",
        
      },
      container:{
        padding: "1rem",
        center: true,
      }
    },
  },
  plugins: [],
};
