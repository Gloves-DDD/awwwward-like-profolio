<template>
  <!-- 01 /  INTRO TEXT / 你的用户需要的东西 -->
  <div
    data-speed="0.9"
    id="intro_text"
    class="lg:grid lg:grid-cols-5 px-[25px] md:px-[50px] lg:px-[8rem] lg:py-[2rem] sm:pb-[25px] border-2 border-blue-400"
  >
    <p
      data-speed="1.1"
      id="customers"
      class="lg:col-span-1 text-[2rem] md:text-[3rem] lg:text-[1.5rem] font-MabryPro font-thin lg:tracking-wider border-2 border-red-600 lg:text-center"
    >
      Customers
    </p>
    <div id="" class="lg:col-span-3 border-2 border-red-600">
      <div
        class="flex lg:block border-2 text-[2rem] md:text-[3.5rem] lg:text-[6rem] font-MabryPro font-thin tracking-wider lg:leading-[6rem] border-yellow-300"
      >
        <div class="border-2 overflow-hidden">
          <p id="need" class="need_connection">Need</p>
        </div>
        <div class="border-2 overflow-hidden">
          <p id="connection" class="need_connection">Connection</p>
        </div>
      </div>
      <p
        class="p-0 lg:py-[1rem] text-[1rem] font-MabryPro font-thin uppercase border-2 border-green-600"
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
    class="block lg:flex h-auto lg:h-[140vh] lg:px-[11rem] border-4 border-green-600"
  >
    <!-- left_image -->
    <div
      class="p-[25px] md:p-[50px] lg:p-0 w-full lg:w-[15rem] lg:h-[22rem] aspect-square lg:aspect-auto flex border-2 border-red-600"
    >
      <div
        id="intro_left_img"
        class="w-full lg:w-[15rem] h-full lg:h-[22rem] m-auto border-[0.7rem] border-blue-600 rounded-[2.5rem] bg-blue-100 brightness-100"
      ></div>
    </div>
    <!-- right_image -->
    <div
      data-speed="1.2"
      class="m-0 lg:mt-auto lg:ml-auto w-full lg:w-[28rem] flex border-2 border-red-500"
    >
      <img
        src="/src/assets/images/brands-big-component/d-angelico.png"
        id="intro_right_img"
        class="w-full m-auto rounded-none lg:rounded-[3rem] origin-center brightness-100"
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
