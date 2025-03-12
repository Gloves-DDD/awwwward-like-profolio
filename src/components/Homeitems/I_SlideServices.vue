<template>
  <div id="slide_container" class="slide_services">
    <!-- container_1 -->
    <div
      :id="`slide_container_${slide_container_items[0].id}`"
      :class="`h-full w-full p-[25px] md:p-[50px] lg:flex lg:justify-center lg:bg-neutral-50 ${slide_container_items[0].background}`"
    >
      <!-- picture 1-->
      <div class="flex flex-col justify-center lg:h-full lg:p-[50px]">
        <img
          :id="`slide_pics_${slide_container_items[0].id}`"
          class="aspect-auto h-auto w-full rounded-[1rem] lg:h-full lg:w-auto lg:rounded-[2rem]"
          src="/src/assets/images/marketing-seo-services/thirdlove.png"
          :alt="slide_container_items[0].name"
        />
      </div>
      <!-- introduction text 1 -->
      <div class="flex w-auto items-center lg:w-1/2">
        <div :id="`slide_texts_${slide_container_items[0].id}`" class="py-[10px]">
          <p class="font-MabryPro pt-[5px] text-[.7rem] font-medium tracking-wider uppercase">
            {{ slide_container_items[0].name }}
          </p>
          <p
            class="font-MabryPro py-[25px] text-[1rem] leading-tight font-medium tracking-wider uppercase lg:text-[1.5rem]"
          >
            {{ slide_container_items[0].slogan }}
          </p>
          <p class="font-MabryPro text-[.8rem] leading-tight tracking-wide">
            {{ slide_container_items[0].introduction }}
          </p>
        </div>
      </div>
    </div>
    <!-- container_2 -->
    <div
      :id="`slide_container_${slide_container_items[1].id}`"
      :class="`h-full w-full p-[25px] md:p-[50px] lg:flex lg:justify-center lg:bg-neutral-50 ${slide_container_items[1].background}`"
    >
      <!-- picture 2-->
      <div class="flex flex-col justify-center lg:h-full lg:p-[50px]">
        <img
          :id="`slide_pics_${slide_container_items[1].id}`"
          class="aspect-auto h-auto w-full rounded-[1rem] lg:h-full lg:w-auto lg:rounded-[2rem]"
          src="/src/assets/images/marketing-seo-services/d-angelico.png"
          :alt="slide_container_items[1].name"
        />
      </div>
      <!-- introduction text 2 -->
      <div class="flex w-auto items-center lg:w-1/2">
        <div :id="`slide_texts_${slide_container_items[1].id}`" class="py-[10px]">
          <p class="font-MabryPro pt-[5px] text-[.7rem] font-medium tracking-wider uppercase">
            {{ slide_container_items[1].name }}
          </p>
          <p
            class="font-MabryPro py-[25px] text-[1rem] leading-tight font-medium tracking-wider uppercase lg:text-[1.5rem]"
          >
            {{ slide_container_items[1].slogan }}
          </p>
          <p class="font-MabryPro text-[.8rem] leading-tight tracking-wide">
            {{ slide_container_items[1].introduction }}
          </p>
        </div>
      </div>
    </div>
    <!-- container_3 -->
    <div
      :id="`slide_container_${slide_container_items[2].id}`"
      :class="`h-full w-full p-[25px] md:p-[50px] lg:flex lg:justify-center lg:bg-neutral-50 ${slide_container_items[2].background}`"
    >
      <!-- picture 3-->
      <div class="flex flex-col justify-center lg:h-full lg:p-[50px]">
        <img
          :id="`slide_pics_${slide_container_items[2].id}`"
          class="aspect-auto h-auto w-full rounded-[1rem] lg:h-full lg:w-auto lg:rounded-[2rem]"
          src="/src/assets/images/marketing-seo-services/wimpykid.png"
          :alt="slide_container_items[2].name"
        />
      </div>
      <!-- introduction text 3 -->
      <div class="flex w-auto items-center lg:w-1/2">
        <div :id="`slide_texts_${slide_container_items[2].id}`" class="py-[10px]">
          <p class="font-MabryPro pt-[5px] text-[.7rem] font-medium tracking-wider uppercase">
            {{ slide_container_items[2].name }}
          </p>
          <p
            class="font-MabryPro py-[25px] text-[1rem] leading-tight font-medium tracking-wider uppercase lg:text-[1.5rem]"
          >
            {{ slide_container_items[2].slogan }}
          </p>
          <p class="font-MabryPro text-[.8rem] leading-tight tracking-wide">
            {{ slide_container_items[2].introduction }}
          </p>
        </div>
      </div>
    </div>
    <!-- container_4 -->
    <div
      :id="`slide_container_${slide_container_items[3].id}`"
      :class="`h-full w-full p-[25px] md:p-[50px] lg:flex lg:justify-center lg:bg-neutral-50 ${slide_container_items[3].background}`"
    >
      <!-- picture 4-->
      <div class="flex flex-col justify-center lg:h-full lg:p-[50px]">
        <img
          :id="`slide_pics_${slide_container_items[3].id}`"
          class="aspect-auto h-auto w-full rounded-[1rem] brightness-0 lg:h-full lg:w-auto lg:rounded-[2rem]"
          src="/src/assets/images/marketing-seo-services/wimpykid.png"
          :alt="slide_container_items[3].name"
        />
      </div>
      <!-- introduction text 4 -->
      <div class="flex w-auto items-center lg:w-1/2">
        <div :id="`slide_texts_${slide_container_items[3].id}`" class="py-[10px]">
          <p class="font-MabryPro pt-[5px] text-[.7rem] font-medium tracking-wider uppercase">
            {{ slide_container_items[3].name }}
          </p>
          <p
            class="font-MabryPro py-[25px] text-[1rem] leading-tight font-medium tracking-wider uppercase lg:text-[1.5rem]"
          >
            {{ slide_container_items[3].slogan }}
          </p>
          <p class="font-MabryPro text-[.8rem] leading-tight tracking-wide">
            {{ slide_container_items[3].introduction }}
          </p>
        </div>
      </div>
    </div>
  </div>

  <div
    id="services_container"
    class="flex w-full justify-center overflow-hidden border-4 border-x-0 border-t-0 border-b-black bg-neutral-800 p-[25px] md:p-[50px]"
  >
    <p
      id="service_text"
      class="font-MabryPro text-[16.5vw] font-medium tracking-wider text-neutral-100 uppercase"
    >
      services
    </p>
  </div>
