<template>
  <div class="relative w-[10rem] h-[2rem] overflow-hidden border-4 border-black">
    <p id="first" class="absolute -left-[10rem] text-red-500">第一段字幕第一段字幕</p>
    <p id="second" class="absolute -left-[10rem] text-orange-500">第二段字幕第二段字幕</p>
    <p id="third" class="absolute -left-[10rem] text-yellow-500">第三段字幕第三段字幕</p>
  </div>
</template>

<script setup>
import { gsap } from 'gsap'
import { onMounted } from 'vue'

onMounted(() => {
  var tl = gsap
    .timeline({})
    .to('#first', {
      ease: 'none',
      left: '20rem',
      repeat: -1,
      duration: 6
    })
    .to(
      '#second',
      {
        ease: 'none',
        left: '20rem',
        repeat: -1,
        duration: 6
      },
      '<2'
    )
    .to(
      '#third',
      {
        ease: 'none',
        left: '20rem',
        repeat: -1,
        duration: 6
      },
      '<2'
    )
  tl.play()
})
</script>
