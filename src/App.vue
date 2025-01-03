<template>
  <div id="smooth-wrapper">
    <AppHeader />
    <div id="smooth-content">
      <RouterView />
      <AppFooter />
    </div>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import AppFooter from './components/AppFooter.vue'
import AppHeader from './components/AppHeader.vue'
</script>

<style scoped></style>
