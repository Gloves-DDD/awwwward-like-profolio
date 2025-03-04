<template>
  <div
    id="cards_container"
    class="h-auto w-auto justify-center overflow-x-scroll border-y-2 border-red-600 px-[50px] whitespace-nowrap lg:flex lg:h-screen lg:flex-wrap lg:overflow-visible"
  >
    <!-- 1 -->
    <AnimationCardComposition
      id="card_1"
      brand-logo="/eye-catch-section/wimpykid-logo.png"
      brand-introduction="Web experience with character(s)."
      brand-name="Diary with a Wimpy kid"
      brand-img="/eye-catch-section/wimpykid.png"
      background-color="#ffe92f"
      introtext-color="black"
      brand-tag="black"
      text-color="white"
      link-address="https://wimpykid.com/"
    />
    <!-- 2 -->
    <AnimationCardComposition
      id="card_2"
      brand-logo="/eye-catch-section/sabra-logo.png"
      brand-introduction="Spreading deliciousness."
      brand-name="Sabra"
      brand-img="/eye-catch-section/sabra.png"
      background-color="#eadcab"
      introtext-color="black"
      brand-tag="black"
      text-color="white"
      link-address="https://sabra.com/"
    />
    <!-- 3 -->
    <AnimationCardComposition
      id="card_3"
      brand-logo="/eye-catch-section/popweaver-logo.png"
      brand-introduction="A better butter movie snack."
      brand-name="Pop weaver"
      brand-img="/eye-catch-section/popweaver.png"
      background-color="#ff4500"
      introtext-color="white"
      brand-tag="white"
      text-color="black"
      link-address="https://popweaver.edesigninteractive.com/"
    />
    <!-- 4 -->
    <AnimationCardComposition
      id="card_4"
      brand-logo="/eye-catch-section/brickfielder-logo.png"
      brand-introduction="Taking a swing at fashion technology."
      brand-name="Brickfielder"
      brand-img="/eye-catch-section/brickfielder.png"
      background-color="#262626"
      introtext-color="white"
      brand-tag="white"
      text-color="black"
      link-address="https://brickfielder.edesigninteractive.com/"
    />
    <!-- 5 -->
    <AnimationCardComposition
      id="card_5"
      brand-logo="/eye-catch-section/thirdlove-logo.png"
      brand-introduction="Friendly, caring, supportive."
      brand-name="ThirdLove"
      brand-img="/eye-catch-section/thirdlove.png"
      background-color="#ffc7b2"
      introtext-color="black"
      brand-tag="white"
      text-color="black"
      link-address="https://www.thirdlove.com/"
    />
    <!-- 6 -->
    <AnimationCardComposition
      id="card_6"
      brand-logo="/eye-catch-section/fastmail-logo.png"
      brand-introduction="Their policy is privacy."
      brand-name="Fastmail"
      brand-img="/eye-catch-section/fastmail.png"
      background-color="#ffffff"
      introtext-color="black"
      brand-tag="black"
      text-color="white"
      link-address="https://www.fastmail.com/"
    />
  </div>
</template>

<script setup>
import { mediaQuery } from '@/assets/utils/mediaquery'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import AnimationCardComposition from './items/AnimationCardComposition.vue'
import { onBeforeUnmount, onMounted } from 'vue'
import { OverlayScrollbars, ScrollbarsHidingPlugin, ClickScrollPlugin } from 'overlayscrollbars'
gsap.registerPlugin(ScrollTrigger)

