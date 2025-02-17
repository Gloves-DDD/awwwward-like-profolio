<template>
  <div
    ref="container"
    class="relative mx-auto border-2 border-gray-200 rounded-lg shadow-lg overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100"
    :style="{ width: `${width}px`, height: `${height}px` }"
  >
    <svg :viewBox="`0 0 ${width} ${height}`" class="w-full h-full cursor-pointer">
      <!-- 顶部图形（保留位置） -->
      <g :transform="`translate(${topPosition}, 50)`">
        <circle cx="50" cy="50" r="50" class="fill-[#FF6B6B] transition-all duration-200" />
      </g>

      <!-- 中间棍棒（固定在中心，根据光标X轴旋转） -->
      <g :transform="`translate(${width / 2} ${height / 2})`">
        <rect
          x="-125"
          y="-10"
          width="250"
          height="40"
          rx="20"
          :transform="`rotate(${stickRotation})`"
          class="transition-transform duration-150"
        />
      </g>
      <g :transform="`translate(${width / 2} ${(height * 4) / 6})`">
        <image
          :transform="`rotate(${stickRotation})`"
          x="-100"
          y="-50"
          width="200"
          href="/src/assets/images/we-do-imgs/ellipse_1.svg"
        />
      </g>

      <!-- 固定底部图形（颜色变化） -->
      <g :transform="`translate(${width / 2 - 50}, ${height - 150})`">
        <rect
          width="100"
          height="100"
          :fill="currentColor"
          rx="15"
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
    default: 5
  }
})

const emit = defineEmits(['color-change'])

// 响应式状态
const container = ref(null)
const topPosition = ref(props.width / 2 - 50)
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
    // 顶部水平移动（保留位置）
    topPosition.value =
      gsap.utils.mapRange(
        0,
        window.innerWidth,
        -maxTopMovement.value / 2,
        maxTopMovement.value / 2,
        e.clientX
      ) +
      (props.width / 2 - 50)

    // 棍棒旋转（根据X轴位置）
    stickRotation.value = gsap.utils.mapRange(
      0,
      window.innerWidth,
      -props.maxRotation, // 左边逆时针
      props.maxRotation, // 右边顺时针
      e.clientX
    )

    // 底部颜色变化（固定位置）
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
