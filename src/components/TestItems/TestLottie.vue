<template>
  <div class="relative">
    <!-- 防止布局抖动 -->
    <!-- Lottie 加载动画 -->
    <div
      v-if="!isLoaded"
      ref="lottieContainer"
      class="mx-auto flex h-[200px] w-[200px] items-center justify-center"
    ></div>

    <!-- 实际组件过渡 -->
    <transition
      enter-active-class="transition-opacity duration-500 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
    >
      <div
        id="target-component"
        v-if="isLoaded"
        class="h-[20rem] w-[20rem] bg-amber-500 text-center text-4xl select-none"
      >
        Rendered Component
      </div>
    </transition>

    <!-- 错误状态（Tailwind 原生样式） -->
    <div
      v-if="error"
      class="absolute inset-0 flex flex-col items-center justify-center rounded-lg border border-red-200 bg-red-50 p-4 text-red-700"
    >
      <p class="font-medium">⚠️ 加载失败</p>
      <button
        @click="retry"
        class="mt-3 rounded-md border border-red-300 bg-white px-4 py-2 text-red-700 transition-colors hover:bg-red-50"
      >
        点击重试
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import lottie from 'lottie-web'

const isLoaded = ref(false)
const error = ref(null)
const lottieContainer = ref(null)
let animation = null

// 初始化 Lottie
onMounted(() => {
  animation = lottie.loadAnimation({
    container: lottieContainer.value,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '/src/assets/animations/loading.json'
  })

  // 模拟组件加载
  const timeoutId = setTimeout(() => {
    error.value = new Error('加载超时')
  }, 20000)

  // 真实加载逻辑应替换此处
  setTimeout(() => {
    isLoaded.value = true
    clearTimeout(timeoutId)
  }, 3000)
})

onBeforeUnmount(() => {
  animation?.destroy()
})

const retry = () => {
  error.value = null
  // 添加重试逻辑
}
</script>
