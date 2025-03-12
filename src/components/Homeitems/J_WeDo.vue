<template>
  <div ref="we_do_container" id="we_do" class="lg:relative lg:h-screen lg:w-screen">
    <!-- 转场前-文本元素 -->
    <div
      id="we_do_list"
      class="transition_group slide_services z-10 flex h-full w-full flex-col justify-evenly bg-neutral-800 p-[25px] md:p-[50px] lg:absolute lg:top-0 lg:left-0"
    >
      <div
        v-for="item in what_we_do"
        :key="item.id"
        class="border-b-2 border-black p-[0.5rem] md:p-[1rem] lg:px-[2rem]"
      >
        <p
          class="font-MabryPro border-neutral-700 text-[min(2rem,3.5vw)] font-thin tracking-widest text-white uppercase md:leading-[2rem]"
        >
          {{ item }}
        </p>
      </div>
    </div>
    <div
      v-if="mediaQuery.matches"
      class="absolute top-0 left-0 z-0 flex items-center justify-center"
    >
      <!-- 转场中 logo -->
      <div id="logo_warpper" class="transition_group h-screen w-screen overflow-hidden">
        <img
          id="bg_logo"
          src="/src/assets/images/logo_img/edesign-logo.svg"
          alt="logo"
          class="h-full w-full"
        />
      </div>
      <!-- 转场后 Canvas -->
      <div class="absolute top-0 left-0 -z-10 flex h-screen w-screen items-center justify-center">
        <canvas id="canvas" width="100vw" height="auto"></canvas>
      </div>
    </div>
    <div v-else class="flex flex-col items-center py-[64px]">
      <!-- logo -->
      <img
        src="/src/assets/images/we-do-imgs/edesign-logo.svg"
        alt="edesign-logo"
        class="h-[min(40vw,10rem)]"
      />
      <div class="p-[25px] lg:p-[50px]">
        <p class="font-MabryPro text-[min(10vw,3rem)] font-normal">Crush Your KPIs</p>
      </div>
      <div class="w-full">
        <Vue3Marquee v-if="marqueeIsLoaded" :duration="40">
          <!-- 1 -->
          <div class="mr-[2rem] flex flex-col items-center">
            <div class="flex h-[5rem] items-center align-middle">
              <img src="/src/assets/images/we-do-imgs/bottle_1.svg" alt="" class="h-[2.5rem]" />
            </div>
            <p class="font-MabryPro text-[1.5rem] font-thin tracking-wide">Purchase Frequency</p>
          </div>
          <!-- 2 -->
          <div class="mr-[2rem] flex flex-col items-center">
            <div class="flex h-[5rem] items-center align-middle">
              <img src="/src/assets/images/we-do-imgs/star_1.svg" alt="" class="h-[4rem]" />
            </div>
            <p class="font-MabryPro text-[1.5rem] font-thin tracking-wide">Cross-Shopping Rate</p>
          </div>
          <!-- 3 -->
          <div class="mr-[2rem] flex flex-col items-center">
            <div class="flex h-[5rem] items-center align-middle">
              <img src="/src/assets/images/we-do-imgs/triangle.svg" alt="" class="h-[4rem]" />
            </div>
            <p class="font-MabryPro text-[1.5rem] font-thin tracking-wide">Inventory Turnover</p>
          </div>
          <!-- 4 -->
          <div class="mr-[4rem] flex flex-col items-center">
            <div class="flex h-[5rem] items-center align-middle">
              <img src="/src/assets/images/we-do-imgs/pack_1.svg" alt="" class="h-[4rem]" />
            </div>
            <p class="font-MabryPro text-[1.5rem] font-thin tracking-wide">Brand Loyalty</p>
          </div>
          <!-- 5  -->
          <div class="mr-[4rem] flex flex-col items-center">
            <div class="flex h-[5rem] items-center align-middle">
              <img src="/src/assets/images/we-do-imgs/bottle_2.svg" alt="" class="h-[2.5rem]" />
            </div>
            <p class="font-MabryPro text-[1.5rem] font-thin tracking-wide">Share of Voice</p>
          </div>
          <!-- 6 -->
          <div class="mr-[4rem] flex flex-col items-center">
            <div class="flex h-[5rem] items-center align-middle">
              <img src="/src/assets/images/we-do-imgs/ellipse_1.svg" alt="" class="h-[4rem]" />
            </div>
            <p class="font-MabryPro text-[1.5rem] font-thin tracking-wide">Review Ratings</p>
          </div>
          <!-- 7 -->
          <div class="mr-[4rem] flex flex-col items-center">
            <div class="flex h-[5rem] items-center align-middle">
              <img src="/src/assets/images/we-do-imgs/pack_2.svg" alt="" class="h-[4rem]" />
            </div>
            <p class="font-MabryPro text-[1.5rem] font-thin tracking-wide">
              Loyalty Program Subscribers
            </p>
          </div>
          <!-- 8 -->
          <div class="mr-[4rem] flex flex-col items-center">
            <div class="flex h-[5rem] items-center align-middle">
              <img src="/src/assets/images/we-do-imgs/ellipse_2.svg" alt="" class="h-[4rem]" />
            </div>
            <p class="font-MabryPro text-[1.5rem] font-thin tracking-wide">
              Sales and Market Share
            </p>
          </div>
        </Vue3Marquee>
        <div v-else>Marquee is loading...</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { defineAsyncComponent, onBeforeUnmount, onMounted, onUnmounted, ref } from 'vue'
import { mediaQuery } from '@/utils/mediaquery'
import { matterJsCanvas, reset } from '@/utils/Matter'
gsap.registerPlugin(ScrollTrigger)

const what_we_do = [
  'rebranding',
  'Product Campaigns & Promotions',
  'Social Engagement Programs',
  'Creative & Content Development',
  'Website Design & Development',
  'Customer Loyalty Programs',
  'Mobile Experience & Games'
]

// 按需加载
defineAsyncComponent(() =>
  import('vue3-marquee').then((module) => {
    return module.Vue3Marquee
  })
)

// 延迟加载
const we_do_container = ref(null)
const marqueeIsLoaded = ref(false)
let observer
onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    if (mediaQuery.matches) {
      if (entries[0].isIntersecting) {
        matterJsCanvas()
        observer.unobserve(we_do_container.value)
      }
    } else {
      if (entries[0].isIntersecting && !marqueeIsLoaded.value) {
        marqueeIsLoaded.value = true
        observer.unobserve(we_do_container.value)
      }
    }
  })
  observer.observe(we_do_container.value)
})
onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})

//动画部分
let weDoAnimation = gsap.matchMedia()
onMounted(() => {
  //动画骨架
  weDoAnimation.add('(min-width: 1025px)', () => {
    gsap.set('#bg_logo', { transformOrigin: 'center', scale: 8, opacity: 0 })

    gsap
      .timeline({
        ease: 'sine.inOut',
        scrollTrigger: {
          trigger: '#we_do',
          toggleActions: 'play pause',
          start: 'top top',
          end: '+=700',
          scrub: 1,
          pin: true,
          fastScrollEnd: true,
          anticipatePin: 1
        }
      })
      .to('#bg_logo', {
        opacity: 1,
        duration: 2
      })
      .to('#we_do_list', {
        opacity: 0
      })
      .to('#bg_logo', {
        scale: 1,
        duration: 4
      })
      .to('.transition_group', {
        scale: 0.05,
        opacity: 0,
        duration: 8,
        onStart: () => {
          reset()
        }
      })
      .to('#bg_logo', {
        duration: 12
      })
  })
})
onBeforeUnmount(() => {
  weDoAnimation.revert()
})
</script>
