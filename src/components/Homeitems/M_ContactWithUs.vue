<template>
  <div ref="contact_with_us_container">
    <div
      id="contact_with_us"
      class="background_layer w-screen h-auto flex flex-col p-[25px] md:p-[50px] lg:px-[10rem] lg:pt-[10rem] lg:pb-[5rem] bg-neutral-800"
    >
      <div class="w-auto h-auto flex justify-center">
        <div
          id="contact_with_us_outter"
          class="bg-[#f1cece] rounded-[1.75rem] lg:rounded-[3rem] w-full h-auto flex flex-col justify-center p-[1.5rem]"
        >
          <div
            id="contact_with_us_inner"
            class="flex flex-col lg:flex-row items-start lg:items-center gap-4"
          >
            <p class="text-[1rem] md:text-[1.5rem] tracking-wider">
              Connect with your audience at a core level.
            </p>
            <button
              class="lg:ml-auto bg-black rounded-3xl text-[0.7rem] tracking-wider text-white px-[1rem] py-[0.5rem]"
            >
              Start a project
            </button>
          </div>
        </div>
      </div>

      <p
        id="contact_with_us_container_next_text"
        class="text-center text-neutral-50 font-MabryPro m-[1.5rem]"
      >
        Request a proposal or arrange a call with our team.
      </p>
      <div class="lg:mt-[3rem]">
        <p
          id="contact_with_us_1"
          class="text-[1rem] lg:text-[1.5rem] text-neutral-50 tracking-wider"
        >
          <a class="text-[#f1cece]">eDesign </a> is an award-winning web and digital marketing
          agency.
        </p>
        <div id="contact_with_us_2" class="my-[1rem] lg:my-[2rem]">
          <p
            class="text-[1.5rem] md:text-[2rem] lg:text-[3.5rem] text-neutral-50 tracking-wide leading-snug"
          >
            Our CPG team is ready towowify your brand andtransform your product into an
            emotion-conqueringpowerhouse.
          </p>
        </div>
      </div>
    </div>
    <div>
      <Vue3Marquee v-if="isLoaded" :duration="40" class="background_layer bg-neutral-800">
        <div v-for="logo in logo_imgs" :key="logo.id" class="flex mr-[3rem] my-[1rem]">
          <img :src="logo.src" :alt="logo.id" class="h-[3rem] lg:h-[4rem] mr-[1rem]" />
          <p class="text-white text-[1.5rem] tracking-wider">{{ logo.id }}</p>
        </div>
      </Vue3Marquee>
      <div v-else class="text-white">loading...</div>
    </div>
  </div>
</template>

<script setup>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { defineAsyncComponent, ref, onMounted, onUnmounted } from 'vue'
gsap.registerPlugin(ScrollTrigger)

// 懒加载
const contact_with_us_container = ref(null)
const isLoaded = ref(false)

defineAsyncComponent(() =>
  import('vue3-marquee').then((module) => {
    return module.Vue3Marquee
  })
)

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

const logo_imgs = [
  { src: '/src/assets/images/cpg-contact-section/css-design-awards.png', id: '13' },
  { src: '/src/assets/images/cpg-contact-section/davey-awards.png', id: '20' },
  { src: '/src/assets/images/cpg-contact-section/forbes.png', id: '06' },
  { src: '/src/assets/images/cpg-contact-section/fwa.png', id: '02' },
  { src: '/src/assets/images/cpg-contact-section/the-webby-awards.png', id: '02' },
  { src: '/src/assets/images/cpg-contact-section/w.png', id: '05' },
  { src: '/src/assets/images/cpg-contact-section/w3.png', id: '25' }
]
function contactWithUs() {
  var tl = gsap
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
      width: '4rem'
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
  return tl
}
defineExpose({ contactWithUs })
</script>
