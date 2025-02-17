<template>
  <div id="black_marquee_warpper" class="relative h-auto lg:h-[330vh]">
    <!-- marquee转场前 / P1  -->
    <div
      id="svg_marquee_container"
      class="w-full lg:w-screen h-auto lg:h-screen p-[25px] md:p-[50px] lg:p-0 flex items-center justify-center border-2 border-lime-500"
    >
      <div
        data-speed="1"
        id="svg_marquee"
        class="w-full lg:w-[48rem] h-auto lg:h-[24rem] py-[2rem] md:py-[3rem] lg:py-[2rem] aspect-[3/2] lg:aspect-auto bg-neutral-800 rounded-[1rem] lg:rounded-[2.5rem]"
      >
        <div id="svg_marquee_opacity_warpper" class="h-full">
          <Vue3Marquee :duration="25" class="h-auto">
            <p
              class="uppercase text-neutral-50 text-[1.5rem] lg:text-[3rem] font-MabryPro font-normal tracking-wider"
            >
              ❉ parts that represent a whole
            </p>
            <p
              class="uppercase text-neutral-50 text-[1.5rem] lg:text-[3rem] font-MabryPro font-normal tracking-wider"
            >
              ❉ parts that represent a whole
            </p>
          </Vue3Marquee>
          <div class="flex flex-col h-full justify-evenly lg:h-[15rem]">
            <Vue3Marquee :duration="12" class="m-auto">
              <span
                class="bg-pink-400 rounded-full w-[10rem] h-[1rem] lg:h-[2rem] lg:w-[15rem]"
              ></span>
              <span class="w-[10rem]"></span>
              <span
                class="bg-pink-400 rounded-full w-[10rem] h-[1rem] lg:h-[2rem] lg:w-[15rem]"
              ></span>
              <span class="w-[10rem]"></span>
              <span
                class="bg-pink-400 rounded-full w-[10rem] h-[1rem] lg:h-[2rem] lg:w-[15rem]"
              ></span>
              <span class="w-[10rem]"></span>
            </Vue3Marquee>
            <Vue3Marquee :duration="20" class="m-auto">
              <span
                class="bg-red-500 rounded-full w-[10rem] h-[1rem] lg:h-[2rem] lg:w-[15rem]"
              ></span>
              <span class="w-[10rem]"></span>
              <span
                class="bg-yellow-700 rounded-full w-[10rem] h-[1rem] lg:h-[2rem] lg:w-[15rem]"
              ></span>
              <span class="w-[8rem]"></span>
              <span
                class="bg-red-500 rounded-full w-[10rem] h-[1rem] lg:h-[2rem] lg:w-[15rem]"
              ></span>
              <span class="w-[12rem]"></span
            ></Vue3Marquee>
            <Vue3Marquee :duration="25" class="m-auto">
              <span
                class="bg-green-900 rounded-full w-[10rem] h-[1rem] lg:h-[2rem] lg:w-[15rem]"
              ></span>
              <span class="w-[10rem]"></span>
              <span
                class="bg-green-900 rounded-full w-[10rem] h-[1rem] lg:h-[2rem] lg:w-[15rem]"
              ></span>
              <span class="w-[10rem]"></span>
              <span
                class="bg-green-900 rounded-full w-[10rem] h-[1rem] lg:h-[2rem] lg:w-[15rem]"
              ></span>
              <span class="w-[10rem]"></span>
            </Vue3Marquee>
          </div>
        </div>
      </div>
    </div>

    <!-- marquee转场后 / P2-->
    <div id="text_next_intro_marquee" class="lg:absolute lg:top-[20rem]">
      <div class="bg-neutral-800 h-[6rem] pt-[2.5rem]">
        <Vue3Marquee :duration="15">
          <p class="uppercase text-[2rem] text-white">❉ parts that represent a whole</p>
          <p class="uppercase text-[2rem] text-white">❉ parts that represent a whole</p>
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
          <div id="black_window_left" class="flex items-center">
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
          <svg
            id="rotate_circle"
            version="1.1"
            baseProfile="full"
            width="200"
            height="200"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            class="mscale-75 lg:scale-100 m-[2rem]"
          >
            <defs>
              <path
                id="path"
                d="M100,200C44.772,200,0,155.228,0,100S44.772,0,100,0s100,44.772,100,100S155.228,200,100,200"
                fill="none"
              />
            </defs>
            <use xlink:href="#path" />
            <text fill="white">
              <textPath xlink:href="#path" alignment-baseline="before-edge" letter-spacing="6.5px">
                · · · BRAND STROY TELLING AT ITS BEST
              </textPath>
            </text>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Vue3Marquee } from 'vue3-marquee'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import CompositionSvgComponent from './items/CompositionSvgComponent.vue'
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
      width: '100vw',
      height: '100vh',
      borderRadius: 0,
      duration: 5
    })
    .to(
      '#svg_marquee_opacity_warpper',
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
function rotateCircle() {
  var tl = gsap.to('#rotate_circle', {
    rotate: 360,
    repeat: -1,
    duration: 6,
    ease: 'none'
  })
  return tl
}
defineExpose({ SVGMarqueeTransition, blackWindowContainer })

var first_marquee = gsap.timeline()
first_marquee.add(rotateCircle)
</script>
