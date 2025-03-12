<template>
  <!-- 01 /  INTRO TEXT / 你的用户需要的东西 -->
  <div
    data-speed="0.9"
    id="intro_text"
    class="px-[25px] sm:pb-[25px] md:px-[50px] lg:grid lg:grid-cols-5 lg:px-[8rem] lg:py-[2rem]"
  >
    <p
      data-speed="1.1"
      id="customers"
      class="font-MabryPro text-[min(1.5rem,5vw)] font-thin tracking-wider lg:col-span-1 lg:text-center"
    >
      Customers
    </p>
    <div class="lg:col-span-3">
      <div
        class="font-MabryPro flex flex-col text-[min(8vw,14rem)] leading-[min(10vw,6rem)] font-thin tracking-wider md:flex-row lg:block"
      >
        <div class="overflow-hidden">
          <p id="need" class="need_connection">Need</p>
        </div>
        <div class="overflow-hidden">
          <p id="connection" class="need_connection">Connection</p>
        </div>
      </div>
      <p class="font-MabryPro p-0 text-[min(3vw,1rem)] font-thin uppercase lg:py-[1rem]">
        They want to buy brands they love and trust.
      </p>
    </div>
    <div class="lg:col-span-1"></div>
  </div>

  <!-- 02 / INTRO IMG / 简短案例展示-->
  <div data-speed="1" id="intro_img_group" class="block h-auto lg:flex lg:h-[140vh] lg:px-[11rem]">
    <!-- left_image -->
    <div class="flex h-auto w-auto p-[25px] md:p-[50px] lg:h-[22rem] lg:w-[15rem] lg:p-0">
      <div
        id="intro_left_img"
        class="m-auto aspect-[15/22] w-[min(45vw,15rem)] rounded-[2.5rem] border-[0.7rem] border-blue-600 brightness-100"
      ></div>
    </div>
    <!-- right_image -->
    <SlideImg data-speed="1.2" id="intro_right_img" class="brightness-100 lg:mt-auto lg:ml-auto" />
  </div>
</template>

<script setup>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SlideImg from './items/SlideImg.vue'
import { onBeforeUnmount, onMounted } from 'vue'
gsap.registerPlugin(ScrollTrigger)

//动画部分
let introNextPartAnimation = gsap.matchMedia()
onMounted(() => {
  //动画骨架
  introNextPartAnimation.add('(min-width: 1025px)', () => {
    gsap.set('.need_connection', {
      y: '-10rem'
    })

    gsap
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
  })
  introNextPartAnimation.add('(min-width: 1025px)', () => {
    gsap
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
          scale: 0.7,
          opacity: 0
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
  })
})
onBeforeUnmount(() => {
  introNextPartAnimation.revert()
})
</script>
