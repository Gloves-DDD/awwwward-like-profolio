<template>
  <div ref="container" class="relative h-full w-full overflow-hidden p-[25px] lg:h-auto lg:w-auto">
    <svg :viewBox="`0 0 ${width} ${height}`" class="h-full w-full">
      <!-- border -->
      <g>
        <rect x="2" y="80" width="10" height="28" rx="5" class="fill-neutral-400" />
        <rect x="2" y="140" width="10" height="50" rx="5" class="fill-neutral-400" />
        <rect x="2" y="200" width="10" height="50" rx="5" class="fill-neutral-400" />
        <rect :x="width - 12" y="200" width="10" height="100" rx="5" class="fill-neutral-400" />
        <rect x="5" :width="width - 10" :height="height" rx="40" class="fill-neutral-700" />
        <rect
          x="20"
          y="15"
          :width="width - 40"
          :height="height - 28"
          rx="35"
          class="fill-neutral-900"
        />
      </g>
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
          id="color_changer"
          x="-60"
          y="-10"
          width="220"
          height="120"
          rx="60"
          fill="#ba67d8"
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
    default: 340
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
const currentColor = ref('#ba67d8')

// 计算属性
const maxTopMovement = computed(() => props.width * 0.2)

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
    const rValue = gsap.utils.mapRange(0, window.innerWidth, 151, 222, e.clientX)
    const gValue = gsap.utils.mapRange(0, window.innerWidth, 71, 133, e.clientX)
    const bValue = gsap.utils.mapRange(0, window.innerWidth, 255, 177, e.clientX)
    currentColor.value = `rgb(${rValue}, ${gValue}, ${bValue})`
    gsap.to('#color_changer', {
      fill: currentColor.value,
      ease: 'sine.inOut'
    })
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
