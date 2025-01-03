<template>
  <div id="black_marquee_warpper_A" class="border-4 border-orange-300 relative h-[125rem]">
    <!-- first marquee container / 夜幕Part1 入场动画 -->
    <div
      data-speed="1"
      id="black_marquee_warpper_AA"
      class="flex w-[100vw] h-[50vw] items-center justify-center border-4 border-lime-500"
    >
      <!-- black_marquee_container -->
      <svg
        viewBox="0 0 630 250"
        xmlns="http://www.w3.org/2000/svg"
        id="black_marquee_container"
        class="w-[48rem] h-[22rem] m-auto bg-neutral-800 overflow-hidden rounded-[2.5rem] border-4 border-red-500"
      >
        <g id="text_marquee_container">
          <text
            x="100%"
            y="20%"
            id="first_text"
            class="uppercase fill-neutral-50 text-[3rem] font-MabryPro font-normal tracking-wider"
          >
            ❉ parts that represent a whole
          </text>
          <text
            x="100%"
            y="20%"
            id="second_text"
            class="uppercase fill-neutral-50 text-[3rem] font-MabryPro font-normal tracking-wider"
          >
            ❉ parts that represent a whole
          </text>
        </g>
        <g id="color_marquee_container">
          <line
            id="first_color"
            x1="650"
            y1="100"
            x2="850"
            y2="100"
            stroke-linecap="round"
            class="stroke-red-600 stroke-[1.5rem]"
          />
          <line
            id="second_color"
            x1="650"
            y1="150"
            x2="850"
            y2="150"
            stroke-linecap="round"
            class="stroke-yellow-600 stroke-[1.5rem]"
          />
          <line
            id="third_color"
            x1="650"
            y1="150"
            x2="850"
            y2="150"
            stroke-linecap="round"
            class="stroke-lime-500 stroke-[1.5rem]"
          />
          <line
            id="forth_color"
            x1="650"
            y1="200"
            x2="850"
            y2="200"
            stroke-linecap="round"
            class="stroke-emerald-700 stroke-[1.5rem]"
          />
          <line
            id="fifth_color"
            x1="650"
            y1="200"
            x2="850"
            y2="200"
            stroke-linecap="round"
            class="stroke-emerald-700 stroke-[1.5rem]"
          />
        </g>
      </svg>
    </div>

    <div id="black_marquee_warpper_AB" class="border-4 border-yellow absolute top-[30rem]">
      <!-- text after marquee / 夜幕Part2 中段文字-->
      <div id="text_after_marquee" class="w-full h-[auto] border-4 border-black bg-neutral-800">
        <div class="p-[4rem]">
          <p class="uppercase text-white font-MabryPro text-sm">rethink your product story</p>
          <p class="text-white text-[2rem] tracking-wide leading-[5rem]">
            with <span class="rounded-full bg-pink-300 px-4 py-2">beautiful designs</span> , bespoke
            <span class="rounded-full bg-amber-400 px-4 py-2">copywriting</span> , and<br />
            <span class="rounded-full bg-purple-600 px-4 py-2">powerful visuals</span>
            that are fresh and authentic. To achieve this, we start with a
            <span class="rounded-full bg-red-600 px-4 py-2">discovery</span> phase analyzing your
            customers, and we work backward to find the most compelling emotional solution.
          </p>
        </div>
      </div>

      <!-- black window warpper / 夜幕Part3 离场动画-->
      <div
        id="black_window_warpper"
        class="w-[100vw] h-[50vw] flex justify-center items-center border-2 border-blue-600 z-10"
      >
        <div
          data-speed="1"
          id="black_window_container"
          class="w-[100vw] h-[50vw] flex justify-evenly items-center bg-neutral-800 border-2 border-pink-600 brightness-100"
        >
          <div class="w-[33%] h-[100%] flex items-center">
            <div
              id="black_window_left"
              class="m-auto w-[60%] h-[30%] border-4 rounded-3xl border-red-600 bg-neutral-100"
            ></div>
          </div>

          <div class="w-[33%] h-[100%] flex items-center">
            <div
              id="black_window_center"
              class="m-auto w-[100%] h-[100%] border-4 rounded-3xl border-blue-600 bg-neutral-100"
            ></div>
          </div>
          <div class="w-[33%] h-[100%] flex items-center">
            <div
              id="black_window_right"
              class="m-auto w-[45%] h-[30%] border-4 rounded-3xl border-yellow-400 bg-neutral-100"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