</template>
<script setup>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { onBeforeUnmount, onMounted } from 'vue'
gsap.registerPlugin(ScrollTrigger)

const slide_container_items = [
  {
    id: 1,
    src: '/src/assets/images/marketing-seo-services/thirdlove.png',
    name: 'ThirdLove',
    slogan: 'Fighting back against a daily struggle for 80% of women.',
    introduction:
      'ThirdLove is a team of innovators challenging the norm of back, neck, and breast pain for the 80% of women whose bras just do not fit them. We teamed with ThirdLove to build Fitting Room, an intelligent, algorithm-driven quiz that helps customers find the perfect bra fit for their bodies. With the emotional pull to stop settling for discomfort, they’ve made a name for themselves, selling millions of bras and opening 10 physical locations.',
    background: 'bg-pink-50'
  },

  {
    id: 2,
    src: '/src/assets/images/marketing-seo-services/d-angelico.png',
    name: 'D’Angelico',
    slogan: 'Bringing a legendary guitar brand back from the dead.',
    introduction:
      'Over half a century after the death of master craftsman John D’Angelico, we helpedrevive his memory with the rebirth of his NYC guitar brand. Every detail mattered —original D’Angelico guitars were scanned in MRI and x-ray machines to get the designjust right. Our website took inspiration from this meticulous detailing, and our passionearned 4 awards and mentions in 37 publications around the world. D’Angelico introduceda new generation to their guitars and an important part of New York’s legacy.',
    background: 'bg-green-50'
  },
  {
    id: 3,
    src: '/src/assets/images/marketing-seo-services/wimpykid.png',
    name: 'wimpykid',
    slogan: 'Making cheesy cool with an iconic book series showcase.',
    introduction:
      ' With over 275 million copies sold, 4 live-action and 2 animated films, the Diary of aWimpy Kid series is a beloved franchise. We sat down with author and illustrator JeffKinney to help create an expansive website with the spirit of his series. Fans andparents loved our custom character designer and educational offerings. We loved makingcustom doodle animations, supported by vibrant colors, especially the yellow of thedreaded Cheese Touch. (Read the books!)',
    background: 'bg-blue-100'
  },
  {
    id: 4,
    src: '/src/assets/images/marketing-seo-services/wimpykid.png',
    name: 'Frost King',
    slogan: 'Transforming a seasonal product into an evergreen customer experience.',
    introduction:
      'Frost King is the #1 weatherization brand in the DIY home improvement space. Availablein over 10,000 U.S. hardware stores, this brand speaks to a customer with a particularpassion and worldview. Instead of focusing on just their product offering, we helpedthem build an expansive site with engaging games and a content strategy that speaksright to their audience’s core interest in DIY and projects. It’s turned Frost King intoa fun, accessible brand that keeps their audience engaged all year round.',
    background: 'bg-lime-50'
  }
]

