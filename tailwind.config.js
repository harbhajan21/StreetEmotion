/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bone: '#E9E7E2',   // page
        paper: '#F5F4F1',  // raised surfaces
        ink: '#131312',    // text, primary actions
        stone: '#5F5C56',  // secondary text
        line: '#CBC7BF',   // hairlines
        ash: '#A5A199',    // text on ink
        lime: '#CCFF00',   // brand signal, used sparingly
        alert: '#B3261E',
      },
      fontFamily: { sans: ['Archivo', 'Helvetica Neue', 'Arial', 'sans-serif'] },
      maxWidth: { page: '1360px' },
    },
  },
  plugins: [],
};
