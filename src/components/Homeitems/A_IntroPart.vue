<template>
  <!-- 01 / 开头文本 + 小箭头 -->
  <div
    id="intro_part"
    class="bg-red-100 w-full h-auto lg:h-screen p-[25px] md:p-[50px] lg:p-[7rem] border-2 border-red-700"
  >
    <div class="w-full mt-[50px] lg:flex lg:justify-start border-2 border-orange-800">
      <p class="leading-tight">
        <span class="lg:block inline tracking-tighter font-normal lg:text-[5rem] text-[2.5rem]">
          Transiformative
        </span>
        <span class="tracking-tighter font-MabryPro font-medium lg:text-[4rem] text-[2.5rem]">
          Experiences
        </span>
        <span class="block font-extralight text-[2rem]"> For Product & Brands </span>
      </p>
      <div class="border-4 w-full lg:w-auto flex justify-center mt-[15rem] lg:ml-auto lg:my-0">
        <DownArrow class="lg:mt-auto lg:ml-auto" />
      </div>
    </div>

    <video
      id="intro_video"
      data-speed="1"
      autoplay
      loop
      muted
      src="/src/assets/Clouds.mp4"
      class="w-full lg:w-[48rem] lg:h-[16rem] mt-[7rem] origin-top-left static rounded-[1rem] md:rounded-[3rem] lg:rounded-[10rem] object-cover"
    ></video>
  </div>

  <div class="w-full lg:h-[30rem] flex border-4 border-red-400 p-[25px] md:p-[50px] lg:p-0">
    <div
      data-speed="0.9"
      id="intro_cards_container"
      class="overflow-scroll lg:overflow-visible whitespace-nowrap lg:whitespace-normal w-full h-auto m-0 lg:my-[4rem] lg:mx-[8rem] lg:ml-auto lg:w-[20rem] border-4 border-blue-500"
    >
      <div
        id="first_intro_card"
        class="w-[13rem] h-[17rem] pt-[1rem] pb-[1.5rem] bg-yellow-300 rounded-[1.5rem] inline-flex lg:absolute flex-col items-center lg:translate-x-20 lg:translate-y-20"
      >
        <img src="/src/assets/images/cards_component/frostking-logo.png" alt class="h-[3rem]" />

        <a class="mt-auto p-[.2rem] text-[.75rem] uppercase bg-white underline rounded-md"
          >www.frostking.com</a
        >
      </div>
      <div
        id="second_intro_card"
        class="w-[13rem] h-[17rem] pt-[1.25rem] pb-[1.5rem] bg-green-300 rounded-[1.5rem] inline-flex lg:absolute flex-col items-center lg:translate-x-10 lg:translate-y-10"
      >
        <img src="/src/assets/images/cards_component/popweaver-logo.png" alt class="" />

        <a class="mt-auto p-[.2rem] text-[.75rem] uppercase bg-white underline rounded-md"
          >www.popweaver.com</a
        >
      </div>
      <div
        id="third_intro_card"
        class="w-[13rem] h-[17rem] pt-[2.5rem] pb-[1.5rem] bg-blue-300 rounded-[1.5rem] inline-flex lg:absolute flex-col items-center"
      >
        <img src="/src/assets/images/cards_component/fastmail-logo.png" alt class="h-[1.5rem]" />

        <a class="mt-auto p-[.2rem] text-[.75rem] uppercase bg-white underline rounded-md"
          >www.fastmail.com</a
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import DownArrow from './items/DownArrow.vue'
gsap.registerPlugin(ScrollTrigger)

const videoAnimation = () => {
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
  tl.to('#intro_video', {
    yPercent: 50,
    height: '20rem',
    width: '30rem',
    borderRadius: 50
  })
  return tl
}
const introCards = () => {
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
defineExpose({ videoAnimation, introCards })
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
