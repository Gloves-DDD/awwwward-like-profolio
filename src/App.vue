<template>
  <LottieComponent />
  <div id="smooth-wrapper">
    <NavHeader />
    <div id="smooth-content">
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import { OverlayScrollbars, ScrollbarsHidingPlugin, ClickScrollPlugin } from 'overlayscrollbars'
// import { defineAsyncComponent } from 'vue'
import 'overlayscrollbars/overlayscrollbars.css'
import LottieComponent from './components/Homeitems/items/LottieComponent.vue'
import NavHeader from './components/NavHeader.vue'

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
