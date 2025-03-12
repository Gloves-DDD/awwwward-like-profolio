<template>
  <div id="black_marquee_warpper" class="relative h-auto lg:h-[330vh]">
    <!-- marquee转场前 / P1  -->
    <div
      id="svg_marquee_container"
      class="flex h-auto w-full items-center justify-center p-[25px] md:p-[50px] lg:h-screen lg:w-screen lg:p-0"
    >
      <div
        data-speed="1"
        id="svg_marquee"
        class="aspect-[3/2] h-auto w-full rounded-[1rem] bg-neutral-800 pt-[1rem] pb-[2rem] lg:aspect-auto lg:h-screen lg:w-screen lg:scale-50 lg:rounded-[2.5rem] lg:py-[2rem]"
      >
        <div id="svg_marquee_opacity_warpper" class="h-full md:pb-[1rem] lg:pb-[6rem]">
          <Vue3Marquee id="represent_marquee" :duration="25">
            <p
              class="font-MabryPro text-[1.5rem] font-normal tracking-wider text-neutral-50 uppercase lg:text-[6rem]"
            >
              ❉ parts that represent a whole
            </p>
            <p
              class="font-MabryPro text-[1.5rem] font-normal tracking-wider text-neutral-50 uppercase lg:text-[6rem]"
            >
              ❉ parts that represent a whole
            </p>
          </Vue3Marquee>
          <div id="color_marquee" class="flex h-full flex-col justify-evenly">
            <Vue3Marquee :duration="16">
              <span
                class="h-[1rem] w-[10rem] rounded-full bg-pink-400 lg:h-[3rem] lg:w-[25rem]"
              ></span>
              <span class="w-[15rem]"></span>
              <span
                class="h-[1rem] w-[10rem] rounded-full bg-pink-400 lg:h-[3rem] lg:w-[25rem]"
              ></span>
              <span class="w-[15rem]"></span>
              <span
                class="h-[1rem] w-[10rem] rounded-full bg-pink-400 lg:h-[3rem] lg:w-[25rem]"
              ></span>
              <span class="w-[15rem]"></span>
            </Vue3Marquee>
            <Vue3Marquee :duration="20">
              <span
                class="h-[1rem] w-[10rem] rounded-full bg-red-500 lg:h-[3rem] lg:w-[25rem]"
              ></span>
              <span class="w-[15rem]"></span>
              <span
                class="h-[1rem] w-[10rem] rounded-full bg-yellow-700 lg:h-[3rem] lg:w-[25rem]"
              ></span>
              <span class="w-[15rem]"></span>
              <span
                class="h-[1rem] w-[10rem] rounded-full bg-red-500 lg:h-[3rem] lg:w-[25rem]"
              ></span>
              <span class="w-[15rem]"></span
            ></Vue3Marquee>
            <Vue3Marquee :duration="25">
              <span
                class="h-[1rem] w-[10rem] rounded-full bg-green-900 lg:h-[3rem] lg:w-[25rem]"
              ></span>
              <span class="w-[10rem]"></span>
              <span
                class="h-[1rem] w-[10rem] rounded-full bg-green-900 lg:h-[3rem] lg:w-[25rem]"
              ></span>
              <span class="w-[10rem]"></span>
              <span
                class="h-[1rem] w-[10rem] rounded-full bg-green-900 lg:h-[3rem] lg:w-[25rem]"
              ></span>
              <span class="w-[10rem]"></span>
            </Vue3Marquee>
          </div>
        </div>
      </div>
    </div>

    <!-- marquee转场后 / P2-->
    <div id="text_next_intro_marquee" class="lg:absolute lg:top-[27rem]">
      <div v-show="!mediaQuery.matches" class="h-[6rem] bg-neutral-800 pt-[2.5rem]">
        <Vue3Marquee :duration="15">
          <p class="mr-[4rem] text-[2rem] text-white uppercase">❉ parts that represent a whole</p>
          <p class="mr-[4rem] text-[2rem] text-white uppercase">❉ parts that represent a whole</p>
          <p class="mr-[4rem] text-[2rem] text-white uppercase">❉ parts that represent a whole</p>
        </Vue3Marquee>
      </div>
      <div id="text_next_svg_marquee" class="h-auto w-full border-t-2 border-black bg-neutral-800">
        <div class="p-[25px] md:p-[50px] lg:p-[4rem]">
          <p class="font-MabryPro text-sm text-white uppercase">rethink your product story</p>
          <p
            class="text-[1.3rem] leading-[3rem] tracking-wide text-white lg:text-[2rem] lg:leading-[5rem]"
          >
            with<span class="lg:rounded-full lg:bg-pink-300 lg:px-4 lg:py-2">beautiful designs</span
            >, bespoke
            <span class="lg:rounded-full lg:bg-amber-400 lg:px-4 lg:py-2">copywriting</span>, and<br />
            <span class="lg:rounded-full lg:bg-purple-600 lg:px-4 lg:py-2">powerful visuals</span>
            that are fresh and authentic. To achieve this, we start with a
            <span class="lg:rounded-full lg:bg-red-600 lg:px-4 lg:py-2">discovery</span>phase
            analyzing your customers, and we work backward to find the most compelling emotional
            solution.
          </p>
        </div>
      </div>

      <!-- black window warpper 离场 / P3 -->
      <div
        id="black_window_warpper"
        class="z-10 flex h-auto w-screen items-center justify-center lg:h-screen"
      >
        <div
          data-speed="1"
          id="black_window_container"
          class="flex h-auto w-full flex-col items-center justify-evenly bg-neutral-800 brightness-100 lg:h-screen lg:w-screen lg:flex-row"
        >
          <!-- Left -->
          <div id="black_window_left" class="my-[2rem] flex items-center">
            <p
              class="font-MabryPro text-center text-[1.5rem] font-normal text-white uppercase lg:text-nowrap"
            >
              bits & bobs <br />
              transform your <br />
              brand
            </p>
          </div>
          <!-- Center -->
          <CompositionSvgComponent id="black_window_center" />
          <!-- Right -->
          <RotateLogoComponent id="rotate_circle" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Vue3Marquee } from 'vue3-marquee'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { mediaQuery } from '@/utils/mediaquery'
