<template>
  <div id="brand_stories" class="slide_services w-full flex flex-col items-center lg:pb-[4rem]">
    <div data-speed="1.1" id="brand_stories_text_container" class="translate-y-0 overflow-hidden">
      <p
        id="brand_stories_text_content"
        class="translate-y-0 text-[1.5rem] md:text-[2.5rem] lg:text-[4.5rem] tracking-normal leading-[6rem] lg:leading-[9rem]"
      >
        Brand Stories Such As
      </p>
    </div>
    <div class="w-[60%] lg:w-[30rem] pb-5 border-b-2 border-black">
      <Vue3Marquee :duration="70">
        <p class="text-[1.2rem] lg:text-[3rem] font-MabryPro font-thin tracking-wider uppercase">
          ¯storytellers
        </p>
        <div class="w-[2.5rem] lg:w-[4rem]"></div>
        <p class="text-[1.2rem] lg:text-[3rem] font-MabryPro font-thin tracking-wider uppercase">
          ¯ideators
        </p>
        <div class="w-[2.5rem] lg:w-[4rem]"></div>
        <p class="text-[1.2rem] lg:text-[3rem] font-MabryPro font-thin tracking-wider uppercase">
          ¯innovators
        </p>
        <div class="w-[2.5rem] lg:w-[4rem]"></div>
        <p class="text-[1.2rem] lg:text-[3rem] font-MabryPro font-thin tracking-wider uppercase">
          ¯weatherizers
        </p>
        <div class="w-[2.5rem] lg:w-[4rem]"></div>
        <p class="text-[1.2rem] lg:text-[3rem] font-MabryPro font-thin tracking-wider uppercase">
          ¯flavorizers
        </p>
        <div class="w-[2.5rem] lg:w-[4rem]"></div>
        <p class="text-[1.2rem] lg:text-[3rem] font-MabryPro font-thin tracking-wider uppercase">
          ¯all-around good product havers
        </p>
        <div class="w-[2.5rem] lg:w-[4rem]"></div>
        <p class="text-[1.2rem] lg:text-[3rem] font-MabryPro font-thin tracking-wider uppercase">
          ¯legends
        </p>
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

const brandStories = () => {
  var tl = gsap
    .timeline({
      ease: 'sine.inOut',
      scrollTrigger: {
        trigger: '#brand_stories',
        toggleActions: 'play pause',
        start: 'top 90%',
        end: '+=400',
        scrub: 1
      }
    })
    .from('#brand_stories_text_content', {
      yPercent: 100
    })
    .from(
      '#brand_stories_text_container',
      {
        yPercent: -100
      },
      '<'
    )

  return tl
}
defineExpose({ brandStories })
</script>
