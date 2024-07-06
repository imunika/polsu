/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{jsx,tsx}",
    "./components/**/*.{jsx,tsx}", 
  ],
  theme: {
    extend: {
      spacing: {
        '2/3': '66.666667%'
      },
      fontFamily: {
        // sans is font by default
        sans: ['var(--font-antic_didone)', 'sans-serif'],
        antic_didone: ['var(--font-antic_didone)', 'sans-serif'],        
        arizonia: ['var(--font-arizonia)', 'sans-serif'],
        italiana: ['var(--font-italiana)', 'sans-serif'],
        lato: ['var(--font-lato)', 'sans-serif'],
      },
      backgroundImage: {
        'heroPL': "url('/images/TMPL_SU.jpg')",
      },
    },
  },
  plugins: [
    'prettier-plugin-tailwindcss',
  ],
}

