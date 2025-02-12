<template>
  <!-- 01 -->
  <A_IntroPart ref="refA" />

  <!-- 02 -->
  <B_IntroNextPart ref="refB" />

  <!--03 / explain container / 解释用户需要的东西 -->
  <C_ExplainContainer ref="refC" />

  <!-- 04 -->
  <D_FirstMarquee ref="refD" />

  <!-- 05 / eye grabbing / 我们打造吸引眼球的E-Design -->
  <E_EyeGrabbing ref="refE" />

  <!-- 06 / CardsContainer / 合作品牌 静态元素 -->
  <F_CardsContainer ref="refF" />

  <!-- 07 /  客户的用户需求 -->
  <div
    class="slide_services w-full h-auto p-[25px] lg:h-screen border-2 border-blue-600 flex flex-col items-center justify-center text-center uppercase"
  >
    <p class="text-[0.7rem] font-MabryPro tracking-wider">the reality</p>
    <p
      class="text-[1rem] md:text-[1.5rem] lg:text-[2rem] font-MabryPro font-normal tracking-wider leading-tight my-[1rem] lg:my-[2rem]"
    >
      Your audience sees your product as<br />
      more than just a product. It’s<br />
      evaluated based on your social<br />
      media channels, website journeys, <br />and brand stories.
    </p>
  </div>

  <!-- 08 / BrandStories / 品牌故事 -->
  <H_BrandStories ref="refH" />

  <!-- 09 / SlideServices / 具体案例 -->
  <I_SlideServices ref="refI" />

  <!-- 10 / 我能提供的服务类型 -->
  <J_WeDo ref="refJ" />

  <!-- 12 / ClientsLoveOurWork / 客户对我们的评价 -->
  <K_ClientsLoveOurWork ref="refK" />

  <!-- 13 / WeLoveOurClients  -->
  <L_WeLoveOurClients ref="refL" />

  <!-- 14 / ContactWithUs -->
  <M_ContactWithUs ref="refM" />
</template>

<script setup>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { onMounted, onUnmounted, ref } from 'vue'
import { mediaQuery } from '@/assets/utils/mediaquery'
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

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

const refA = ref(null),
  refB = ref(null),
  refC = ref(null),
  refD = ref(null),
  refE = ref(null),
  refF = ref(null),
  refH = ref(null),
  refI = ref(null),
  refJ = ref(null),
  refK = ref(null),
  refL = ref(null),
  refM = ref(null)

let ctx
onMounted(() => {
  if (mediaQuery.matches) {
    ScrollSmoother.create({
      smooth: 1,
      effects: true,
      smoothTouch: 0.1,
      speed: 0.65
    })
    ctx = gsap.context(() => {
      gsap.timeline().add(refA.value.videoAnimation()).add(refA.value.introCards())
      gsap.timeline().add(refB.value.introText()).add(refB.value.introImg())
      gsap.timeline().add(refC.value.explain())
      gsap.timeline().add(refD.value.SVGMarqueeTransition()).add(refD.value.blackWindowContainer())
      gsap.timeline().add(refE.value.eyeGrabbing())
      gsap.timeline().add(refF.value.cardsContainer())
      gsap.timeline().add(refH.value.brandStories())
      gsap.timeline().add(refI.value.slideContainer()).add(refI.value.servicesContainer())
      gsap.timeline().add(refJ.value.weDo())
      gsap.timeline().add(refK.value.clientsLoveOurWork())
      gsap.timeline().add(refL.value.weLoveOurClients())
      gsap.timeline().add(refM.value.contactWithUs())
    })
  }
})
onUnmounted(() => {
  ctx.revert()
})
</script>

<style scoped></style>
