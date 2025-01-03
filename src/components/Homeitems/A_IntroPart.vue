<template>
  <!-- 01 / 开头文本 + 小箭头 -->
  <div
    id="intro_part"
    class="bg-red-100 w-full lg:h-[45vw] lg:p-[7rem] h-auto pt-[150px] px-[50px] sm:pb-[25px]"
  >
    <div class="w-full lg:flex lg:justify-start">
      <p class="leading-tight">
        <span class="lg:block inline tracking-tighter font-normal lg:text-[5rem] text-[2.5rem]">
          Transiformative
        </span>
        <span class="tracking-tighter font-MabryPro font-medium lg:text-[4rem] text-[2.5rem]">
          Experiences
        </span>
        <span class="block font-extralight text-[2rem]"> For Product & Brands </span>
      </p>
      <div class="border-4 w-full lg:w-auto flex justify-center mt-[15rem] lg:m-0">
        <DownArrow class="lg:mt-auto lg:ml-auto" />
      </div>
    </div>
    <div class="w-full mt-[7rem] border-red-700 border-2">
      <video
        data-speed="1"
        id="test_video"
        autoplay
        loop
        muted
        src="/src/assets/Clouds.mp4"
        class="rounded-[50px] object-cover origin-top-left min-w-full static border-2 border-blue-500 lg:w-[28rem] lg:h-[19rem] lg:absolute"
      ></video>
    </div>
  </div>

  <div id="" class="w-full lg:h-[30rem] flex border-4 border-red-400 p-[50px] lg:p-0">
    <div
      data-speed="0.9"
      id="intro_cards_container"
      class="flex overflow-scroll w-auto m-0 lg:my-[4rem] lg:mx-[8rem] lg:ml-auto lg:w-[20rem] gap-4 lg:gap-0 border-4 border-blue-500"
    >
      <div
        id="first_intro_card"
        class="w-[13rem] h-[17rem] bg-yellow-300 rounded-[2.5rem] static lg:absolute lg:translate-x-20 lg:translate-y-20"
      ></div>
      <div
        id="second_intro_card"
        class="w-[13rem] h-[17rem] bg-green-300 rounded-[2.5rem] static lg:absolute lg:translate-x-10 lg:translate-y-10"
      ></div>
      <div
        id="third_intro_card"
        class="w-[13rem] h-[17rem] bg-blue-300 rounded-[2.5rem] static lg:absolute"
      ></div>
    </div>
  </div>
</template>

<script setup>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import DownArrow from './items/DownArrow.vue'
gsap.registerPlugin(ScrollTrigger)

function videoAnimation() {
  gsap.set('#test_video', {
    // x: '-1rem',
    // yPercent: -70,
    // width: '45rem',
    // height: '18rem',
    // borderRadius: 250
  })

  var tl = gsap.timeline({
    ease: 'sine.inOut',
    scrollTrigger: {
      trigger: '#intro_part',
      toggleActions: 'play pause',
      start: 'top top',
      end: '+=500',
      scrub: 1.5
    }
  })
  tl.to('#test_video', {
    x: 0,
    yPercent: 0,
    height: '19rem',
    width: '28rem',
    borderRadius: 50
  })
  return tl
}
function introCards() {
  var tl = gsap.timeline({
    ease: 'sine.inOut',
    scrollTrigger: {
      trigger: '#intro_cards_container',
      toggleActions: 'play pause',
      start: 'top 70%',
      end: '+=350',
      scrub: 1.5
    }
  })
  tl.from('#first_intro_card', {
    x: 750,
    y: -400,
    opacity: 0.2,
    duration: 3
  })
    .from(
      '#second_intro_card',
      {
        x: 750,
        y: -400,
        opacity: 0.2,
        duration: 3
      },
      '<1'
    )
    .from(
      '#third_intro_card',
      {
        x: 750,
        y: -400,
        opacity: 0.2,
        duration: 3
      },
      '<1'
    )
  return tl
}

const mediaQuery1024 = window.matchMedia('(min-width: 1024px)')
function queryMatch(x) {
  if (x.matches) {
    var intro = gsap.timeline()
    intro.add(videoAnimation)
    intro.add(introCards)
    console.log('Yes! Min-width is 1024px.')
  } else {
    console.log('No! Mediaquery is false.')
  }
}
mediaQuery1024.addEventListener('change', queryMatch)
queryMatch(mediaQuery1024)
</script>

<style scoped>
@media (min-width: 1024px) {
  #perscontainer {
    perspective: 100;
    perspective-origin: 150% 150%;
    transform-style: preserve-3d;
  }
  #first {
    transform: translateX(4rem) translateY(4rem) translateZ(10px);
  }
  #second {
    transform: translateX(2rem) translateY(2rem) translateZ(20px);
  }
  #third {
    transform: translateX(0rem) translateY(0rem) translateZ(30px);
  }
}
</style>
