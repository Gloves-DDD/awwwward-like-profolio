<template>
  <div ref="contact_with_us_container">
    <div
      id="contact_with_us"
      class="background_layer flex h-auto w-screen flex-col bg-neutral-800 p-[25px] md:p-[50px] lg:px-[10rem] lg:pt-[10rem] lg:pb-[5rem]"
    >
      <div class="flex h-auto w-auto justify-center">
        <div
          id="contact_with_us_outter"
          class="flex h-auto w-full flex-col justify-center rounded-[1.75rem] bg-[#f1cece] p-[1.5rem] lg:rounded-[3rem]"
        >
          <div
            id="contact_with_us_inner"
            class="flex flex-col items-start gap-4 lg:flex-row lg:items-center lg:whitespace-nowrap"
          >
            <p class="text-[min(5vw,1.5rem)] tracking-wider">
              Connect with your audience at a core level.
            </p>
            <ModalWarpper />
          </div>
        </div>
      </div>

      <p
        id="contact_with_us_container_next_text"
        class="font-MabryPro m-[1.5rem] text-center text-neutral-50"
      >
        Request a proposal or arrange a call with our team.
      </p>
      <div class="lg:mt-[3rem]">
        <p
          id="contact_with_us_1"
          class="text-[1rem] tracking-wider text-neutral-50 lg:text-[1.5rem]"
        >
          <a class="text-[#f1cece]">eDesign </a> is an award-winning web and digital marketing
          agency.
        </p>
        <div id="contact_with_us_2" class="my-[1rem] lg:my-[2rem]">
          <p class="text-[min(7vw,3.5rem)] leading-snug tracking-wide text-neutral-50">
            Our CPG team is ready towowify your brand andtransform your product into an
            emotion-conqueringpowerhouse.
          </p>
        </div>
      </div>
    </div>
    <div>
      <Vue3Marquee v-if="isLoaded" :duration="40" class="background_layer bg-neutral-800">
        <div v-for="logo in logo_imgs" :key="logo.id" class="my-[1rem] mr-[3rem] flex">
          <img :src="logo.src" :alt="logo.id" class="mr-[1rem] h-[3rem] lg:h-[4rem]" />
          <p class="text-[1.5rem] tracking-wider text-white">{{ logo.id }}</p>
        </div>
      </Vue3Marquee>
      <div v-else class="text-white">loading...</div>
    </div>
  </div>
</template>

<script setup>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { defineAsyncComponent, ref, onMounted, onUnmounted, onBeforeUnmount } from 'vue'
import ModalWarpper from '../TestItems/ModalWarpper.vue'
gsap.registerPlugin(ScrollTrigger)

// 按需加载
defineAsyncComponent(() =>
  import('vue3-marquee').then((module) => {
    return module.Vue3Marquee
  })
)
// 延迟加载
const contact_with_us_container = ref(null)
const isLoaded = ref(false)
let observer
onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !isLoaded.value) {
          isLoaded.value = true //控件加载
          observer.unobserve(contact_with_us_container.value)
        }
      })
    },
    {
      threshold: 0.1
    }
  )
  observer.observe(contact_with_us_container.value)
})
onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})

// 动画需求变量
const logo_imgs = [
  { src: '/cpg-contact-section/css-design-awards.png', id: '13' },
  { src: '/cpg-contact-section/davey-awards.png', id: '20' },
  { src: '/cpg-contact-section/forbes.png', id: '06' },
  { src: '/cpg-contact-section/fwa.png', id: '02' },
  { src: '/cpg-contact-section/the-webby-awards.png', id: '02' },
  { src: '/cpg-contact-section/w.png', id: '05' },
  { src: '/cpg-contact-section/w3.png', id: '25' }
]
//动画部分
let contactWithUsAnimation = gsap.matchMedia()
onMounted(() => {
  //动画骨架
  contactWithUsAnimation.add('(min-width: 1025px)', () => {
    gsap
      .timeline({
        ease: 'sine.inOut',
        scrollTrigger: {
          trigger: '#contact_with_us',
          toggleActions: 'play pause',
          start: 'top 60%',
          end: '+=800',
          scrub: 1,
          anticipatePin: 1
        }
      })
      .from('#contact_with_us_outter', {
        opacity: 0,
        // width: '4rem'
        scaleX: 0.1
      })
      .from('#contact_with_us_inner', {
        opacity: 0
      })
      .from(
        '#contact_with_us_container_next_text',
        {
          opacity: 0,
          y: 30
        },
        '<'
      )
      .from('#contact_with_us_1', {
        opacity: 0
      })
      .from('#contact_with_us_2', {
        opacity: 0
      })
      .to('.background_layer', { backgroundColor: '#262626' })
  })
})
onBeforeUnmount(() => {
  contactWithUsAnimation.revert()
})
</script>
