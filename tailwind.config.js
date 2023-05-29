/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        BluePalette: '#50C5FF',
        BrownPalette: '#E09257',
        YellowPalette: '#FEF000',
        GreenPalette: '#35E050',
        CyanPalette: '#00FFB8'
      }
    }
  },
  variants: {},
  plugins: []
}
