import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import Vue3Marquee from 'vue3-marquee'
import LenisVue from 'lenis/vue'

const app = createApp(App)

app.use(router)
app.use(Vue3Marquee)
app.use(LenisVue)

app.mount('#app')
