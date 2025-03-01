<template>
  <div
    id="cards_container"
    class="h-auto w-auto overflow-scroll border-2 border-red-600 px-[50px] whitespace-nowrap lg:h-screen lg:overflow-visible lg:whitespace-normal"
  >
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
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import AnimationCardComposition from './items/AnimationCardComposition.vue'
gsap.registerPlugin(ScrollTrigger)

const cardsContainer = () => {
  gsap.set('#cards_container', { position: 'relative' })
  gsap.set('#card_1', { position: 'absolute', top: 100, left: -100, rotateZ: -30 })
  gsap.set('#card_2', { position: 'absolute', top: 100, left: 0, rotateZ: 60 })
  gsap.set('#card_3', { position: 'absolute', top: 100, left: 100, rotateZ: 45 })
  gsap.set('#card_4', { position: 'absolute', top: 100, left: 1000, rotateZ: -70 })
  gsap.set('#card_5', { position: 'absolute', top: 100, left: 1100, rotateZ: 75 })
  gsap.set('#card_6', { position: 'absolute', top: 100, left: 1200, rotateZ: 85 })

  var triggerset = {
    ease: 'none',
    scrollTrigger: {
      trigger: '#cards_container',
      toggleActions: 'play pause',
      start: 'top 80%',
      end: '+=1000',
      scrub: 1,
      markers: {
        startColor: 'red',
        endColor: 'red',
        fontSize: '10px',
        indent: 0
      }
    }
  }
  var front = 2,
    middle = 3,
    end = 2

  var card_1 = gsap
    .timeline(triggerset)
    .to('#card_1', {
      left: 100,
      top: 60,
      rotateZ: -5,
      duration: front
    })
    .to('#card_1', {
      rotateZ: 15,
      duration: middle
    })
    .to('#card_1', {
      left: -200,
      duration: end
    })

  var card_2 = gsap
    .timeline(triggerset)
    .to('#card_2', {
      left: 300,
      top: 180,
      rotateZ: -15,
      duration: front
    })
    .to('#card_2', {
      rotateZ: -45,
      duration: middle
    })
    .to('#card_2', {
      left: -100,
      top: 100,
      duration: end
    })

  var card_3 = gsap
    .timeline(triggerset)
    .to('#card_3', {
      left: 500,
      top: 30,
      rotateZ: 30,
      duration: front
    })
    .to('#card_3', {
      rotateZ: -30,
      duration: middle
    })
    .to('#card_3', {
      left: 200,
      top: -100,
      duration: end
    })

  var card_4 = gsap
    .timeline(triggerset)
    .to('#card_4', {
      left: 730,
      top: 110,
      rotateZ: -40,
      duration: front
    })
    .to('#card_4', {
      rotateZ: 40,
      duration: middle
    })
    .to('#card_4', {
      left: 1100,
      top: -100,
      duration: end
    })

  var card_5 = gsap
    .timeline(triggerset)
    .to('#card_5', {
      left: 930,
      top: 10,
      rotateZ: 3,
      duration: front
    })
    .to('#card_5', {
      rotateZ: -32,
      duration: middle
    })
    .to('#card_5', {
      left: 1300,
      top: 100,
      duration: end
    })

  var card_6 = gsap
    .timeline(triggerset)
    .to('#card_6', {
      left: 1100,
      rotateZ: 45,
      duration: front
    })
    .to('#card_6', {
      rotateZ: 35,
      duration: middle
    })
    .to('#card_6', {
      left: 1300,
      top: 100,
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
defineExpose({ cardsContainer })
</script>
