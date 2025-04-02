<script setup>
import { ref, onUnmounted } from 'vue'
import { gsap } from 'gsap'

const imgRef = ref(null)
let animationTween = null

const handleMouseEnter = () => {
  // 如果已有动画则先终止
  if (animationTween) animationTween.kill()

  animationTween = gsap.to(imgRef.value, {
    rotationZ: 180,
    duration: 0.8,
    ease: 'power3.out',
    overwrite: 'auto' // 自动处理冲突的动画
  })
}

const handleMouseLeave = () => {
  if (animationTween) animationTween.kill()

  animationTween = gsap.to(imgRef.value, {
    rotationZ: 0,
    duration: 1.2,
    ease: 'elastic.out(1, 0.5)'
  })
}

// 组件卸载时清理动画
onUnmounted(() => {
  if (animationTween) animationTween.kill()
})
</script>

<template>
  <img
    ref="imgRef"
    src="https://picsum.photos/200/200"
    alt="Hover to rotate"
    class="rotatable-image"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  />
</template>

<style scoped>
.rotatable-image {
  width: 200px;
  height: 200px;
  object-fit: cover;
  cursor: pointer;
  /* 初始状态 */
  transform: rotateZ(0deg);
  will-change: transform; /* 性能优化 */
  transition: transform 0.1s linear; /* 兜底方案 */
}

/* 响应式设计 */
@media (hover: none) {
  .rotatable-image {
    touch-action: manipulation;
  }
}
</style>
