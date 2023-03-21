/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'blue': 'hsl(212, 100%, 50%)',
      'white': 'hsl(0, 0%, 100%)',
      'red': 'hsl(0, 91%, 62%)',
      'grayishBlue': 'hsl(217, 20%, 51%)',
      'desautaretedBlue': 'hsl(217, 35%, 45%)',
      'darkBlue': 'hsl(217, 21%, 21%)',
      'saturatedWhite': 'hsl(227, 100%, 98%)',
      'veryDarkBlue': 'hsl(220, 40%, 13%)',
      'darkDesaturatedBlue': 'hsl(222, 41%, 20%)',
      'hoverBlue': 'hsl(212, 100%, 69%)',
      'shadowBox': '0px 16px 30px -10px rgba(70, 96, 187, 0.1986)',
    },
  },
  plugins: [],
}
