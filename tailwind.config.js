/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        'main-card': '450px',
      },
      backgroundImage: {
        'sun': "url('/src/assets/images/icon-sun.svg')",
        'moon': "url('/src/assets/images/icon-moon.svg')",
      },
      boxShadow: {
        'card': "0px 16px 30px -10px rgba(70, 96, 187, 0.1986)",
      }
    },
    colors: {
      'blue': 'hsl(212, 100%, 50%)',
      'white': 'hsl(0, 0%, 100%)',
      'red': 'hsl(0, 91%, 62%)',
      'grayish-blue': 'hsl(217, 20%, 51%)',
      'desautareted-blue': 'hsl(217, 35%, 45%)',
      'dark-blue': 'hsl(217, 21%, 21%)',
      'saturated-white': 'hsl(227, 27%, 90%)',
      'dark-white': 'hsl(227, 7%, 75%)',
      'very-dark-blue': 'hsl(220, 40%, 13%)',
      'dark-desaturated-blue': 'hsl(222, 41%, 20%)',
      'hover-blue': 'hsl(212, 100%, 69%)',
    },
  },
  plugins: [],
}
