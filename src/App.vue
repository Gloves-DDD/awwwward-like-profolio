<template>
  <div id="smooth-wrapper">
    <AppHeader />
    <div id="smooth-content">
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import AppHeader from './components/AppHeader.vue'
</script>
