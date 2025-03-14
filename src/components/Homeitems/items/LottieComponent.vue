<template>
  <transition
    enter-active-class="transition-opacity duration-300"
    leave-active-class="transition-opacity duration-500"
    enter-from-class="opacity-0"
    leave-to-class="opacity-0"
  >
    <div
      v-if="showLoader"
      id="global-loader"
      class="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
      role="status"
      aria-label="网站加载中"
    >
      <div id="lottie-loader" class="h-[200px] w-[200px] md:h-[300px] md:w-[300px]" />
    </div>
  </transition>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const animation = ref(null)
const showLoader = ref(true)
const minimumShowTime = 1500 // 最小展示时间（毫秒）
let loadStartTime = Date.now()

// 根据设备类型动态选择渲染器
const selectRenderer = () => {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
  return isMobile ? 'canvas' : 'svg' // 移动端优先使用 Canvas
}
// 初始化动画
const initAnimation = async () => {
  const Lottie = await import('lottie-web')
  animation.value = Lottie.loadAnimation({
    container: document.getElementById('lottie-loader'),
    renderer: selectRenderer(),
    loop: false,
    autoplay: true,
    path: '/src/assets/animations/loading.json',
    rendererSettings: {
      progressiveLoad: true,
      hideOnTransparent: true
    }
  })

  // 双重保险：动画完成或加载失败都触发隐藏
  animation.value.addEventListener('complete', handleLoadFinish)
  animation.value.addEventListener('data_failed', handleLoadFinish)
}

// 处理加载完成
const handleLoadFinish = () => {
  const elapsed = Date.now() - loadStartTime
  const remainingTime = Math.max(minimumShowTime - elapsed, 0)

  setTimeout(() => {
    showLoader.value = false
    // 释放资源
    if (animation.value) {
      animation.value.destroy()
      animation.value = null
    }
  }, remainingTime)

  // 首屏 FCP 优化
  const paintObserver = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (entry.name === 'first-contentful-paint') {
        console.log('FCP:', entry.startTime)
      }
    }
  })
  paintObserver.observe({ type: 'paint', buffered: true })
}

// 主加载监听
const handleAppLoad = () => {
  window.removeEventListener('load', handleAppLoad)
  handleLoadFinish()
}

onMounted(() => {
  loadStartTime = Date.now()
  initAnimation()

  if (document.readyState === 'complete') {
    handleAppLoad()
  } else {
    window.addEventListener('load', handleAppLoad)
  }
})

onBeforeUnmount(() => {
  if (animation.value) {
    animation.value.destroy()
  }
})
</script>

<style>
#lottie-container {
  transform: translateZ(0);
  -webkit-transform: translateZ(0);
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}
</style>
