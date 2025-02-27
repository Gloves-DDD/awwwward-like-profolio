<template>
  <div id="brand_stories" class="slide_services flex w-full flex-col items-center lg:pb-[4rem]">
    <div data-speed="1.1" id="brand_stories_text_container" class="translate-y-0 overflow-hidden">
      <p
        id="brand_stories_text_content"
        class="translate-y-0 text-[min(8vw,4.5rem)] leading-[min(20vw,9rem)] tracking-normal"
      >
        Brand Stories Such As
      </p>
    </div>
    <div class="w-[60%] border-b-2 border-black pb-5 lg:w-[30rem]">
      <Vue3Marquee :duration="70">
        <div v-for="item in brand_stories_marquee_value" :key="item.id">
          <p
            class="font-MabryPro mr-[4rem] text-[min(10vw,3rem)] font-thin tracking-wider uppercase"
          >
            {{ item }}
          </p>
        </div>
      </Vue3Marquee>
    </div>
  </div>
</template>

<script setup>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Vue3Marquee } from 'vue3-marquee'
gsap.registerPlugin(ScrollTrigger)

const brand_stories_marquee_value = [
  '¯storytellers',
  '¯ideators',
  '¯innovators',
  '¯weatherizers',
  '¯flavorizers',
  '¯all-around good product havers',
  '¯legends'
]
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
