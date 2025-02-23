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
</script>
