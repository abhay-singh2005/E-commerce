/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fdf8f6',
          100: '#f2e8e5',
          200: '#e8d5cf',
          300: '#d9b7ad',
          400: '#c59283',
          500: '#af705f',
          600: '#9b5949',
          700: '#814638',
          800: '#6b3c31',
          900: '#58342c',
          gold: '#D4AF37',
          goldHover: '#B59226',
          emerald: '#064E3B',
          royalRose: '#8B0032',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
