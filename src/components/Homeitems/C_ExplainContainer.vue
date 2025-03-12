<template>
  <div
    data-speed="1"
    id="explain_container"
    class="w-auto overflow-hidden p-[25px] pb-0 md:p-[50px] lg:px-[8rem] lg:py-[4rem]"
  >
    <p
      id="explain"
      class="font-MabryPro text-center text-[min(5vw,1.4rem)] leading-tight font-thin tracking-wider uppercase lg:font-normal"
    >
      Crafting compelling, data-driven brand experiences that connect with audiences’ emotional core
      takes a wealth of research and understanding.
    </p>
  </div>
</template>

<script setup>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { onBeforeUnmount, onMounted } from 'vue'
gsap.registerPlugin(ScrollTrigger)

//动画部分
let explainContainerAnimation = gsap.matchMedia()
onMounted(() => {
  //动画骨架
  explainContainerAnimation.add('(min-width: 1025px)', () => {
    gsap
      .timeline({
        ease: 'sine.inOut',
        scrollTrigger: {
          trigger: '#explain_container',
          toggleActions: 'play pause',
          start: 'top 70%',
          end: '+=300',
          scrub: 1
        }
      })
      .from('#explain', {
        y: '8rem'
      })
  })
})
onBeforeUnmount(() => {
  explainContainerAnimation.revert()
})
</script>
