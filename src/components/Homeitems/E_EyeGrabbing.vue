<template>
  <div
    id="eye_grabbing"
    class="w-full p-[50px] flex flex-col items-center text-[2rem] lg:text-[7rem] tracking-normal lg:tracking-wider leading-[3rem] lg:leading-[9rem] border-4 border-lime-500"
  >
    <div class="overflow-hidden transition-all">
      <p id="first_text_content" class="translate-y-0">We <span class="font-thin">Design</span></p>
    </div>
    <div class="overflow-hidden">
      <p id="second_text_content" class="translate-y-0">
        Eye <span class="w-[2rem] h-[2rem] rounded-full bg-red-400">#_#</span> Grabbing
      </p>
    </div>
    <div class="w-[20rem] lg:w-[30rem] m-3 border-b-2 border-black">
      <Vue3Marquee :duration="13">
        <p class="text-[1.2rem] lg:text-[3rem] uppercase">¯content</p>
        <div class="w-[2.5rem] lg:w-[4rem]"></div>
        <p class="text-[1.2rem] lg:text-[3rem] uppercase">¯content</p>
        <div class="w-[2.5rem] lg:w-[4rem]"></div>
        <p class="text-[1.2rem] lg:text-[3rem] uppercase">¯content</p>
        <div class="w-[2.5rem] lg:w-[4rem]"></div>
      </Vue3Marquee>
    </div>
  </div>
</template>

<script setup>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Vue3Marquee } from 'vue3-marquee'
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
      '#second_text_content',
      {
        yPercent: 100
      },
      '<'
    )

  return tl
}
defineExpose({ eyeGrabbing })
</script>
