import { createRouter, createWebHashHistory } from 'vue-router'
import { defineAsyncComponent } from 'vue'
import LottieComponent from '@/components/Homeitems/items/LottieComponent.vue'

// 异步组件加载器工厂函数
const asyncComponent = (path) =>
  defineAsyncComponent({
    loader: () => import(/* webpackChunkName: "views-[request]" */ `@/views/${path}.vue`),
    loadingComponent: LottieComponent,
    delay: 100 // 延迟100ms后显示加载动画（避免快速加载时的闪烁）
  })

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: asyncComponent('HomeView')
    },
    {
      path: '/testcomponent',
      name: 'testcomponent',
      component: asyncComponent('TestComponentView')
    }
  ]
})
export default router
