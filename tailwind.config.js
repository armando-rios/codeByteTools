/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tjs}"],
  theme: {
    extend: {
      colors: {
        base: '#1e1e2e',
        mantle: '#181825',
        crust: '#11111b',
        text: '#cdd6f4',
        subtext: '#a6adc8',
        surface0: '#313244',
        surface1: '#45475a',
        lavender: '#b4befe',
        sapphire: '#74c7ec',
        peach: '#fab387',
        green: '#a6e3a1',
        mauve: '#cba6f7'
      }
    },
  },
  plugins: [],
}
