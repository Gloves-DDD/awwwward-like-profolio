import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { defineAsyncComponent } from 'vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/testcomponent',
      name: 'testcomponent',
      component: defineAsyncComponent(() => import('../views/TestComponentView.vue'))
    }
  ]
})
export default router
