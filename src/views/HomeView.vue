<template>
  <!-- 01 -->
  <A_IntroPart />

  <!-- 02 -->
  <B_IntroNextPart />

  <!--03 / explain container / 解释用户需要的东西 -->
  <C_ExplainContainer />

  <!-- 04 -->
  <D_FirstMarquee />

  <!-- 05 / eye grabbing / 我们打造吸引眼球的E-Design -->
  <E_EyeGrabbing />

  <!-- 06 / CardsContainer / 合作品牌 静态元素 -->
  <F_CardsContainer />

  <!-- 07 /  客户的用户需求 -->
  <div
    class="h-[45vw] border-2 border-blue-600 flex flex-col items-center justify-center text-center uppercase"
  >
    <p class="text-[0.7rem] font-MabryPro tracking-wider mb-[2rem]">the reality</p>
    <p class="text-[2rem] font-MabryPro font-normal tracking-wider leading-tight">
      Your audience sees your product as<br />
      more than just a product. It’s<br />
      evaluated based on your social<br />
      media channels, website journeys, <br />and brand stories.
    </p>
  </div>

  <!-- 08 / BrandStories / 品牌故事 -->
  <H_BrandStories />

  <!-- 09 / SlideServices / 具体案例 -->
  <I_SlideServices />

  <!-- 10 / 我能提供的服务类型 -->
  <J_WeDo />

  <!-- (11) / background_layer -->
  <div id="background_layer" class="bg-cyan-50 border-4 border-cyan-700">
    <!-- 12 / ClientsLoveOurWork / 客户对我们的评价 -->
    <K_ClientsLoveOurWork />

    <!-- 13 / WeLoveOurClients  -->
    <L_WeLoveOurClients />

    <!-- 14 / ContactWithUs -->
    <M_ContactWithUs />

    <!-- 15 / ContactWithUsMarquee -->
    <N_ContactWithUsMarquee />
  </div>
</template>

<script setup>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { onMounted } from 'vue'

import A_IntroPart from '@/components/Homeitems/A_IntroPart.vue'
import B_IntroNextPart from '@/components/Homeitems/B_IntroNextPart.vue'
import C_ExplainContainer from '@/components/Homeitems/C_ExplainContainer.vue'
import D_FirstMarquee from '@/components/Homeitems/D_FirstMarquee.vue'
import E_EyeGrabbing from '@/components/Homeitems/E_EyeGrabbing.vue'
import F_CardsContainer from '@/components/Homeitems/F_CardsContainer.vue'
import H_BrandStories from '@/components/Homeitems/H_BrandStories.vue'
import I_SlideServices from '@/components/Homeitems/I_SlideServices.vue'
import J_WeDo from '@/components/Homeitems/J_WeDo.vue'
import K_ClientsLoveOurWork from '@/components/Homeitems/K_ClientsLoveOurWork.vue'
import L_WeLoveOurClients from '@/components/Homeitems/L_WeLoveOurClients.vue'
import M_ContactWithUs from '@/components/Homeitems/M_ContactWithUs.vue'
import N_ContactWithUsMarquee from '@/components/Homeitems/N_ContactWithUsMarquee.vue'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

// const markerA1 = {
//   startColor: 'red',
//   endColor: 'green',
//   fontSize: '18px',
//   indent: 50
// }
// const markerA2 = {
//   startColor: 'red',
//   endColor: 'green',
//   fontSize: '14px',
//   indent: 40
// }
// const markerA3 = {
//   startColor: 'red',
//   endColor: 'green',
//   fontSize: '10px',
//   indent: 30
// }
// const markerA1S = {
//   startColor: 'orange',
//   endColor: 'orange',
//   fontSize: '18px',
//   indent: 50
// }
// const markerA2S = {
//   startColor: 'orange',
//   endColor: 'orange',
//   fontSize: '14px',
//   indent: 40
// }
// const markerA3S = {
//   startColor: 'orange',
//   endColor: 'orange',
//   fontSize: '10px',
//   indent: 30
// }
// const markerB1 = {
//   startColor: 'purple',
//   endColor: 'yellow',
//   fontSize: '18px',
//   indent: 50
// }
// const markerB2 = {
//   startColor: 'purple',
//   endColor: 'yellow',
//   fontSize: '14px',
//   indent: 40
// }
// const markerB3 = {
//   startColor: 'purple',
//   endColor: 'yellow',
//   fontSize: '10px',
//   indent: 30
// }

// const markerB1S = {
//   startColor: 'blue',
//   endColor: 'blue',
//   fontSize: '18px',
//   indent: 50
// }

// const markerB2S = {
//   startColor: 'blue',
//   endColor: 'blue',
//   fontSize: '14px',
//   indent: 40
// }
// const markerB3S = {
//   startColor: 'blue',
//   endColor: 'blue',
//   fontSize: '10px',
//   indent: 30
// }

onMounted(() => {
  ScrollSmoother.create({
    smooth: 1,
    effects: true,
    smoothTouch: 0.1,
    speed: 0.65
  })
})
</script>

<style scoped></style>
