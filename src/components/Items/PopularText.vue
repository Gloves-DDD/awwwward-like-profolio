<template>
  <div class="border-2 border-neutral-800 overflow-hidden">
    <p
      class="font-bold text-[2rem] uppercase transition-all ease-out delay-100 duration-700 translate-y-10 hover:translate-y-1"
    >
      Popular Text
    </p>
  </div>
  <div class="border-2 border-neutral-800 overflow-hidden">
    <p id="populartext" class="font-bold text-[2rem] translate-y-10 uppercase">GSAP Text</p>
  </div>
</template>

<script setup>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { onMounted } from 'vue'
gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  gsap.to('#populartext', {
    y: 0,
    duration: 1,
    scrollTrigger: {
      trigger: '#populartext',
      toggleActions: 'play pause',
      start: 'top 80%',
      end: '+=100',
      scrub: 1.5
    }
  })
})
</script>
<style scoped></style>
