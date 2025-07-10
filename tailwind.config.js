// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
   theme: {
    extend: {
      fontFamily: {
        libre: ['"Libre Baskerville"'],
        great_vibes: ['"Great Vibes"', 'serif'],
        lato: ['"Lato"', 'sans-serif'],
        oswald: ['"Oswald"', 'sans-serif'],
        playfair: ['"Playfair Display"', 'sans-serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
        lora: ['"Lora"', 'serif'],
        satoshi: ['"Satoshi"', 'sans-serif'],
        ortica: ['"Ortica"', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
