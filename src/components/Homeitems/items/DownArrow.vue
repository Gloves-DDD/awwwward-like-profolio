<template>
  <button
    id="circle_button"
    class="w-20 h-20 border-2 border-black rounded-full align-middle justify-center"
  >
    <p id="down_arrow" class="text-[3rem] font-light -translate-y-2">↓</p>
  </button>
</template>

<script setup>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
function downArrow() {
  var downArrow = gsap.timeline({
    ease: 'sine.inOut',
    scrollTrigger: {
      trigger: '#intro_part',
      toggleActions: 'play pause',
      start: 'top top',
      end: '+=500',
      scrub: 1.5
    }
  })
  downArrow.to('#circle_button', {
    y: 150,
    opacity: 0
  })

  gsap.to('#down_arrow', {
    y: 10,
    yoyo: true,
    repeat: -1,
    ease: 'power1'
  })
  return downArrow
}
var intro = gsap.timeline()
intro.add(downArrow)
</script>
