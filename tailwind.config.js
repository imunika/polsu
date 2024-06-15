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
        allura: ['var(--font-allura)', 'sans-serif'],
        antic_didone: ['var(--font-antic_didone)', 'sans-serif'],        
        arizonia: ['var(--font-arizonia)', 'sans-serif'],
        italiana: ['var(--font-italiana)', 'sans-serif'],
        lato: ['var(--font-lato)', 'sans-serif'],
        raleway: ['var(--font-raleway)', 'sans-serif'],
        roboto: ['var(--font-roboto)', 'sans-serif'],
        taviraj: ['var(--font-taviraj)', 'sans-serif'],
        playfair: ['var(--font-playfair)', 'sans-serif'],
        'kepler-std-display': ['kepler-std-display'],
        'warnock-pro-display': ['warnock-pro-display'],
        'garamond-premier-pro': ['garamond-premier-pro'],
        'swear-text': ['swear-text'],
        'muli': ['muli'],
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

