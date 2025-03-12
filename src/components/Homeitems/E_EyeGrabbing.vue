<template>
  <div
    id="eye_grabbing"
    class="flex w-full flex-col items-center p-[25px] text-[min(10vw,6rem)] leading-[min(15vw,9rem)] tracking-normal md:p-[50px] lg:tracking-wider"
  >
    <div class="overflow-hidden transition-all">
      <p id="first_text_content" class="translate-y-0">We <span class="font-thin">Design</span></p>
    </div>
    <div class="m-3 flex items-center gap-4 overflow-hidden">
      <p class="second_text_content translate-y-0">Eye</p>
      <EyeComponent class="second_text_content translate-y-0" />
      <p class="second_text_content translate-y-0">Grabbing</p>
    </div>
    <div class="m-3 w-[60%] border-b-2 border-black pb-5 lg:w-[30rem]">
      <Vue3Marquee :duration="13">
        <p class="mr-[4rem] text-[min(10vw,3rem)] uppercase">¯content</p>

        <p class="mr-[4rem] text-[min(10vw,3rem)] uppercase">¯content</p>

        <p class="mr-[4rem] text-[min(10vw,3rem)] uppercase">¯content</p>
      </Vue3Marquee>
    </div>
  </div>
</template>

<script setup>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Vue3Marquee } from 'vue3-marquee'
import EyeComponent from './items/EyeComponent.vue'
import { onBeforeUnmount, onMounted } from 'vue'
gsap.registerPlugin(ScrollTrigger)

// 动画部分
let eyeGrabbingAnimation = gsap.matchMedia()
onMounted(() => {
  //动画骨架
  eyeGrabbingAnimation.add('(min-width: 1025px)', () => {
    gsap
      .timeline({
        ease: 'sine.inOut',
        scrollTrigger: {
          trigger: '#eye_grabbing',
          toggleActions: 'play pause',
          start: 'top 60%',
          end: '+=250',
          scrub: 1
        }
      })
      .from('#first_text_content', {
        yPercent: 100
      })
      .from(
        '.second_text_content',
        {
          yPercent: 100
        },
        '<'
      )
  })
})
onBeforeUnmount(() => {
  eyeGrabbingAnimation.revert()
})
</script>
