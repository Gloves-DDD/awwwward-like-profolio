<template>
  <!-- 01 /  INTRO TEXT / 你的用户需要的东西 -->
  <div
    id="intro_text"
    class="px-[25px] select-none sm:pb-[25px] md:px-[50px] lg:grid lg:grid-cols-5 lg:px-[8rem]"
  >
    <p
      id="customers"
      class="font-MabryPro text-[min(1.5rem,5vw)] font-thin tracking-wider lg:col-span-1 lg:text-center"
    >
      Customers
    </p>
    <div class="lg:col-span-3">
      <div class="flex flex-col md:flex-row lg:block">
        <div class="overflow-hidden">
          <p
            id="need_connection"
            class="font-MabryPro text-[min(8vw,14rem)] leading-[min(10vw,6rem)] font-thin tracking-wider"
          >
            Need Connection
          </p>
        </div>
      </div>
      <p class="font-MabryPro p-0 text-[min(3vw,1rem)] font-thin uppercase lg:py-[1rem]">
        They want to buy brands they love and trust.
      </p>
    </div>
    <div class="lg:col-span-1"></div>
  </div>

  <!-- 02 / INTRO IMG / 简短案例展示-->
  <div id="intro_img_group" class="block h-auto lg:flex lg:h-[140vh] lg:px-[11rem]">
    <!-- left_image -->
    <div class="flex h-auto w-auto p-[25px] md:p-[50px] lg:h-[22rem] lg:w-[15rem] lg:p-0">
      <div
        id="intro_left_img"
        class="m-auto aspect-[15/22] w-[min(45vw,15rem)] rounded-[2.5rem] border-[0.7rem] border-blue-600 brightness-100"
      ></div>
    </div>
    <!-- right_image -->
    <SlideImg id="intro_right_img" class="brightness-100 lg:mt-auto lg:ml-auto" />
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted } from 'vue'
import SlideImg from './items/SlideImg.vue'
import { createScope, createTimeline, onScroll, utils } from 'animejs'
//动画部分
const scope = createScope({
  mediaQueries: {
    isLarge: '(min-width: 1025px)'
  }
})
onMounted(() => {
  scope.add((self) => {
    //满足mediaquery 适用动画
    if (self.matches.isLarge) {
      //第一段动画
      utils.set('#need_connection', {
        y: '-100%'
      })
      const FirstTl = createTimeline({
        autoplay: onScroll({
          sync: 0.5,
          enter: 'bottom top',
          leave: '50% 50%'
        })
      })
      FirstTl.add('#intro_text', {
        y: { from: '-40%' }
      })
      FirstTl.add(
        '#customers',
        {
          opacity: { from: 0 }
        },
        '<<'
      )
      FirstTl.add('#need_connection', { y: 0 }, '<<')

      //第二段动画
      utils.set('#intro_right_img', {
        scale: 0.7,
        opacity: 0
      })
      const SecondTl = createTimeline({
        autoplay: onScroll({
          sync: 0.5,
          enter: 'bottom top',
          leave: 'top +=500'
        })
      })
      SecondTl.add('#intro_left_img', {
        opacity: { from: 0 },
        height: { from: 0 }
      })
      SecondTl.add(
        '#intro_right_img',
        {
          scale: 1,
          opacity: 1
        },
        '<+=1000'
      )
      SecondTl.add(
        '#intro_left_img',
        {
          scale: 0.7,
          filter: 'brightness(0)',
          borderRadius: 25
        },
        '<+=1000'
      )
      SecondTl.add('#intro_right_img', {
        scale: 0.7,
        filter: 'brightness(0)',
        borderRadius: 50
      })
    }
  })
})
onBeforeUnmount(() => {
  scope.revert()
})
</script>
