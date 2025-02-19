<template>
  <div id="black_marquee_warpper" class="relative h-auto lg:h-[330vh]">
    <!-- marquee转场前 / P1  -->
    <div
      id="svg_marquee_container"
      class="w-full lg:w-screen h-auto lg:h-screen p-[25px] md:p-[50px] lg:p-0 flex items-center justify-center"
    >
      <div
        data-speed="1"
        id="svg_marquee"
        class="w-full lg:w-screen h-auto lg:h-screen lg:scale-50 pt-[1rem] pb-[2rem] lg:py-[2rem] aspect-[3/2] lg:aspect-auto bg-neutral-800 rounded-[1rem] lg:rounded-[2.5rem]"
      >
        <div id="svg_marquee_opacity_warpper" class="h-full md:pb-[1rem] lg:pb-[6rem]">
          <Vue3Marquee id="represent_marquee" :duration="25">
            <p
              class="uppercase text-neutral-50 text-[1.5rem] lg:text-[6rem] font-MabryPro font-normal tracking-wider"
            >
              ❉ parts that represent a whole
            </p>
            <p
              class="uppercase text-neutral-50 text-[1.5rem] lg:text-[6rem] font-MabryPro font-normal tracking-wider"
            >
              ❉ parts that represent a whole
            </p>
          </Vue3Marquee>
          <div id="color_marquee" class="flex flex-col h-full justify-evenly">
            <Vue3Marquee :duration="16">
              <span
                class="bg-pink-400 rounded-full w-[10rem] h-[1rem] lg:w-[25rem] lg:h-[3rem]"
              ></span>
              <span class="w-[15rem]"></span>
              <span
                class="bg-pink-400 rounded-full w-[10rem] h-[1rem] lg:w-[25rem] lg:h-[3rem]"
              ></span>
              <span class="w-[15rem]"></span>
              <span
                class="bg-pink-400 rounded-full w-[10rem] h-[1rem] lg:w-[25rem] lg:h-[3rem]"
              ></span>
              <span class="w-[15rem]"></span>
            </Vue3Marquee>
            <Vue3Marquee :duration="20">
              <span
                class="bg-red-500 rounded-full w-[10rem] h-[1rem] lg:w-[25rem] lg:h-[3rem]"
              ></span>
              <span class="w-[15rem]"></span>
              <span
                class="bg-yellow-700 rounded-full w-[10rem] h-[1rem] lg:w-[25rem] lg:h-[3rem]"
              ></span>
              <span class="w-[15rem]"></span>
              <span
                class="bg-red-500 rounded-full w-[10rem] h-[1rem] lg:w-[25rem] lg:h-[3rem]"
              ></span>
              <span class="w-[15rem]"></span
            ></Vue3Marquee>
            <Vue3Marquee :duration="25">
              <span
                class="bg-green-900 rounded-full w-[10rem] h-[1rem] lg:w-[25rem] lg:h-[3rem]"
              ></span>
              <span class="w-[10rem]"></span>
              <span
                class="bg-green-900 rounded-full w-[10rem] h-[1rem] lg:w-[25rem] lg:h-[3rem]"
              ></span>
              <span class="w-[10rem]"></span>
              <span
                class="bg-green-900 rounded-full w-[10rem] h-[1rem] lg:w-[25rem] lg:h-[3rem]"
              ></span>
              <span class="w-[10rem]"></span>
            </Vue3Marquee>
          </div>
        </div>
      </div>
    </div>

    <!-- marquee转场后 / P2-->
    <div id="text_next_intro_marquee" class="lg:absolute lg:top-[27rem]">
      <div v-show="!mediaQuery.matches" class="bg-neutral-800 h-[6rem] pt-[2.5rem]">
        <Vue3Marquee :duration="15">
          <p class="uppercase text-[2rem] text-white mr-[4rem]">❉ parts that represent a whole</p>
          <p class="uppercase text-[2rem] text-white mr-[4rem]">❉ parts that represent a whole</p>
          <p class="uppercase text-[2rem] text-white mr-[4rem]">❉ parts that represent a whole</p>
        </Vue3Marquee>
      </div>
      <div id="text_next_svg_marquee" class="w-full h-auto border-4 border-black bg-neutral-800">
        <div class="p-[25px] md:p-[50px] lg:p-[4rem]">
          <p class="uppercase text-white font-MabryPro text-sm">rethink your product story</p>
          <p
            class="text-white text-[1.3rem] lg:text-[2rem] tracking-wide leading-[3rem] lg:leading-[5rem]"
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
        class="w-screen h-auto lg:h-screen flex justify-center items-center z-10"
      >
        <div
          data-speed="1"
          id="black_window_container"
          class="w-full lg:w-screen h-auto lg:h-screen flex flex-col lg:flex-row justify-evenly items-center bg-neutral-800 brightness-100"
        >
          <!-- Left -->
          <div id="black_window_left" class="flex items-center my-[2rem]">
            <p
              class="text-[1.5rem] text-white font-MabryPro font-normal text-center lg:text-nowrap uppercase"
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
import { mediaQuery } from '@/assets/utils/mediaquery'
import CompositionSvgComponent from './items/CompositionSvgComponent.vue'
import RotateLogoComponent from './items/RotateLogoComponent.vue'
gsap.registerPlugin(ScrollTrigger)

function SVGMarqueeTransition() {
  var tl = gsap
    .timeline({
      ease: 'sine.inOut',
      scrollTrigger: {
        trigger: '#svg_marquee_container',
        toggleActions: 'play pause',
        start: 'middle middle',
        end: '+=300',
        pin: true,
        scrub: 1
      }
    })
    .to('#svg_marquee', {
      scale: 1,
      borderRadius: 0,
      duration: 5
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
      duration: 2
    })
    .from(
      '#text_next_svg_marquee',
      {
        opacity: 0,
        duration: 2
      },
      '<'
    )

  return tl
}
function blackWindowContainer() {
  var tl = gsap
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
    .from('#black_window_center', { scale: 1.2 }, '<')

  var tll = gsap.timeline().to('#black_window_container', {
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
  })

  tl.add(tll)
  return tl
}
defineExpose({ SVGMarqueeTransition, blackWindowContainer })
</script>
