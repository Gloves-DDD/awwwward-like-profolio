<template>
  <div class="flex h-screen w-screen items-center justify-center border-4">
    <SlideImg
      :interval="3000"
    />
  </div>
</template>

<script setup>
import SlideImg from '@/components/Homeitems/items/SlideImg.vue'
</script>
