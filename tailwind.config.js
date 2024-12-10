/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tjs}"],
  theme: {
    extend: {
      colors: {
        base: '#1e1e2e',    // Base color
        mantle: '#181825',  // Darker background
        crust: '#11111b',   // Darkest background
        text: '#cdd6f4',    // Text
        subtext: '#a6adc8', // Subtext
        surface0: '#313244', // Surface
        surface1: '#45475a', // Lighter surface
        lavender: '#b4befe', // Primary accent
        sapphire: '#74c7ec', // Secondary accent
        peach: '#fab387',    // Warning/complementary
        green: '#a6e3a1'     // Success
      }
    },
  },
  plugins: [],
}
