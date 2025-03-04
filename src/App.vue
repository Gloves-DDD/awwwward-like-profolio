<template>
  <div id="smooth-wrapper">
    <AppHeader />
    <div id="smooth-content">
      <RouterView class="scrollbar-thin scrollbar-thumb-sky-700 scrollbar-track-sky-300" />
    </div>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import AppHeader from './components/AppHeader.vue'
import 'overlayscrollbars/overlayscrollbars.css'
import { OverlayScrollbars, ScrollbarsHidingPlugin, ClickScrollPlugin } from 'overlayscrollbars'
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
