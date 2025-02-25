<template>
  <div
    id="eye_grabbing"
    class="flex w-full flex-col items-center  p-[25px] text-[2rem] leading-[3rem] tracking-normal md:p-[50px] lg:text-[6rem] lg:leading-[9rem] lg:tracking-wider"
  >
    <div class="overflow-hidden transition-all">
      <p id="first_text_content" class="translate-y-0">We <span class="font-thin">Design</span></p>
    </div>
    <div class="m-3 flex items-center overflow-hidden lg:gap-4">
      <p class="second_text_content translate-y-0">Eye</p>
      <EyeComponent class="second_text_content translate-y-0" />
      <p class="second_text_content translate-y-0">Grabbing</p>
    </div>
    <div class="m-3 w-[60%] border-b-2 border-black lg:w-[30rem]">
      <Vue3Marquee :duration="13">
        <p class="text-[1.2rem] uppercase lg:text-[3rem]">¯content</p>
        <div class="w-[2.5rem] lg:w-[4rem]"></div>
        <p class="text-[1.2rem] uppercase lg:text-[3rem]">¯content</p>
        <div class="w-[2.5rem] lg:w-[4rem]"></div>
        <p class="text-[1.2rem] uppercase lg:text-[3rem]">¯content</p>
        <div class="w-[2.5rem] lg:w-[4rem]"></div>
      </Vue3Marquee>
    </div>
  </div>
</template>

<script setup>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Vue3Marquee } from 'vue3-marquee'
import EyeComponent from './items/EyeComponent.vue'

gsap.registerPlugin(ScrollTrigger)

const eyeGrabbing = () => {
  var tl = gsap
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

  return tl
}
defineExpose({ eyeGrabbing })
</script>
