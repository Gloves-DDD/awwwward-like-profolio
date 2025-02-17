<template>
  <div class="rounded-full inline-flex items-center justify-center bg-white">
    <svg
      ref="svgEl"
      :viewBox="`0 0 ${size} ${size}`"
      class="w-[5.625rem] h-[3rem] lg:w-[15rem] lg:h-[8rem]"
    >
      <!-- 眼白 -->
      <ellipse cx="50%" cy="50%" :rx="eyeWidth" :ry="eyeHeight" class="fill-white" />
      <!-- 瞳孔 -->
      <circle
        ref="pupil_1"
        cx="50%"
        cy="50%"
        :r="pupilSize"
        class="fill-green-800 transition-opacity duration-300"
      />
      <circle
        ref="pupil_2"
        cx="50%"
        cy="50%"
        :r="`${(pupilSize * 1) / 3}`"
        class="fill-gray-900 transition-opacity duration-300"
      />
    </svg>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { gsap } from 'gsap'

const props = defineProps({
  size: { type: Number, default: 300 }, // SVG视图大小
  eyeWidth: { type: Number, default: 270 }, // 眼白水平半径
  eyeHeight: { type: Number, default: 150 }, // 眼白垂直半径
  pupilSize: { type: Number, default: 100 }, // 瞳孔半径
  smoothness: { type: Number, default: 2 } // 动画速度
})

const svgEl = ref(null)
const pupil_1 = ref(null)
const pupil_2 = ref(null)
let svgPoint = null

// 计算移动边界
const maxMoveX = props.eyeWidth - props.pupilSize
const maxMoveY = props.eyeHeight - props.pupilSize

// 初始化SVG坐标转换
const initSVGPoint = () => {
  const svg = svgEl.value
  svgPoint = svg.createSVGPoint()
}

// 获取精确的SVG坐标
const getSVGCoordinates = (clientX, clientY) => {
  const CTM = svgEl.value.getScreenCTM().inverse()
  svgPoint.x = clientX
  svgPoint.y = clientY
  return svgPoint.matrixTransform(CTM)
}

// 限制移动范围
const clamp = (value, min, max) => Math.min(Math.max(value, min), max)

const handleMouseMove = (e) => {
  if (!svgPoint) return

  // 获取SVG坐标系中的鼠标位置
  const { x, y } = getSVGCoordinates(e.clientX, e.clientY)
  const centerX = props.size / 2
  const centerY = props.size / 2

  // 计算相对中心点的偏移量
  const deltaX = x - centerX
  const deltaY = y - centerY

  // 计算实际移动位置（保持圆形边界）
  const angle = Math.atan2(deltaY, deltaX)
  const distance = Math.min(Math.hypot(deltaX, deltaY), Math.hypot(maxMoveX, maxMoveY))

  const targetX = centerX + Math.cos(angle) * distance
  const targetY = centerY + Math.sin(angle) * distance

  // 使用GSAP平滑动画
  gsap.to(pupil_1.value, {
    duration: props.smoothness,
    attr: {
      cx: clamp(targetX, centerX - maxMoveX, centerX + maxMoveX),
      cy: clamp(targetY, centerY - maxMoveY, centerY + maxMoveY)
    },
    ease: 'power2.out'
  })
  gsap.to(pupil_2.value, {
    duration: props.smoothness,
    attr: {
      cx: clamp(targetX, centerX - maxMoveX, centerX + maxMoveX),
      cy: clamp(targetY, centerY - maxMoveY, centerY + maxMoveY)
    },
    ease: 'power2.out'
  })
}

onMounted(() => {
  initSVGPoint()
  window.addEventListener('mousemove', handleMouseMove)
})

onBeforeUnmount(() => {
  window.removeEventListener('mousemove', handleMouseMove)
})
</script>
