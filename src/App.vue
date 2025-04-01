<template>
  <VueLenis
    ref="lenisRef"
    :options="{
      lerp: 0.05,
      smoothWheel: true,
      syncTouch: true,
      autoRaf: false,
      orientation: 'vertical'
    }"
    root
  >
    <div class="bg-neutral-100">
      <NavHeader class="z-50" />
      <RouterView v-slot="{ Component }">
        <template v-if="Component">
          <KeepAlive>
            <Suspense @pending="isLoading = true" @resolve="isLoading = false">
              <div class="router_root">
                <component :is="Component" />
              </div>
            </Suspense>
          </KeepAlive>
        </template>
      </RouterView></div
  ></VueLenis>
</template>

<script setup>
import { RouterView } from 'vue-router'
import { ref, watchEffect } from 'vue'
import { VueLenis } from 'lenis/vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { OverlayScrollbars, ScrollbarsHidingPlugin, ClickScrollPlugin } from 'overlayscrollbars'
import 'overlayscrollbars/overlayscrollbars.css'
import NavHeader from './components/NavHeader.vue'

gsap.registerPlugin(ScrollTrigger)

const lenisRef = ref()
watchEffect((onInvalidate) => {
  const update = (time) => lenisRef.value?.lenis?.raf(time * 1000)
  gsap.ticker.add(update)
  gsap.ticker.lagSmoothing(0)
  //
  onInvalidate(() => {
    gsap.ticker.remove(update)
  })
})

const isLoading = ref(false)
//全局滚动条
OverlayScrollbars.plugin(ScrollbarsHidingPlugin, ClickScrollPlugin)
OverlayScrollbars(document.body, {
  scrollbars: {
    theme: 'os-theme-dark',
    visibility: 'auto',
    autoHide: 'never',
    autoHideDelay: 250,
    autoHideSuspend: false,
    dragScroll: true,
    clickScroll: false,
    pointers: ['mouse', 'touch', 'pen']
  }
})
</script>
