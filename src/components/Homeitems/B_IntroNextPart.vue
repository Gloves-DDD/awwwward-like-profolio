<template>
  <!-- 01 /  INTRO TEXT / 你的用户需要的东西 -->
  <div data-speed="0.8" id="intro_text" class="flex mx-[8rem] my-[2rem] border-2 border-blue-400">
    <p
      data-speed="1.1"
      id="customers"
      class="w-[13rem] text-[1.5rem] mt-[2rem] font-MabryPro font-thin tracking-wider"
    >
      Customers
    </p>
    <div id="needconnection">
      <div class="text-[6rem] font-MabryPro font-thin tracking-wider leading-[6rem]">
        <div class="overflow-hidden">
          <p id="need" class="-translate-y-[6rem]">Need</p>
        </div>
        <div class="overflow-hidden">
          <p id="connection" class="-translate-y-[6rem]">Connection</p>
        </div>
      </div>
      <p class="mt-[1rem] text-[1rem] font-MabryPro font-thin uppercase">
        They want to buy brands they love and trust.
      </p>
    </div>
  </div>

  <!-- 02 / INTRO IMG / 简短案例展示-->
  <div
    data-speed="1"
    id="intro_img_group"
    class="flex h-[40rem] mx-[8rem] mt-[10rem] border-2 border-green-600"
  >
    <!-- left_image -->
    <div class="w-[15rem] h-[22rem] ml-[2rem] flex border-2 border-red-600">
      <div
        id="intro_left_img"
        class="w-[15rem] h-[22rem] m-auto border-[0.7rem] border-blue-600 rounded-[2.5rem] bg-blue-100 brightness-100"
      ></div>
    </div>
    <!-- right_image -->
    <div
      data-speed="1.2"
      class="mt-auto ml-auto mr-[3rem] w-[28rem] h-[35rem] flex border-2 border-red-500"
    >
      <div
        id="intro_right_img"
        class="w-[28rem] h-[35rem] m-auto border-[0.7rem] border-rose-400 rounded-[3rem] flex relative origin-center bg-pink-50 brightness-100"
      >
        <div
          id="intro_img_right_title"
          class="w-[10rem] h-[5rem] border-[0.7rem] border-pink-200 rounded-[1rem] m-[2rem] mr-auto absolute left-2"
        ></div>
        <div
          id="intro_img_right_lable"
          class="w-[5rem] h-[5rem] border-[0.7rem] border-pink-200 rounded-[1rem] m-[2rem] ml-auto absolute right-2"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const markerA1 = {
  startColor: 'red',
  endColor: 'green',
  fontSize: '18px',
  indent: 50
}
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

function introText() {
  var tl = gsap
    .timeline({
      ease: 'sine.inOut',
      scrollTrigger: {
        trigger: '#intro_text',
        toggleActions: 'play pause',
        start: 'top 90%',
        end: '+=400',
        markers: markerA1,
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
function introImg() {
  var tlLeft = gsap
    .timeline({
      ease: 'sine.inOut',
      scrollTrigger: {
        trigger: '#intro_img_group',
        toggleActions: 'play pause',
        start: 'top 70%',
        end: '+=1000',
        markers: markerB1,
        scrub: 0
      }
    })
    .from('#intro_left_img', {
      opacity: 0,
      height: 0,
      duration: 5
    })
    .to(
      '#intro_left_img',
      {
        width: '11rem',
        height: '15rem',
        filter: 'brightness(0)',
        borderRadius: 25,
        duration: 6
      },
      '>4'
    )

  gsap.set('#intro_img_right_title', { width: 0, height: 0, opacity: 0 })
  gsap.set('#intro_img_right_lable', { width: 0, height: 0, opacity: 0 })

  var tlRight = gsap
    .timeline({
      ease: 'sine.inOut',
      scrollTrigger: {
        trigger: '#intro_right_img',
        toggleActions: 'play pause',
        start: 'top 60%',
        end: '+=800',
        fastScrollEnd: true,
        markers: markerB2,
        scrub: 1
      }
    })
    .from('#intro_right_img', {
      opacity: 0,
      width: '20rem',
      height: '24rem',
      immediateRender: false,
      duration: 3
    })
    .fromTo(
      '#intro_img_right_title',
      { width: '0rem', height: '0rem', opacity: 0 },
      { width: '10rem', height: '5rem', opacity: 1 },
      '>0.2'
    )
    .fromTo(
      '#intro_img_right_lable',
      { width: '0rem', height: '0rem', opacity: 0 },
      { width: '5rem', height: '5rem', opacity: 1 },
      '>0.2'
    )
    .to(
      '#intro_right_img',
      {
        width: '22rem',
        height: '28rem',
        filter: 'brightness(0)',
        borderRadius: 50,
        duration: 4
      },
      '>4'
    )
  tlLeft.add(tlRight)
  return tlLeft
}

var next_intro = gsap.timeline()
next_intro.add(introText)
next_intro.add(introImg)
</script>
