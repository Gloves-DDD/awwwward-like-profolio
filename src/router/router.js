import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import TestComponentPage from '@/views/TestComponentPage.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomePage
    },
    {
      path: '/test',

      component: TestComponentPage
    }
  ]
})

// 路由性能监控
router.beforeEach((to, from, next) => {
  window.performance.mark('route_start')
  next()
})

router.afterEach(() => {
  window.performance.measure('route_duration', 'route_start')
  const duration = window.performance.getEntriesByName('route_duration')[0]?.duration.toFixed(1)
  console.log(`%cRoute loaded in ${duration}ms`, 'color: #00ff88;')
})

export default router
