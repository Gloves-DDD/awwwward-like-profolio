<template>
  <div class="space-y-24 p-24">
    <div
      v-for="n in 5"
      :key="n"
      :ref="(el) => elements.push(el)"
      class="flex h-96 items-center justify-center rounded-2xl bg-blue-100 text-2xl"
    >
      Animated Box {{ n }}
    </div>

    <button
      @click="scrollToNext()"
      class="fixed right-8 bottom-8 rounded-lg bg-blue-600 px-6 py-3 text-white"
    >
      Scroll Next
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { useLenis } from 'lenis/vue'

const elements = ref([])
const lenis = useLenis() // 通过上下文获取实例

onMounted(() => {
  // 滚动触发动画
  gsap.from(elements.value, {
    stagger: 0.2,
    y: 100,
    opacity: 0,
    scrollTrigger: {
      trigger: elements.value,
      start: 'top 80%',
      end: 'bottom 20%',
      scrub: 0.5
    }
  })
})
// 点击滚动控制
const scrollToNext = () => {
  if (lenis) {
    const currentIndex = Math.round(lenis.progress * (elements.value.length - 1))
    const targetIndex = (currentIndex + 1) % elements.value.length
    lenis.scrollTo(elements.value[targetIndex], { duration: 1.5 })
  }
}
</script>
