import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

import tailwindcss from '@tailwindcss/vite'
import svgLoader from 'vite-svg-loader'

export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    tailwindcss(),
    svgLoader({
      defaultImport: 'url',
      svgoConfig: {
        multipass: true
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    rollupOptions: {
      external: ['lenis', 'vue3-marquee'],
      output: {
        manualChunks: {}
      }
    }
  },
  css: {
    // 对第三方库使用 PostCSS
    transformer: 'postcss',
    postcss: {
      include: [/node_modules\/(lenis|vue3-marquee)/]
    }
  },
  optimizeDeps: {
    include: ['lottie-web']
  }
})
