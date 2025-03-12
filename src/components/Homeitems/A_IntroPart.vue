<template>
  <!-- 开头文本 -->
  <div id="intro_part" class="h-auto bg-red-100 p-[25px] md:p-[50px] lg:h-screen lg:p-[7rem]">
    <div class="mt-[100px] flex lg:mt-[40px]">
      <div class="leading-tight">
        <p class="text-[min(10vw,5rem)] font-normal tracking-tight">Transiformative</p>
        <p class="font-MabryPro text-[min(10vw,4rem)] font-medium tracking-tight">Experiences</p>
        <p class="text-[min(6vw,2rem)] font-extralight">For Product & Brands</p>
      </div>
      <!-- 小组件 -->
      <div v-if="mediaQuery.matches" class="ml-auto flex w-auto items-end">
        <DownArrow />
      </div>
    </div>

    <video
      id="intro_video"
      data-speed="1"
      autoplay
      loop
      muted
      src="/src/assets/Clouds.mp4"
      class="static mt-[7rem] aspect-[5/4] w-full origin-top-left rounded-[1rem] object-cover md:rounded-[3rem] lg:h-[16rem] lg:w-[48rem] lg:rounded-[10rem]"
    ></video>
  </div>

  <div class="h-auto w-full p-[25px] md:p-[50px] lg:h-[30rem] lg:p-0">
    <div
      data-speed="0.9"
      id="intro_cards_container"
      class="h-auto w-full p-3 whitespace-nowrap lg:mx-[8rem] lg:my-[4rem] lg:ml-auto lg:w-[20rem] lg:overflow-visible lg:whitespace-normal"
    >
      <div
        id="first_intro_card"
        class="mx-2 inline-flex h-[17rem] w-[13rem] shrink-0 flex-col items-center rounded-[1.5rem] bg-yellow-300 pb-[1.5rem] lg:absolute lg:translate-x-20 lg:translate-y-20"
      >
        <img
          src="/src/assets/images/cards_component/frostking-logo.png"
          alt
          class="absolute top-6 h-[3rem]"
        />

        <a class="mt-auto rounded-md bg-white p-[.2rem] text-[.75rem] uppercase underline"
          >www.frostking.com</a
        >
      </div>
      <div
        id="second_intro_card"
        class="mx-2 inline-flex h-[17rem] w-[13rem] shrink-0 flex-col items-center rounded-[1.5rem] bg-green-300 pb-[1.5rem] lg:absolute lg:translate-x-10 lg:translate-y-10"
      >
        <img
          src="/src/assets/images/cards_component/popweaver-logo.png"
          alt
          class="absolute top-6"
        />

        <a class="mt-auto rounded-md bg-white p-[.2rem] text-[.75rem] uppercase underline"
          >www.popweaver.com</a
        >
      </div>
      <div
        id="third_intro_card"
        class="mx-2 inline-flex h-[17rem] w-[13rem] shrink-0 flex-col items-center rounded-[1.5rem] bg-blue-300 pb-[1.5rem] lg:absolute"
      >
        <img
          src="/src/assets/images/cards_component/fastmail-logo.png"
          alt
          class="absolute top-8 h-[1.5rem]"
        />

        <a class="mt-auto rounded-md bg-white p-[.2rem] text-[.75rem] uppercase underline"
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
import { mediaQuery } from '@/utils/mediaquery'
import 'overlayscrollbars/overlayscrollbars.css'
import {
  OverlayScrollbars,
  ScrollbarsHidingPlugin,
  SizeObserverPlugin,
  ClickScrollPlugin
} from 'overlayscrollbars'
import { onBeforeUnmount, onMounted } from 'vue'
gsap.registerPlugin(ScrollTrigger)
OverlayScrollbars.plugin(ScrollbarsHidingPlugin, SizeObserverPlugin, ClickScrollPlugin)

//小设备-滚动条
onMounted(() => {
  if (!mediaQuery.matches) {
    OverlayScrollbars(document.querySelector('#intro_cards_container'), {
      overflow: {
        x: 'scroll',
        y: 'scroll'
      },
      scrollbars: {
        theme: 'os-theme-dark',
        visibility: 'auto',
        autoHide: 'move',
        autoHideDelay: 500,
        autoHideSuspend: false,
        dragScroll: true,
        clickScroll: false,
        pointers: ['mouse', 'touch', 'pen']
      }
    })
  }
})

//动画部分
let introPartAnimation = gsap.matchMedia()
onMounted(() => {
  //动画骨架
  introPartAnimation.add('(min-width: 1025px)', () => {
    //左边的视频元素
    gsap
      .timeline({
        ease: 'sine.inOut',
        scrollTrigger: {
          trigger: '#intro_part',
          toggleActions: 'play pause',
          start: 'top top',
          end: '+=500',
          scrub: 1.5
        }
      })
      .to('#intro_video', {
        yPercent: 50,
        height: '20rem',
        width: '30rem',
        borderRadius: 50
      })
  })
  introPartAnimation.add('(min-width: 1025px)', () => {
    //右边的卡片组合

    gsap
      .timeline({
        ease: 'sine.inOut',
        scrollTrigger: {
          trigger: '#intro_cards_container',
          toggleActions: 'play pause',
          start: 'top 70%',
          end: '+=350',
          scrub: 1.5
        }
      })
      .from('#first_intro_card', {
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
  })
})
onBeforeUnmount(() => {
  introPartAnimation.revert()
})
</script>