import { onBeforeUnmount, onMounted } from 'vue'
import CompositionSvgComponent from './items/CompositionSvgComponent.vue'
import RotateLogoComponent from './items/RotateLogoComponent.vue'
gsap.registerPlugin(ScrollTrigger)

//动画部分
let firstMarqueeAnimation = gsap.matchMedia()
onMounted(() => {
  //动画骨架
  firstMarqueeAnimation.add('(min-width: 1025px)', () => {
    gsap
      .timeline({
        ease: 'sine.inOut',
        scrollTrigger: {
          trigger: '#svg_marquee_container',
          toggleActions: 'play pause',
          start: 'middle middle',
          end: '+=300',
          pin: true,
          scrub: 0.5
        }
      })
      .to('#svg_marquee', {
        scale: 1,
        borderRadius: 0,
        duration: 7
      })
      .to(
        '#color_marquee',
        {
          opacity: 0,
          duration: 3
        },
        '<'
      )
      .from('#text_next_intro_marquee', {
        opacity: 0,
        duration: 1
      })
      .from(
        '#text_next_svg_marquee',
        {
          opacity: 0,
          duration: 1
        },
        '<'
      )
  })
  firstMarqueeAnimation.add('(min-width: 1025px)', () => {
    gsap
      .timeline({
        ease: 'none',
        scrollTrigger: {
          trigger: '#black_window_container',
          toggleActions: 'play pause',
          start: 'top 90%',
          end: '+=300',
          anticipatePin: 1,
          scrub: 1
        }
      })
      .fromTo('#black_window_center', { scale: 1.4 }, { scale: 1 }, '<')

    gsap.timeline().to(
      '#black_window_container',
      {
        scale: 0.5,
        borderRadius: '2.5rem',
        filter: 'brightness(0)',
        scrollTrigger: {
          trigger: '#black_window_warpper',
          toggleActions: 'play pause',
          start: 'center center',
          end: '+=500',
          fastScrollEnd: true,
          pin: true,
          scrub: 0
        }
      },
      '<2'
    )
  })
})
onBeforeUnmount(() => {
  firstMarqueeAnimation.revert()
})
</script>
