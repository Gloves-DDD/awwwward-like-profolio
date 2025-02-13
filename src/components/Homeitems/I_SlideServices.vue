<template>
  <div id="slide_container" class="slide_services border-4 border-blue-600">
    <!-- container_1 -->
    <div
      :id="`slide_container_${slide_container_items[0].id}`"
      :class="`w-full h-full p-[25px] md:p-[50px] lg:flex lg:justify-center border-4 border-yellow-500 lg:bg-neutral-50 ${slide_container_items[0].background}`"
    >
      <!-- picture 1-->
      <div class="lg:h-full border-4 border-green-500 lg:p-[50px] flex justify-center flex-col">
        <img
          :id="`slide_pics_${slide_container_items[0].id}`"
          class="rounded-[1rem] lg:rounded-[2rem] w-full h-auto lg:w-auto lg:h-full aspect-auto"
          :src="`${slide_container_items[0].src}`"
          :alt="slide_container_items[0].name"
        />
      </div>
      <!-- introduction text 1 -->
      <div class="w-auto lg:w-1/2 border-4 border-green-500 flex items-center">
        <div
          :id="`slide_texts_${slide_container_items[0].id}`"
          class="py-[10px] border-4 border-red-400"
        >
          <p class="pt-[5px] text-[.7rem] font-MabryPro font-medium uppercase tracking-wider">
            {{ slide_container_items[0].name }}
          </p>
          <p
            class="py-[25px] text-[1rem] lg:text-[1.5rem] font-MabryPro font-medium uppercase tracking-wider leading-tight"
          >
            {{ slide_container_items[0].slogan }}
          </p>
          <p class="text-[.8rem] font-MabryPro tracking-wide leading-tight">
            {{ slide_container_items[0].introduction }}
          </p>
        </div>
      </div>
    </div>
    <!-- container_2 -->
    <div
      :id="`slide_container_${slide_container_items[1].id}`"
      :class="`w-full h-full p-[25px] md:p-[50px] lg:flex lg:justify-center border-4 border-yellow-500 lg:bg-neutral-50 ${slide_container_items[1].background}`"
    >
      <!-- picture 2-->
      <div class="lg:h-full border-4 border-green-500 lg:p-[50px] flex justify-center flex-col">
        <img
          :id="`slide_pics_${slide_container_items[1].id}`"
          class="rounded-[1rem] lg:rounded-[2rem] w-full h-auto lg:w-auto lg:h-full aspect-auto"
          :src="slide_container_items[1].src"
          :alt="slide_container_items[1].name"
        />
      </div>
      <!-- introduction text 2 -->
      <div class="w-auto lg:w-1/2 border-4 border-green-500 flex items-center">
        <div
          :id="`slide_texts_${slide_container_items[1].id}`"
          class="py-[10px] border-4 border-red-400"
        >
          <p class="pt-[5px] text-[.7rem] font-MabryPro font-medium uppercase tracking-wider">
            {{ slide_container_items[1].name }}
          </p>
          <p
            class="py-[25px] text-[1rem] lg:text-[1.5rem] font-MabryPro font-medium uppercase tracking-wider leading-tight"
          >
            {{ slide_container_items[1].slogan }}
          </p>
          <p class="text-[.8rem] font-MabryPro tracking-wide leading-tight">
            {{ slide_container_items[1].introduction }}
          </p>
        </div>
      </div>
    </div>
    <!-- container_3 -->
    <div
      :id="`slide_container_${slide_container_items[2].id}`"
      :class="`w-full h-full p-[25px] md:p-[50px] lg:flex lg:justify-center border-4 border-yellow-500 lg:bg-neutral-50 ${slide_container_items[2].background}`"
    >
      <!-- picture 3-->
      <div class="lg:h-full border-4 border-green-500 lg:p-[50px] flex justify-center flex-col">
        <img
          :id="`slide_pics_${slide_container_items[2].id}`"
          class="rounded-[1rem] lg:rounded-[2rem] w-full h-auto lg:w-auto lg:h-full aspect-auto"
          :src="slide_container_items[2].src"
          :alt="slide_container_items[2].name"
        />
      </div>
      <!-- introduction text 3 -->
      <div class="w-auto lg:w-1/2 border-4 border-green-500 flex items-center">
        <div
          :id="`slide_texts_${slide_container_items[2].id}`"
          class="py-[10px] border-4 border-red-400"
        >
          <p class="pt-[5px] text-[.7rem] font-MabryPro font-medium uppercase tracking-wider">
            {{ slide_container_items[2].name }}
          </p>
          <p
            class="py-[25px] text-[1rem] lg:text-[1.5rem] font-MabryPro font-medium uppercase tracking-wider leading-tight"
          >
            {{ slide_container_items[2].slogan }}
          </p>
          <p class="text-[.8rem] font-MabryPro tracking-wide leading-tight">
            {{ slide_container_items[2].introduction }}
          </p>
        </div>
      </div>
    </div>
    <!-- container_4 -->
    <div
      :id="`slide_container_${slide_container_items[3].id}`"
      :class="`w-full h-full p-[25px] md:p-[50px] lg:flex lg:justify-center border-4 border-yellow-500 lg:bg-neutral-50 ${slide_container_items[3].background}`"
    >
      <!-- picture 4-->
      <div class="lg:h-full border-4 border-green-500 lg:p-[50px] flex justify-center flex-col">
        <img
          :id="`slide_pics_${slide_container_items[3].id}`"
          class="rounded-[1rem] lg:rounded-[2rem] w-full h-auto lg:w-auto lg:h-full aspect-auto brightness-0"
          :src="slide_container_items[3].src"
          :alt="slide_container_items[3].name"
        />
      </div>
      <!-- introduction text 4 -->
      <div class="w-auto lg:w-1/2 border-4 border-green-500 flex items-center">
        <div
          :id="`slide_texts_${slide_container_items[3].id}`"
          class="py-[10px] border-4 border-red-400"
        >
          <p class="pt-[5px] text-[.7rem] font-MabryPro font-medium uppercase tracking-wider">
            {{ slide_container_items[3].name }}
          </p>
          <p
            class="py-[25px] text-[1rem] lg:text-[1.5rem] font-MabryPro font-medium uppercase tracking-wider leading-tight"
          >
            {{ slide_container_items[3].slogan }}
          </p>
          <p class="text-[.8rem] font-MabryPro tracking-wide leading-tight">
            {{ slide_container_items[3].introduction }}
          </p>
        </div>
      </div>
    </div>
  </div>

  <div
    id="services_container"
    class="slide_services border-4 border-b-black border-x-0 border-t-0 w-full overflow-hidden p-[25px] md:p-[50px] bg-neutral-800 flex justify-center"
  >
    <p
      id="service_text"
      class="uppercase text-[2.5rem] lg:text-[1300%] font-MabryPro font-medium tracking-wider text-neutral-100"
    >
      services
    </p>
  </div>