//动画部分
let slideServicesAnimation = gsap.matchMedia()
onMounted(() => {
  //动画骨架
  slideServicesAnimation.add('(min-width: 1025px)', () => {
    gsap.set('.slide_services', { backgroundColor: '#f5f5f5' })
    gsap.set('#slide_texts_2', { opacity: 0.1 })
    gsap.set('#slide_texts_3', { opacity: 0.1 })
    gsap.set('#slide_texts_4', { opacity: 0.1 })
    gsap
      .timeline({
        ease: 'sine.inOut',
        scrollTrigger: {
          trigger: '#slide_container',
          toggleActions: 'play pause',
          start: 'top bottom',
          end: '+=200',
          scrub: 1,
          anticipatePin: 1
        }
      })
      .from('#slide_pics_1', { opacity: 0 })
      .to('.slide_services', { backgroundColor: '#f2e0ea' })

    gsap.set('#slide_container', { width: 'full', height: '100vh' })
    gsap.set('#slide_container_1', { background: 'none' })
    gsap.set('#slide_container_2', { background: 'none' })
    gsap.set('#slide_container_3', { background: 'none', yPercent: -100 })
    gsap.set('#slide_container_4', { background: 'none', yPercent: -200 })
    gsap
      .timeline({
        ease: 'sine.inOut',
        scrollTrigger: {
          trigger: '#slide_container',
          toggleActions: 'play pause',
          start: 'top top',
          end: '+=1800',
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          markers: true
        }
      })
      .to('#slide_texts_1', { yPercent: -100, opacity: 0 })
      .to('#slide_pics_1', { x: -50, y: -50 }, '<')

      .to('#slide_container_2', { yPercent: -100 }, '<')
      .to('#slide_texts_2', { opacity: 1 }, '<')
      .to('.slide_services', { backgroundColor: '#e9ece6' }, '<')

      .to('#slide_texts_2', { yPercent: -100, opacity: 0 })
      .to('#slide_pics_2', { x: -50, y: -50 }, '<')

      .to('#slide_container_3', { yPercent: -200 }, '<')
      .to('#slide_texts_3', { opacity: 1 }, '<')
      .to('.slide_services', { backgroundColor: '#e7fcfe' }, '<')

      .to('#slide_texts_3', { yPercent: -100, opacity: 0 })
      .to('#slide_pics_3', { x: -50, y: -50 }, '<')

      .to('#slide_container_4', { yPercent: -300 }, '<')
      .to('#slide_texts_4', { opacity: 1 }, '<')
      .to('.slide_services', { backgroundColor: '#edffee' }, '<')

      .to('.slide_services', {
        backgroundColor: '#262626',
        duration: 0.1
      })
  })
})
onBeforeUnmount(() => {
  slideServicesAnimation.revert()
})
</script>
