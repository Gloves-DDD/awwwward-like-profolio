<template>
  <div
    id="cards_container"
    class="h-auto lg:h-screen w-auto px-[50px] overflow-scroll lg:overflow-visible whitespace-nowrap lg:whitespace-normal border-2 border-red-600"
  >
    <div
      id="card_1"
      class="w-[15rem] h-[21rem] bg-yellow-400 rounded-3xl m-[0.5rem] p-[0.5rem] inline-block"
    >
      <div class="w-[100%] h-1/2 tracking-wider leading-tight">
        <span class="px-2">Card.1</span>
        <div class="mt-10">
          <p class="px-1">
            Web experience<br />
            with character(s).
          </p>
          <span class="text-[0.7rem] font-bold text-neutral-100 bg-neutral-800 rounded-lg p-1"
            >Diary with a Wimpy kid</span
          >
        </div>
      </div>
      <div class="w-[100%] h-1/2 bg-purple-800 rounded-b-2xl"></div>
    </div>

    <div
      id="card_2"
      class="w-[15rem] h-[21rem] bg-[#fbe7ab] rounded-3xl m-[0.5rem] p-[0.5rem] inline-block"
    >
      <div class="w-[100%] h-1/2 tracking-wider leading-tight">
        <span class="px-2">Card.2</span>
        <div class="mt-10">
          <p class="px-1">
            Spreading<br />
            deliciousness.
          </p>
          <span class="text-[0.7rem] font-bold text-neutral-100 bg-neutral-800 rounded-lg p-1"
            >Sabra</span
          >
        </div>
      </div>
      <div class="w-[100%] h-1/2 bg-gray-300 rounded-b-2xl"></div>
    </div>

    <div
      id="card_3"
      class="w-[15rem] h-[21rem] bg-[#ed3902] rounded-3xl m-[0.5rem] p-[0.5rem] inline-block"
    >
      <div class="w-[100%] h-1/2 tracking-wider leading-tight text-neutral-100">
        <span class="px-2">Card.3</span>
        <div class="mt-10">
          <p class="px-1">
            A better butter<br />
            movie snack.
          </p>
          <span class="text-[0.7rem] font-bold text-neutral-800 bg-neutral-100 rounded-lg p-1"
            >Pop weaver</span
          >
        </div>
      </div>
      <div class="w-[100%] h-1/2 bg-blue-950 rounded-b-2xl"></div>
    </div>

    <div
      id="card_4"
      class="w-[15rem] h-[21rem] bg-neutral-800 rounded-3xl m-[0.5rem] p-[0.5rem] inline-block"
    >
      <div class="w-[100%] h-1/2 tracking-wider leading-tight text-neutral-100">
        <span class="px-2">Card.4</span>
        <div class="mt-10">
          <p class="px-1">
            Taking a swing at<br />
            fashion technology.
          </p>
          <span class="text-[0.7rem] font-bold text-neutral-800 bg-neutral-100 rounded-lg p-1"
            >Brickfielder</span
          >
        </div>
      </div>
      <div class="w-[100%] h-1/2 bg-black rounded-b-2xl"></div>
    </div>

    <div
      id="card_5"
      class="w-[15rem] h-[21rem] bg-[#f7d2b0] rounded-3xl m-[0.5rem] p-[0.5rem] inline-block"
    >
      <div class="w-[100%] h-1/2 tracking-wider leading-tight text-neutral-800">
        <span class="px-2">Card.5</span>
        <div class="mt-10">
          <p class="px-1">
            Friendly, caring,<br />
            supportive.
          </p>
          <span class="text-[0.7rem] font-bold text-neutral-800 bg-neutral-100 rounded-lg p-1"
            >ThirdLove</span
          >
        </div>
      </div>
      <div class="w-[100%] h-1/2 bg-[#f1b2b2] rounded-b-2xl"></div>
    </div>

    <div
      id="card_6"
      class="w-[15rem] h-[21rem] bg-white rounded-3xl m-[0.5rem] p-[0.5rem] inline-block"
    >
      <div class="w-[100%] h-1/2 tracking-wider leading-tight">
        <span class="px-2">Card.6</span>
        <div class="mt-10">
          <p class="px-1">
            Their policy is<br />
            privacy.
          </p>
          <span class="text-[0.7rem] font-bold text-neutral-100 bg-neutral-800 rounded-lg p-1"
            >Fastmail</span
          >
        </div>
      </div>
      <div class="w-[100%] h-1/2 bg-[#fee64d] rounded-b-2xl"></div>
    </div>
  </div>
</template>

<script setup>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
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
