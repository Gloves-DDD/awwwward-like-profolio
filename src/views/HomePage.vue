<template>
  <div>
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
      class="slide_services flex h-auto w-full flex-col items-center justify-center p-[25px] text-center uppercase select-none lg:h-screen"
    >
      <p class="font-MabryPro text-[0.7rem] tracking-wider">the reality</p>
      <p
        class="font-MabryPro my-[1rem] text-[min(5vw,2rem)] leading-tight font-normal tracking-wider lg:my-[2rem]"
      >
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

    <!-- 12 / ClientsLoveOurWork / 客户对我们的评价 -->
    <K_ClientsLoveOurWork />

    <!-- 13 / WeLoveOurClients  -->
    <L_WeLoveOurClients />

    <!-- 14 / ContactWithUs -->
    <M_ContactWithUs />
  </div>
</template>

<script setup>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { onMounted } from 'vue'
import { mediaQuery } from '@/utils/mediaquery'
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

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(ScrollSmoother)

//scroll smoother
onMounted(() => {
  if (mediaQuery.matches) {
    ScrollSmoother.create({
      smooth: 1,
      effects: true,
      smoothTouch: 0.1,
      speed: 0.65
    })
  }
})
</script>