</template>
<script setup>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
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
const slideContainer = () => {
  gsap.set('#slide_texts_2', { opacity: 0.1 })
  gsap.set('#slide_texts_3', { opacity: 0.1 })
  gsap.set('#slide_texts_4', { opacity: 0.1 })
  var intro_animation = gsap
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
  gsap.set('#slide_container_3', { background: 'none' })
  gsap.set('#slide_container_4', { background: 'none' })
  var img_containers_animation = gsap
    .timeline({
      ease: 'sine.inOut',
      scrollTrigger: {
        trigger: '#slide_container',
        toggleActions: 'play pause',
        start: 'top top',
        end: '+=1800',
        scrub: 1,
        pin: true,
        anticipatePin: 1
      }
    })
    .to('#slide_texts_1', { yPercent: -200, opacity: 0 })
    .to('#slide_pics_1', { x: -50, y: -50 }, '<')

    .to('#slide_container_2', { yPercent: -100 }, '<')
    .to('#slide_texts_2', { opacity: 1 }, '<')
    .to('.slide_services', { backgroundColor: '#e9ece6' }, '<')

    .to('#slide_texts_2', { yPercent: -200, opacity: 0 })
    .to('#slide_pics_2', { x: -50, y: -50 }, '<')

    .to('#slide_container_3', { yPercent: -200 }, '<')
    .to('#slide_texts_3', { opacity: 1 }, '<')
    .to('.slide_services', { backgroundColor: '#e7fcfe' }, '<')

    .to('#slide_texts_3', { yPercent: -200, opacity: 0 })
    .to('#slide_pics_3', { x: -50, y: -50 }, '<')

    .to('#slide_container_4', { yPercent: -300 }, '<')
    .to('#slide_texts_4', { opacity: 1 }, '<')
    .to('.slide_services', { backgroundColor: '#edffee' }, '<')
  intro_animation.add(img_containers_animation)
  return intro_animation
}
const servicesContainer = () => {
  var tl = gsap
    .timeline({
      ease: 'none',
      scrollTrigger: {
        trigger: '#services_container',
        toggleActions: 'play pause',
        start: 'top bottom',
        end: '+=400',
        scrub: 1,
        anticipatePin: 1
      }
    })
    .fromTo(
      '.slide_services',
      {
        backgroundColor: '#f5f5f5'
      },
      {
        backgroundColor: '#262626'
      }
    )
    .from('#service_text', { y: 200, opacity: 0 }, '<')
  return tl
}

defineExpose({ slideContainer, servicesContainer })
</script>
