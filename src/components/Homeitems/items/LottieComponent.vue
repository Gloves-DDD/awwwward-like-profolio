<template>
  <!-- 使用 Tailwind 实现全屏覆盖 -->
  <div
    v-show="isVisible"
    id="loader"
    class="fixed inset-0 z-[100] flex items-center justify-center bg-white/90 backdrop-blur-3xl transition-opacity duration-300"
    role="status"
    aria-live="polite"
  >
    <!-- 动画容器需设置明确尺寸 -->
    <div id="lottie-container" class="border-4"></div>
  </div>
</template>

<script setup>
// 核心模块引入
import { ref, onMounted, onBeforeUnmount } from 'vue'
import lottie from 'lottie-web'

// 响应式状态管理
const animationInstance = ref(null)
const isVisible = ref(true)

// 动画配置参数
const animationOptions = {
  container: null, // 占位符，将在 mounted 阶段绑定真实 DOM
  renderer: 'svg', // 渲染模式：svg/canvas/html
  loop: false, // 循环模式：true/false/number
  autoplay: true, // 自动播放控制
  path: '/src/assets/json/loading.json', // JSON 文件路径（或使用 animationData）
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice', // 类似 CSS 的 object-fit
    progressiveLoad: true, // 渐进式加载大文件
    hideOnTransparent: true // 透明区域处理
  }
}

onMounted(() => {
  // 初始化动画实例
  const container = document.getElementById('lottie-container')
  animationOptions.container = container

  animationInstance.value = lottie.loadAnimation({
    ...animationOptions
    // 替代 path 的另一种数据加载方式
    // animationData: JSON.parse(importedJSON)
  })

  // 事件监听体系
  animationInstance.value.addEventListener('DOMLoaded', () => {
    console.log('DOM elements ready')
  })

  animationInstance.value.addEventListener('data_ready', () => {
    console.log('Animation data loaded')
  })

  animationInstance.value.addEventListener('complete', () => {
    isVisible.value = false // 使用 Vue 响应式状态控制显隐
  })

  // 错误处理
  animationInstance.value.addEventListener('data_failed', () => {
    console.error('动画数据加载失败')
    isVisible.value = false
  })
})

onBeforeUnmount(() => {
  // 销毁时释放资源
  if (animationInstance.value) {
    animationInstance.value.destroy()
    animationInstance.value = null
  }
})
</script>
