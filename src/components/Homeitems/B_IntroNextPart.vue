<template>
  <!-- 01 /  INTRO TEXT / 你的用户需要的东西 -->
  <div
    data-speed="0.9"
    id="intro_text"
    class="border-2 border-blue-400 px-[25px] sm:pb-[25px] md:px-[50px] lg:grid lg:grid-cols-5 lg:px-[8rem] lg:py-[2rem]"
  >
    <p
      data-speed="1.1"
      id="customers"
      class="font-MabryPro border-2 border-red-600 text-[2rem] font-thin md:text-[3rem] lg:col-span-1 lg:text-center lg:text-[1.5rem] lg:tracking-wider"
    >
      Customers
    </p>
    <div id="" class="border-2 border-red-600 lg:col-span-3">
      <div
        class="font-MabryPro flex flex-col border-2 border-yellow-300 text-[2rem] font-thin tracking-wider md:flex-row md:text-[3.5rem] lg:block lg:text-[6rem] lg:leading-[6rem]"
      >
        <div class="overflow-hidden border-2">
          <p id="need" class="need_connection">Need</p>
        </div>
        <div class="overflow-hidden border-2">
          <p id="connection" class="need_connection">Connection</p>
        </div>
      </div>
      <p
        class="font-MabryPro border-2 border-green-600 p-0 text-[1rem] font-thin uppercase lg:py-[1rem]"
      >
        They want to buy brands they love and trust.
      </p>
    </div>
    <div class="lg:col-span-1"></div>
  </div>

  <!-- 02 / INTRO IMG / 简短案例展示-->
  <div
    data-speed="1"
    id="intro_img_group"
    class="block h-auto border-4 border-green-600 lg:flex lg:h-[140vh] lg:px-[11rem]"
  >
    <!-- left_image -->
    <div
      class="flex aspect-square w-full border-2 border-red-600 p-[25px] md:p-[50px] lg:aspect-auto lg:h-[22rem] lg:w-[15rem] lg:p-0"
    >
      <div
        id="intro_left_img"
        class="m-auto h-full w-full rounded-[2.5rem] border-[0.7rem] border-blue-600 bg-blue-100 brightness-100 lg:h-[22rem] lg:w-[15rem]"
      ></div>
    </div>
    <!-- right_image -->
    <div
      data-speed="1.2"
      class="m-0 flex w-full border-2 border-red-500 lg:mt-auto lg:ml-auto lg:w-[28rem]"
    >
      <img
        src="/src/assets/images/brands-big-component/d-angelico.png"
        id="intro_right_img"
        class="m-auto w-full origin-center rounded-none brightness-100 lg:rounded-[3rem]"
        alt=""
      />
    </div>
  </div>
</template>

<script setup>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const introText = () => {
  gsap.set('.need_connection', {
    y: '-10rem'
  })

  var tl = gsap
    .timeline({
      ease: 'sine.inOut',
      scrollTrigger: {
        trigger: '#intro_text',
        toggleActions: 'play pause',
        start: 'top 90%',
        end: '+=400',
        scrub: 1
      }
    })
    .from('#customers', {
      opacity: 0
    })
    .to(
      '#need',
      {
        y: 0
      },
      '<'
    )
    .to(
      '#connection',
      {
        y: 0
      },
      '<0.1'
    )
  return tl
}
const introImg = () => {
  var tl = gsap
    .timeline({
      ease: 'sine.inOut',
      scrollTrigger: {
        trigger: '#intro_img_group',
        toggleActions: 'play pause',
        start: 'top 80%',
        end: '+=1200',
        scrub: 1
      }
    })
    .from('#intro_left_img', {
      opacity: 0,
      height: 0
    })
    .from(
      '#intro_right_img',
      {
        scale: 0.7
      },
      '>1'
    )
    .to(
      '#intro_left_img',
      {
        scale: 0.7,
        filter: 'brightness(0)',
        borderRadius: 25
      },
      '>1'
    )
    .to('#intro_right_img', {
      scale: 0.7,
      filter: 'brightness(0)',
      borderRadius: 50
    })
  return tl
}
defineExpose({ introText, introImg })
</script>
