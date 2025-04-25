<template>
  <div
    id="explain_container"
    class="mx-auto overflow-hidden p-[25px] pb-0 select-none md:p-[50px] lg:w-[70%] lg:py-[4rem]"
  >
    <p
      id="explain"
      class="font-MabryPro text-center text-[min(5vw,1.5rem)] leading-tight font-thin tracking-wider uppercase lg:font-normal"
    >
      Crafting compelling, data-driven brand experiences that connect with audiences’ emotional core
      takes a wealth of research and understanding.
    </p>
  </div>
</template>

<script setup>
import { createScope, createTimeline, onScroll, utils } from 'animejs'
import { onBeforeUnmount, onMounted } from 'vue'

//动画部分
const scope = createScope({
  mediaQueries: {
    isLarge: '(min-width: 1025px)'
  }
})
onMounted(() => {
  scope.add((self) => {
    //满足mediaquery 适用动画
    if (self.matches.isLarge) {
      utils.set('.need_connection', {
        y: '-10rem'
      })
      //第一段动画
      const explainContainerTl = createTimeline({
        autoplay: onScroll({
          sync: 0.5,
          enter: '70% middle',
          leave: '50% bottom'
        })
      })
      explainContainerTl.add('#explain', {
        y: { from: '8rem' }
      })
    }
  })
})
onBeforeUnmount(() => {
  scope.revert()
})
</script>
