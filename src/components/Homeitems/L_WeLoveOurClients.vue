<template>
  <!-- WeLoveOurClients  -->
  <div
    id="we_love_our_clients"
    class="background_layer flex h-auto w-screen flex-col items-center justify-center bg-white p-[25px] lg:h-screen lg:p-[50px]"
  >
    <!-- Text Part -->
    <div id="we_love_our_clients_text_container" class="mb-[1rem] overflow-hidden lg:mb-[4rem]">
      <p id="we_love_our_clients_text" class="text-[min(8vw,4.5rem)]">We Love Our Clients</p>
    </div>

    <!-- Marquee Part -->
    <div id="we_love_our_clients_marquee_container" class="w-[80%]">
      <Vue3Marquee
        :duration="75"
        class="rounded-[1.5rem] border-2 border-black lg:rounded-[2.5rem]"
      >
        <div v-for="img_src in imgs" :key="img_src.id">
          <img
            :src="img_src"
            :alt="img_src.id"
            class="my-[1rem] mr-[3rem] h-[1.75rem] lg:my-[1.5rem] lg:h-[2.5rem]"
          />
        </div>
      </Vue3Marquee>
    </div>
  </div>
</template>

<script setup>
import { gsap } from 'gsap'
import { onBeforeUnmount, onMounted } from 'vue'
import { Vue3Marquee } from 'vue3-marquee'

const imgs = [
  '/we-love-our-clients/brickfielder.png',
  '/we-love-our-clients/d-angelico.png',
  '/we-love-our-clients/fastmail.png',
  '/we-love-our-clients/frost-king.png',
  '/we-love-our-clients/gummi-fun-mix.png',
  '/we-love-our-clients/nivea.png',
  '/we-love-our-clients/sabra.png',
  '/we-love-our-clients/sour-jacks.png',
  '/we-love-our-clients/sun-maid.png',
  '/we-love-our-clients/thirdlove.png',
  '/we-love-our-clients/vetnique.png',
  '/we-love-our-clients/villa-yambol.png',
  '/we-love-our-clients/welch.png',
  '/we-love-our-clients/wimpy-kid.png',
  '/we-love-our-clients/yen-press.png'
]

let weLoveOurClientsAnimation = gsap.matchMedia()
onMounted(() => {
  //动画骨架
  weLoveOurClientsAnimation.add('(min-width: 1025px)', () => {
    gsap
      .timeline({
        ease: 'sine.inOut',
        scrollTrigger: {
          trigger: '#we_love_our_clients',
          toggleActions: 'play pause',
          start: 'top 40%',
          end: '+=600',
          scrub: 0.5,
          anticipatePin: 1
        }
      })

      // text位移入场
      .from(
        '#we_love_our_clients_text',
        {
          y: '-7rem',
          duration: 3
        },
        '<'
      )
      // marquee位移入场
      .from(
        '#we_love_our_clients_marquee_container',
        {
          width: '7rem',
          opacity: 0,
          duration: 3
        },
        '<'
      )
      // text位移离场
      .to('#we_love_our_clients_text', { y: '7rem', duration: 4 }, '>3')
      // marquee位移离场
      .to('#we_love_our_clients_marquee_container', { y: '5rem', opacity: 0, duration: 4 }, '<')
      // 背景渐变
      .to('.background_layer', { background: '#3d7353', duration: 2 }, '<2')
  })
})
onBeforeUnmount(() => {
  weLoveOurClientsAnimation.revert()
})
</script>
