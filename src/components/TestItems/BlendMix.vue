<template>
  <!-- 固定定位的反色按钮 -->
  <button
    ref="floatingBtn"
    class="font-MabryPro absolute z-50 h-[10rem] w-[10rem] rounded-full border-4 px-6 py-3 text-[1.5rem] font-bold text-white mix-blend-difference shadow-lg backdrop-blur-2xl select-none"
  >
    BUTTON
  </button>

  <!-- 测试用背景区块 -->
  <div class="h-screen bg-neutral-800 p-8">AREA</div>
  <div class="h-screen bg-yellow-500 p-8">AREA</div>
  <div class="h-screen bg-pink-700 p-8">AREA</div>
  <div class="h-screen bg-blue-600 p-8">AREA</div>
  <div class="h-screen bg-green-700 p-8">AREA</div>
  <div class="h-screen bg-amber-700 p-8">AREA</div>
  <div class="h-screen bg-cyan-600 p-8">AREA</div>
  <div class="h-screen bg-indigo-800 p-8">AREA</div>
  <div class="h-screen bg-lime-400 p-8">AREA</div>
  <div class="h-screen bg-purple-700 p-8">AREA</div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'

const floatingBtn = ref(null)
let mouseX = 0
let mouseY = 0
let targetX = 0
let targetY = 0
let animation = null

// 鼠标移动处理
const handleMouseMove = (e) => {
  mouseX = e.clientX
  mouseY = e.clientY
}

// 平滑动画版本
const smoothFollow = () => {
  //   // 计算目标位置偏移（让按钮中心对准鼠标）
  targetX = mouseX - floatingBtn.value.offsetWidth / 2
  targetY = mouseY - floatingBtn.value.offsetHeight / 2
  // 使用缓动动画实现平滑跟随
  gsap.to(floatingBtn.value, {
    left: targetX,
    top: targetY,
    duration: 0.5,
    ease: 'power2.out',
    overwrite: true
  })

  requestAnimationFrame(smoothFollow)
}

onMounted(() => {
  // 初始位置居中
  gsap.set(floatingBtn.value, {
    left: window.innerWidth / 2 - floatingBtn.value.offsetWidth / 2,
    top: window.innerHeight / 2 - floatingBtn.value.offsetHeight / 2
  })

  window.addEventListener('mousemove', handleMouseMove)

  // 平滑跟随
  smoothFollow()
})

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove)
  if (animation) gsap.ticker.remove(animation)
})
</script>

<style>
/* 增强文字可读性 */
button {
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

@supports not (mix-blend-mode: difference) {
  button {
    background: rgba(0, 0, 0, 0.8) !important;
    color: white !important;
    mix-blend-mode: normal !important;
  }
}
</style>
