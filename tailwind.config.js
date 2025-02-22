export default {
  content: {
    files: ['./src/**/*.{html,js,vue}', './index.html']
  },
  theme: {
    fontFamily: {
      MabryPro: ['Mabry Pro']
    },
    extend: {
      colors: {
        slate: {
          900: '#1a1a1a'
        }
      }
    }
  },
  plugins: ['tailwind-scrollbar']
}