const markerB1 = {
  startColor: 'purple',
  endColor: 'yellow',
  fontSize: '18px',
  indent: 50
}
const markerB2 = {
  startColor: 'purple',
  endColor: 'yellow',
  fontSize: '14px',
  indent: 40
}

function blackMarqueeContainer() {
  var tl = gsap
    .timeline({
      ease: 'sine.inOut',
      scrollTrigger: {
        trigger: '#black_marquee_warpper_AA',
        toggleActions: 'play pause',
        start: 'middle middle',
        end: '+=300',
        pin: true,
        scrub: 1,
        markers: markerB1
      }
    })
    .to('#black_marquee_container', {
      width: '100vw',
      height: '50vw',
      borderRadius: 0,
      duration: 3
    })
    .to(
      '#color_marquee_container',
      {
        opacity: 0
      },
      '<'
    )
    .from('#text_after_marquee', {
      opacity: 0,
      duration: 2
    })
    .to(
      '#nav_bar',
      {
        color: 'white'
      },
      '<'
    )
  return tl
}
function firstMarqueeContainer() {
  var durationtime = 26
  var lead = durationtime / 2
  var tl = gsap
    .timeline()
    .to('#first_text', {
      x: '-203%',
      ease: 'none',
      duration: durationtime,
      repeat: -1
    })
    .to(
      '#second_text',
      {
        x: '-203%',
        ease: 'none',
        duration: durationtime,
        repeat: -1
      },
      `<${lead}`
    )
  return tl
}
function secondMarqueeContainer() {
  var tl = gsap
    .timeline()
    .to('#first_color', { ease: 'none', attr: { x1: -210, x2: -10 }, duration: 14, repeat: -1 })
    .to(
      '#second_color',
      { ease: 'none', attr: { x1: -210, x2: -10 }, duration: 10, repeat: -1 },
      '<2'
    )
    .to(
      '#third_color',
      { ease: 'none', attr: { x1: -210, x2: -10 }, duration: 10, repeat: -1 },
      '<5'
    )
    .to('#forth_color', { ease: 'none', attr: { x1: -210, x2: -10 }, duration: 8, repeat: -1 }, '<')
    .to(
      '#fifth_color',
      { ease: 'none', attr: { x1: -210, x2: -10 }, duration: 8, repeat: -1 },
      '<4'
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
        scrub: 1,
        markers: markerB1
      }
    })
    .from('#black_window_left', { opacity: 0 }, '<')
    .from('#black_window_center', { width: '20rem', height: '110%', y: -30 }, '<')
    .from('#black_window_right', { width: '5%', height: '5%', opacity: 0 }, '<')

  var tll = gsap.timeline().to('#black_window_container', {
    width: '36rem',
    height: '18rem',
    borderRadius: '2.5rem',
    filter: 'brightness(0)',
    scrollTrigger: {
      trigger: '#black_window_warpper',
      toggleActions: 'play pause',
      start: 'center center',
      end: '+=500',
      fastScrollEnd: true,
      pin: true,
      scrub: 0,
      markers: markerB2
    }
  })

  tl.add(tll)
  return tl
}

var first_marquee = gsap.timeline()
first_marquee.add(blackMarqueeContainer)
first_marquee.add(firstMarqueeContainer)
first_marquee.add(secondMarqueeContainer)
first_marquee.add(blackWindowContainer)
</script>