OverlayScrollbars.plugin(ScrollbarsHidingPlugin, ClickScrollPlugin)
onMounted(() => {
  if (!mediaQuery.matches) {
    OverlayScrollbars(document.querySelector('#cards_container'), {
      overflow: {
        x: 'scroll'
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

const cardsContainer = () => {
  gsap.set('#card_1', { yPercent: 0, xPercent: -200, rotateZ: -30 })
  gsap.set('#card_2', { yPercent: 0, xPercent: -300, rotateZ: 60 })
  gsap.set('#card_3', { yPercent: 0, xPercent: -500, rotateZ: 45 })

  gsap.set('#card_4', { yPercent: 30, xPercent: 200, rotateZ: -70 })
  gsap.set('#card_5', { yPercent: -90, xPercent: 380, rotateZ: 75 })
  gsap.set('#card_6', { yPercent: -90, xPercent: 440, rotateZ: 85 })

  var triggerset = {
    ease: 'sine.inOut',
    scrollTrigger: {
      trigger: '#cards_container',
      toggleActions: 'play pause',
      start: 'top 80%',
      end: '+=1300',
      scrub: 0.1
    }
  }
  var front = 2,
    middle = 3,
    end = 2

  var card_1 = gsap
    .timeline(triggerset)
    .to('#card_1', {
      xPercent: -30,
      yPercent: 30,
      rotateZ: -5,
      duration: front
    })
    .to('#card_1', {
      rotateZ: 15,
      duration: middle,
      overwrite: false
    })
    .to('#card_1', {
      xPercent: -150,
      yPercent: 50,
      duration: end
    })

  var card_2 = gsap
    .timeline(triggerset)
    .to('#card_2', {
      xPercent: -50,
      yPercent: 40,
      rotateZ: -15,
      duration: front
    })
    .to('#card_2', {
      rotateZ: -45,
      duration: middle
    })
    .to('#card_2', {
      xPercent: -200,
      yPercent: 20,
      duration: end
    })

  var card_3 = gsap
    .timeline(triggerset)
    .to('#card_3', {
      xPercent: -90,
      yPercent: 20,
      rotateZ: 30,
      duration: front
    })
    .to('#card_3', {
      rotateZ: -30,
      duration: middle
    })
    .to('#card_3', {
      xPercent: -150,
      yPercent: -50,
      duration: end
    })

  var card_4 = gsap
    .timeline(triggerset)
    .to('#card_4', {
      xPercent: -110,
      yPercent: 30,
      rotateZ: -40,
      duration: front
    })
    .to('#card_4', {
      rotateZ: 30,
      duration: middle
    })
    .to('#card_4', {
      xPercent: 50,
      yPercent: -20,
      duration: end
    })

  var card_5 = gsap
    .timeline(triggerset)
    .to('#card_5', {
      xPercent: 170,
      yPercent: -80,
      rotateZ: 3,
      duration: front
    })
    .to('#card_5', {
      rotateZ: 40,
      duration: middle
    })
    .to('#card_5', {
      xPercent: 400,
      yPercent: -70,
      duration: end
    })

  var card_6 = gsap
    .timeline(triggerset)
    .to('#card_6', {
      xPercent: 150,
      yPercent: -70,
      rotateZ: -30,
      duration: front
    })
    .to('#card_6', {
      rotateZ: 10,
      duration: middle
    })
    .to('#card_6', {
      xPercent: 250,
      yPercent: -50,
      duration: end
    })

  var tl = gsap.timeline()
  tl.add(card_1)
  tl.add(card_2)
  tl.add(card_3)
  tl.add(card_4)
  tl.add(card_5)
  tl.add(card_6)
  return tl
}
onMounted(() => {
  if (mediaQuery.matches) {
    let card_1 = document.getElementById('card_1')
    let card_2 = document.getElementById('card_2')
    let card_3 = document.getElementById('card_3')
    let card_4 = document.getElementById('card_4')
    let card_5 = document.getElementById('card_5')
    let card_6 = document.getElementById('card_6')
    // tl 1
    let tl_card_1 = gsap
      .timeline()
      .to('#card_1', { rotateZ: 0, overwrite: false, duration: 0.5 })
      .to('#card_2', { x: 100, overwrite: false, duration: 0.5 }, '<')
    card_1.addEventListener('mouseenter', () => {
      tl_card_1.play()
    })
    card_1.addEventListener('mouseleave', () => {
      tl_card_1.reverse()
    })
    // tl 2
    let tl_card_2 = gsap
      .timeline()
      .to('#card_2', { rotateZ: 0, overwrite: false, duration: 0.5 })
      .to('#card_1', { x: -100, overwrite: false, duration: 0.5 }, '<')
      .to('#card_3', { x: 100, y: -50, overwrite: false, duration: 0.5 }, '<')
    card_2.addEventListener('mouseenter', () => {
      tl_card_2.play()
    })
    card_2.addEventListener('mouseleave', () => {
      tl_card_2.reverse()
    })
    // tl 3
    let tl_card_3 = gsap
      .timeline()
      .to('#card_3', { rotateZ: 0, overwrite: false, duration: 0.5 })
      .to('#card_2', { x: -100, overwrite: false, duration: 0.5 }, '<')
      .to('#card_4', { x: 100, y: -50, overwrite: false, duration: 0.5 }, '<')
    card_3.addEventListener('mouseenter', () => {
      tl_card_3.play()
    })
    card_3.addEventListener('mouseleave', () => {
      tl_card_3.reverse()
    })
    // tl 4
    let tl_card_4 = gsap
      .timeline()
      .to('#card_4', { rotateZ: 0, overwrite: false, duration: 0.5 })
      .to('#card_3', { x: -100, overwrite: false, duration: 0.5 }, '<')
      .to('#card_5', { x: 100, y: -50, overwrite: false, duration: 0.5 }, '<')
    card_4.addEventListener('mouseenter', () => {
      tl_card_4.play()
    })
    card_4.addEventListener('mouseleave', () => {
      tl_card_4.reverse()
    })
    // tl 5
    let tl_card_5 = gsap
      .timeline()
      .to('#card_5', { rotateZ: 0, overwrite: false, duration: 0.5 })
      .to('#card_4', { x: -100, overwrite: false, duration: 0.5 }, '<')
      .to('#card_6', { x: 100, y: -50, overwrite: false, duration: 0.5 }, '<')
    card_5.addEventListener('mouseenter', () => {
      tl_card_5.play()
    })
    card_5.addEventListener('mouseleave', () => {
      tl_card_5.reverse()
    })
    // tl 6
    let tl_card_6 = gsap.timeline().to('#card_6', { rotateZ: 0, overwrite: false, duration: 0.5 })
    card_6.addEventListener('mouseenter', () => {
      tl_card_6.play()
    })
    card_6.addEventListener('mouseleave', () => {
      tl_card_6.reverse()
    })
  }
})

onBeforeUnmount(() => {})

defineExpose({ cardsContainer })
</script>
