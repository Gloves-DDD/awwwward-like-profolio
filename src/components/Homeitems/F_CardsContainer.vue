<template>
  <div
    id="cards_container"
    class="h-[45vw] w-auto border-2 border-red-600 flex items-center justify-center gap-2"
  >
    <div id="card_1" class="w-[15rem] h-[18rem] bg-yellow-400 rounded-3xl p-[0.5rem]">
      <div class="w-[100%] h-1/2 tracking-wider leading-tight">
        <span class="px-2">Lable</span>
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

    <div id="card_2" class="w-[15rem] h-[18rem] bg-[#fbe7ab] rounded-3xl p-[0.5rem]">
      <div class="w-[100%] h-1/2 tracking-wider leading-tight">
        <span class="px-2">Lable</span>
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

    <div id="card_3" class="w-[15rem] h-[18rem] bg-[#ed3902] rounded-3xl p-[0.5rem]">
      <div class="w-[100%] h-1/2 tracking-wider leading-tight text-neutral-100">
        <span class="px-2">Lable</span>
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

    <div id="card_4" class="w-[15rem] h-[18rem] bg-neutral-800 rounded-3xl p-[0.5rem]">
      <div class="w-[100%] h-1/2 tracking-wider leading-tight text-neutral-100">
        <span class="px-2">Lable</span>
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

    <div id="card_5" class="w-[15rem] h-[18rem] bg-[#f7d2b0] rounded-3xl p-[0.5rem]">
      <div class="w-[100%] h-1/2 tracking-wider leading-tight text-neutral-800">
        <span class="px-2">Lable</span>
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

    <div id="card_6" class="w-[15rem] h-[18rem] bg-white rounded-3xl p-[0.5rem]">
      <div class="w-[100%] h-1/2 tracking-wider leading-tight">
        <span class="px-2">Lable</span>
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

function cardsContainer() {
  gsap.set('#card_1', { x: -200, y: -60, rotateZ: -30 })
  gsap.set('#card_2', { x: -250, y: 60, rotateZ: 60 })
  gsap.set('#card_3', { x: -300, y: -80, rotateZ: 45 })
  gsap.set('#card_4', { x: 300, y: 40, rotateZ: -70 })
  gsap.set('#card_5', { x: 250, y: -100, rotateZ: 75 })
  gsap.set('#card_6', { x: 200, y: 20, rotateZ: 85 })

  var triggerset = {
    ease: 'none',
    scrollTrigger: {
      trigger: '#cards_container',
      toggleActions: 'play pause',
      start: 'top 70%',
      end: '+=1200',
      scrub: 3,
      markers: {
        startColor: 'red',
        endColor: 'red',
        fontSize: '10px',
        indent: 0
      }
    }
  }
  var front = 5,
    middle = 4,
    end = 3

  var card_1 = gsap
    .timeline(triggerset)
    .to('#card_1', {
      x: 100,
      rotateZ: -5,
      duration: front
    })
    .to('#card_1', {
      rotateZ: 15,
      duration: middle
    })
    .to('#card_1', {
      x: -200,
      duration: end
    })

  var card_2 = gsap
    .timeline(triggerset)
    .to('#card_2', {
      x: 90,
      rotateZ: -15,
      duration: front
    })
    .to('#card_2', {
      rotateZ: -45,
      duration: middle
    })
    .to('#card_2', {
      x: -500,
      y: -200,
      duration: end
    })

  var card_3 = gsap
    .timeline(triggerset)
    .to('#card_3', {
      x: 40,
      rotateZ: 15,
      duration: front
    })
    .to('#card_3', {
      rotateZ: -30,
      duration: middle
    })
    .to('#card_3', {
      x: -500,
      y: -300,
      duration: end
    })

  var card_4 = gsap
    .timeline(triggerset)
    .to('#card_4', {
      x: -40,
      rotateZ: -20,
      duration: front
    })
    .to('#card_4', {
      rotateZ: 40,
      duration: middle
    })
    .to('#card_4', {
      x: 500,
      y: -300,
      duration: end
    })

  var card_5 = gsap
    .timeline(triggerset)
    .to('#card_5', {
      x: -90,
      rotateZ: 3,
      duration: front
    })
    .to('#card_5', {
      rotateZ: -32,
      duration: middle
    })
    .to('#card_5', {
      x: 500,
      y: -200,
      duration: end
    })

  var card_6 = gsap
    .timeline(triggerset)
    .to('#card_6', {
      x: -90,
      rotateZ: 3,
      duration: front
    })
    .to('#card_6', {
      rotateZ: 42,
      duration: middle
    })
    .to('#card_6', {
      x: 500,
      y: -100,
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
var tl = gsap.timeline()
tl.add(cardsContainer)
</script>
