/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#F3EFE3',
        'secondary': '#FFC300',
        'terciary': '#000814',
        
      },
    },
  },
  plugins: [],
}

