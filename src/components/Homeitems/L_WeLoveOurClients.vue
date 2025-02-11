<template>
  <!-- WeLoveOurClients  -->
  <div
    id="we_love_our_clients"
    class="background_layer w-screen h-auto lg:h-screen border-4 border-red-400 flex flex-col items-center justify-center bg-white"
  >
    <!-- Text Part -->
    <div
      id="we_love_our_clients_text_container"
      class="lg:m-[3rem] overflow-hidden border-4 border-cyan-400"
    >
      <p id="we_love_our_clients_text" class="text-[2rem] lg:text-[4rem] m-[1rem]">
        We Love Our Clients
      </p>
    </div>

    <!-- Marquee Part -->
    <div id="we_love_our_clients_marquee_container" class="w-[80%] mb-[50px]">
      <Vue3Marquee
        :duration="75"
        class="border-2 border-black rounded-[1.5rem] lg:rounded-[2.5rem]"
      >
        <div v-for="img_src in imgs" :key="img_src.id">
          <img
            :src="img_src"
            :alt="img_src.id"
            class="mr-[3rem] my-[1rem] lg:my-[1.5rem] h-[1.75rem] lg:h-[2.5rem]"
          />
        </div>
      </Vue3Marquee>
    </div>
  </div>
</template>

<script setup>
import { gsap } from 'gsap'
import { Vue3Marquee } from 'vue3-marquee'

const imgs = [
  '/src/assets/images/we-love-our-clients/brickfielder.png',
  '/src/assets/images/we-love-our-clients/d-angelico.png',
  '/src/assets/images/we-love-our-clients/fastmail.png',
  '/src/assets/images/we-love-our-clients/frost-king.png',
  '/src/assets/images/we-love-our-clients/gummi-fun-mix.png',
  '/src/assets/images/we-love-our-clients/nivea.png',
  '/src/assets/images/we-love-our-clients/sabra.png',
  '/src/assets/images/we-love-our-clients/sour-jacks.png',
  '/src/assets/images/we-love-our-clients/sun-maid.png',
  '/src/assets/images/we-love-our-clients/thirdlove.png',
  '/src/assets/images/we-love-our-clients/vetnique.png',
  '/src/assets/images/we-love-our-clients/villa-yambol.png',
  '/src/assets/images/we-love-our-clients/welch.png',
  '/src/assets/images/we-love-our-clients/wimpy-kid.png',
  '/src/assets/images/we-love-our-clients/yen-press.png'
]
function weLoveOurClients() {
  var tl = gsap
    .timeline({
      ease: 'sine.inOut',
      scrollTrigger: {
        trigger: '#we_love_our_clients',
        toggleActions: 'play pause',
        start: 'top center',
        end: '+=800',
        scrub: 0.5,
        anticipatePin: 1,
        markers: true
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
    .to('.background_layer', { background: '#3d7353', duration: 3 }, '<')

  return tl
}
defineExpose({ weLoveOurClients })
</script>
