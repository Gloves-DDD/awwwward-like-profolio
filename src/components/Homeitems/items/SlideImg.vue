<template>
  <div class="p-[25px] md:p-[50px]" @mouseenter="pauseAutoplay" @mouseleave="resumeAutoplay">
    <!-- 图片容器 -->
    <div ref="slidesContainer" class="relative">
      <div
        v-for="(image, index) in images"
        :key="index"
        class="absolute inset-0 opacity-0 select-none"
      >
        <!-- 文字图片包装 -->
        <div id="warpper" class="absolute z-10 min-h-full min-w-full">
          <div
            id="text-warpper"
            class="absolute top-[25px] left-[25px] inline-block rounded-xl bg-neutral-100 px-[10px] pt-[5px]"
          >
            <p class="text-[min(5vw,1.5rem)] font-bold">{{ image.name }}</p>
            <p class="text-[min(2vw,0.75rem)] tracking-tight uppercase">
              {{ image.slogan }}
            </p>
          </div>
          <img
            :src="image.logoUrl"
            alt
            class="absolute top-[30px] right-[25px] mb-[4rem] inline-block w-[min(6rem,15vw)]"
          />
        </div>
        <!-- Absolute重叠图层 -->
        <img
          :src="image.imgUrl"
          alt
          class="absolute h-full origin-center rounded-4xl object-cover"
        />
      </div>
      <!-- 占位 -->
      <img
        src="@/assets/images/brands-big-component/d-angelico.png"
        alt
        class="h-auto w-full opacity-0 brightness-0 lg:h-screen"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { gsap } from 'gsap'

const props = defineProps({
  autoplay: {
    type: Boolean,
    default: true
  },
  interval: {
    type: Number,
    default: 3000
  }
})
const images = [
  {
    name: 'D-angelico',
    slogan: 'reviving a legend',
    imgUrl: new URL('@/assets/images/brands-big-component/d-angelico.png', import.meta.url).href,
    logoUrl: new URL('@/assets/images/brands-big-component/d-angelico-logo.png', import.meta.url)
      .href
  },
  {
    name: 'Black Ram',
    slogan: 'the power of legends',
    imgUrl: new URL('@/assets/images/brands-big-component/media-4.png', import.meta.url).href,
    logoUrl: new URL('@/assets/images/brands-big-component/media-4-logo.png', import.meta.url).href
  },
  {
    name: 'Villa Yambol',
    slogan: 'timeless wine',
    imgUrl: new URL('@/assets/images/brands-big-component/villa-yambol.png', import.meta.url).href,
    logoUrl: new URL('@/assets/images/brands-big-component/villa-yambol-logo.png', import.meta.url)
      .href
  },
  {
    name: 'Welch`s Fruit',
    slogan: 'fruit snacks',
    imgUrl: new URL('@/assets/images/brands-big-component/welch.png', import.meta.url).href,
    logoUrl: new URL('@/assets/images/brands-big-component/welch-logo.png', import.meta.url).href
  }
]

const currentIndex = ref(0)
const slidesContainer = ref(null)

let autoplayTimer = null
let ctx = null

onMounted(() => {
  ctx = gsap.context(() => {
    gsap.set(slidesContainer.value.children[0], { opacity: 1 })
  }, slidesContainer.value)

  if (props.autoplay) startAutoplay()
})

onBeforeUnmount(() => {
  ctx.revert()
  clearInterval(autoplayTimer)
})

const animateTransition = (newIndex) => {
  const currentSlide = slidesContainer.value.children[currentIndex.value]
  const nextSlide = slidesContainer.value.children[newIndex]
  gsap
    .timeline()
    .to(currentSlide, {
      opacity: 0,
      duration: 0.5,
      ease: 'power2.out'
    })
    .to(
      nextSlide,
      {
        opacity: 1,
        duration: 0.5,
        ease: 'power2.inOut'
      },
      '<'
    )
}
const startAutoplay = () => {
  autoplayTimer = setInterval(nextSlide, props.interval)
}

// mouseenter
const pauseAutoplay = () => {
  clearInterval(autoplayTimer)
}
// mouseleave
const resumeAutoplay = () => {
  if (props.autoplay) {
    autoplayTimer = setInterval(nextSlide, props.interval)
  }
}
const nextSlide = () => {
  const newIndex = (currentIndex.value + 1) % images.length
  animateTransition(newIndex)
  currentIndex.value = newIndex
}
</script>
