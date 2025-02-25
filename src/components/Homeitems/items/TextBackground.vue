<template>
  <span
    class="inline-block text-center text-white"
    :style="{ backgroundColor: bgColor }"
    :class="[paddingXClass, paddingYClass, roundedClass]"
  >
    <slot></slot>
  </span>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  // 背景颜色（支持 Tailwind 类名或自定义 RGBA）
  bgColor: {
    type: String,
    default: 'rgba(0, 0, 255, 0.5)' // 默认半透明蓝色
  },
  // 水平内边距（Tailwind 尺寸）
  paddingX: {
    type: String,
    default: '3', // 对应 px-3 (12px)
    validator: (val) => ['0', '1', '2', '3', '4', '5', '6'].includes(val)
  },
  // 垂直内边距
  paddingY: {
    type: String,
    default: '1', // 对应 py-1 (4px)
    validator: (val) => ['0', '1', '2', '3', '4', '5', '6'].includes(val)
  },
  // 圆角尺寸
  rounded: {
    type: String,
    default: 'lg', // 对应 rounded-lg (8px)
    validator: (val) => ['none', 'sm', 'md', 'lg', 'xl', '2xl', 'full'].includes(val)
  }
})

// 动态生成 Tailwind 类
const paddingXClass = computed(() => `px-${props.paddingX}`)
const paddingYClass = computed(() => `py-${props.paddingY}`)
const roundedClass = computed(() => `rounded-${props.rounded}`)
</script>
