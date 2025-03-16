<template>
  <div id="smooth-wrapper" class="bg-neutral-100">
    <NavHeader class="z-50" />
    <div id="smooth-content">
      <RouterView v-slot="{ Component }">
        <template v-if="Component">
          <KeepAlive>
            <Suspense @pending="isLoading = true" @resolve="isLoading = false">
              <div class="router_root">
                <component :is="Component" />
              </div>
            </Suspense> </KeepAlive
        ></template>
      </RouterView>
    </div>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import { OverlayScrollbars, ScrollbarsHidingPlugin, ClickScrollPlugin } from 'overlayscrollbars'
import 'overlayscrollbars/overlayscrollbars.css'
import NavHeader from './components/NavHeader.vue'
import { ref } from 'vue'

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
