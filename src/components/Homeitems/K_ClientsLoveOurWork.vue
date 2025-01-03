<template>
  <div
    id="clients_love_our_work"
    class="w-[100vw] h-[50vw] flex flex-col items-center relative p-[3rem] border-4"
  >
    <div class="text-[4rem] leading-[6rem] flex flex-col items-center">
      <p id="clients_first_line" class="tracking-wider">
        Our <span class="font-thin font-MabryPro text-[4.5rem]">Clients</span>
      </p>
      <p id="clients_second_line" class="tracking-wide">
        <em class="font-MabryPro font-thin text-red-500">love** </em><span>our </span><em>work</em>
      </p>
    </div>

    <div id="cards_layer" class="relative flex justify-center m-4">
      <!-- blue card -->
      <div
        id="blue_card"
        class="w-[50rem] h-[18rem] bg-[#73c7ff] rounded-[3rem] flex flex-col justify-center items-center absolute top-[0rem]"
      >
        <p class="bg-white rounded-[0.5rem] p-1 text-[1.5rem] mt-6 mb-[4rem] leading-tight">
          “eDesign Interactive is a leader in design innovation.”
        </p>
        <div class="w-[38rem] grid-cols-3 grid">
          <div class="flex">
            <div class="bg-neutral-100 w-[3rem] h-[3rem] rounded-full mr-2"></div>
            <div class="flex flex-col text-[0.8rem] leading-tight">
              <p class="font-MabryPro font-bold tracking-wide">Roland Nichols</p>
              <p class="tracking-tight opacity-50">Marketing Manager</p>
              <p class="tracking-tight">Fastmail</p>
            </div>
          </div>
          <div class="flex justify-center">
            <button
              class="bg-black text-white text-[0.7rem] px-[1.5rem] underline font-MabryPro tracking-wider rounded-3xl font-thin"
            >
              Read more in Clutch
            </button>
          </div>
        </div>
      </div>

      <!-- yellow card -->
      <div
        id="yellow_card"
        class="w-[50rem] h-[18rem] bg-[#f9d83f] rounded-[3rem] flex flex-col justify-center items-center absolute top-[20rem]"
      >
        <div
          class="mt-[3rem] mb-[4rem] flex flex-col justify-center items-center leading-tight tracking-wide"
        >
          <p class="bg-white rounded-[0.5rem] px-1 text-[1.5rem]">
            “eDesign Interactive are wonderful, and we love
          </p>
          <p class="bg-white rounded-[0.5rem] px-1 text-[1.5rem]">working with them!"</p>
        </div>

        <div class="w-[38rem] grid-cols-3 grid">
          <div class="flex">
            <div class="bg-neutral-100 w-[3rem] h-[3rem] rounded-full mr-2"></div>
            <div class="flex flex-col text-[0.8rem] leading-tight">
              <p class="font-MabryPro font-bold">Shaelyn Germain-Dupre</p>
              <p class="text-[0.6rem] tracking-tight opacity-50">Global Engagement Manager</p>
              <p class="text-[0.6rem] tracking-tight">Wimpy Kid, Inc.</p>
            </div>
          </div>
          <div class="flex justify-center">
            <button
              class="bg-black text-white text-[0.7rem] px-[1.5rem] underline font-MabryPro tracking-wider rounded-3xl font-thin"
            >
              Read more in Clutch
            </button>
          </div>
        </div>
      </div>

      <!-- green card -->
      <div
        id="green_card"
        class="w-[50rem] h-[18rem] bg-[#abd373] rounded-[3rem] flex flex-col justify-center items-center absolute top-[40rem]"
      >
        <div
          class="mt-[3rem] mb-[4rem] flex flex-col justify-center items-center leading-tight tracking-wide"
        >
          <p class="bg-white rounded-[0.5rem] px-1 text-[1.5rem]">
            "We’ve seen an increase in our site traffic — we’re
          </p>
          <p class="bg-white rounded-[0.5rem] px-1 text-[1.5rem]">
            hitting almost 100,000 viewers per month.”
          </p>
        </div>

        <div class="w-[38rem] grid-cols-3 grid">
          <div class="flex">
            <div class="bg-neutral-100 w-[3rem] h-[3rem] rounded-full mr-2"></div>
            <div class="flex flex-col text-[0.8rem] leading-tight">
              <p class="font-MabryPro font-bold">Chandler Gotschlich</p>
              <p class="text-[0.6rem] tracking-tight opacity-50">Associate Director of Marketing</p>
              <p class="text-[0.6rem] tracking-tight">Sabra Dipping Company</p>
            </div>
          </div>
          <div class="flex justify-center">
            <button
              class="bg-black text-white text-[0.7rem] px-[1.5rem] underline font-MabryPro tracking-wider rounded-3xl font-thin"
            >
              Read more in Clutch
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

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
const markerB3 = {
  startColor: 'purple',
  endColor: 'yellow',
  fontSize: '10px',
  indent: 30
}
const markerB1S = {
  startColor: 'blue',
  endColor: 'blue',
  fontSize: '18px',
  indent: 50
}
function clientsLoveOurWork() {
  gsap.set('#blue_card', { transformOrigin: 'top' })
  gsap.set('#yellow_card', { transformOrigin: 'top' })
  gsap.set('#green_card', { transformOrigin: 'top' })

  // 入场动画
  var tl_1 = gsap
    .timeline({
      ease: 'sine.inOut'
    })
    .from('#clients_first_line', {
      opacity: 0,
      y: -60,
      scrollTrigger: {
        trigger: '#clients_love_our_work',
        toggleActions: 'play pause',
        start: 'top 70%',
        end: '+=300',
        scrub: 1,
        anticipatePin: 1,
        markers: markerB1
      }
    })
    .from('#clients_second_line', {
      opacity: 0,
      y: 60,
      scrollTrigger: {
        trigger: '#clients_love_our_work',
        toggleActions: 'play pause',
        start: 'top 70%',
        end: '+=300',
        scrub: 1,
        anticipatePin: 1,
        markers: markerB1S
      }
    })
    .from('#blue_card', {
      top: '5rem',
      scrollTrigger: {
        trigger: '#clients_love_our_work',
        toggleActions: 'play pause',
        start: 'top 70%',
        end: '+=300',
        scrub: 1,
        anticipatePin: 1,
        markers: markerB1S
      }
    })

  // 卡片动画
  var tl_2 = gsap
    .timeline({
      ease: 'sine.inOut',
      scrollTrigger: {
        trigger: '#clients_love_our_work',
        toggleActions: 'play pause',
        start: 'top top',
        end: '+=1000',
        scrub: 1,
        fastScrollEnd: true,
        pin: true,
        anticipatePin: 1,
        markers: markerB2
      }
    })
    .to('#yellow_card', {
      top: '1rem'
    })
    .to(
      '#green_card',
      {
        top: '20rem'
      },
      '<'
    )
    .to(
      '#blue_card',
      {
        scale: 0.95
      },
      '<'
    )
    .to(
      '#background_layer',
      {
        backgroundColor: '#fbf9c2'
      },
      '<'
    )

    .to('#green_card', {
      top: '2rem'
    })
    .to(
      '#blue_card',
      {
        scale: 0.9
      },
      '<'
    )
    .to(
      '#yellow_card',
      {
        scale: 0.95
      },
      '<'
    )
    .to(
      '#background_layer',
      {
        backgroundColor: '#cbdfb1'
      },
      '<'
    )

  // 离场动画
  var tl_3 = gsap
    .timeline({
      ease: 'sine.inOut',
      scrollTrigger: {
        trigger: '#clients_love_our_work',
        toggleActions: 'play pause',
        start: 'bottom 90%',
        end: '+=500',
        scrub: 1,
        anticipatePin: 1,
        markers: markerB3
      }
    })
    .to('#clients_first_line', { y: -80, duration: 7 })
    .to('#clients_second_line', { y: -90, duration: 7 }, '<2')

    .to('#blue_card', { top: '-3rem', duration: 5 }, '<1')

    .to('#blue_card', { top: '-6rem', duration: 5 })
    .to('#yellow_card', { top: '-3rem', duration: 5 }, '<')

    .to('#blue_card', { top: '-9rem', duration: 7 })
    .to('#yellow_card', { top: '-6rem', duration: 7 }, '<')
    .to('#green_card', { top: '-3rem', duration: 7 }, '<')

    .to('#cards_layer', { y: -60, duration: 5 })

  tl_1.add(tl_2)
  tl_1.add(tl_3)

  return tl_1
}
var clients_love_our_work = gsap.timeline()
clients_love_our_work.add(clientsLoveOurWork)
</script>
