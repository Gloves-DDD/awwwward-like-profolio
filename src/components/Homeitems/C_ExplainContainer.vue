<template>
  <div
    data-speed="1"
    id="explaincontainer"
    class="w-auto px-[8rem] py-[2rem] lg:py-[4rem] border-2 border-rose-400 overflow-hidden"
  >
    <p
      id="explain"
      class="text-center font-MabryPro font-thin lg:font-normal text-[1rem] lg:text-[1.4rem] uppercase tracking-wider leading-tight"
    >
      Crafting compelling, data-driven brand experiences that connect with audiences’ emotional core
      takes a wealth of research and understanding.
    </p>
  </div>
</template>

<script setup>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const explain = () => {
  var tl = gsap
    .timeline({
      ease: 'sine.inOut',
      scrollTrigger: {
        trigger: '#explaincontainer',
        toggleActions: 'play pause',
        start: 'top 70%',
        end: '+=300',
        scrub: 1
      }
    })
    .from('#explain', {
      y: '8rem'
    })

  return tl
}
defineExpose({ explain })
</script>
