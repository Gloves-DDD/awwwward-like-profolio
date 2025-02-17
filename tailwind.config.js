/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      MabryPro: ['Mabry Pro']
    },
    extend: { colors: {
      slate: {
        900: '#1a1a1a',
      }
    }}
  },
  plugins: []
}
