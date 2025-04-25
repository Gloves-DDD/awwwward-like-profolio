<template>
  <!-- 开头文本 -->
  <div id="intro_part" class="relative h-auto bg-[#fbd5ec] p-[25px] md:p-[50px] lg:h-[95vh]">
    <div class="mt-[100px] flex lg:mx-[5.5rem] lg:mt-[4.5rem]">
      <div class="leading-tight">
        <p class="text-[min(9vw,5rem)] font-normal tracking-tight">Transiformative</p>
        <p class="font-MabryPro text-[min(9vw,4rem)] font-thin tracking-tight">Experiences</p>
        <p class="text-[min(6vw,2rem)] font-extralight">For Product & Brands</p>
      </div>
      <!-- 小组件 -->
      <div v-if="mediaQuery.matches" class="absolute right-[10%] bottom-[5%]">
        <AsyncDownArrow />
      </div>
    </div>

    <!-- 视频 -->
    <video
      id="intro_video"
      data-speed="1"
      autoplay
      loop
      muted
      src="/src/assets/Clouds.mp4"
      class="static mt-[3rem] aspect-[5/4] w-full origin-top-left rounded-[1rem] object-cover md:rounded-[3rem] lg:ml-[5vw] lg:h-[40vh] lg:w-[42vw] lg:rounded-[10rem]"
    ></video>
  </div>

  <!-- 卡片组合 -->
  <div class="h-auto w-full p-[25px] md:p-[50px] lg:h-[30rem] lg:p-0">
    <div
      data-speed="0.9"
      id="intro_cards_container"
      class="h-auto w-full p-3 whitespace-nowrap lg:mx-[8rem] lg:my-[4rem] lg:ml-auto lg:w-[20rem]"
    >
      <!-- first-card -->
      <div
        class="intro-card mx-2 inline-flex h-[17rem] w-[13rem] shrink-0 flex-col items-center rounded-[1.5rem] bg-yellow-300 pb-[1.5rem] lg:absolute lg:translate-x-20 lg:translate-y-20"
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
      <!-- second-card -->
      <div
        class="intro-card mx-2 inline-flex h-[17rem] w-[13rem] shrink-0 flex-col items-center rounded-[1.5rem] bg-green-300 pb-[1.5rem] lg:absolute lg:translate-x-10 lg:translate-y-10"
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
      <!-- third-card -->
      <div
        class="intro-card mx-2 inline-flex h-[17rem] w-[13rem] shrink-0 flex-col items-center rounded-[1.5rem] bg-blue-300 pb-[1.5rem] lg:absolute"
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
import 'overlayscrollbars/overlayscrollbars.css'
import {
  OverlayScrollbars,
  ScrollbarsHidingPlugin,
  SizeObserverPlugin,
  ClickScrollPlugin
} from 'overlayscrollbars'
import { defineAsyncComponent, onBeforeUnmount, onMounted } from 'vue'
import { animate, createScope, createTimeline, eases, onScroll, utils } from 'animejs'
import { mediaQuery } from '@/utils/mediaquery'

OverlayScrollbars.plugin(ScrollbarsHidingPlugin, SizeObserverPlugin, ClickScrollPlugin)

//定义所需异步组件

const AsyncDownArrow = defineAsyncComponent({
  loader: () => import('./items/DownArrow.vue'), // 组件加载器
  timeout: 3000 // 超时时间
})

//动画部分
const scope = createScope({
  mediaQueries: {
    isLarge: '(min-width: 1025px)'
  }
})

onMounted(() => {
  //动画骨架
  scope.add((self) => {
    //满足mediaquery 适用动画
    if (self.matches.isLarge) {
      //左边的视频
      animate('#intro_video', {
        //animation 属性
        x: '10%',
        y: '70%',
        height: '20rem',
        width: '30rem',
        borderRadius: '2rem',
        ease: eases.inOutQuad,

        autoplay: onScroll({
          sync: 0.5,
          enter: '80% top',
          leave: '80% bottom'
        })
      })
      //右边的卡片组合
      const tl = createTimeline({
        autoplay: onScroll({
          sync: 0.5,
          enter: '80% top',
          leave: '60% center'
        })
      })
      utils.$('.intro-card').forEach(($intro_card, index) => {
        utils.set($intro_card, { translateX: '250%', translateY: '-50%' })
        if (index === 0) {
          tl.add($intro_card, {
            //animation 属性
            translateX: 0,
            translateY: 0,
            opacity: { from: 0 },
            ease: eases.outQuad
          })
        } else {
          tl.add(
            $intro_card,
            {
              //animation 属性
              translateX: 0,
              translateY: 0,
              opacity: { from: 0 },
              ease: eases.outQuad
            },
            '*=.5'
          )
        }
      })
    }
    // 不满足mediaquery 适用无动画的容器滚动条
    else {
      OverlayScrollbars(document.querySelector('#intro_cards_container'), {
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
})
onBeforeUnmount(() => {
  scope.revert()
})
</script>
