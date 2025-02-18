<template>
  <div
    ref="container"
    class="relative rounded-lg overflow-hidden border-4 border-neutral-600"
    :style="{ width: `${width}px`, height: `${height}px` }"
  >
    <svg :viewBox="`0 0 ${width} ${height}`" class="w-full h-full cursor-pointer">
      <!-- 1 顶部图形（保留位置） -->
      <g id="circle_group" transform="translate(100, 100)">
        <circle cx="50" cy="50" r="110" class="fill-[#de85b1]" />
        <circle cx="50" cy="105" r="55" class="fill-[#9747ff]" />
      </g>

      <!-- 2 中间棍棒（固定在中心，根据光标X轴旋转） -->
      <g :transform="`translate(${width / 2} ${(height * 8) / 20})`">
        <rect x="-125" y="0" width="250" height="46" rx="23" id="stick" class="fill-[#ff5938]" />
      </g>
      <!-- 3 三角形 -->
      <g :transform="`translate(${width / 2} ${(height * 11) / 20})`">
        <image x="-100" y="-50" width="200" href="/src/assets/images/we-do-imgs/triangle_1.svg" />
      </g>

      <!-- 4 固定底部图形（颜色变化） -->
      <g :transform="`translate(${width / 2 - 50}, ${height - 150})`">
        <rect
          x="-60"
          y="-10"
          width="220"
          height="120"
          :fill="currentColor"
          rx="60"
          class="transition-colors duration-300"
        />
      </g>
    </svg>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { gsap } from 'gsap'

const props = defineProps({
  width: {
    type: Number,
    default: 300
  },
  height: {
    type: Number,
    default: 660
  },
  stickColor: {
    type: String,
    default: '#4ECDC4'
  },
  sensitivity: {
    type: Number,
    default: 0.8,
    validator: (value) => value >= 0 && value <= 1
  },
  maxRotation: {
    // 最大旋转角度
    type: Number,
    default: 10
  }
})

const emit = defineEmits(['color-change'])

// 响应式状态
const container = ref(null)
const topPosition = ref(props.width / 2)
const stickRotation = ref(0) // 棍棒旋转角度
const currentColor = ref('#FFE66D')

// 计算属性
const maxTopMovement = computed(() => props.width * 0.2)
const hueRange = computed(() => ({
  min: 40,
  max: 360
}))

let animationFrame = null

const handleMouseMove = (e) => {
  if (!container.value) return

  if (animationFrame) cancelAnimationFrame(animationFrame)

  animationFrame = requestAnimationFrame(() => {
    // 1 顶部水平移动（保留位置）
    topPosition.value =
      gsap.utils.mapRange(
        0,
        window.innerWidth,
        -maxTopMovement.value / 2,
        maxTopMovement.value / 2,
        e.clientX
      ) +
      (props.width / 2 - 50)
    gsap.to('#circle_group', {
      translateX: topPosition.value,
      duration: 3,
      ease: 'power2.out'
    })

    // 2 棍棒旋转（根据X轴位置）
    stickRotation.value = gsap.utils.mapRange(
      0,
      window.innerWidth,
      -props.maxRotation, // 左边逆时针
      props.maxRotation, // 右边顺时针
      e.clientX
    )
    gsap.set('#stick', { transformOrigin: 'center' })
    gsap.to('#stick', {
      rotate: stickRotation.value,
      duration: 2,
      ease: 'power2.out'
    })

    // 4 底部颜色变化（固定位置）
    const colorValue = gsap.utils.mapRange(
      0,
      window.innerWidth,
      hueRange.value.min,
      hueRange.value.max,
      e.clientX
    )
    currentColor.value = `hsl(${colorValue}, 70%, 60%)`

    emit('color-change', currentColor.value)
  })
}

onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove)
})

onBeforeUnmount(() => {
  window.removeEventListener('mousemove', handleMouseMove)
  if (animationFrame) cancelAnimationFrame(animationFrame)
})
</script>
